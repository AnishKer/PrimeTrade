import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(form);

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert(data.msg);
    }
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit">Login</button>
    </form>

    <p>Don't have an account?</p>
        <button onClick={() => navigate("/register")}>
    Register
    </button>
    </>
  );
  
}