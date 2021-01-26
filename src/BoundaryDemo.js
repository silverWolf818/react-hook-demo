import {useResource} from 'react-suspense-boundary';

const request = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 'zzh') {
                resolve('zzh');
            } else {
                reject();
            }
        }, 1000);
    });
};

const fetchUser = async ({id}) => {
    try {
       return await request(id);
    }catch (e){
        throw new Error('invoked a function that will 100% crash');
    }
}

const BoundaryDemo = () => {
    const [data] = useResource(fetchUser, {id: 'zzh'});

    const crash = ()=> {

    }

    return (
        <>
            <div>BoundaryDemo {data}</div>
            <video loop src="blob:https://www.bilibili.com/fdf66521-7ccf-4b94-a652-2f7f2b6ff34b" width="2341" height="180"/>
            <button onClick={crash}>crash</button>
        </>
    );
};

export default BoundaryDemo;