const edit= document.querySelector('#edit');

edit.addEventListener('click', function(){
    const postId = edit.getAttribute('post_id')
    fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    }).then(res => {
        window.location = '/dashboard'
    }).catch(err => {
        console.error(err);
    })
})