import {Link} from "react-router-dom";

function Signup() {
    return(
        <div style={{padding: "40px", textAlign: "center"}}>
            <h2>Sign Up</h2>

            <input type="text" placeholder="Full Name" style={{display: "block", margin: "20px auto",padding: "10px"}}/>
            <input type="email" placeholder="email" style={{display: "block", margin: "20px auto",padding: "10px"}}/>
            <input type="password" placeholder="Password" style={{display: "block", margin: "20px auto",padding: "10px"}}/>
            <input type="password" placeholder="Confirm Password" style={{display: "block", margin: "20px auto",padding: "10px"}}/>
            <button style={{padding: "10px 20px"}}>Create Account</button>

            <p>
                Already have an Account? <Link to="/">Login</Link>
            </p>
        </div>

    );
}

export default Signup