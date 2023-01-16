import BookFun from './bookFuns.js';

const bookFun = new BookFun();

const form = document.querySelector('form');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('.add-btn');
const bookList = document.querySelector('.book-list');

const formAction = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = { title: titleInput.value, author: authorInput.value };

    if (titleInput.value !== '' && authorInput.value !== '') {
      addBtn.disabled = false;
      bookFun.addBook(book);
      titleInput.value = '';
      authorInput.value = '';
      bookFun.showBook(book);
    } else {
      addBtn.disabled = true;
    }
  });
};

const removeAction = () => {
  bookList.addEventListener('click', (e) => {
    if (e.target.className.includes('remove-btn')) {
      const targetEl = e.target;
      bookFun.removeBook(targetEl);
    }
  });
};

export { formAction, removeAction };
