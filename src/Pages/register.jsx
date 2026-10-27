import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "./auth.css";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);
  const [isEntering, setIsEntering] = useState(Boolean(location.state?.authFlipEnter));

  const showMessage = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      showMessage("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match");
      return;
    }

    showMessage(`Account created for ${name}!`);
    window.setTimeout(() => navigate("/home"), 900);
  };

  const handleSwitchToLogin = (event) => {
    event.preventDefault();
    setIsFlipping(true);
    window.setTimeout(() => {
      navigate("/login", { state: { authFlipEnter: true } });
    }, 800);
  };

  return (
    <main className="auth-page">
      <div className="bg-circle circle-1" />
      <div className="bg-circle circle-2" />
      <div className="bg-circle circle-3" />
      <div className="bg-circle circle-4" />

      <div className="scene">
        <div
          className={`card ${isFlipping ? "is-flipping" : ""} ${isEntering ? "is-entering" : ""}`}
          onAnimationEnd={() => setIsEntering(false)}
        >
          <section className="card-face card-front">
            <div className="icon-circle">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
            </div>
            <h1>Create Account</h1>
            <p className="subtitle">Start your journey with us</p>

            <form className="auth-form" onSubmit={handleRegister}>
              <div className="input-group">
                <input
                  type="text"
                  id="signupName"
                  name="name"
                  placeholder=" "
                  autoComplete="name"
                  required
                />
                <label htmlFor="signupName">Full Name</label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  id="signupEmail"
                  name="email"
                  placeholder=" "
                  autoComplete="email"
                  required
                />
                <label htmlFor="signupEmail">Email Address</label>
              </div>

              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="signupPassword"
                  name="password"
                  placeholder=" "
                  autoComplete="new-password"
                  required
                />
                <label htmlFor="signupPassword">Password</label>
                <button type="button" className="toggle-eye" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((visible) => !visible)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {showPassword ? <><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" /><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15 15 0 0 1-3.1 3.9M6.2 6.2C3.6 8 2 12 2 12s3.6 7 10 7c1 0 2-.2 2.8-.5" /></> : <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>}
                  </svg>
                </button>
              </div>

              <div className="input-group password-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder=" "
                  autoComplete="new-password"
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <button type="button" className="toggle-eye" aria-label={showConfirmPassword ? "Hide confirmation password" : "Show confirmation password"} onClick={() => setShowConfirmPassword((visible) => !visible)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {showConfirmPassword ? <><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" /><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15 15 0 0 1-3.1 3.9M6.2 6.2C3.6 8 2 12 2 12s3.6 7 10 7c1 0 2-.2 2.8-.5" /></> : <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>}
                  </svg>
                </button>
              </div>

              <button type="submit" className="btn-primary">Create Account</button>
            </form>

            <p className="switch-text">
              Already have an account?
              <Link to="/login" onClick={handleSwitchToLogin} className="switch-btn" aria-label="Go to login">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7" /></svg>
              </Link>
            </p>
          </section>
        </div>
      </div>

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </main>
  );
};

export default Register;
