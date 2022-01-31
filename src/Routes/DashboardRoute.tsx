import { Dashboard } from "../Components/Dashboard";
import { Wrapper } from "../Layouts/Wrapper/Wrapper";

export default function DashboardRoute() {
    return (<Wrapper childComp={<Dashboard />} />);
}