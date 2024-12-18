import { getPosts } from "./api/posts.js";
import { renderPosts } from "./view/posts.js";

document.addEventListener('DOMContentLoaded', async function () {
    // const posts = await getPosts();
    // const postsElements = renderPosts(posts);
    // document.querySelector('section.posts').append(...postsElements);
    // const postsSection = document.querySelector('section.posts');
    // postsSection.append.apply(postsSection, postsElements);
    const date = new Date().toLocaleString('pt-BR', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    // date.toLocaleDateString('pt-BR', {
    //     day: "numeric",
    // })

    document.querySelector('.timing').innerHTML = date;
})



