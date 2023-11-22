const modal = document.querySelector('.modal');
const link = document.querySelector('.link');
const opacity = document.querySelector('.opacity');
const closeModal = document.querySelector('.modal__close');
const gratitudeSection = document.querySelector('.gratitude');
const closeGratitude = document.querySelector('.gratitude__close');

link.addEventListener('click', function (e) {
    e.preventDefault();
    opacity.classList.remove('opacity--hidden');
    modal.classList.remove('modal--hidden');
});

closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    opacity.classList.add('opacity--hidden');
    modal.classList.add('modal--hidden');
});


document.addEventListener("DOMContentLoaded", function() {
    const promoForm = document.getElementById('promoForm');
    const promoName = document.getElementById('promoName');
    const promoPhone = document.getElementById('promoPhone');
    const nameError = document.querySelector('.promo__name');
    const phoneError = document.querySelector('.promo__phone');

    promoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isNameValid = isValidName(promoName.value.trim());
        let isPhoneValid = isValidPhone(promoPhone.value.trim());

        if (!isNameValid) {
            showErrorMessage(nameError, 'Имя не должно содержать цифры');
        } else {
            hideErrorMessage(nameError);
        }

        if (!isPhoneValid) {
            
            showErrorMessage(phoneError, 'Формат номера должен быть 89999999999');
        } else {
            hideErrorMessage(phoneError);
            
        }

        if (isNameValid && isPhoneValid) {
            promoName.classList.remove('form__error');
            promoPhone.classList.remove('form__error');
            showGratitude();
        } else {
            highlightInputs();
        }
    });

    function isValidName(name) {
        return (/^[^\d]+$/).test(name);
    }

    function isValidPhone(phone) {
        return (/^\+?[78]([-()]*\d){10}$/).test(phone);
    }

    function highlightInputs() {
        if (!isValidName(promoName.value.trim())) {
            promoName.classList.add('form__error');
        } else {
            promoName.classList.remove('form__error');
        }

        if (!isValidPhone(promoPhone.value.trim())) {
            promoPhone.classList.add('form__error');
        } else {
            promoPhone.classList.remove('form__error');
        }
    }

    function showErrorMessage(errorElement, message) {
        errorElement.textContent = message;
    }

    function hideErrorMessage(errorElement) {
        errorElement.textContent = '';
    }

    function showGratitude() {
        opacity.classList.remove('opacity--hidden');
        gratitudeSection.classList.remove('gratitude--hidden');
        closeGratitude.addEventListener('click', function() {
            gratitudeSection.classList.add('gratitude--hidden');
            opacity.classList.add('opacity--hidden');
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const privilegesForm = document.getElementById('privilegesForm');
    const privilegesName = document.getElementById('privilegesName');
    const privilegesPhone = document.getElementById('privilegesPhone');
    const nameError = document.querySelector('.privileges__name');
    const phoneError = document.querySelector('.privileges__phone');


    privilegesForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isNameValid = isValidName(privilegesName.value.trim());
        let isPhoneValid = isValidPhone(privilegesPhone.value.trim());

        if (!isNameValid) {
            showErrorMessage(nameError, 'Имя не должно содержать цифры');
        } else {
            hideErrorMessage(nameError);
        }

        if (!isPhoneValid) {
            
            showErrorMessage(phoneError, 'Формат номера должен быть 89999999999');
        } else {
            hideErrorMessage(phoneError);
            
        }

        if (isNameValid && isPhoneValid) {
            privilegesName.classList.remove('form__error');
            privilegesPhone.classList.remove('form__error');
            showGratitude();
        } else {
            highlightInputs();
        }
    });

    function isValidName(name) {
        return (/^[^\d]+$/).test(name);
    }

    function isValidPhone(phone) {
        return (/^\+?[78]([-()]*\d){10}$/).test(phone);
    }

    function highlightInputs() {
        if (!isValidName(privilegesName.value.trim())) {
            privilegesName.classList.add('form__error');
        } else {
            privilegesName.classList.remove('form__error');
        }

        if (!isValidPhone(privilegesPhone.value.trim())) {
            privilegesPhone.classList.add('form__error');
        } else {
            privilegesPhone.classList.remove('form__error');
        }
    }

    function showErrorMessage(errorElement, message) {
        errorElement.textContent = message;
    }

    function hideErrorMessage(errorElement) {
        errorElement.textContent = '';
    }

    function showGratitude() {
        opacity.classList.remove('opacity--hidden');
        gratitudeSection.classList.remove('gratitude--hidden');
        closeGratitude.addEventListener('click', function() {
            gratitudeSection.classList.add('gratitude--hidden');
            opacity.classList.add('opacity--hidden');
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const clientForm = document.getElementById('clientForm');
    const clientName = document.getElementById('clientName');
    const clientPhone = document.getElementById('clientPhone');
    const nameError = document.querySelector('.client__name');
    const phoneError = document.querySelector('.client__phone');


    clientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isNameValid = isValidName(clientName.value.trim());
        let isPhoneValid = isValidPhone(clientPhone.value.trim());

        if (!isNameValid) {
            showErrorMessage(nameError, 'Имя не должно содержать цифры');
        } else {
            hideErrorMessage(nameError);
        }

        if (!isPhoneValid) {
            
            showErrorMessage(phoneError, 'Формат номера должен быть 89999999999');
        } else {
            hideErrorMessage(phoneError);
            
        }

        if (isNameValid && isPhoneValid) {
            clientName.classList.remove('form__error');
            clientPhone.classList.remove('form__error');
            showGratitude();
        } else {
            highlightInputs();
        }
    });

    function isValidName(name) {
        return (/^[^\d]+$/).test(name);
    }

    function isValidPhone(phone) {
        return (/^\+?[78]([-()]*\d){10}$/).test(phone);
    }

    function highlightInputs() {
        if (!isValidName(clientName.value.trim())) {
            clientName.classList.add('form__error');
        } else {
            clientName.classList.remove('form__error');
        }

        if (!isValidPhone(clientPhone.value.trim())) {
            clientPhone.classList.add('form__error');
        } else {
            clientPhone.classList.remove('form__error');
        }
    }

    function showErrorMessage(errorElement, message) {
        errorElement.textContent = message;
    }

    function hideErrorMessage(errorElement) {
        errorElement.textContent = '';
    }

    function showGratitude() {
        opacity.classList.remove('opacity--hidden');
        gratitudeSection.classList.remove('gratitude--hidden');
        closeGratitude.addEventListener('click', function() {
            gratitudeSection.classList.add('gratitude--hidden');
            opacity.classList.add('opacity--hidden');
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const modalForm = document.getElementById('modalForm');
    const modalName = document.getElementById('modalName');
    const modalPhone = document.getElementById('modalPhone');
    const nameError = document.querySelector('.modal__name');
    const phoneError = document.querySelector('.modal__phone');

    modalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isNameValid = isValidName(modalName.value.trim());
        let isPhoneValid = isValidPhone(modalPhone.value.trim());

        if (!isNameValid) {
            showErrorMessage(nameError, 'Имя не должно содержать цифры');
        } else {
            hideErrorMessage(nameError);
        }

        if (!isPhoneValid) {
            
            showErrorMessage(phoneError, 'Формат номера должен быть 89999999999');
        } else {
            hideErrorMessage(phoneError);
            
        }

        if (isNameValid && isPhoneValid) {
            modalName.classList.remove('form__error');
            modalPhone.classList.remove('form__error');
            showGratitude();
        } else {
            highlightInputs();
        }
    });

    function isValidName(name) {
        return (/^[^\d]+$/).test(name);
    }

    function isValidPhone(phone) {
        return (/^\+?[78]([-()]*\d){10}$/).test(phone);
    }

    function highlightInputs() {
        if (!isValidName(modalName.value.trim())) {
            modalName.classList.add('form__error');
        } else {
            modalName.classList.remove('form__error');
        }

        if (!isValidPhone(modalPhone.value.trim())) {
            modalPhone.classList.add('form__error');
        } else {
            modalPhone.classList.remove('form__error');
        }
    }

    function showErrorMessage(errorElement, message) {
        errorElement.textContent = message;
    }

    function hideErrorMessage(errorElement) {
        errorElement.textContent = '';
    }

    function showGratitude() {
        opacity.classList.remove('opacity--hidden');
        gratitudeSection.classList.remove('gratitude--hidden');
        modal.classList.add('modal--hidden');
        closeGratitude.addEventListener('click', function() {
            gratitudeSection.classList.add('gratitude--hidden');
            opacity.classList.add('opacity--hidden');
        });
    }
});

let backgroundToggle = true;

function changeBackground() {
  const backgroundChanger = document.querySelector('.promo');

  if (backgroundToggle) {
    backgroundChanger.classList.add('promo__bg-two');
  } else {
    backgroundChanger.classList.remove('promo__bg-two');
  }
  backgroundToggle = !backgroundToggle;
}

setInterval(changeBackground, 60000);