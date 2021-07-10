const feedbackLink = document.querySelector(".button-red-feedback");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const userName = feedbackPopup.querySelector(".name-user");
const userMail = feedbackPopup.querySelector(".mail-user");
const feedbackForm = feedbackPopup.querySelector(".name-form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storage) {
        userName.value = storage;
        userMail.focus();
    } else {
    userName.focus();
    }
  });


feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
  });

feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userMail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
    } 
    else {
    if (isStorageSupport) {
    localStorage.setItem("name", userName.value);
    }
 }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });


  