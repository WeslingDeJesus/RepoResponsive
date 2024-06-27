function Togglemenu(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle("active");
    const navigation = document.querySelector('.nav_container');
    navigation.classList.toggle("active");
    const move = document.querySelector('.section');
    move.classList.toggle("active");
}
