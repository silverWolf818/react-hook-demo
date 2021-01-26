// 定义用来存储拦截请求和拦截响应的处理函数集合
const interceptors_req = [], interceptors_res = [];

const httpRequest = (url, options = {}) => {

    interceptors_req.forEach(interceptors => {
        options = interceptors(options);
    });

    return new Promise((resolve, reject) => {
        fetch(url, options).then(res => {
            interceptors_res.forEach(interceptors => {
                res = interceptors(res);
            });
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

httpRequest.interceptors = {
    request: {
        use: callback => {
            interceptors_req.push(callback);
        },
    },
    response: {
        use: callback => {
            interceptors_res.push(callback);
        },
    },
};

export default httpRequest;