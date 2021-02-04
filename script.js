let popup = document.querySelector('.popup');
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formName = document.querySelector(".form__name");
let formBio = document.querySelector(".form__bio");
let editButton = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.form__save');
let closeButton = document.querySelector('.form__cross');


function openPopup(){
  formName.value = profileTitle.textContent;
  formBio.value = profileSubtitle.textContent;

   popup.classList.add("popup_opened");
}

function save(e){
  e.preventDefault();

  profileTitle.textContent =  formName.value ;
  profileSubtitle.textContent = formBio.value;
  
  closePopup();
}

function closePopup (){
  popup.classList.remove("popup_opened");
}

editButton.addEventListener('click', openPopup);
saveButton.addEventListener('click', save);
closeButton.addEventListener('click', closePopup);