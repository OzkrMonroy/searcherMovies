import { MovieApi } from './api.js'
import { UserInterface } from './user_interface.js'

// const selectCount = document.getElementById('page-count')

loadEventsListeners()

function loadEventsListeners(){
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const titleSearch = document.getElementById('title-movie').value
        const typeResult = document.getElementById('type-result')
        const typeSelect = typeResult.options[typeResult.selectedIndex].value

        const api = new MovieApi()
        const userInterface = new UserInterface()

        api.getApiResults(titleSearch, typeSelect).then(datas => userInterface.showDataResult(datas.dataResult.Search))
    })
}