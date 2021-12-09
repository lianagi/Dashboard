import "./featureinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Register Driver</span>
                <div className="DataPriviewContainer">
                    <span className="DataPriview">100</span>
                    <span className="DailyActiveUser">-10<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Register Store</span>
                <div className="DataPriviewContainer">
                    <span className="DataPriview">300</span>
                    <span className="DailyActiveUser">-10<ArrowDownward  className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Daily Active User</span>
                <div className="DataPriviewContainer">
                    <span className="DataPriview">200</span>
                    <span className="DailyActiveUser">-10<ArrowUpward  className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
