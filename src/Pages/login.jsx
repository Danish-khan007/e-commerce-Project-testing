
import { useNavigate } from "react-router";
import { Link } from "react-router";
const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate("/home");
    };
    return (
        <main className="login-page">

            <form className="login-form" onSubmit={handleLogin}>
                <h1>Login Page</h1>

                <label htmlFor="email" >Email: </label>
                <input id="email" type="email" required />

                <label htmlFor="pass">Password: </label>
                <input id="pass" type="password" required />

                <button>Submit</button>
                <Link to="/register" className="login-link">Create an account</Link>
            </form>
        </main>
    );
};

export default Login