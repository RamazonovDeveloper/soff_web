import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL

class BookRepository  {
  
    getBookData = async () => {

        const endPoint = '/main/v1/category/'

        let responce = await axios.get(`${baseUrl}${endPoint}`)

        console.log(responce)

        return responce
    }

}

export default new BookRepository
