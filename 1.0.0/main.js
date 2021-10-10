var projectButtonActive = document.getElementById('projectButton');
var photographyButtonActive = document.getElementById('photographyButton');
var projectContainerRun = document.getElementById('projectContainer');
var photoContainerRun = document.getElementById('photographyContainer');

projectButtonActive.addEventListener('click', showProjectContainer);
photographyButtonActive.addEventListener('click', showPhotoContainer);

function showProjectContainer(){
    projectContainerRun.style.display = 'block';
};

function showPhotoContainer(){
    photoContainerRun.style.display = 'block';
};

