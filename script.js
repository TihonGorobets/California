const sidebar = document.querySelector('.navbar-nav-menu');
const menuItems = document.querySelector('.navbar-menu-items');
const headerBurger = document.querySelector('.header-burger');
const headerBurgerAfter = document.querySelector('.header-burgerAfter');
const headerBurgerBefore = document.querySelector('.header-burgerBefore');
const burgerOpen = document.querySelector('.header-burger, .open');

burgerOpen.addEventListener('click', () => {
    if(sidebar.className === 'navbar-nav-menu') 
        sidebar.classList.add('active');
    else (sidebar.classList.remove('active'));
    
    if(headerBurger.className === 'header-burger') 
        headerBurger.classList.add('active');
    else (headerBurger.classList.remove('active'));
    
    if(headerBurgerAfter.className === 'header-burgerAfter') 
        headerBurgerAfter.classList.add('active');
    else (headerBurgerAfter.classList.remove('active'));
    
    if(headerBurgerBefore.className === 'header-burgerBefore') 
        headerBurgerBefore.classList.add('active');
    else (headerBurgerBefore.classList.remove('active'));
    
    if(menuItems.className === 'navbar-menu-items') 
        menuItems.classList.add('active');
    else (menuItems.classList.remove('active'));
})
