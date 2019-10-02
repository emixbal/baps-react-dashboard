// export const IP = "https://baps-adonis-server.herokuapp.com";
export const IP = "http://127.0.0.1:3333";
export const axiosHeader = {
    'Content-Type':'application/json',
    'Authorization':localStorage.getItem('tokenType')+' '+localStorage.getItem('token')
}