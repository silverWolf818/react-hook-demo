import {useRecoilState,useRecoilValue} from 'recoil';
import {UserState,NameState,currentUserQuery} from './models';

function User() {
    const [userState] = useRecoilState(UserState);
    const nameProp = useRecoilValue(NameState);
    const user = useRecoilValue(currentUserQuery);

    return (
        <div>
            user: {userState.user}
            <p>{nameProp}</p>
            <p>
                {
                    JSON.stringify(user)
                }
            </p>
        </div>
    )
}

export default User;