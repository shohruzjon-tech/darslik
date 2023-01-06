import "./css/Auth.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthRegister = () =>{
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [visibility, setVisibility] = React.useState(false);
  
    const handlePassword = (e) => {
      e.preventDefault();
      setVisibility(!visibility)
    }
  
    const getName = (e) => {
      setUsername(e.target.value);
    }
  
    const getPassword = (e) => {
      setPassword(e.target.value);
    }

    const getPhone = (e) => {
        setPhone(e.target.value);
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://newshop.herokuapp.com/api/user/register", {
          username: username,
          password: password,
          agreement: true,
            phone: phone,
        });
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      } catch (error) {
        alert(error.message)
      }
    }

    return(
        <div className="auth_container">
            <div className="auth_content">
               <p className="auth_content_header">
                 Xush kelibsiz
               </p>
               <p className="auth_content_body">
                 Ro'yhatdan o'tish uchun malumotlaringizni kiriting
               </p>
            </div>
           <div className="auth_form_container">
             <form onSubmit={handleSubmit} className="auth_form">
                <div className="input_container">
                    <label className="auth_label">Telefon raqam</label>
                    <input onChange={getPhone} value={phone} className="auth_input" placeholder="Telefon raqam..." type="text" name="phone"/>
                </div>
                <div className="input_container">
                    <label className="auth_label">Login</label>
                    <input onChange={getName} className="auth_input" placeholder="Login..." type="text" name="username"/>
                </div>
                <div className="input_container">
                    <label className="auth_label">Parol</label>
                    <div className="password_input">
                    <input onChange={getPassword} value={password} className="auth_input" placeholder="Parol..." type={visibility ? "text" : "password"} name="phone" />
                     {visibility ? <button onClick={handlePassword}>Yop</button> :
                     <button onClick={handlePassword}>Och</button>}
                    </div>
                </div>
                <div className="auth_btnContainer">
                    <button className="auth_btn">Ro'yhatdan o'tish</button>
                </div>
             </form>
           </div>
           <div className="auth_register_notice">
              Agar profilingiz allaqachon bo'lsa <a href = "/auth/login">Profilingizga kiring!</a>
           </div>
        </div>
    )
};


export default AuthRegister;