import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
    getFirestore,
    getDoc,
    doc,
    setDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwj5EiDGmJZgDIxACpAErc-itnzHwI9zM",
  authDomain: "copa-2026.firebaseapp.com",
  projectId: "copa-2026",
  storageBucket: "copa-2026.firebasestorage.app",
  messagingSenderId: "251449913052",
  appId: "1:251449913052:web:808f1e5df947effb80ce19",
  measurementId: "G-YQ098ZSKCS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let ultimoEstadoAuth = null;


// MENSAGENS
function showMessage(message, isSuccess = true) {
    const msgElement = document.getElementById('mensagem');

    if (!msgElement) return; 

    msgElement.textContent = message;
    msgElement.style.display = 'block';
    msgElement.style.backgroundColor = isSuccess ? '#d4edda' : '#f8d7da';
    msgElement.style.color = isSuccess ? '#155724' : '#721c24';
}
// FIM Mensagens


// VALIDAR NOME
function validarNome(nome) {
    
    if (nome.length < 5) {
        return "Nome de Usuário deve ter no mínimo 5 caracteres.";
    }
    
    if (!/^[a-zA-Z0-9]+$/.test(nome)) {
        return "Nome de Usuário deve conter apenas letras e números.";
    }
    return null;
}
// FIM Validar Nome


// --- LÓGICA DE LOGIN ---
async function handleLogin(email, password) {

    const mensagemDiv = document.getElementById('mensagem');

    if (mensagemDiv) {
    mensagemDiv.style.display = 'none';
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        showMessage(`Bem-vindo(a)! Login de sucesso.`, true);
            setTimeout(() => {
                modalLogin.classList.add("hidden");
            }, 1200);
        document.getElementById('cardLogin').classList.add('card-alternativo');

    } catch (error) {
        let message = "Credenciais inválidas. Verifique e-mail e senha.";
        
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            message = "E-mail ou senha incorretos.";
        } else if (error.code === 'auth/invalid-email') {
            message = "Formato de e-mail inválido.";
        }
        
        showMessage(message, false);
        console.error("Erro no Login:", error.code, error.message);
    }
}


// LISTENER LOGAR
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const email = document.getElementById('user-id').value;
            const senha = document.getElementById('senha').value;
            
            handleLogin(email, senha);
        });
    }

    if (cadastroForm) {
    cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const email = document.getElementById('reg-user-id').value;
        const senha = document.getElementById('reg-senha').value;
        
        handleRegistration(email, senha);
    });
    }
    
});
//FIM Listener Logar


// LISTENER CADASTRAR
// https://res.cloudinary.com/darvycj5w/image/upload/v1763862395/avatar_mgczuj.png

document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('registerForm');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const nome = document.getElementById('reg-nome').value;

            const email = document.getElementById('reg-user-id').value;
            const senha = document.getElementById('reg-pass').value;
            const senhaConfirm = document.getElementById('reg-pass-confirm').value;

            
            handleRegistration(nome, email, senha, senhaConfirm);
        });
    }
});
// FIM Listener Cadastrar


// LISTENER ESQUECI A SENHA
document.addEventListener('DOMContentLoaded', () => {
    const esqueciForm = document.getElementById('esqueciForm');

    if (esqueciForm) {
        esqueciForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const email = document.getElementById('esqueci-email').value;
            
            handlePasswordReset(email);
        });
    }
});

// FIM Listener Esqueci a Senha


// LÓGICA DE ESQUECI A SENHA
async function handlePasswordReset(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        showMessage("Um link de recuperação foi enviado ao seu e-mail.", true);

        setTimeout(() => {
            toggleForms(false);
        }, 2000);

    } catch (error) {
        console.error("Erro ao enviar e-mail de recuperação:", error);
        
        if (error.code === "auth/user-not-found") {
            showMessage("Este e-mail não está cadastrado.", false);
        } else if (error.code === "auth/invalid-email") {
            showMessage("E-mail inválido.", false);
        } else {
            showMessage("Não foi possível enviar o e-mail. Tente novamente.", false);
        }
    }
}

// FIM Lógica Esquecia a Senha


// FORMULÁRIOS
function toggleForms(showRegister = false) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (showRegister) {
        loginForm.classList.remove('visible');
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerForm.classList.add('visible');
    } else {
        registerForm.classList.remove('visible');
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginForm.classList.add('visible');
    }
}
//FIM Formulários


// REGISTRAR
async function handleRegistration(nome, email, senha, senhaConfirm) {

    const mensagemDiv = document.getElementById('mensagem');

    if (mensagemDiv) {
    mensagemDiv.style.display = 'none';
    }

    if (senha.length < 6) {
        showMessage("A senha deve ter pelo menos 6 caracteres.", false);
        return;
    }

    if (senha !== senhaConfirm) {
        showMessage("As senhas não coincidem. Por favor, verifique.", false);
        return;
    }

    try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    await setDoc(doc(db, "participantes", user.uid), {
        nome: nome,
        email: email,
        foto: "https://res.cloudinary.com/darvycj5w/image/upload/v1763862395/avatar_mgczuj.png"
    });

    showMessage("Cadastro realizado com sucesso!\nFaça seu login.", true); 

    setTimeout(() => {
        toggleForms(false); // Volta para o form de login
    }, 2000);

    } catch (error) {
        let message = "Erro ao registrar.";
        
        if (error.code === 'auth/email-already-in-use') {
            message = "Este e-mail já está cadastrado.";
        } else if (error.code === 'auth/invalid-email') {
            message = "Formato de e-mail inválido.";
        } else if (error.code === 'auth/weak-password') {
            message = "A senha é muito fraca. Tente mais caracteres e números.";
        }
        
        showMessage(message, false);
        console.error("Erro no Cadastro:", error.code, error.message);
    }
}
// FIM Registrar


// ALTERNÂNCIA FORMULÁRIO
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const linkRegistro = document.getElementById('link-registro');
const linkLogin = document.getElementById('link-login');

function mostrarRegistro(event) {
    event.preventDefault();
    
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
}

function mostrarLogin(event) {
    event.preventDefault();
    
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}
// TODO: melhorar lógica — remover dependência de elementos inexistentes em outras páginas
    if (linkRegistro) {
        linkRegistro.addEventListener('click', mostrarRegistro);
    }
// FIM Altenância Formulário


// USUÁRIO LOGADO

const texto = document.getElementById("card-user-texto");
const foto = document.getElementById("card-user-foto");

onAuthStateChanged(auth, async (user) => {

    if (user && ultimoEstadoAuth === "logado") return;
    if (!user && ultimoEstadoAuth === "deslogado") return;

    ultimoEstadoAuth = user ? "logado" : "deslogado";

    const card = document.getElementById("cardLogin");
    const cam = document.getElementById("btnFoto");
    const logout = document.getElementById("btnLogout");

    if (user) {
        card.style.pointerEvents = "none";
        card.style.cursor = "default";

        cam.classList.remove("ocultar");
        logout.classList.remove("ocultar");

        const docRef = doc(db, "participantes", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const dados = docSnap.data();

            const nome = dados.nome || "Usuário";
            const caminhoFoto = dados.foto || "galeria/user.png";

            texto.innerHTML = nome.replace(" ", "<br>");
            foto.src = caminhoFoto;
        } else {
            console.warn("Documento do participante não encontrado!");
        }

    } else {

        card.style.pointerEvents = "auto";
        card.style.cursor = "pointer";

        cam.classList.add("ocultar");
        logout.classList.add("ocultar");

        texto.innerHTML = "Logar<br>Cadastrar";
        foto.src = "galeria/user.png";
    }
});

// FIM Usuário Logado

const btnLogout = document.getElementById("btnLogout");

if (btnLogout) {
    btnLogout.addEventListener("click", async () => {
        try {
            await signOut(auth);
            console.log("Saiu!");
            document.getElementById('cardLogin').classList.remove('card-alternativo');
            window.location.reload();

        } catch (e) {
            console.error("Erro ao sair:", e);
        }
    });
}


// UPLOAD FOTO

document.getElementById("btnEnviarFoto").addEventListener("click", async () => {
    const fileInput = document.getElementById("inputFoto");
    const file = fileInput.files[0]; 

    if (!file) {
        alert("Escolha uma foto antes de enviar.");
        return;
    }

    // 🔹 Cloudinary info
    const cloudName = "darvycj5w";
    const preset = "unsigned_copa";

    try {
        // 1️⃣ Criar os dados do envio
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset);

        // 2️⃣ Enviar para o Cloudinary
        const resposta = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await resposta.json();

        if (!data.secure_url) {
            alert("Erro ao enviar foto. Tente novamente.");
            console.error("Erro Cloudinary:", data);
            return;
        }

        const urlFoto = data.secure_url;

        // 3️⃣ Atualizar Firestore com a nova foto
        const user = auth.currentUser;

        if (!user) {
            alert("Usuário não autenticado!");
            return;
        }

        const docRef = doc(db, "participantes", user.uid);
        await updateDoc(docRef, {
            foto: urlFoto
        });

        // 4️⃣ Atualizar card visual imediatamente
        const fotoCard = document.getElementById("card-user-foto");
        fotoCard.src = urlFoto;

        // 5️⃣ Fechar modal
        const modalFoto = document.getElementById("modalFoto");
        modalFoto.classList.add("hidden");

        alert("Foto atualizada com sucesso!");

    } catch (erro) {
        console.error("Erro no envio:", erro);
        alert("Erro ao enviar foto.");
    }
});


// FIM Upload Foto


// EXPORT
export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged };