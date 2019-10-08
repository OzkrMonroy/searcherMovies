export class UserInterface {

    showDataResult(datas){
        const titleContainer = document.querySelector('.result-text')
        const resultContainer = document.querySelector('.results')
        this.cleanResults(resultContainer)

        if(datas === undefined) {
            titleContainer.innerHTML = '<h2>There are no results</h2>'
            titleContainer.classList.add('error')

            setTimeout(() => {
                titleContainer.innerHTML = ''
            }, 3000);

        }else {
            titleContainer.classList.remove('error')
            titleContainer.innerHTML = '<h2>Search results</h2>'
            datas.forEach(data => {
                this.buildElement(data, resultContainer)
            });
        }

    }
    buildElement(data, resultContainer){
        const cardContainer = document.createElement('div')

        cardContainer.classList.add('card-result')
        cardContainer.innerHTML = `
            <div class="card-image">
                <img src="${data.Poster}" alt="">
            </div>
            <div class="card-content">
                <h3>Movie title:</h3>
                <p>${data.Title}</p>
                <h3>Year</h3>
                <p>${data.Year}</p>
            </div>
        `

        resultContainer.appendChild(cardContainer)
    }
    cleanResults(container) {
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
    }
}