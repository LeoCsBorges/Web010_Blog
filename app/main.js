import { userLoginVerification, userLoginController, userLogoutController } from "./controller/user-login.js";

document.addEventListener('DOMContentLoaded', async function () {
    //masthead date time
    const date = new Date().toLocaleString('pt-BR', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    document.querySelector('.timing').innerHTML = date;

    //user login verification
    try {
        await userLoginVerification();
    }
    //no user on localstorage / logged out
    catch (error) {
        console.error(error);

        if (this.location.href.includes('/userboard')) {
            this.location.href = 'index.html';
        }
    }
})


document.querySelector('#login-btn').addEventListener('click', function () {
    userLoginController();
});

document.querySelector('#logout-btn').addEventListener('click', function () {
    userLogoutController();
})