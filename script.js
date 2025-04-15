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

const renderBookList = (bookObj) => {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("data-status", bookObj.status);

  const titleP = document.createElement("p");
  titleP.innerHTML = `<strong>Title: </strong>${bookObj.title}`;

  const authorP = document.createElement("p");
  authorP.innerHTML = `<strong>Author: </strong>${bookObj.author}`;

  const statusP = document.createElement("p");
  statusP.innerHTML = `<strong>Status: </strong>${bookObj.status}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    bookDiv.remove();
    const index = storedBooks.findIndex((b) => b.id === bookObj.id);

    if (index !== -1) {
      storedBooks.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(storedBooks));
    }
  });

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(statusP);
  bookDiv.appendChild(deleteBtn);

  bookList.appendChild(bookDiv);
};

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

  storedBooks.push(bookObj);
  localStorage.setItem("books", JSON.stringify(storedBooks));

  renderBookList(bookObj);
};

const loadBooks = () => {
  storedBooks.forEach((books) => {
    renderBookList(books);
  });
};

// Listen for Enter key press in title input
titleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBook();
    titleInput.value = "";
    authorInput.value = "";
  }
});

// Listen for Enter key press in author input
authorInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBook();
    titleName.value = "";
    authorName.value = "";
  }
});

// Listen for click on the Add Book button
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
  titleName.value = "";
  authorName.value = "";
});

allBtn.addEventListener("click", () => {
  document.querySelectorAll("#current-book-list > div").forEach((bookDiv) => {
    bookDiv.style.display = "flex";
  });
});
readBtn.addEventListener("click", () => {
  document.querySelectorAll("#current-book-list > div").forEach((bookDiv) => {
    const status = bookDiv.getAttribute("data-status"); 
    bookDiv.style.display = status.toLocaleLowerCase() === "read" ? "flex": "none";
  });
});
unreadBtn.addEventListener("click", () => {
  document.querySelectorAll("#current-book-list > div").forEach((bookDiv) => {
    const status = bookDiv.getAttribute("data-status");
    bookDiv.style.display = status.toLocaleLowerCase() === "unread"? "flex": "none";
  });
});

window.addEventListener("DOMContentLoaded", loadBooks);
