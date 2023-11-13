const get = (id) => document.getElementById(id);
const val = (id) => get(id).value.trim();
const createComment = (full_name, comment) => {
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>${full_name}: </strong>${comment}</p>`;
    newComment.dataset.date = new Date().toISOString();
    return newComment;
};

const updateCommentButton = () => {
    const { value: full_name } = get('full_name');
    const { value: comment } = get('comment');
    const { disabled } = get('comment_button');
    get('comment_button').disabled = full_name === '' || comment === '';
};

const addComment = () => {
    const full_name = val('full_name');
    const comment = val('comment');
    const commentContainer = get('comments-container');
    const newComment = createComment(full_name, comment);
    commentContainer.prepend(newComment);
    get('full_name').value = '';
    get('comment').value = '';
};

const sortComments = (order) => {
    const commentContainer = get('comments-container');
    const comments = Array.from(commentContainer.children);

    comments.sort((a, b) => {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);

        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    commentContainer.innerHTML = '';
    comments.forEach(comment => commentContainer.appendChild(comment));
};

get('comment_form').addEventListener('input', updateCommentButton);

get('comment_form').addEventListener('submit', (event) => {
    event.preventDefault();
    addComment();
    updateCommentButton();
    sortComments('asc');
});

get('sort_asc_button').addEventListener('click', () => sortComments('asc'));
get('sort_desc_button').addEventListener('click', () => sortComments('desc'));
