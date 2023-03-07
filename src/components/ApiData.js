
export const registrNewUser = async (data) => {
    
    let response = await fetch("https://xusandev.pythonanywhere.com/account/v1/sign-up/",{
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


export const LogInUser = async(user) => {
    
    let response = await fetch("https://xusandev.pythonanywhere.com/account/v1/sign-in/",{
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


export const getCompList = async () => {
    let response = await fetch(process.env.REACT_APP_BASEURL)
        .then(res => res.json())           
        .catch(error => {
            throw(error);
    })

    console.log(response)

    return await response
    // let result = await response.json()

    // console.log(response);

    // return result
}


