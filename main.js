var sunnySideMobile = document.getElementById("sunny-side-mobile");
var sunnySideDesktop = document.getElementById("sunny-side-desktop");
var sunnySideDesktopBackground = document.getElementById("item-1-desktop");
var sunnySideMobileBackground = document.getElementById("item-1-mobile");


sunnySideMobile.addEventListener('click', mobileMode);
sunnySideDesktop.addEventListener('click', desktopMode);

function mobileMode(){
    
    sunnySideDesktopBackground.style.display = 'none';

    sunnySideMobileBackground.style.display = 'block';
};

function desktopMode(){
    
    sunnySideDesktopBackground.style.display = 'block';

    sunnySideMobileBackground.style.display = 'none';
};

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // you're at the bottom of the page
        document.getElementById('navbarSocials').style.opacity='0';
    }else{
        document.getElementById('navbarSocials').style.animation = 'opacityChange 3s';
    };
};