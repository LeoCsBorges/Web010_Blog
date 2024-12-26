import { openUserLoginModal, openUserLogoutModal, closeUserModal } from "../view/modal.js";
import { userLoginRequest, userObjectRecovery, userObjectStorage, userObjectDelete } from "../api/user.js"

let userIdentification = '';

export async function userLoginVerification() {
    try {
        const userJSON = await userObjectRecovery();
        const user = JSON.parse(userJSON);
        const userName = user.userEmail.slice(0, 7);
        userIdentification = user.userEmail;

        //login button swap
        document.querySelector('#login-btn').style.display = 'none';
        document.querySelector('#user-btn').style.display = 'block';
        document.querySelector('#user-btn').innerHTML = `<i class="ph-duotone ph-user"></i> ${userName.toUpperCase()}`;
    }
    catch (error) {
        throw Error(error);
    }
}

export async function userLoginController() {
    const onConfirm = async function (userEmail, userPassword) {
        //API consuming
        try {
            const userLoginResponse = await userLoginRequest(userEmail, userPassword);

            if (userLoginResponse.status == 200) {
                const userJSON = await userLoginResponse.json();

                //save users token
                userObjectStorage(userJSON);

                //check localstorge
                userLoginVerification();

                //close user login modal
                closeUserModal();
            }

        }
        catch (error) {
            if (error.status == 400) {
                document.querySelector('.login-error-msg').style.opacity = '1';
                setTimeout(() =>
                    document.querySelector('.login-error-msg').style.opacity = '0'
                    , 2000)
                document.querySelector('#input-userEmail').focus();
            }
        }
    }

    openUserLoginModal(onConfirm);
}

export async function userLogoutController() {
    const onConfirm = function () {
        userObjectDelete();
        closeUserModal();
        location.href = 'index.html';
    }

    openUserLogoutModal(userIdentification, onConfirm);
}