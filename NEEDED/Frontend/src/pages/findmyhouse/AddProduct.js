import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./AddProduct.css"

class AddProduct extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
        donation_category: ""
        
      }
    }
    handlechangeDonationCategory = (event) =>{
        this.setState({
            donation_category: event.target.value
        })

    }

    handleConfirmation = (event) =>{
        alert("Product Added Successfully")
       
    }

  render() {
    return (
        <form onSubmit={this.handleConfirmation}>
            <nav>
            
            <ul className='list'>
                <li className='animate-charcter'>NEEDED</li>
            <li className='ani'>Connecting Donors with NGO</li>
                 
       <li> <Link className="a2" to="/Home">
                DONATE 
            </Link> </li>
                  
                    <li><Link className="a2" to="/Home">
                Login
            </Link></li>
                </ul>

                

            <div className='list1'>
                <div>
                <label >Donotion category</label>
                    <select value={this.state.donation_category} onChange={this.handlechangeDonationCategory}>
                        <option value="Clothes">Clothes</option>
                        <option value="Books">Books</option>
                        <option value="Vechicle">Vechicle</option>
                        <option value="Sportkits">Sportkits</option>
                        <option value="Others">Others</option>

                    </select>
                    </div>

                    <div>
                <label>Donation item Quantity</label> 
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>14</option>
                        <option>14</option>
                        <option>15</option>
                    </select> 
                    </div>  
            </div>

            
                <div className='list2' >
                    <div>
                        <label >Description</label>
                            <input type='text'/>
                    </div>
                    <div>
                        <label>Age category</label>
                            <select>
                                <option>Child</option>
                                <option>Adult</option>
                                <option>Old</option>
                            </select>
                    </div>
                </div>
            

                    <div className='list3'>
                        <div>
                            <label>Email id</label>
                                <input type='text'/>
                        </div>

                        <div>
                            <label>Mobile</label>
                                <input type='number'/>
                        </div>
                    </div>


                        <div className='list4'>
                            <div>
                                <label>Address</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <label>Contact type</label>
                                    <select>
                                        <option>Mobile</option> 
                                        <option>Email id</option>
                                    </select>
                            </div>
                        </div>
        </nav>
        <button className='new' type='Confirmation'>Conform Donation</button>
        </form> 
    )
  }
}

export default AddProduct;