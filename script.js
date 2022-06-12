const $postDescValue = document.querySelector('#post-desc-value')
const $postImgValue = document.querySelector('#post-img-value')
const $btnNewPost = document.querySelector('#btn-new-post')
const $postDesc = document.querySelector('#post-desc')
const $postImg = document.querySelector('#post-img')
// posts container
const $postsContainer = document.querySelector('.posts-container')


$btnNewPost.addEventListener('click', () => {
    const $newPost = document.createElement('div')
    $newPost.classList.add('post')
    $newPost.innerHTML =  `
    <div class="post__user-info">
    <img src="https://source.unsplash.com/collection/random/31" alt="user photo">
    <span>User</span>
    </div>
    <div class="post__content">
    <div class="post__desc">
        <span id="post-desc" class="elipsis">${$postDescValue.value}</span>
    </div>
    <div class="post__img">
        <img id="post-img" src="${$postImgValue.value}" alt="user post image">
    </div>
    </div>
    <div class="post__btns">
    <button id="btn" class="normal">Like</button>
    <button id="btn" class="normal">Comment</button>
    <button id="btn" class="normal">Share</button>
    </div>
    `

    $postsContainer.append($newPost)
})


$postsContainer.addEventListener('click', (e) => {
    // btns
    if(e.target && e.target.getAttribute('id') == 'btn'){
        e.target.classList.toggle('normal')
        e.target.classList.toggle('active')
    }

    // text
    if(e.target && e.target.getAttribute('id') == 'post-desc'){
        e.target.classList.toggle('show-all')
        e.target.classList.toggle('elipsis')
    }
})