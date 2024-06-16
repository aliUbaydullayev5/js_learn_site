document.addEventListener("DOMContentLoaded", function () {
    fetch('./pages/home_section/index.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('home_section').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});
