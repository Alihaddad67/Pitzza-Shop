import { useAuth } from './../Hooks/useAuth.jsx'

export const Home = ()=> {
    const {logout} = useAuth()
    return <div>
        <h1>this is Home </h1>
        <button onClick={logout}>LogOut</button>
    </div>
 }