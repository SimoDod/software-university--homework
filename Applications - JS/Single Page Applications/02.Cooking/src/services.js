const host = 'http://localhost:3030/'


async function serviceHandler(method, url, data, token) {
   
    let options = {
        method: method,
        headers: {}
    }

    if(data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if(data === undefined && token !== undefined) {
        options.headers['X-Authorization'] = token;
    }
    
    if(data !== undefined && token !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-Authorization'] = token;
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options)
        
        if(response.ok !== true) {
            if(response.status === 403) {
                sessionStorage.clear();
            }
            
            const error = await response.json()
            throw new Error(error.message);
        }
        
        if(response.status == 204) {
            return response;
        } else {
            return response.json()
        }
        
    } catch (error) {
        console.log(error);
        throw error;
    } 
}

export const get = serviceHandler.bind(null, 'get');
export const post = serviceHandler.bind(null, 'post');
export const put = serviceHandler.bind(null, 'put');
export const del = serviceHandler.bind(null, 'delete');