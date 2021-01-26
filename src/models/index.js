import {atom,selector} from 'recoil';

const UserState = atom({
    key: 'userState',
    default: {
        user: 'zzh',
        age: '24'
    },
});

const NameState = selector({
    key: 'nameState',
    get: ({get}) => {
        const obj = get(UserState);
        return `${obj.user}:${obj.age}`;
    },
});

const currentUserQuery = selector({
    key: 'currentUserName',
    get: async ({get}) => {
        const response = await fetch(`https://api.github.com/users/yaeSakuras`);
        return await response.json();
    }
})


export {
    UserState,
    NameState,
    currentUserQuery
}