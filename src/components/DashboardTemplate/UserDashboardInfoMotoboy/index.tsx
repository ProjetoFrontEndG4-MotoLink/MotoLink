import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { UserDashboardMotoboy } from "./style"

export const UserDashboardInfoMotoboy = () => {
    const { user } = useContext(UserContext)

    return (
        <UserDashboardMotoboy>
            <div className="UserInfoDetails--name">
                <h1>{user?.name}</h1>
                <h2>Saldo: </h2>
            </div>
            <div className="UserInfoDetails">
                <h3>Email: {user?.email}</h3>
                <h3>Telefone: {user?.telefone}</h3>
            </div>
        </UserDashboardMotoboy>
    )
}