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
},
{
    name: "Система для работы с настольными устройствами пероснализации",
    title: "Система управления настольным устройством персонализации."
},
{
    name: "Система распределённого выпуска карт",
    title: "Система управления распределенной сетью настольных устройств персонализации."
},
{
    name: "Система контроля качества",
    title: "Средство тестирования работы приложений на смарт картах."
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
    let bgSlider = document.querySelectorAll(".bg-gradient");

    // Добавляем елемент div с классом и dataset в документ
    function initTabs() {
        tabContent.forEach((tabContent, index) => {
            let tabsIsActive = `${index == 0 ? " active" + " n" + index : " n" + index}`;

            // sliderImages.innerHTML += imageDiv;
            // tabContent.classList.add(tabsIsActive);
            tabContent.className += tabsIsActive;
            // tabContent.innerHTML = `<div class="bg-gradient violet"></div>`;


        })

        bgSlider.forEach((bgSlider, index) => {
            let divClass = `n${index}`;
            bgSlider.classList.add(divClass);
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
                clearInterval(interval);
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

    let count = 0;

    const interval = setInterval(() => {

        moveSlider(count);
        count += 1;
        if (count > 5) {
            // clearInterval(interval);
            count = 0;
        }
    }, 4000);

}

let sliderOptions = {
    titles: true,
    buttons: true
};

document.addEventListener("DOMContentLoaded", function () {
    initSlider();
});


// button up
const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up_hide');
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up_hide');
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    addEventListener() {
        // при прокрутке окна (window)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            // если пользователь прокрутил страницу более чем на 200px
            if (scrollY > 400) {
                // сделаем кнопку .btn-up видимой
                this.show();
            } else {
                // иначе скроем кнопку .btn-up
                this.hide();
            }
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            // переместиться в верхнюю часть страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();