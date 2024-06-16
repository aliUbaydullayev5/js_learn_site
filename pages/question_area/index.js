document.addEventListener("DOMContentLoaded", function() {
    fetch('./pages/question_area/index.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('question_area').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

let test = 'TEST_EXAMPLE'