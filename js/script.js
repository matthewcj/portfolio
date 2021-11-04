// Page Loader
window.addEventListener("load", () =>{
	document.querySelector(".main").classList.remove("hidden");
	document.querySelector(".home-section").classList.add("active");

	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(() =>{
		document.querySelector(".page-loader").style.display = "none";
	}, 600);
});














// Toggle Navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
	hideSection();
	toggleNavbar();
	document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
	document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
	document.querySelector(".header").classList.toggle("active");
}







// Active Section
document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("link-item") && e.target.hash !== ""){
		// active the overlay to prevent multiple clicks
		document.querySelector(".overlay").classList.add("active");
		navToggler.classList.add("hide");
		if(e.target.classList.contains("nav-item")){
			toggleNavbar();
		}
		else{
			hideSection();
			document.body.classList.add("hide-scrolling");
		}
		setTimeout(() =>{
			document.querySelector("section.active").classList.remove("active", "fade-out");
			document.querySelector(e.target.hash).classList.add("active");
			window.scrollTo(0,0);
			document.body.classList.remove("hide-scrolling");
			navToggler.classList.remove("hide");
			document.querySelector(".overlay").classList.remove("active");
		},500);
	}
});








// About Tabs
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
	if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
});





// Portfolio Item Details Popup
document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("view-project-btn")){
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
})
function togglePortfolioPopup(){
	document.querySelector(".portfolio-popup").classList.toggle("open");
	document.body.classList.toggle("hide-scrolling");
	document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);


// hide popup when clicking outside of it
document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("pp-inner")){
		togglePortfolioPopup();
		document.querySelector(".portfolio-popup").scrollTo(0,0);
		portfolioItemDetails(e.target.parentElement);
	}
});


function portfolioItemDetails(portfolioItem){
	document.querySelector(".pp-thumbnail img").src =
	portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

	document.querySelector(".pp-header h3").innerHTML =
	portfolioItem.querySelector(".portfolio-item-title").innerHTML;

	document.querySelector(".pp-body").innerHTML =
	portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}






// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbz3oDL26wZBlNjCWLj3YNtDdRmC5_rqc4aXEE6W8gGy8KLfIqpmWvenNq3nkERphVpV/exec'
const form = document.forms['matthew-contact-form']
// const btnKirim = document.querySelector('.btn-kirim');
// const btnLoading = document.querySelector('.btn-loading');
const alert = document.querySelector('.alert');


form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit diklik
// tampilkan tombol loading, hilangkan tombol kirim
// btnLoading.classList.toggle('d-none');
// btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim, hilangkan tombol
    // btnLoading.classList.toggle('d-none');
    // btnKirim.classList.toggle('d-none');
    // tampilkan alert
    alert.classList.toggle('d-none');
    // reset form
    form.reset();
    console.log('Success!', response)
  })
  .catch(error => console.error('Error!', error.message))
})
