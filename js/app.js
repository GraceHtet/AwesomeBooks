const form = document.querySelector("form");
const bookList = document.querySelector(".book-list");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const addBtn = document.querySelector(".add-btn");

class BookFun {
  constructor() {
    this.collections = JSON.parse(localStorage.getItem("collections")) || [];
  }

  removeBook(cur) {
    const curparent = cur.parentElement;
    const curidx = Array.from(curparent.parentElement.children).indexOf(
      curparent
    );
    console.log(curidx);
    curparent.remove();
    this.collections = this.collections.filter(
      (collection, index) => index !== curidx
    );

    localStorage.setItem("collections", JSON.stringify(this.collections));
  }

  showBook() {
    bookList.innerHTML = "";
    this.collections.forEach((collection, index) => {
      bookList.innerHTML += `<div id="${index}" class='books'>
              <p class="book-info">
                  <span class="title">"${collection.title}" </span>
                  <span>&nbsp;by&nbsp;</span>
                  <span class="author">${collection.author}</span>
              </p>
              <button class="remove-btn">Remove</button>
      </div>`;
    });
  }

  addBook(book) {
    this.collections.push(book);
    localStorage.setItem("collections", JSON.stringify(this.collections));
  }
}
const bookFun = new BookFun();
bookFun.showBook();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = { title: titleInput.value, author: authorInput.value };

  if (titleInput.value !== "" && authorInput.value !== "") {
    addBtn.disabled = false;
    bookFun.addBook(book);
    titleInput.value = "";
    authorInput.value = "";
    bookFun.showBook(book);
  } else {
    addBtn.disabled = true;
  }
});

bookList.addEventListener("click", (e) => {
  if (e.target.className.includes("remove-btn")) {
    const targetEl = e.target;
    bookFun.removeBook(targetEl);
  }
});

// Date and time
const clockElement = document.getElementById("clock");

function clock() {
  clockElement.textContent = new Date().toString();
}

setInterval(clock, 1000);

// nav bar
/* eslint-disable no-unused-vars */
const displaySection = function displaySection(section) {
  const sectionP = document.getElementById("description");
  const heading = document.getElementById("title");
  const sectionList = document.getElementById("list");
  const sectionForm = document.getElementById("form");
  const sectionContact = document.getElementById("contact");

  switch (section) {
    case "list":
      heading.innerHTML = "All Awesome Books";
      sectionList.style.display = "block";
      sectionForm.style.display = "none";
      sectionContact.style.display = "none";
      sectionP.style.display = "none";
      break;

    case "form":
      heading.innerHTML = "Add a New Book";
      sectionList.style.display = "none";
      sectionForm.style.display = "block";
      sectionContact.style.display = "none";
      sectionP.style.display = "none";
      break;

    case "contact":
      heading.innerHTML = "Contact Information";
      sectionList.style.display = "none";
      sectionForm.style.display = "none";
      sectionContact.style.display = "block";
      sectionP.style.display = "none";
      break;

    case "desc":
      heading.innerHTML = "All Awesome Books";
      sectionList.style.display = "none";
      sectionForm.style.display = "none";
      sectionContact.style.display = "none";
      sectionP.style.display = "block";
    default:
      break;
  }
};
/* eslint-disable no-unused-vars */
// used becouse of error-> 'displaySection' is assigned a value but never used
