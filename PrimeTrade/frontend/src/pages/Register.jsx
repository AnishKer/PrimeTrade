import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(form);

    alert(data.msg || "Registered!");
    window.location.href = "/";
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit">Register</button>
    </form>
    <p>Already have an account?</p>
<button onClick={() => navigate("/")}>
  Login
</button>
</>
  );
}