import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../DummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";




export default function Home() {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="HomeWidgets">
            <WidgetSm/>
            <WidgetLg/>
            </div>
              
        </div>
    )
}
