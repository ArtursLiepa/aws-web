import "./startUpComponent.css";
import HeaderComponent from "./headerComponent/headerComponent";
import ContentComponent from "./contentComponent/contentComponent";
import FooterComponent from "./footerComponent/footerComponent";

const StartUpComponent = () => {
    return (
        <div className={`pageContainer`}>
<HeaderComponent/>
<ContentComponent/>
<FooterComponent/>
        </div>
    )
}

export default StartUpComponent;