const sendMessages = document.querySelector('.contact-us-form');

sendMessages.addEventListener("submit", formMassage);

function formMassage(event) {

    event.preventDefault();

    const reset = event.target;

    const form = event.target.elements;

    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const textarea = form.textarea.value;
    
    alert(`
           Ваш е-мейл: ${email}
           Вітаю Вас , ${name}
           Ваш номер телефону: ${phone}
           Ваше повідомлення: ${textarea}
        `
    );

    reset.reset();
}