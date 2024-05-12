const selectContainer = document.getElementById("selectContainer");
const toggleLink = document.getElementById("toggleLink");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");
const selectModal = document.getElementById("selectModal");

const toggleSelectModal = () => {
  if (
    selectModal.style.display === "none" ||
    selectModal.style.display === ""
  ) {
    selectModal.style.display = "block";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    selectModal.style.display = "none";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
};
selectContainer.addEventListener("click", toggleSelectModal);

// card read & unread bg-color
const toggleCards = document.querySelectorAll(".cardCont");

const toggleCardHandler = (event) => {
  const card = event.currentTarget;
  if (card.style.backgroundColor === "rgb(235, 235, 235)") {
    card.style.backgroundColor = "#fff";
  } else {
    card.style.backgroundColor = "#ebebeb";
  }
};

toggleCards.forEach((card) => {
  card.addEventListener("click", toggleCardHandler);
});

const pagination = document.getElementById("pagination");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const prevPagee = document.getElementById("prevPagee");
const nextPagee = document.getElementById("nextPagee");

prevPage.addEventListener("click", goToPreviousPage);
nextPage.addEventListener("click", goToNextPage);
prevPagee.addEventListener("click", goToPreviousPage);
nextPagee.addEventListener("click", goToNextPage);

function goToPreviousPage() {
  const activePage = pagination.querySelector(".active");
  if (activePage.previousElementSibling) {
    activePage.classList.remove("active");
    activePage.previousElementSibling.classList.add("active");
  }
}

function goToNextPage() {
  const activePage = pagination.querySelector(".active");
  if (activePage.nextElementSibling) {
    activePage.classList.remove("active");
    activePage.nextElementSibling.classList.add("active");
  }
}
const currentPageItems = pagination.querySelectorAll(".page");
console.log(currentPageItems, "nnn");
currentPageItems.forEach((page) => {
  page.addEventListener("click", setCurrentPage);
});

function setCurrentPage(event) {
  currentPageItems.forEach((page) => {
    page.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.getElementById("pagination");
  const pages = pagination.querySelectorAll(".page");
  const ellipsis = pagination.querySelectorAll(".ellipsis");

  function updatePagination(currentPageIndex) {
    pages.forEach((page, index) => {
      if (index === currentPageIndex) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    ellipsis.forEach((ellipsisItem) => (ellipsisItem.style.display = "none"));
    if (currentPageIndex > 4) {
      ellipsis[0].style.display = "block";
    }
    if (currentPageIndex < pages.length - 5) {
      ellipsis[1].style.display = "block";
    }

    for (let i = 0; i < pages.length; i++) {
      if (i >= currentPageIndex - 2 && i <= currentPageIndex + 2) {
        pages[i].style.display = "block";
      } else {
        pages[i].style.display = "none";
      }
    }
  }

  pages.forEach((page, index) => {
    page.addEventListener("click", () => {
      updatePagination(index);
    });
  });
});