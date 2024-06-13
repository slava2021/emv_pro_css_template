let buttons = [{
    name: "Системы подготовки данных",
    title: "Генерация данных для карт с магнитной полосой и данных платёжного приложения."
},
{
    name: "Системы персонализации",
    title: "Сервер персонализации микропроцессорных карт. Поддерживаются как настольные машины, так и конвейерные комплексы."
},
{
    name: "Системы для работы с HSM",
    title: "Система управления и унифицированного использования криптографических устройств."
}]

function initSlider() {
    //Настройки слайдера
    // if (options.buttons) {
    //     initButtons();
    // }
    // if (options.titles) {
    //     initTitles();
    // }

    let tabContainer = document.querySelector(".main-solutions__container");
    let tabContent = document.querySelectorAll(".tab-content");
    let tabLinks = document.querySelector(".tab-nav")

    // Добавляем елемент div с классом и dataset в документ
    function initTabs() {
        tabContent.forEach((tabContent, index) => {
            let tabsIsActive = `${index == 0 ? " active" + " n" + index : " n" + index}`;
            // sliderImages.innerHTML += imageDiv;
            // tabContent.classList.add(tabsIsActive);
            tabContent.className += tabsIsActive;
        })
    }

    //Добавляем кнопки и вешаем обработчик
    function initLinks() {
        buttons.forEach((buttons, index) => {
            let button = `<button class="main-solutions__button n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${buttons.name}</button><span class="s${index} ${index === 0 ? "visible" : ""}">${buttons.title}</span>`;
            tabLinks.innerHTML += button;
        });


        tabLinks.querySelectorAll(".main-solutions__button").forEach(button => {
            button.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            })
        });
    }

    //Удалаяем класс Active в кортинке и удаляем его, затем добавляем класс для активной картинки
    function moveSlider(num) {
        tabContainer.querySelector(".active").classList.remove("active");
        tabContainer.querySelector(".n" + num).classList.add("active");

        // if (options.buttons) {
        tabLinks.querySelector(".active").classList.remove("active");
        tabLinks.querySelector(".n" + num).classList.add("active");

        tabLinks.querySelector(".visible").classList.remove("visible");
        tabLinks.querySelector(".s" + num).classList.add("visible");
        // }

    };

    initTabs();

    initLinks();

}

let sliderOptions = {
    titles: true,
    buttons: true
};

document.addEventListener("DOMContentLoaded", function () {
    initSlider();
});