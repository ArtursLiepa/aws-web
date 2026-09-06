import "./contentComponent.css";
import { Outlet } from "react-router-dom";

const ContentComponent = () => {
    return (
        <div className={`contentContainer`}>
<Outlet></Outlet>
        </div>
    )
}

export default ContentComponent;