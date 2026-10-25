import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate("/home");
  };

  return (
    <main className="register-page">
      <form className="register-form" onSubmit={handleRegister}>
        <h1>Register</h1>

        <label htmlFor="name">Enter your name</label>
        <input id="name" type="text" required />

        <label htmlFor="email">Enter your Email:</label>
        <input id="email" type="email" required />

        <label htmlFor="pass1">Password:</label>
        <input id="pass1" name="password" type="password" required />

        <label htmlFor="pass2">Confirm Password:</label>
        <input
          id="pass2"
          name="confirmPassword"
          type="password"
          required
        />

        <button type="submit">Register</button>
        <Link to="/home" className="register-link">
          Already have an account?
        </Link>
      </form>
    </main>
  );
};

export default Register;