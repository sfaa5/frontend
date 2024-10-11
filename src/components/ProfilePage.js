import styles from "../cssFiles/ProfilePage.module.css";
import React, { useState } from "react";
import axios from "axios";
import { FaBook, FaTshirt } from "react-icons/fa";
import { MdToys } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { useGlobalcontext } from "../context/globalContext";

const ProfilePage = () => {

  const [file,setFile]=useState();
const [color,setColor]=useState();
const [size,setSize]=useState();
const [name,setName]=useState();
const [des,setDesc]=useState();
const [cat,setCat]=useState();
const [con,setCon]=useState();
const [brand,setBrand]=useState();
const [model,setModel]=useState();
const[use,setUse]=useState();
const[ageRange,setAgeRange]=useState()
const[language,setLanguage]=useState()
const[readingLevel,setReadingLevel]=useState()
const [donar,setDonar]=useState();
const [quantity,setQuan]=useState();

  const { addRequest, donor, setDonor } = useGlobalcontext();
  console.log(donor);



  function handleSubmit(e){
    e.preventDefault();
   console.log(donor.user.name)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('color', color);
    formData.append('size', size);
    formData.append('name', name);
    formData.append('dsc', des);
    formData.append('category', cat);
    formData.append('condition',con );
    formData.append('brand',brand );
    formData.append('model',model );
    formData.append('reading_evel',readingLevel );
    formData.append('language', language);
    formData.append('use',use );
    formData.append('age_range',ageRange );
    formData.append('donar',donor.user.name);
    formData.append('quantity',quantity);
   
    addRequest(formData);
    console.log(formData)
   console.log(name)
    // Reset form fields
    setFile(null);
    setColor('');
    setSize('');
    setName('');
    setDesc('');
    setCat('');
    setCon('');
    setBrand('');
    setAgeRange('');
    setLanguage('');
    setReadingLevel('');
    setUse('');
    setModel('');
    setDonar('');
    setQuan('');
   
   }










  const [selectedIcon, setSelectedIcon] = useState(null);



  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5555/rdonation",
  //       formData
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("There was an error!", error);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { id, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [id]: value,
  //   });
  // };


  function handleColorChange(event) {
    const colorHex = event.target.value; //(hex)
    const colorPicker = document.getElementById("color");
    const colorHexElement = document.getElementById("colorHex");
    colorPicker.style.backgroundColor = colorHex;
    colorHexElement.textContent = colorHex;
   
  }

  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedStars(rating);
  };

  return (
    <div>
      <div className={styles.profileContainer}>
        <div className={styles.rectangle}></div>
        <img src={`http://localhost:5555/Images/${donor.user.image}`} className={styles.profilePicture}></img>
        <div className={styles.profileInfo}>
          <div className={styles.profileName}>{donor.user.fullName}</div>
          <div className={styles.profileUsername}>{donor.user.name}</div>
        </div>
        <button className={styles.profileButton}>Edit Profile</button>
      </div>

      <div className={styles.navbar}>
        {/*BOOkS */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "books" ? styles.selected : ""
          }`}
          onClick={() => {handleIconClick("books"); setCat("Books")}}
        >
          <FaBook />
        </div>

        {/*CLOTHES */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "clothes" ? styles.selected : ""
          }`}
          onClick={() => {handleIconClick("clothes"); setCat("Clothing") }}
        >
          <FaTshirt />
        </div>

        {/*electronic */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "electronic" ? styles.selected : ""
          }`}
          onClick={() => {handleIconClick("electronic"); setCat("Electronics")}  }
        >
          <PiTelevisionFill />
        </div>

        {/*home */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "home" ? styles.selected : ""
          }`}
          onClick={() => {
            handleIconClick("home");
            setCat("Home Essentials");
          }}
        >
          <FaHome />
        </div>

        {/*TOYS */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "toys" ? styles.selected : ""
          }`}
          onClick={() => {handleIconClick("toys"); setCat("Toys") }

          }
        >
          <MdToys />
        </div>
        {/* another or naruto krkr*/}
      </div>

      <div className={styles.formContainer}>
        {/* BOOKS */}
        {selectedIcon === "books" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
            <h2>Book Donation Form</h2>
            <div className={styles.formGroup}>
              <label htmlFor="item">Item:</label>
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={e=>setFile(e.target.files[0])}
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="item">Name:</label>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={e=>setName(e.target.value)}
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="language">Language:</label>
              <select
                id="language"
                name="language"
                className={styles.selectSearch}
                onChange={e=>setLanguage(e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
               
                {/* Add more languages as needed */}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="level">Reading level:</label>
              <select
                id="level"
                name="level"
                className={styles.selectSearch}
                onChange={e=>setReadingLevel(e.target.value)}
              >
                <option value="">Reading level:</option>
                <option value="english">child</option>
                <option value="spanish">teen</option>
                <option value="french">adult</option>
               
                {/* Add more languages as needed */}
              </select>
            </div>
      

            <div className={styles.formGroup}>
              <label htmlFor="condition">Condition:</label>
              <select id="condition" name="condition" className={styles.select}
                     onChange={e=>setCon(e.target.value)}>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
         
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*CLOTHES */}
        {selectedIcon === "clothes" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
            <h2>Clothes Donation Form</h2>
            <div className={styles.formGroup}>
              <label htmlFor="item">Item:</label>
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={e=>setFile(e.target.files[0])}
              />
            </div>

            
            <div className={styles.formGroup}>
              <label htmlFor="item">Name:</label>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={e=>setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="size" className={styles.label}>
                Size:
              </label>
              <div className={styles.sizeOptions}>
                <label>
                  <input type="checkbox" name="size" value="XS"            onChange={e=>setSize(e.target.value)} />
                  XS
                </label>
                <label>
                  <input type="checkbox" name="size" value="S"             onChange={e=>setSize(e.target.value)} />S
                </label>
                <label>
                  <input type="checkbox" name="size" value="M"             onChange={e=>setSize(e.target.value)} />M
                </label>
                <label>
                  <input type="checkbox" name="size" value="L"            onChange={e=>setSize(e.target.value)} />L
                </label>
                <label>
                  <input type="checkbox" name="size" value="XL"            onChange={e=>setSize(e.target.value)} />
                  XL
                </label>
                <label>
                  <input type="checkbox" name="size" value="2XL"            onChange={e=>setSize(e.target.value)} />
                  2XL
                </label>
                <label>
                  <input type="checkbox" name="size" value="3XL"             onChange={e=>setSize(e.target.value)} />
                  3XL
                </label>
                

              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="color" className={styles.label}>
                Color
              </label>
              <div className={styles.colorPickerContainer}>
                <input
                  type="color"
                  id="color"
                  name="color"
                  className={styles.colorPicker}
                  onChange={ (event)=>setColor(event.target.value)}
                  
                />
                <span id="colorHex" className={styles.colorHex}>
                  #77d7d3
                </span>{" "}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="condition">Condition:</label>
              <select id="condition" name="condition" className={styles.select}  onChange={e=>setCon(e.target.value)} >
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
               
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*TOY */}
        {selectedIcon === "toys" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
            <h2>Toys Donation Form</h2>
            <div className={styles.formGroup}>
              <label htmlFor="item">Item:</label>
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={e=>setFile(e.target.files[0])}
              />
            </div>

            
            <div className={styles.formGroup}>
              <label htmlFor="item">Name:</label>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={e=>setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="range" className={styles.label}>
                Age Range:
              </label>
              <input
                type="text"
                id="range"
                name="range"
                className={styles.inputField}
                onChange={e=>setAgeRange(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="special" className={styles.label}>
                Special Features:
              </label>
              <input
                type="text"
                id="special"
                name="special"
                className={styles.inputField}
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="item">usage:</label>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the quantity of the item"
                className={styles.inputFile}
               onChange={e=>setUse(e.target.value)}
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="item">quantity:</label>
              <input
                type="numper"
                id="item"
                name="item"
              placeholder="Enter the quantity of the item"
                className={styles.inputFile}
                onChange={e=>setQuan(e.target.value)}
              />
            </div>


            <div className={styles.formGroup}>
              <label htmlFor="condition">Condition:</label>
              <select id="condition" name="condition" className={styles.select}     onChange={e=>setCon(e.target.value)}>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
            
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*electronic */}
        {selectedIcon === "electronic" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
            <h2>Electronic Donation Form</h2>
            <div className={styles.formGroup}>
              <label htmlFor="item">Item:</label>
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={e=>setFile(e.target.files[0])}
              />
            </div>

            
            <div className={styles.formGroup}>
              <label htmlFor="item">Name:</label>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={e=>setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="brand" className={styles.label}>
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                className={styles.inputField}
                onChange={e=>setBrand(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="model" className={styles.label}>
                Model:
              </label>
              <input
                type="text"
                id="model"
                name="model"
                className={styles.inputField}
                onChange={e=>setModel(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="condition">Condition:</label>
              <select id="condition" name="condition" className={styles.select}        onChange={e=>setCon(e.target.value)} >
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
         
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*HOME */}
        {selectedIcon === "home" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
            <h2>Home Essential Donation Form</h2>
            <div className={styles.formGroup}>
              <label htmlFor="item">Item:</label>
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={e=>setFile(e.target.files[0])}
              />
            </div>

            
            <div className={styles.formGroup}>
              <label htmlFor="item">Name:</label>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={e=>setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="usage" className={styles.label}>
                usage:
              </label>
              <input
                type="text"
                id="usage"
                name="usage"
                className={styles.inputField}
                onChange={e=>setUse(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="special" className={styles.label}>
                Special Features:
              </label>
              <input
                type="text"
                id="special"
                name="special"
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="condition">Condition:</label>
              <select id="condition" name="condition" className={styles.select}>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
                onChange={e=>setCon(e.target.value)}
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*looo need to add fghvhgvj*/}
      </div>
    </div>
  );
};

export default ProfilePage;
