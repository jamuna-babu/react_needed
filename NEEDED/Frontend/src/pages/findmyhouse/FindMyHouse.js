import "./FindMyHouse.css"
import { Link } from "react-router-dom";
import Navbar from '../../Components/rightsidebar/SideBar';
import { useNavigate } from "react-router-dom";
import { useState, setState } from "react";
import FormInput from "./FormInput"
import React from "react";
import Select from "react-select";
import { FaParking } from "react-icons/fa";


const FindMyHouse = () => {

    const navigate = useNavigate();
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [bhk, setBHK] = useState("")
    const [budget, setBudget] = useState("")
    const [amenities, setAmenities] = useState()
    const [noofpersons, setNoofpersons] = useState("")

    //   location: "",
    //   gender: "",
    //   bhk: "",
    //   budget: "",
    //   amenities: "",
    //   noofpersons: "",

  
    // const inputs = [
    //   {
    //     id: 1,
    //     name: "location",
    //     type: "text",
    //     placeholder: "Location",
    //     label: "Location",
    //     required: true,
    //   },
      
    //   {
    //     id: 2,
    //     name: "gender",
    //     type: "text",
    //     placeholder: "Gender",
    //     label: "Gender",
    //     required: true,
    //   },
    //   {
    //     id: 3,
    //     name: "bhk",
    //     type: "text",
    //     placeholder: "BHK",
    //     label: "BHK",
    //     required: true,
    //   },
    //   {
    //     id: 4,
    //     name: "budget",
    //     type: "number",
    //     placeholder: "Budget",
    //     label: "Budget",
    //     required: true,
    //   },
    //   {
    //     id: 5,
    //     name: "amenities",
    //     type: "text",
    //     placeholder: "Amenities",
    //     label: "Amenities",
    //     required: true,
    //   },
    //   {
    //     id: 6,
    //     name: "noofpersons",
    //     type: "text",
    //     placeholder: "Number of Persons",
    //     label: "Number of Persons",
    //     required: true,
    //   },
      
    // ];

    const handleResetClick = () => {
        console.log('You clicked reset.');
        window.location.reload()
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(location+"\n" + gender+"\n" + bhk +"\n"+ budget+"\n" + amenities+"\n" + noofpersons);

    //   if (values.email === "abc@gmail.com" && values.password === "abcd@123"){
    //     console.log('You clicked submit.');
    //     navigate('/home')
    //   }
    };
  
    // const onChange = (e) => {
    //   setValue({[e.target.name]: e.target.value });
    // };

    const handleSelect = (e) => {
        setAmenities(e);
    }
    
    const ageOption = [{value:"",label:"Age"},{ value: "children", label: "children"} , {value: "adult", label: "Adult"}, {value: "Old", label: "Old"}]
    const bhkOption = [{value:"",label:"Products"},{ value: "Clothes", label: "Clothes"} , {value: "Toys", label: "Toys"}, {value: "Sports", label: "Sports"},{value: "", label: "Books"}]
    const amOption = [{value:"AC", label:"AC"},{value:"Water",label:"Water"},{value:"WiFi",label:"WiFi"},{value:"Power Backup",label:"Power Backup"},{value:"Parking Space",label:"Parking Space"}]
    return(
        <div>
            <Navbar/>
            <h1 className="amh">Product Page</h1>
            <div className="filters">
                <form className="filter-form" onSubmit={handleSubmit}>

                    <input type="text" id="location" name="location" placeholder="Location" onChange={(e) => setLocation(e.target.value) } ></input>
                    
                    {/* <input type="text" id="gender" name="gender" placeholder="Gender" onChange={(e) => setGender(e.target.value)} required></input> */}
                    <select className="sel" id="Age" name="age" >{ageOption.map((option) =>  (<option value={option.value} onChange={(e) => setGender(e.target.value)}>{option.label}</option>))}</select>
                    
                    <select className="sel"  id="Type" name="Type" >{bhkOption.map((option) =>  (<option value={option.value} onChange={(e) => setBHK(e.target.value)}>{option.label}</option>))}</select>
                    
                    {/* <input type="text" id="bhk" name="bhk" placeholder="BHK" onChange={(e) => setBHK(e.target.value)} required></input> */}
{/*                     
                    <input type="number" id="budget" name="budget" placeholder="Budget" onChange={(e) => setBudget(e.target.value)} required></input> */}
                    
                    {/* <input type="text" id="amenities" name="amenities" placeholder="Amenities" onChange={(e) => setAmenities(e.target.value)} required></input> */}
                    {/* <Select className="sel1" type="text" id="amenities" name="amenities" placeholder="Amenities" options={amOption} value={amenities} onChange={handleSelect} isSearchable={true} isMulti required/> */}

                    {/* <input type="number" id="noofpersons" name="noofpersons" placeholder="Number of Persons" onChange={(e) => setNoofpersons(e.target.value)} required></input>
                    */}
                   
                    {/* {inputs.map((e) => (
                    <input
                        key={e.id}
                        {...e}
                        value={values[e.name]}
                        onChange={onChange}
                    />
                    ))} */}

                  
                    <button type="submit" >Search</button>
                    {/* <button onClick={handleResetClick}>Reset</button> */}

                    <div style={{borderRadius: "10px 10px 10px 10px"}} className="form">
                  <Link className="a2" to="/FindMyHouse/AddMyHouse">
                ADD PRODUCT
            </Link> 
        </div>
                    
                </form>
            </div>
        </div>

        
    )
}

export default FindMyHouse;