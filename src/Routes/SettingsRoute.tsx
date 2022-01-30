import { SettingsForm } from "../Components/SettingsForm";
import { Wrapper } from "../Layouts/Wrapper/Wrapper";

export default function SettingsRoute() {
    return (<Wrapper childComp={<SettingsForm />} />)
}