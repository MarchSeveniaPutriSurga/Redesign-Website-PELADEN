import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Contoh request login, sesuaikan dengan backend kamu
      const response = await axios.post("https://api.example.com/login", {
        username,
        password,
      });

      if (response.data.success) {
        navigate("/dashboard");
      } else {
        setError("Username atau password salah");
      }
    } catch (error) {
      setError("Terjadi kesalahan, coba lagi");
    }
  };

  return (
    <div className="login-container">
      {/* Logo dan Peladen di kiri atas */}
      <div className="logo-container">
        <img src="/logo-peladen.png" alt="Logo Peladen" className="logo" />
        <div className="peladen-text">
          <h2>PELADEN</h2>
          <p>Pengelolaan Layanan Administrasi Sistem Elektronik Pemda DIY</p>
        </div>
      </div>

      {/* Form login di tengah */}
      <div className="login-box">
        <h3>Sign in</h3>
        <p>Masukkan informasi di bawah ini.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} color="gray" />
              ) : (
                <AiOutlineEye size={20} color="gray" />
              )}
            </span>
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
          <button type="button" className="btn-sso">
            Login Using SSO
          </button>
        </form>
        <p className="register-link">
          Belum punya akun? <a href="#">Hubungi kami</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
