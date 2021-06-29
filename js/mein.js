const customerSlider = document.querySelector(".swiper-container");

let customerSliderItem = new Swiper(customerSlider,{
	speed: 2000,
	autoplay: true,
	loop: true,
	slidesPerView: 1,
	effect: 'flip',
});



const headerBurger = document.querySelector(".header_burger");
const headerMenu = document.querySelector(".header_menu-nav");

const openMenu = () => {
	headerBurger.classList.toggle("active");
	headerMenu.classList.toggle("active");
}
window.onscroll = function(){
  headerBurger.classList.remove("active");
  headerMenu.classList.remove("active");
};

headerBurger.addEventListener("click",openMenu);