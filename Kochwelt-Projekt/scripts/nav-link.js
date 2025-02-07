// https://www.youtube.com/watch?v=6dsdZaNbI3Q

//Get the window pathname using the window object
const windowPathname = window.location.pathname;

//Select all the NavLinks
let navLinkElements = document.querySelectorAll(".header-nav-link",".mobile-nav-link");

let navLinkElementsMobile = document.querySelectorAll(".mobile-nav-link");

// Loop  thrue the NavLinks and then compare the Link Pathname against windowPathname

navLinkElements.forEach(navLink=>{
    const navLinkPathname = new URL(navLink.href).pathname;
    if(navLinkPathname === windowPathname){
        navLink.classList.add("active-page");
    }

})

navLinkElementsMobile.forEach(navLink=>{
    const navLinkPathname = new URL(navLink.href).pathname;
    if(navLinkPathname === windowPathname){
        navLink.classList.add("active-page");
    }

})

