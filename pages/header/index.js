console.log('daskdhgasjd')
document.addEventListener("DOMContentLoaded", function () {
    fetch("/pages/next_last_button/index.html")
        .then((response) => response.text())
        .then((data) => {
            // document.getElementById("page_1_1_header").innerHTML = data;
            let pageArr = [
                'page_1_1',
                'page_1_2',
                'page_1_3',
                'page_1_4',
                'page_2_1',
                'page_2_2',
                'page_2_3',
                'page_2_4',
                'page_2_5',
                'page_2_6',
                'page_2_7',
                'page_2_8',
                'page_2_9',
                'page_2_10',
                'page_2_11',
                'page_2_12',
                'page_2_13',
                'page_2_14',
                'page_2_15',
                'page_2_16',
                'page_2_17',
                'page_2_18',
            ]
            let currentPage = window.location.href.split('/').filter(Boolean)

            console.log('currentPage: ', currentPage)

            // 0 21

            function createElementFromHTML(htmlString) {
                var div = document.createElement('div');
                div.innerHTML = htmlString.trim();
                return div.firstChild;
            }
            function intersection(arr1, arr2) {
                return arr1.filter(value => arr2.includes(value));
            }

            console.log('dsakudahs: ', currentPage, pageArr.findIndex((e) => e == currentPage))
            if (intersection(currentPage, pageArr).length) {
                document.body.appendChild(createElementFromHTML(data))
            }

            currentPage = intersection(currentPage, pageArr)[0]

            if (pageArr.findIndex((e) => e == currentPage) == 0) {
                document.getElementById('last_button').style.display = 'none'
            } else if (pageArr.findIndex((e) => e == currentPage) == 21) {
                document.getElementById('next_button').style.display = 'none'
            }

            // let next_buttonTag = document.getElementById('next_button') | ''
            // let last_buttonTag = document.getElementById('last_button') | ''

            document.getElementById('last_button').addEventListener('click', () => {
                let pageStr = pageArr[pageArr.findIndex((e) => e == currentPage) - 1]
                location.href = `/pages/theme_pages/${pageStr}`
            })
            document.getElementById('next_button').addEventListener('click', () => {
                let pageStr = pageArr[pageArr.findIndex((e) => e == currentPage) + 1]
                location.href = `/pages/theme_pages/${pageStr}`
            })

        })
        .catch((error) => console.error("Error loading header:", error));
});