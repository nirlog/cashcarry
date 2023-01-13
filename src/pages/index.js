import 'normalize.css/normalize.css';
import 'jquery.scrollbar/jquery.scrollbar.css';
import 'jquery.scrollbar/jquery.scrollbar.min.js';
import './index.css';

  
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    jQuery('.scrollbar-inner').scrollbar();

    let historyItems = Array.from(document.querySelectorAll('.order-history__item'));
    historyItems.forEach((historyItem) =>{
        const itemBtn = historyItem.querySelector('.order-history__item-btn');
        itemBtn.addEventListener('click', function(){
            historyItem.classList.toggle('open');
            itemBtn.classList.toggle('open');
        });
    });
}


















