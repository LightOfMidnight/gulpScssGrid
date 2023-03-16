const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// search

if (window.screen.width <= 992) {
  document
    .querySelector(".header__search-btn")
    .addEventListener("click", () => {
      document.querySelector(".header__search-input").style.display = "block";
      document.querySelector(".header__search-btn").style.display = "none";
      document.querySelector(".header__search-btn-close").style.display =
        "block";
      document
        .querySelector(".header__search-btn-close")
        .addEventListener("click", () => {
          document.querySelector(".header__search-btn-close").style.display =
            "none";
          document.querySelector(".header__search-input").style.display =
            "none";
          document.querySelector(".header__search-btn").style.display =
            "block";
        });
    });
} else {
  document
    .querySelector(".header__search-btn")
    .addEventListener("click", () => {
      if (
        window.getComputedStyle(
          document.querySelector(".header__search-input"),
          null
        ).display === "block" ||
        document.querySelector(".header__search-input").value !== ""
      ) {
        document.querySelector(".header__search-input").style.display =
          "none";
        document.querySelector(".header__search-input").value = "";
      } else {
        document.querySelector(".header__search-input").style.display =
          "block";
      }
    });

  document
    .querySelector(".header__search-input")
    .addEventListener("blur", () => {
      document.querySelector(".header__search-input").style.display = "none";
    });
}

document
  .querySelector(".header__mobile-menu-btn")
  .addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("is-active");
    document
      .querySelector(".search-btn-close")
      .classList.add("is-active");
  });

document
  .querySelector(".search-btn-close")
  .addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("is-active");
    document
      .querySelector(".search-btn-close")
      .classList.remove("is-active");
  });

  // email отправка формы
  const form = document.getElementById('email');
  form.noValidate = true;

  function validateName(email) {
    return /^[A-Za-zА-Яа-яЁё\-]+$/.test(email);
  }

  function validateEmail(email) {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  }

  document.querySelector(".about-us__btn").addEventListener("click", function (event) {
    event.preventDefault();
    if (
      !validateEmail(document.querySelector(".about-us__email-input").value)
    ) {
      document.querySelector(".about-us__error-message").style.opacity = "1";
      document
        .querySelector(".about-us__email-input")
        .classList.add("about-us__email-error");
    } else {
      document.querySelector(".about-us__email-input").value = "";
    }
  });

  document
    .querySelector(".about-us__email-input")
    .addEventListener("input", () => {
      document.querySelector(".about-us__error-message").style.opacity = "0";
      document
        .querySelector(".about-us__email-input")
        .classList.remove("about-us__email-error");
    });

    
  // форма contacts
  const contactsForm = document.getElementById('contacts__form');
  contactsForm.noValidate = true;

  document.querySelector(".contacts__btn").addEventListener("click", function(event) {
    event.preventDefault();
    const result = {
      name: false,
      email: false,
    };

    if (!validateName(document.querySelector(".contacts__name").value)) {
      document.querySelector(".error-message-first").style.opacity = "1";
      document
        .querySelector(".contacts__name")
        .classList.add("contacts__email-error");
    } else {
      result.name = true;
    }

    document.querySelector(".contacts__name").addEventListener("input", () => {
      document.querySelector(".error-message-first").style.opacity = "0";
      document
        .querySelector(".contacts__name")
        .classList.remove("contacts__email-error");
    });

    if (!validateEmail(document.querySelector(".contacts__email").value)) {
      document.querySelector(".error-message-second").style.opacity = "1";
      document
        .querySelector(".contacts__email")
        .classList.add("contacts__email-error");
    } else {
      result.email = true;
    }

    document.querySelector(".contacts__email").addEventListener("input", () => {
      document.querySelector(".error-message-second").style.opacity = "0";
      document
        .querySelector(".contacts__email")
        .classList.remove("contacts__email-error");
    });

    if (result.name && result.email) {
      document.querySelector(".contacts__name").value = "";
      document.querySelector(".contacts__email").value = "";
    }
  });

    // map

    ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76455189529742, 37.611012057561865],
      zoom: 13,
      controls: []
    });


    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [55.770648672299394, 37.63650377203941],
      },
    });

    var myPlacemark = new ymaps.Placemark(
      [55.774731393295155, 37.64617617300325],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./build/image/map-icon.svg",
        iconImageSize: [12, 12],
        iconImageOffeset: [-1, -1],
      }
    );
    myMap.geoObjects.add(myPlacemark);
  }

  document
    .querySelector(".contacts__btn-close")
    .addEventListener("click", () => {
      document.querySelector(".contacts__address-info").style.display = "none";
      document.querySelector(".contacts__btn-open").style.display = "block";
    });

  document
    .querySelector(".contacts__btn-open")
    .addEventListener("click", () => {
      document.querySelector(".contacts__address-info").style.display = "block";
      document.querySelector(".contacts__btn-open").style.display = "none";
    });