let likeCount = 0;

function likePost() {
  likeCount++;
  document.getElementById('like-count').textContent = `Likes: ${likeCount}`;
}
