import { useState } from "react";
import "./style.css";

import ShowData from "./showData";

const Form = () => {
    const[pincode,setPincode] = useState("");
    const[data,setData] = useState(null);

    const[toggle,setToggle] = useState(true);

    const OnChange = (event) => {
        setPincode(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(pincode.length !== 6){
            alert("Please enter the valid 6-digit pincode...");
            return;
        }
        setToggle(false);
        fetch(`https://api.postalpincode.in/pincode/${pincode}`).then((response) => {
            return response.json();
        }).then((data) => {
            setData(data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }
    return(
        <div className="form-container">
            {toggle && <form onSubmit={handleSubmit}>  {/*When we click on button form will submit and handleSubmit will run */}
                <label>Enter Pincode</label>
                <input type="number" name="pincode" placeholder="Pincode" required onChange={OnChange}/>
                <button className="btn" type="submit">Lookup</button>
            </form>}
            {data && <ShowData data={data} pincode={pincode} />}
        </div>
    )
}
export default Form;