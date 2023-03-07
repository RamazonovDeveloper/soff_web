import axios from "axios"
import { useState } from "react"

const baseUrl = process.env.REACT_APP_BASEURL

class AuthUser{

    // getCompetitionData = async () => {

    //     // https://xusandev.pythonanywhere.com/competition/v1/list/
    //     const endPoint = 'competition/v1/list/'

    //     let response = await axios.get(`${baseUrl}${endPoint}`)

    //     return response
    // }

    registUser = async (data) => {

        const endPoint = '/account/v1/sign-up/'
        
        let response = await fetch(`${baseUrl}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        
        let result = await response.json();

        console.log("Registration");

        console.log(result);

        return result

    }

    loginUser = async (user) => {

        const endPoint = '/account/v1/sign-in/'

        // const [login, setLogin] = useState('')

        // axios.post(`${baseUrl}${endPoint}`,user)
        //     .then((e) => {setLogin(e)})

        
        // return login



        console.log(`${baseUrl}${endPoint}`)

        let response = await fetch(`${baseUrl}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
    
        let result = await response.json();

        console.log("Login");
        console.log(result);

        return await result
    }
}

export default new AuthUser