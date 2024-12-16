function createElement(tagName, classes) {
    const element = document.createElement(tagName);

    if (classes) {
        element.classList.add(classes);
    }

    return element;
}

function renderPost(post) {
    // Wrapper
    const wrapper = createElement('div', 'post');

    // title
    const title = createElement('div', 'post__title');
    title.innerHTML = post.title;
    wrapper.append(title);

    // Description Wrapper
    const descriptionWrapper = createElement('div', 'post__description__wrapper');
    const description = createElement('div', 'post__description');
    const authorLink = createElement('a', 'post__description__author');
    authorLink.classList.add('post__description__author');
    authorLink.href = '#';

    // @todo author name
    authorLink.append('Leo Borges');
    description.append('Por ', authorLink);
    const comments = createElement('div', 'post__description__comments');
    comments.append(' 10 comentarios');

    descriptionWrapper.append(description, comments);

    wrapper.append(descriptionWrapper);

    // HR
    const hr = createElement('hr', 'post__hr');

    wrapper.append(hr);

    // @todo featured image
    const featuredImageWrapper = createElement('div', 'post__content__image');
    const featuredImage = createElement('img', '')
    featuredImage.src = "images/header-banner.jpg";
    featuredImage.alt = "";
    featuredImageWrapper.append(featuredImage);

    // Content
    const contentWrapper = createElement('div', 'post__content');
    const contentText = createElement('div', 'post__content__text');
    contentText.innerHTML = post.content;
    contentWrapper.append(featuredImageWrapper, contentText);

    // Append to Wrapper
    wrapper.append(contentWrapper);

    // @todo FOOTER 
    const footerWrapper = createElement('div', 'post__footer');
    const footerKeywords = createElement('div', 'post__keywords');
    const footerSeeMore = createElement('div', 'post__see-more');
    const seeMoreLink = createElement('a', null);
    footerKeywords.innerHTML = post.keywords;
    seeMoreLink.href = '#';
    seeMoreLink.innerHTML = 'Leia mais';
    footerSeeMore.append(seeMoreLink);
    footerWrapper.append(footerKeywords, footerSeeMore);
    wrapper.append(footerWrapper);

    return wrapper;
}

/**
 * 
 * @param {Array} posts 
 * @returns 
 */
export function renderPosts(posts) {
    return posts.map(renderPost);
}