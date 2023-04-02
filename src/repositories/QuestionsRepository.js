import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL

class Questions {
    getQuestions = async () => {
        let endPoint = 'exam/v1/question/'
        let result = await axios.get(`${baseUrl}${endPoint}`)
        console.log(result)
        if(result.status == 200){
            return result.data
        }
        if(!result.success == 200){
            return console.error(result.data)
        }
    }
}

export default new Questions