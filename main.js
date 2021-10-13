
function aboutPageToggle(){

    var mainContent = document.getElementById("home");
    var aboutPage = document.getElementById("about-section");

    mainContent.style.display = 'none';

    aboutPage.style.display = 'block';

};

function homePageActivate(){

    var mainContent = document.getElementById("home");
    var aboutPage = document.getElementById("about-section");

    mainContent.style.display = 'block';

    aboutPage.style.display = 'none';

};

