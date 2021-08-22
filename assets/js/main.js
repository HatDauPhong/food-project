const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu_header = $$('.category-item');

const itemReview = [...$$('.item-review')];

//hàm xử lý comment trái phải
itemReview.map( (item, index) => {
    if( index%2 ==0 ) {
        item.classList.add('left')
    } else {
        item.classList.add('right')
    }
})

//xử lý bấm menu
menu_header.forEach ( (menu) => {
    menu.onclick = function () {
        $('.category-item.active').classList.remove("active");  
        this.classList.add("active");
    }
})



//xử lý swiper home

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 100000000000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

const search = $('.btn-search');
console.log(search);
const search_bar = $('.search-bar');
console.log(search_bar);
const html = $('html');

search.onclick = function () {
    search_bar.style.display = 'block';
}
search_bar.onblur = function () {
    search_bar.style.display = 'none';
    search_bar.value = '';
}

//Xử lý nút bar mobile
const bar_mobile = $('.fa-bars');
const header__bar = $('.header__bar-mobile');
const overlay__mobile = $('.header .overlay__mobile');
const item__mobile = [...$$('.category-item__mobile')];

bar_mobile.onclick = function () {
    header__bar.style.transform = 'translateX(0)';
    overlay__mobile.style.display = 'block';    
}
overlay__mobile.onclick = function () {
    header__bar.style.transform = 'translateX(100%)';
    overlay__mobile.style.display = 'none';
}
item__mobile.onclick = function () {
    header__bar.style.transform = 'translateX(100%)';
    overlay__mobile.style.display = 'none';
}
item__mobile.forEach ( (item) => {
    item.onclick = function () {
        $('.category-item__mobile.active').classList.remove("active");  
        this.classList.add("active");
        header__bar.style.transform = 'translateX(100%)';
        overlay__mobile.style.display = 'none';
    }
})

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 2500);
  }
  
  window.onload = fadeOut;
