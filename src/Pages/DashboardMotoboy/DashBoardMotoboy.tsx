import { useContext } from "react";
import { JobsListMoto } from "../../components/JobsListMoto/JobsListMoto";
import { DashboardHeader } from "../../components/Header/DashboardHeader";
import { UserContext } from "../../providers/UserContext";

export const DashMotoboy = () => {
    const {user} = useContext(UserContext)

	return (
		<>
            <DashboardHeader/>
			<div>
				<h1>{user?.name}</h1>
				<h3>Setor:{user?.setor}</h3>
				<h3>Telefone:{user?.telefone}</h3>
				<h3>E-mail:{user?.email}</h3>
			</div>
            <div>
                <h1>Jobs Disponiveis</h1>
                <JobsListMoto/>
            </div>
		</>
	);
};
