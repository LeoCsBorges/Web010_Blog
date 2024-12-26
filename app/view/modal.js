export function openUserLoginModal(onConfirmation) {
    const modalHtml = createUserLoginModal();
    document.body.append(modalHtml);
    document.querySelector('#input-userEmail').focus();

    //event listeners
    document.querySelector('#form-login').addEventListener('submit', function (event) {
        const userEmail = document.querySelector('#input-userEmail').value;
        const userPassword = document.querySelector('#input-password').value;

        event.preventDefault();
        onConfirmation(userEmail, userPassword);
    });
    document.querySelector('.modal-close-btn').addEventListener('click', closeUserLoginModal);
    document.querySelector('.backdrop').addEventListener('click', onCloseUserLoginModal);
}

export function closeUserLoginModal() {
    const modal = document.querySelector('#modal');
    if (modal) { modal.remove(); }
}

function onCloseUserLoginModal(event) {
    //modal backdrop close
    if (this.classList.contains('backdrop')) {
        if (this == event.target) {
            closeUserLoginModal();
        }
    }
}

function createUserLoginModal() {
    //vars
    const modal = document.createElement('div');
    const backdrop = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalCloseBtn = document.createElement('div');
    const modalImg = document.createElement('img');
    const loginErrorMsg = document.createElement('p');
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
    loginErrorMsg.classList.add('login-error-msg');
    loginErrorMsg.innerHTML = 'E-mail e/ou senha inválidos! Tente novamente.';

    form.id = 'form-login';
    formInput1.classList.add('form-input');
    formInput2.classList.add('form-input');
    userIcon.classList.add('ph', 'ph-user', 'form-input__icon');
    passIcon.classList.add('ph', 'ph-lock', 'form-input__icon');

    userInput.id = 'input-userEmail';
    userInput.setAttribute('type', 'email');
    userInput.setAttribute('name', 'userEmail');
    userInput.setAttribute('placeholder', 'E-mail do usuário');
    userInput.setAttribute('required', '');

    passInput.id = 'input-password';
    passInput.setAttribute('type', 'password');
    passInput.setAttribute('name', 'password');
    passInput.setAttribute('placeholder', '●●●●●●●●');
    passInput.setAttribute('minlength', '5');
    passInput.setAttribute('required', '');

    formSubmit.id = 'submit-login';
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
    modalContent.append(modalCloseBtn, modalImg, loginErrorMsg, form, loginOptions);
    form.append(formInput1, formInput2, formSubmit);
    formInput1.append(userIcon, userInput);
    formInput2.append(passIcon, passInput);
    loginOptions.append(signUp, forgotPass);

    return modal;
}



