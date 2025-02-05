import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "", 
        passWord: ""
    });

    let handleChange = (event) => {
        setFormData((data) => ({
            ...data, 
            [event.target.name]: event.target.value
        }));
    };

    let buttonClicked = (event) => {
        event.preventDefault(); // Prevent form submission
        console.log(formData);
    };

    return (
        <>
            <form onSubmit={buttonClicked}> {/* Corrected: onSubmit on form */}
                <label htmlFor="fullName">Full Name </label>
                <input 
                    type="text" 
                    value={formData.fullName} 
                    placeholder="Enter Full Name" 
                    onChange={handleChange} 
                    name="fullName"
                />
                <br /><br />
                <label htmlFor="userName">Username</label>
                <input 
                    type="text" 
                    value={formData.userName} 
                    placeholder="Enter User Name" 
                    onChange={handleChange} 
                    name="userName"
                />
                <br /><br />
                <label htmlFor="passWord">Password</label>
                <input 
                    type="password" 
                    value={formData.passWord} 
                    placeholder="Enter your password" 
                    onChange={handleChange} 
                    name="passWord"
                />
                <br /><br />
                <button type="submit">Submit</button> {/* Corrected: onClick replaced with type="submit" */}
            </form>
        </>
    );
}
