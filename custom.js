let menuBar = document.querySelector('#menu-bars');
let searchForm = document.querySelector('#search');
let searchOption = document.querySelector('.search-option')
let navBar = document.querySelector('.nav');

menuBar.addEventListener('click', function(){
    navBar.classList.toggle('active');
    searchOption.classList.remove('active');

})

searchForm.addEventListener('click', function(){
    searchOption.classList.toggle('active');
    navBar.classList.remove('active');
})

window.addEventListener('scroll', function(){
    searchOption.classList.remove('active');
    navBar.classList.remove('active');
})

let leftSlide = document.querySelector('.slide-bar-left');
let rightSlide = document.querySelector('.slide-bar-right');

rightSlide.addEventListener('click', function(){

    if(document.querySelectorAll('.container-box')[0].classList.contains('active')){

        document.querySelectorAll('.container-box')[0].classList.remove('active');
        document.querySelectorAll('.container-box')[1].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[1].classList.contains('active')){

        document.querySelectorAll('.container-box')[1].classList.remove('active');
        document.querySelectorAll('.container-box')[2].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[2].classList.contains('active')){

        document.querySelectorAll('.container-box')[2].classList.remove('active');
        document.querySelectorAll('.container-box')[3].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[3].classList.contains('active')){

        document.querySelectorAll('.container-box')[3].classList.remove('active');
        document.querySelectorAll('.container-box')[4].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[4].classList.contains('active')){

        document.querySelectorAll('.container-box')[4].classList.remove('active');
        document.querySelectorAll('.container-box')[0].classList.add('active');

    }else{
        
    }
});

leftSlide.addEventListener('click', function(){

    if(document.querySelectorAll('.container-box')[0].classList.contains('active')){

        document.querySelectorAll('.container-box')[0].classList.remove('active');
        document.querySelectorAll('.container-box')[4].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[4].classList.contains('active')){

        document.querySelectorAll('.container-box')[4].classList.remove('active');
        document.querySelectorAll('.container-box')[3].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[3].classList.contains('active')){

        document.querySelectorAll('.container-box')[3].classList.remove('active');
        document.querySelectorAll('.container-box')[2].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[2].classList.contains('active')){

        document.querySelectorAll('.container-box')[2].classList.remove('active');
        document.querySelectorAll('.container-box')[1].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[1].classList.contains('active')){

        document.querySelectorAll('.container-box')[1].classList.remove('active');
        document.querySelectorAll('.container-box')[0].classList.add('active');

    }else{
        
    }
});

setInterval(function(){
    if(document.querySelectorAll('.container-box')[0].classList.contains('active')){

        document.querySelectorAll('.container-box')[0].classList.remove('active');
        document.querySelectorAll('.container-box')[1].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[1].classList.contains('active')){

        document.querySelectorAll('.container-box')[1].classList.remove('active');
        document.querySelectorAll('.container-box')[2].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[2].classList.contains('active')){

        document.querySelectorAll('.container-box')[2].classList.remove('active');
        document.querySelectorAll('.container-box')[3].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[3].classList.contains('active')){

        document.querySelectorAll('.container-box')[3].classList.remove('active');
        document.querySelectorAll('.container-box')[4].classList.add('active');

    }else if(document.querySelectorAll('.container-box')[4].classList.contains('active')){

        document.querySelectorAll('.container-box')[4].classList.remove('active');
        document.querySelectorAll('.container-box')[0].classList.add('active');

    }
}, 5000);