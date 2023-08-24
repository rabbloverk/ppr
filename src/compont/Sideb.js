import {SidebData} from "../compont/SidebData";
import "./Sidbar.css"


  export default function Sideb(){
    return(

        <div className='sidebar'>
       
        <ul className="sidebarlist">
        {SidebData.map((vle,key)=>{
            return(
                
                <li className="row"
                id={window.location.pathname===vle.link ? "active" : ""}
                 key={key} onClick={()=>{window.location.pathname=vle.link}}>
                <div id="icon">{vle.icon}</div>
                <div id="titel">{vle.titile}</div>
                </li>
   
            )
        })}
        </ul>

        </div>
    )
}