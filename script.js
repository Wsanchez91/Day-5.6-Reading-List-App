const bookList = document.querySelector("#current-book-list");
const allBtn = document.querySelector("#all-btn");
const readBtn = document.querySelector("#read-btn");
const unreadBtn = document.querySelector("#unread-btn");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const readOpt = document.querySelector("#read-opt");
const unreadOpt = document.querySelector("#unread-opt");
const addBtn = document.querySelector("#add-book-btn");

const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

// Listen for Enter key press in title input
titleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBook();
  }
});

// Listen for Enter key press in author input
authorInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBook();
  }
});

// Listen for click on the Add Book button
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
  addBook();
});
