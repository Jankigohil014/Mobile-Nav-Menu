const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, indx) => {
    item.addEventListener('click', () => {
        hideAllContent();
        hideAllItems();

        item.classList.add('active');
        contents[indx].classList.add('show');
    });
});

function hideAllContent() {
    contents.forEach((content) => content.classList.remove('show'));
}
function hideAllItems() {
    listItems.forEach((item) => item.classList.remove('active'));
}
