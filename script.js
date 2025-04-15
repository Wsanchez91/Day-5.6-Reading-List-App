const bookList = document.querySelector("#current-book-list");
const allBtn = document.querySelector("#all-btn");
const readBtn = document.querySelector("#read-btn");
const unreadBtn = document.querySelector("#unread-btn");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const statusInput = document.querySelector("#status-input");
const addBtn = document.querySelector("#add-book-btn");

// This shows the stored books in the localStorage, or if it's empty it will give an empty array.
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

/* Function: addBook- Adds a new book and updates storage */
const addBook = () => {
  const titleName = titleInput.value.trim();
  const authorName = authorInput.value.trim();
  const statusOpt = statusInput.value;

  const bookObj = {
    id: Date.now(),
    title: titleName,
    author: authorName,
    status: statusOpt,
  };

  bookList.push(bookObj);
  localStorage.setItem("books", JSON.stringify(bookList));
};
