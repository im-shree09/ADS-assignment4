import React from "react";
import "./langingPage.css"
function Landing() {
    return (
        <div className="landing_bgimg">
            {/* <div style={{ float: "right", padding: "5px" }}>
                <button style={{ margin: "7px", backgroundColor: "#1a56d9", color: "white", borderRadius: "5px" }}><a href="/studentLogin"> student login</a></button>
                <button style={{ margin: "7px", backgroundColor: "#1a56d9", color: "white", borderRadius: "5px" }}><a href="/facultyLogin"> Faculty login</a></button>

            </div> */}
            <h1 className="text" style={{ textAlign: "center", paddingTop: "70px" }}>Welcome to Walchand College of Engineering</h1>
            <div className="loginButton">
                <a className="button" href="/facultyLogin">Teacher Login</a>
                <a className="button" href="/studentLogin">Student Login</a>
            </div>
            
        </div>
    );
}

export default Landing;