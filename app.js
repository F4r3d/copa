document.addEventListener("DOMContentLoaded", () => {

    const abrirForm = document.getElementById("exibir-form");
    const modalLogin = document.getElementById("modalLogin");
    const closeModal = document.getElementById('closeModal');

    const esqueciForm = document.getElementById("esqueciForm");

    const message = document.getElementById("mensagem");

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    abrirForm.addEventListener("click", (e) => {
        e.preventDefault();
        modalLogin.classList.remove("hidden");
        if (message) message.textContent = "";
    });

    esqueciForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("esqueci-email").value;
    // sendPasswordResetEmail(auth, email);
    });

    modalLogin.addEventListener("click", (e) => {
        if (e.target === modalLogin) {
            modalLogin.classList.add("hidden");
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }
    });

    closeModal.addEventListener('click', () => {
    modalLogin.classList.add('hidden');

    registerForm.classList.add('hidden');
    esqueciForm.classList.add('hidden');
    loginForm.classList.remove('hidden');

    });

    // MODAL FOTO
    const btnFoto = document.getElementById("btnFoto");
    const modalFoto = document.getElementById("modalFoto");

    btnFoto.addEventListener("click", () => {
    modalFoto.classList.remove("ocultar");
    });

    // Selecionar Foto
    document.getElementById("btnEscolherFoto").addEventListener("click", () => {
    document.getElementById("inputFoto").click();
    });

    // Preview
    const inputFoto = document.getElementById("inputFoto");
    const previewFoto = document.getElementById("previewFoto");

    inputFoto.addEventListener("change", () => {
        const file = inputFoto.files[0]; // pega o primeiro arquivo selecionado
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            previewFoto.src = e.target.result; // atualiza a imagem do preview
        };
            reader.readAsDataURL(file);
        }
    });


    // FECHAR
    const closeModalPic = document.getElementById("closeModalPic");

    if (closeModalPic) {
        closeModalPic.addEventListener("click", () => {
        modalFoto.classList.add("ocultar");
    });
}

// FIM Modal Foto

});

// ALTERNÂNCIA FORMULÁRIO
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const linkRegistro = document.getElementById('link-registro');
const linkLogin = document.getElementById('link-login');
const linkEsqueci = document.getElementById('link-esqueci');
const esqueciForm = document.getElementById('esqueciForm');

function mostrarRegistro(event) {
    event.preventDefault();
    
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
}

function mostrarLogin(event) {
    event.preventDefault();
    
    registerForm.classList.add('hidden');
    esqueciForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}

function mostrarEsqueci(event) {
    event.preventDefault();
    
    registerForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    esqueciForm.classList.remove('hidden');
}


// TODO: melhorar lógica — remover dependência de elementos inexistentes em outras páginas
    if (linkRegistro) {
        linkRegistro.addEventListener('click', mostrarRegistro);
    }
    if (linkEsqueci) {
        linkEsqueci.addEventListener('click', mostrarEsqueci);
    }

// FIM Altenância Formulário






