// import { getPosts } from "./api/posts.js";
// import { renderPosts } from "./view/posts.js";
import { userLoginController } from "./controller/user-login.js";

document.addEventListener('DOMContentLoaded', async function () {
    const date = new Date().toLocaleString('pt-BR', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    document.querySelector('.timing').innerHTML = date;
})

document.querySelector('#login-btn').addEventListener('click', function () {
    userLoginController();
});

