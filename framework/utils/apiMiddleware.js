

const BASE_URL = 'https://jsonplaceholder.typicode.com';



export default function api (method, url, body = {}) {
    const data = {method}
    if(!['GET','DELETE'].includes(method)) {
        data.body = JSON.stringify(body);
        
    }
    
    return fetch(`${BASE_URL}${url}`, data).then(response => response.json())
    .catch((e) => {
        console.log(e);
    })
}



