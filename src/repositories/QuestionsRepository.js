const baseUrl = process.env.REACT_APP_BASEURL

class Questions {
    getQuestions = async () => {
        let endPoint = '/offline-test/v1/category/'
        let result = await fetch(`${baseUrl}/${endPoint}`)
        console.log(result)
        if(result.success){
            return result.data
        }
        if(!result.success){
            return console.error(result.data)
        }
    }
}

export default new Questions