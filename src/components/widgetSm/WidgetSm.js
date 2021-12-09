import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Driver Members </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://www.pexels.com/photo/city-fashion-beach-people-9897067/" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                         <span className="widgetSmUsername">Philip Pangilinan</span>
                         <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> 
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://www.pexels.com/photo/city-fashion-beach-people-9897067/" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                         <span className="widgetSmUsername">Patrick Santillan</span>
                         <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> 
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://www.pexels.com/photo/city-fashion-beach-people-9897067/" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                         <span className="widgetSmUsername">Ariel Nicdao</span>
                         <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> 
                        Display
                    </button>
                </li>
                
            </ul>
        </div>
    )
}
