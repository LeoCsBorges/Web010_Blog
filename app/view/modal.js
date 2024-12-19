export function loginModal() {
    const modalHtmlElement = createLoginModal();
    document.body.append(modalHtmlElement);
}

function createLoginModal() {
    //vars
    const modal = document.createElement('div');
    const backdrop = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalCloseBtn = document.createElement('div');
    const modalImg = document.createElement('img');
    const form = document.createElement('form');
    const formInput1 = document.createElement('div');
    const formInput2 = document.createElement('div');
    const userIcon = document.createElement('i');
    const userInput = document.createElement('input');
    const passIcon = document.createElement('i');
    const passInput = document.createElement('input');
    const formSubmit = document.createElement('input');
    const loginOptions = document.createElement('div');
    const signUp = document.createElement('div');
    const forgotPass = document.createElement('div');


    //attributes
    modal.id = 'modal';
    backdrop.classList.add('backdrop');
    modalContent.classList.add('modal-content');
    modalCloseBtn.classList.add('modal-close-btn');
    modalImg.classList.add('modal__image');
    modalImg.src = 'images/user-login.png';
    modalImg.alt = 'Ícone de usuário';
    form.id = 'form-login';
    formInput1.classList.add('form-input');
    formInput2.classList.add('form-input');
    userIcon.classList.add('ph', 'ph-user', 'form-input__icon');
    passIcon.classList.add('ph', 'ph-lock', 'form-input__icon');
    userInput.id = 'input-username';
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('name', 'password');
    userInput.setAttribute('placeholder', 'Nome de usuário');
    userInput.setAttribute('required', '');
    passInput.id = 'input-password';
    passInput.setAttribute('type', 'password');
    passInput.setAttribute('name', 'password');
    passInput.setAttribute('placeholder', '●●●●●●●●');
    passInput.setAttribute('required', '');
    formSubmit.setAttribute('type', 'submit')
    formSubmit.setAttribute('value', 'Entrar')
    loginOptions.classList.add('login-options');
    signUp.classList.add('sign-up');
    signUp.innerHTML = 'Cadastrar-se';
    forgotPass.classList.add('forgot-password');
    forgotPass.innerHTML = 'Esqueceu a senha?';

    //html elements append
    modal.append(backdrop);
    backdrop.append(modalContent);
    modalContent.append(modalCloseBtn, modalImg, form, loginOptions);
    form.append(formInput1, formInput2, formSubmit);
    formInput1.append(userIcon, userInput);
    formInput2.append(passIcon, passInput);
    loginOptions.append(signUp, forgotPass);

    //event listeners
    modalCloseBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function (event) {
        if (this === event.target) {
            closeModal();
        }
    })

    return modal;
}

function closeModal() {
    const modal = document.querySelector('#modal');

    if (modal) {
        document.body.removeChild(modal);
    }
}