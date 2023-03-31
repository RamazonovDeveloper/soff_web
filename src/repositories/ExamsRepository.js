import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL

class Exams {
    
    getExamsCategory = async () => {
        let endPoint = '/exam/v1/category/'
        let result = await axios.get(`${baseUrl}${endPoint}`)
        console.log(result)
        if(result.status == 200){
            return result.data
        }
        if(!result.status == 200){
            return console.error(result.data)
        }
    }


    // getQuestions = async () => {
    //     let endPoint = '/offline-test/v1/category/'
    //     let result = await fetch(`${baseUrl}/${endPoint}`)
    //     console.log(result)
    //     if(result.success){
    //         return result.data
    //     }
    //     if(!result.success){
    //         return error(result.data)
    //     }
    // }
    
}

export default new Exams