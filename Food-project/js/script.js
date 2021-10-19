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
        console.log(target);
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

    const deadLineDate = new Date('2021-12-30');
    let timerId;

    function showTime(){
        let calcTime = deadLineDate - new Date(),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');

        let forDataCount = calcTime % 86400000;
        days.textContent = (calcTime - forDataCount) / 86400000;
        calcTime = forDataCount;
        forDataCount %= 3600000;
        hours.textContent = (calcTime - forDataCount) / 3600000;
        calcTime = forDataCount;
        forDataCount %= 60000;
        minutes.textContent = (calcTime - forDataCount) / 60000;
        calcTime = forDataCount;
        forDataCount %= 1000;
        seconds.textContent = (calcTime - forDataCount) / 1000;           
    }
    timerId = setInterval(showTime, 1000);
});