import { useAuth } from './../Hooks/useAuth.jsx'

export const WerbKorb = () => {
    const {user} = useAuth()
    console.log(user);
    return <div>This is WerbKorb for: {user.firstName}</div>
}