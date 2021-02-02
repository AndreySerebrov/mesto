document.querySelector('.profile__edit-button').addEventListener('click', function (e) {
  let popup = document.querySelector('.popup');
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");
  

  console.log(profileTitle.textContent)
  document.querySelector(".form__name").value = profileTitle.textContent;
  document.querySelector(".form__bio").value = profileSubtitle.textContent;

  popup.classList.add("popup_opened");
});


document.querySelector('.form__save').addEventListener('click', function (e) {
  let popup = document.querySelector('.popup');
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");
  
  profileTitle.textContent = document.querySelector(".form__name").value;
  profileSubtitle.textContent = document.querySelector(".form__bio").value;

  popup.classList.remove("popup_opened");
});


document.querySelector('.form__cross').addEventListener('click', function (e) {
  let popup = document.querySelector('.popup');
  popup.classList.remove("popup_opened");
});