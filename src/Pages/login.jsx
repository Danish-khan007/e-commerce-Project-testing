import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);
  const [isEntering, setIsEntering] = useState(Boolean(location.state?.authFlipEnter));

  const showMessage = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      showMessage("Please fill in all fields");
      return;
    }

    navigate("/home");
  };

  const handleSocialClick = (event) => {
    event.preventDefault();
    showMessage("Social sign-in is not connected yet.");
  };

  const handleSwitchToRegister = (event) => {
    event.preventDefault();
    setIsFlipping(true);
    window.setTimeout(() => {
      navigate("/register", { state: { authFlipEnter: true } });
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
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg>
            </div>
            <h1>Welcome</h1>
            <p className="subtitle">Login to continue your journey</p>

            <form className="auth-form" onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  placeholder=" "
                  autoComplete="email"
                  required
                />
                <label htmlFor="loginEmail">Email Address</label>
              </div>

              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="loginPassword"
                  name="password"
                  placeholder=" "
                  autoComplete="current-password"
                  required
                />
                <label htmlFor="loginPassword">Password</label>
                <button type="button" className="toggle-eye" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((visible) => !visible)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {showPassword ? <><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" /><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15 15 0 0 1-3.1 3.9M6.2 6.2C3.6 8 2 12 2 12s3.6 7 10 7c1 0 2-.2 2.8-.5" /></> : <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>}
                  </svg>
                </button>
              </div>

              <div className="form-row">
                <label className="checkbox-wrap">
                  <input type="checkbox" name="rememberMe" />
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot-password"
                  className="link"
                  onClick={(event) => {
                    event.preventDefault();
                    showMessage("Password reset is not set up yet.");
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="btn-primary">Login</button>
            </form>

            <p className="switch-text">
              Don&apos;t have an account?
              <Link to="/register" onClick={handleSwitchToRegister} className="switch-btn" aria-label="Go to sign up">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
              </Link>
            </p>

            <div className="socials">
              <a href="#google" className="social-circle" aria-label="Google" onClick={handleSocialClick}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.78-.07-1.53-.2-2.25H12v4.26h6.44a5.5 5.5 0 0 1-2.39 3.61v2.77h3.88c2.27-2.09 3.56-5.17 3.56-8.39Z" /><path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.93l-3.88-2.77c-1.08.72-2.46 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.95H1.27v2.85A12 12 0 0 0 12 24Z" /><path fill="#FBBC05" d="M5.27 14.49a7.2 7.2 0 0 1 0-4.98V6.66H1.27a12 12 0 0 0 0 10.68l4-2.85Z" /><path fill="#EA4335" d="M12 4.56c1.77 0 3.35.61 4.6 1.81l3.45-3.45A11.54 11.54 0 0 0 12 0 12 12 0 0 0 1.27 6.66l4 2.85C6.22 6.67 8.87 4.56 12 4.56Z" /></svg>
              </a>
              <a href="#facebook" className="social-circle" aria-label="Facebook" onClick={handleSocialClick}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" /></svg>
              </a>
              <a href="#linkedin" className="social-circle" aria-label="LinkedIn" onClick={handleSocialClick}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0A66C2" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.06 18.34H5.1V9.5h2.96v8.84ZM6.58 8.29a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.76 10.05h-2.96v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28v4.37H9.34V9.5h2.84v1.21h.04c.4-.7 1.36-1.43 2.8-1.43 2.99 0 3.54 1.97 3.54 4.53v4.53Z" /></svg>
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </main>
  );
};

export default Login;
