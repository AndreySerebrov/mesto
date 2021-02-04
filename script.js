let popup = document.querySelector('.popup');
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formName = document.querySelector(".form__name");
let formBio = document.querySelector(".form__bio");

profileTitle.textContent = "Ttcn"

document.querySelector('.profile__edit-button').addEventListener('click', function (e) {

  formName.value = profileTitle.textContent;
  formBio.value = profileSubtitle.textContent;

  console.log(profileTitle.textContent)

  popup.classList.add("popup_opened");
});


document.querySelector('.form__save').addEventListener('click', function (e) {
  


  // profileTitle.textContent =  formName.value ;
  // profileSubtitle.textContent = formBio.value;

  // console.log('Хуйажщлжлыфждвлфждывлжфылвждфылвждыфлвжлыфжвдлфыжвлыфжвлждлы')

  // popup.classList.remove("popup_opened");
});


document.querySelector('.form__cross').addEventListener('click', function (e) {
  popup.classList.remove("popup_opened");
});