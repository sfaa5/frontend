import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../cssFiles/Login.module.css";
import axios from "axios";
import { useGlobalcontext } from "../context/globalContext";
import Apppp from "../form/Form.js";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [pageType, setPageType] = useState("login");
  const [path, setPath] = useState("");
  const [error, setError] = useState("");
  const [file,setFile]=useState();
  const { donor, setLoginN, setLoginD } = useGlobalcontext();

  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  let data = {
    email,
    password,
    name,
    fullName,
    points:"",
  };

  async function Loginn(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    if (!path) {
      setError("path");
      return;
    } else if (!data.email && !data.password) {
      setError("poth");
      return;
    } else if (!data.email) {
      setError("Email");
      return;
    } else if (!data.password) {
      setError("password");
      return;
    }

    try {
      await axios
        .post(`http://localhost:5555/${path}/login`, data)
        .then((res) => {
          if (res.data.me === "success" && path === "books") {
            setLoginD(res.data);
            navigate("/profile");
          } else if (res.data.me === "success" && path === "needy") {
            setLoginN(res.data);
            navigate("/Shop");
          } else if (res.data.me === "User not found") {
            setError("user");
          } else if (res.data.me === "Incorrect password") {
            setError("pass");
          }
        });
    } catch (error) {
      console.log(error.response.data.me);
      setError(error.response.data.me);
    }
  }

  const register = async (e) => {
    e.preventDefault();
  
 

if(path==="books"){ 
  
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("name", name);
  formData.append("fullName", fullName);
  formData.append("file", file); // Append the file
  
  try {
  await axios.post(`http://localhost:5555/${path}`, formData).then((res) => {
    if (res.data.message === "User added successfully" ) {
      setPageType("login");
    } 
  });
} catch (error) {
  console.log(error);
}}else if (path==="needy"){
  console.log(data)
  setPageType("form")
}



  };

  return (
    <div className={styles.big}>
      {isLogin ? (
        <>
          <div className={styles.left}>
            <div className={styles.title}>
              <p>GivingCircle</p>
            </div>
            <div className={styles.registerBox}>
              <h4>Welcome to our institute</h4>
              <form style={{ display: "flex", flexDirection: "column" }} onSubmit={Loginn}>
                <input
                  className={styles.textBox}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error === "User not found" && <p style={{ color: "red", fontSize: "small", marginBottom: "10px" }}>User Not Found</p>}
                {error === "poth" && <p style={{ color: "red", fontSize: "small", marginBottom: "10px" }}>Please enter the email</p>}
                {error === "Email" && <p style={{ color: "red", fontSize: "small", marginBottom: "10px" }}>Please enter the email</p>}
                <input
                  className={styles.textBox}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error === "Incorrect password" && <p style={{ color: "red", fontSize: "small", marginBottom: "15px" }}>Incorrect password</p>}
                {error === "poth" && <p style={{ color: "red", fontSize: "small", marginBottom: "15px" }}>Please enter the password</p>}
                {error === "password" && <p style={{ color: "red", fontSize: "small", marginBottom: "15px" }}>Please enter the password</p>}
                <div>
                  <label style={{ marginRight: "15px" }}>
                    <input
                      type="radio"
                      value="books"
                      checked={path === "books"}
                      onChange={() => setPath("books")}
                    />{" "}
                    Donor
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="needy"
                      checked={path === "needy"}
                      onChange={() => setPath("needy")}
                    />{" "}
                    Needy
                  </label>
                </div>
                {error === "path" && <p style={{ color: "red", fontSize: "small", marginBottom: "15px" }}>Please select the member</p>}
                <button className={styles.login} type="submit">
                  Login
                </button>
              </form>
              <p className={styles.all}>
                Don't have an account?
                <a style={{ marginLeft: "4px" }} onClick={() => setPageType("register")}>Sign up</a>
              </p>
            </div>
            <div className={styles.CopyRights}>
              <p>© 2023 GivingCircle. All Rights Reserved</p>
            </div>
          </div>
        </>
      ) : pageType === "form" ? (
          <Apppp data={data} /> // Render the App component when pageType is "app"
      ) : (
        <>
          <div className={styles.left}>
            <div className={styles.title}>
              <p>GivingCircle</p>
            </div>
            <div className={styles.registerBox}>
              <h4>Welcome to our institute</h4>
              <form onSubmit={register}>
                <input
                  className={styles.textBox}
                  placeholder="Username"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={styles.textBox}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className={styles.textBox}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.textBox}
                  placeholder="FullName"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label>
                  <input
                    type="radio"
                    value="books"
                    checked={path === "books"}
                    onChange={() => setPath("books")}
                  />{" "}
                  Donor
                </label>
                <label>
                  <input
                    type="radio"
                    value="needy"
                    checked={path === "needy"}
                    onChange={() =>{setPath("needy");   } }
                  />{" "}
                  Needy
                </label>



                <label for="email">File image</label>
        <input style={{width:"840" ,display:"flex"}}  type="file"
      onChange={e=>setFile(e.target.files[0])}
          />

                <button className={styles.login} type="submit">
                  Register
                </button>
              </form>
              <p className={styles.all}>
                I have an account?
                <a onClick={() => setPageType("login")}>Login</a>
              </p>
            </div>
            <div className={styles.CopyRights}>
              <p>© 2023 GivingCircle. All Rights Reserved</p>
            </div>
          </div>
        </>
      )}

      <div className={styles.right}>
        <div className={styles.inner}>
          <p>Start your journey by one click, be nice and do the best!</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
