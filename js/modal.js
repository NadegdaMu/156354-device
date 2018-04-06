 //Модальное окно формы.

  "use strict";

  var link = document.querySelector(".btn--write-us");
  var popup = document.querySelector(".modal-wrapper");
  var close = popup.querySelector(".modal__close");
  var login = popup.querySelector("[name=login-name]");
  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=email]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener("click", function(evt) {
       evt.preventDefault();
       popup.classList.add("modal--show");

       if (storage) {
          login.value = storage;
       } else {
        login.focus();
       }

      });

  close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal--show");

      });

  form.addEventListener("submit", function(evt) {
        evt.preventDefault();

        if (!login.value || !email.value) {
          evt.preventDefault();
          console.log("Нужно ввести логин и email");

        } else {
          if (isStorageSupport) {
          localStorage.setItem("login", login.value);
          }
          popup.classList.remove("modal--show");
      }});

   window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });


//модальная карта

    var map1Open = document.querySelector(".information-company__img");
    var mapPopup = document.querySelector(".map-wrapper");
    var mapClose = mapPopup.querySelector(".modal-map__close");


      map1Open.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.style.display="flex";
        mapPopup.classList.add("modal-map--show");

      });



      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-map--show");
        mapPopup.style.display = "none";


      });



       window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-map--show")) {
            mapPopup.classList.remove("modal-map--show");
            map2BigPopup.style.display = "none";
            map2BigOpen.style.display = "none";

          }
        }
      });


