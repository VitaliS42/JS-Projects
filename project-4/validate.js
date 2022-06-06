'use strict'

let nameValidate = /[a-zA-Zа-яА-ЯёЁ]/i;
// let phoneValidate = /^\+7([0-9]{3})[0-9]{3}-[0-9]{4}/;
let phoneValidate = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}/i;
let mailValidate = /my.mail@mail.ru|mymail@mail.ru|my-mail@mail.ru/i;

document.querySelector('button').addEventListener('click', event => {
  event.preventDefault()

  console.log(nameValidate.test(document.querySelector('#name').value));
  if (!nameValidate.test(document.querySelector('#name').value)) {
    document.querySelector('#name').classList.add('form__input-wrong');
    document.querySelector('#name').insertAdjacentHTML("afterend",'<span class="form__message">Имя должно состоять только из букв</span>')
  } else {
    document.querySelector('#name').classList.remove('form__input-wrong');
  }

  console.log(phoneValidate.test(document.querySelector('#phone').value));
  if (!nameValidate.test(document.querySelector('#phone').value)) {
    document.querySelector('#phone').classList.add('form__input-wrong');
    document.querySelector('#phone').insertAdjacentHTML("afterend",'<span class="form__message">Введите телефон в формате +7(ххх)ххх-хххх</span>')
  } else {
    document.querySelector('#phone').classList.remove('form__input-wrong');
  }

  console.log(mailValidate.test(document.querySelector('#mail').value));
  if (!nameValidate.test(document.querySelector('#mail').value)) {
    document.querySelector('#mail').classList.add('form__input-wrong');
    document.querySelector('#mail').insertAdjacentHTML("afterend",'<span class="form__message">Введите почту в формате ххх@mail.ru</span>')
  } else {
    document.querySelector('#mail').classList.remove('form__input-wrong');
  }
})