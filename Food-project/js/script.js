window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__item');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(tab = 0) {
        tabsContent[tab].style.display = 'block';
        tabs[tab].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;
        console.log(target);
        // if (target && target.classList.contains('tabheader__item')) {
        //     tabs.forEach((item, i) => {
        //         if(item == target){
        //             hideTabContent();
        //             showTabContent(i);
        //         }
                
        //     });
        // }
    });
});