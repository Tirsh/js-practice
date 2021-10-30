window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(tab = 0) {
        tabsContent[tab].classList.add('show', 'fade');
        tabsContent[tab].classList.remove('hide');
        tabs[tab].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(item == target){
                    hideTabContent();
                    showTabContent(i);
                }
                
            });
        }
    });

    //Timer

    // const deadLineDate = new Date('2021-12-30');
    // let timerId;

    // function showTime(){
    //     let calcTime = deadLineDate - new Date(),
    //           days = document.querySelector('#days'),
    //           hours = document.querySelector('#hours'),
    //           minutes = document.querySelector('#minutes'),
    //           seconds = document.querySelector('#seconds');

    //     let forDataCount = calcTime % 86400000;
    //     days.textContent = (calcTime - forDataCount) / 86400000;
    //     calcTime = forDataCount;
    //     forDataCount %= 3600000;
    //     hours.textContent = (calcTime - forDataCount) / 3600000;
    //     calcTime = forDataCount;
    //     forDataCount %= 60000;
    //     minutes.textContent = (calcTime - forDataCount) / 60000;
    //     calcTime = forDataCount;
    //     forDataCount %= 1000;
    //     seconds.textContent = (calcTime - forDataCount) / 1000;           
    // }
    // timerId = setInterval(showTime, 1000);
    const deadLineDate = '2021-10-21';

    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if(num < 0){
            return '00';
        }
        if(num >= 0 && num < 10){
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(element, endTime){
        const timer = document.querySelector(element),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerId = setInterval(updateClock, 1000);
        
        updateClock();
        
        function updateClock(){
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timerId);
            }
        }
        
    }

    setClock('.timer', deadLineDate);

    //modal

    function startModal(){
        const modalBtn = document.querySelectorAll('[data-modal]'),
              modalWindow = document.querySelector('.modal'),
              modalClose = document.querySelector('[data-close]');

        function showModel(){
            modalWindow.classList.remove('hide');
            modalWindow.classList.add('show');
            modalWindow.addEventListener('click', hideModel);
            document.addEventListener('keydown', (event) => {
                if(event.code === 'Escape'){
                    hideModel(event);
                }
            });
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
            removeEventListener('scroll', showModelByScroll);
        }

        function hideModel(e){
            if(e.target === modalClose || e.target === modalWindow || e.type === 'keydown'){
                modalWindow.classList.remove('show');
                modalWindow.classList.add('hide');
                document.body.style.overflow = 'auto';
                modalWindow.removeEventListener('click', hideModel);
            }       
        }

        modalBtn.forEach(item => {
            item.addEventListener('click', showModel);
        });

        //const modalTimerId = setTimeout(showModel, 15000);

        function showModelByScroll(){
            if(window.pageYOffset + document.documentElement.clientHeight ==
                document.documentElement.scrollHeight){
                    showModel();
                    removeEventListener('scroll', showModelByScroll);
                }
        }
        window.addEventListener('scroll', showModelByScroll);
    }
    
    startModal();

    //cards with classis
    
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
            this.parent = document.querySelector(parentSelector);
        }

        changeToUAH(){
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }           
            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>     
            `;
            this.parent.append(element);
        }
    }

    new MenuCard('img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        10,
        '.menu__field .container',
        'menu__item',
        'valeriy').render();
    new MenuCard('img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        17,
        '.menu__field .container').render();
    new MenuCard('img/tabs/post.jpg',
        'post',
        'Меню "Постное',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        13,
        '.menu__field .container',
        'menu__item').render();
});
