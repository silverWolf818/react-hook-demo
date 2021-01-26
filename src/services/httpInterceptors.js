import httpRequest from './httpRequest';

httpRequest.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/json;charset=utf-8',
    };
    return config;
});

httpRequest.interceptors.response.use(async res => {
    try {
        return await res.json();
    }catch (error){
        console.log('Request Failed', error);
    }
});