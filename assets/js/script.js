function likeToDislike() {
    let like = document.getElementById('like')
    let dislike = document.getElementById('dislike')
    like.style.display = "none"
    dislike.style.display = 'block'
}

function dislikeToLike() {
    let like = document.getElementById('like')
    let dislike = document.getElementById('dislike')
    like.style.display = "block"
    dislike.style.display = 'none'
} 
