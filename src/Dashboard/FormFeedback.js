import React, { useState } from 'react';
import "./FormFeedback.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; 

const FormFeedback = () => {
  const [bookingNumber, setBookingNumber] = useState('');
  const [product, setProduct] = useState('');
  const [status, setStatus] = useState('');
  const navigate  = useNavigate();
const booking_number = localStorage.getItem("booking-number");
console.log("booking_number",booking_number);
const handleSubmit = (e) => {
    e.preventDefault();
    if (!product) {
        // Display an error message or perform any other action
        toast.error('Please Enter Product name.');
        return;
      }
    if (!status) {
        // Display an error message or perform any other action
        toast.error('Please select an option.');
        return;
      }
     
    toast.success('Form submitted successfully!');
  
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  

  return (
    <div className='feedback-container'>
      <div className='feedback-main'>
        <h4 className='tiltle-name'>Oceanplus Feedback Tracker</h4>
        <p className='p-name'>Hi, when you submit this form, the owner will see your name and email address</p>
        <div className="notes">
          <span>*</span> Required.
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="bookingNumber"><div className="notes">
           1. Booking Number<span>*</span>
        </div></label>
              <input
                type="text"
                id="bookingNumber"
                className='booking-number'
                value={booking_number}
                onChange={(e) => setBookingNumber(e.target.value)}
                readOnly
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="product"><div className="notes">
           2. Product Name<span>*</span>
        </div></label>
              <input
                type="text"
                id="product"
                className='booking-number'
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                
              />
            </div>
            <div className="form-group">
            <label htmlFor="product"><div className="notes">
           3. Whether Customer brought the product<span>*</span>
        </div></label>
            <div className='radio_status'>
              <label>
                <input
                  type="radio"
                  value="Yes"
                  checked={status === "Yes"}
                  onChange={() => setStatus("Yes")}
                />
                Yes
              </label>
            </div>
            <div className='radio_status'>
              <label>
                <input
                  type="radio"
                  value="No"
                  checked={status === "No"}
                  onChange={() => setStatus("No")}
                />
                No
              </label>
            </div>
            <div className='radio_status'>
              <label>
                <input
                  type="radio"
                  value="In Progress"
                  checked={status === "In Progress"}
                  onChange={() => setStatus("In Progress")}
                />
                In Progress
              </label>
            </div>
            </div>
            <button type="submit" className='submit_button'>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default FormFeedback;
