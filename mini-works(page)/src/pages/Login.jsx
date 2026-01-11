import {Link} from "react-router-dom";

function Login(){
    return (
        <div style={{padding: "40px", textAlign: "center"}}>
            <h2>Login</h2>

            <input type="email" placeholder="email" style={{display: "block", margin: "20px auto ",padding: "10px"}}/>
            <input type="password" placeholder="Password" style={{display: "block", margin: "20px auto ",padding: "10px"}}/>
            <button style={{padding: "10px 20px"}}> Login </button>

            <p>
                Don't have an account? <Link to = "/Signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login