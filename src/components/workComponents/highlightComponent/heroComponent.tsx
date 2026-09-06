import "./heroComponent.css";
import {useTSQgetTechList} from "../../../Hooks/tanHooks"
import type { techInterface } from "../../../Interfaces/techinterface";
import {ArchitectureGroupVirtualprivatecloudVPC, ArchitectureServiceAmazonEC2, ArchitectureServiceAWSLambda  } from "aws-react-icons"

const HeroComponent = () => {

const {
    data: techList = [],
    // isSuccess: techListisSuccess,
    
  } = useTSQgetTechList();

const usedtechList = techList.map((item:techInterface) => (
      <div className="techItemBlock" key={item._id}>
        <div className="iconBlock">          
        </div>

        <li className="techItem">{item.name}</li>
      </div>
    ));

    return (
        <div>
            {usedtechList}
            <ArchitectureGroupVirtualprivatecloudVPC className={`aws-icons`}/>
            <ArchitectureServiceAmazonEC2 className={`aws-icons`}/>
            <ArchitectureServiceAWSLambda className={`aws-icons`}/>

        </div>
    )
}

export default HeroComponent;