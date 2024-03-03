import "./style.css";
const ShowData = ({data,pincode}) => {
    //console.log(data[0].PostOffice[0].Name);
    const arr = data[0].PostOffice;
    /*arr.map((ele) => {
        console.log(ele.Name);
    })*/
    return(
        <div>
        <p className="pin">Pincode:{pincode}</p>
        <p className="msg">Message: {data[0].Message}</p>
        <input type="text" name="filter" placeholder="Filter" className="filter"/>
        <div className="container">
            {
                arr.map((ele,index) => {
                    return(
                        <div className="card" key={index}>
                            <p>Name: {ele.Name}</p>
                            <p>Branch Type: {ele.BranchType}</p>
                            <p>Delivery Status: {ele.DeliveryStatus}</p>
                            <p>District: {ele.District}</p>
                            <p>State: {ele.State}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}
export default ShowData;