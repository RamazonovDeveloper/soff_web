import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL

class Competitions{

    getCompetitionList = async () => {
        
        const endPoint = 'competition/v1/list/'

        let response = await axios.get(`${baseUrl}${endPoint}`)

        console.log(response);

        return response
    }
}

export default new Competitions