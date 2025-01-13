'use strict';

const linkItemUl = document.querySelector('.header-nav-list');

function getActive() {
  linkItemUl.addEventListener('click', function (event) {
    const linkItem = event.target;
    if (linkItem.nodeName !== 'A') {
      return;
    }

    // Видаляємо клас 'active_link' з усіх посилань
    const activeLinks = linkItemUl.querySelectorAll('.active_link');
    activeLinks.forEach(link => link.classList.remove('active_link'));

    // Додаємо клас 'active_link' до поточного посилання
    linkItem.classList.add('active_link');
  });
}

// Викликаємо функцію для ініціалізації обробника подій
getActive();