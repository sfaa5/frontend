import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

function Form({data}) {

  console.log(data)
 
  const [formData, setFormData] = useState({
    name: '',
    national_id: '',
    telephone: '',
    gender: '',
    age: '',
    marital_status: '',
    employed: '',
    income: '',
    num_of_children: '',
    age_of_youngest_child: '',
    country: '',
    insurance: '',
    medical_record: '',
    points: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value)  // Convert radio button value to number
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert fields to appropriate types
    const processedFormData = {
      ...formData,
      Income: Number(formData.Income),
      Age: Number(formData.Age),

      'Num of Children': Number(formData.NumOfChildren),
      'Age of youngest child': Number(formData.AgeOfYoungestChild),
      Employee: Boolean(Number(formData.Employee)),
      MedicalRecord: Boolean(Number(formData.MedicalRecord))
    };
    try {
      console.log('Form data being sent:', processedFormData); // Log form data
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(processedFormData)
      });

      if (!response.ok) {
        const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
         }

      const result = await response.json();
      setPrediction(result.prediction);
      data.points=result.prediction
    console.log(data);
      await axios.post(`http://localhost:5555/needy`, data).then((res) => {
        if (res.data.message === "User added successfully" ) {
          // setPageType("login");
          console.log("true")
        } 
      });


    } catch (error) {
      console.error('Error:', error);
    }

    


  };

  return (
    <div className="form-container">
      <h2>Registration Form </h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="national_id">National ID</label>
          <input
            type="text"
            id="national_id"
            name="national_id"
            placeholder="Enter your national ID"
            value={formData.national_id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Enter your telephone number"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group"><label>
          Gender:
          <select name="Gender" value={formData.Gender} onChange={handleChange}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </label></div>
        <div className="form-group"><label>
          Age:
          <input type="number" name="Age" value={formData.Age} onChange={handleChange} />
        </label></div>
        
        <div className="form-group"><label>
          Marital Status:
          <select name="MaretalStatus" value={formData.MaretalStatus} onChange={handleChange}>
            <option value="" disabled>Select your marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widow">Widow</option>
          </select>
        </label></div>
        <div className="form-group"><label>
          Number of Children:
          <input type="number" name="NumOfChildren" 
           placeholder="Enter number of children"
           value={formData.NumOfChildren} onChange={handleChange} />
        </label></div>
        <div className="form-group"><label>
          Age of Youngest Child:
          <input
           type="number" 
           name="AgeOfYoungestChild" 
           placeholder="Enter the age of the youngest child" 
           value={formData.AgeOfYoungestChild} 
           onChange={handleChange} />
        </label></div>
        <div className="form-group"> <label>
          Employed:</label>
          <input
            type="radio"
            name="Employee"
            value="1"
            checked={formData.Employee === 1}
            text="Yes"
            onChange={handleRadioChange}
          />Yes
          
          <input
            type="radio"
            name="Employee"
            value="0"
            checked={formData.Employee === 0}
            onChange={handleRadioChange}
          />No
        </div>
        <div className="form-group" >
          <label>
          Income:
          <input type="number" name="Income" value={formData.Income} onChange={handleChange} />
        </label>
        </div>
        <div className="form-group" ><label>
          Medical Record:</label>
          <input
            type="radio"
            name="MedicalRecord"
            value="1"
            checked={formData.MedicalRecord === 1}
            onChange={handleRadioChange}
          />Yes
          <input
            type="radio"
            name="MedicalRecord"
            value="0"
            checked={formData.MedicalRecord === 0}
            onChange={handleRadioChange}
          />No
        </div>
         <div className="form-group">
          <label htmlFor="insurance">Insurance</label>
          <input
            type="text"
            id="insurance"
            name="insurance"
            placeholder="Enter your insurance"
            value={formData.insurance}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
        <button type="submit">Submit</button></div>
      </form>

      {prediction && (
        <div>
          <h2>Predicted Value: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default Form;
