// import headerFile from './index.html'
// const headerTag = document.getElementById('header')




// headerTag.innerHTML = headerFile


document.addEventListener("DOMContentLoaded", function() {
    fetch('./pages/header/index.html')
        .then(response => response.text())
        .then(data => {
            console.log('run: ', data)
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});``