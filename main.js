const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    header.classList.toggle("sticky",window.scrollY > 0)
})

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    console.log('jdj');
    menuToggle.classList.toggle('active');
    console.log('djjdjggg')
    navigation.classList.toggle('active');
     console.log('djjdjggg')
      
   
}