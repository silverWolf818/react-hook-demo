import {atom, selector} from 'recoil'

const UserState = atom({
    key: 'userState',
    default: {
        user: 'yaeSakuras',
        address: 'hubei',
    },
})

const NameState = selector({
    key: 'nameState',
    get: ({get}) => {
        const obj = get(UserState)
        return `${obj.user}:${obj.address}`
    },
})

const currentUserQuery = selector({
    key: 'currentUserName',
    get: async ({get}) => {
        const {user} = get(UserState)
        const response = await fetch(`https://api.github.com/users/${user}`)
        return await response.json()
    },
})


export {
    UserState,
    NameState,
    currentUserQuery,
}