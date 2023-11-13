document.addEventListener("DOMContentLoaded", function () {
// Enable the "Comment" button when both fields are filled out
const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const commentButton = document.getElementById("comment_button");
const commentDisplay = document.getElementById("comment_Display");

nameInput.addEventListener("input", toggleCommentButton);
commentInput.addEventListener("input", function () {
    toggleCommentButton();
        commentDisplay.textContent = commentInput.value;
});

function toggleCommentButton() {
    commentButton.disabled = !(nameInput.value && commentInput.value);
}

document.getElementById('comment_form').addEventListener('submit', 
function(event) {
event.preventDefault(); 

const name = nameInput.value;
const comment = commentInput.value;

const newComment = document.createElement('div');
newComment.classList.add('comment');
newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

commentDisplay.insertBefore(newComment, commentDisplay.firstChild);

nameInput.value = '';
commentInput.value = '';

commentButton.disabled = true;
});
});
