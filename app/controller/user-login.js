import { openUserLoginModal, closeUserLoginModal } from "../view/modal.js";
import { userLoginRequest } from "../api/user.js"

export async function userLoginController() {
    //fazer a requisicao para api de login de usuario
    const onConfirm = async function (userEmail, userPassword) {
        // consumir api
        try {
            const userLoginResponse = await userLoginRequest(userEmail, userPassword);

            if (userLoginResponse.status == 200) {
                const userJSON = await userLoginResponse.json();
                console.log(userJSON)
                //CONTINUAR DAQUI
                //sucesso: fechar a modal, salvar o token do usuario, e modificar o login button
            }

        }
        catch (error) {
            if (error.status == 400) {
                document.querySelector('.login-error-msg').style.opacity = '1';
                setTimeout(() =>
                    document.querySelector('.login-error-msg').style.opacity = '0'
                    , 2000)
            }
        }
    }

    openUserLoginModal(onConfirm);
}