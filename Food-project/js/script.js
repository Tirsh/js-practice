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
    }
    
    startModal();
});
