// Получаем необходимые элементы
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImage');
var images = document.getElementsByClassName('image');

// Привязываем событие click к изображениям
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', openModal);
}

// Функция для открытия модального окна
function openModal() {
    modal.style.display = 'block';
    modalImg.src = this.src;
}

// Привязываем событие click к кнопке закрытия модального окна
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', closeModal);

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
}

// Закрыть модальное окно, если пользователь щелкает за его пределами
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});