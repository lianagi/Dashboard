import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={" widgetLgButton " + type} >{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Verification Store</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTable">
                    <th className="widgetLgTh">StoreName</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr"> 
                    <td className="widgetLgUser">
                        <img 
                        src="https://www.pexels.com/photo/city-fashion-beach-people-9897067/"
                         alt=""
                          className="widgetLgImg" 
                          />
                        <span className="widgetLgName">RaymondStore</span>
                        </td>
                        <td className="widgetLgDate">2 June 2021</td>
                        <td className="widgetLgStatus"><Button type="Approved"/></td>
                   
                </tr>
                <tr className="widgetLgTr"> 
                    <td className="widgetLgUser">
                        <img
                         src="https://www.pexels.com/photo/city-fashion-beach-people-9897067/" 
                         alt=""
                          className="widgetLgImg" 
                          />
                      
                        <span className="widgetLgName">PatrickStore</span>
                        </td>
                        <td className="widgetLgDate">2 June 2021</td>
                        <td className="widgetLgStatus"><Button type="Pending"/></td>
                    
                </tr>
                <tr className="widgetLgTr"> 
                    <td className="widgetLgUser">
                        <img
                         src="https://www.pexels.com/photo/city-fashion-beach-people-9897067/"
                        alt=""
                         className="widgetLgImg" 
                         />
                        <span className="widgetLgName">PhilipStore</span>
                        </td>
                        <td className="widgetLgDate">2 June 2021</td>
                        <td className="widgetLgStatus"><Button type="Declined"/></td>
                    
                </tr>
            </table>
        </div>
    )
}
