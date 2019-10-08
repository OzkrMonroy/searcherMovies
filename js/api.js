export class MovieApi {

    async getApiResults(titleSearch, typeSearch){
        const url = `http://www.omdbapi.com/?s=${titleSearch}&plot=full&apikey=f3ef4322&s&type=${typeSearch}`

        // console.log(url)
        const responseFromApi = await fetch(url)
        const dataResult = await responseFromApi.json()

        return {
            dataResult
        }
    }
}