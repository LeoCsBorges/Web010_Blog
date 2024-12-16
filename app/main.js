import { getPosts } from "./api/posts.js";
import { renderPosts } from "./view/posts.js";

document.addEventListener('DOMContentLoaded', async function () {
    const posts = await getPosts();

    const postsElements = renderPosts(posts);

    document.querySelector('section.posts').append(...postsElements);
    // const postsSection = document.querySelector('section.posts');
    // postsSection.append.apply(postsSection, postsElements);
})



