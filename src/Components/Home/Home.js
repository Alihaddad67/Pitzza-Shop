import { useAuth } from './../Hooks/useAuth.jsx'

export const Home = ()=> {
    const {logout , user} = useAuth();
    console.log(user)
    return <div>
        <h1>this is Home {user.firstName} </h1>
        <button onClick={logout}>LogOut</button>
    </div>
 }