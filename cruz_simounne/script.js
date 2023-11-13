document.getElementById('comment_form').addEventListener('input', function() {
    const full_name = document.getElementById('full_name').value;
    const comment = document.getElementById('comment').value;
    const comment_button = document.getElementById('comment_button');

    if (full_name.trim() !== '' && comment.trim() !== '') {
        comment_button.removeAttribute('disabled');
    } else {
        comment_button.setAttribute('disabled', 'true');
    }
});

document.getElementById('comment_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const full_name = document.getElementById('full_name').value;
    const comment = document.getElementById('comment').value;

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>${full_name}: </strong>${comment}</p>`;

    const commentSection = document.querySelector('.comment-section');
    commentSection.insertBefore(newComment, commentSection.firstChild);

    document.getElementById('full_name').value = '';
    document.getElementById('comment').value = '';
});
