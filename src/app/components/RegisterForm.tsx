"use client";

import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    console.log("Registro exitoso:", form);
    router.push("/alarmas");
  };

  return (
    <Box sx={{ maxWidth: 360, mx: "auto", textAlign: "center", mt: 6 }}>
      <Typography variant="h5" fontWeight="bold">
        Regístrate en <br />
        Cre <span style={{ color: "#FF9800" }}>Habits</span>
      </Typography>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Confirmación de contraseña"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />

        {/* Botones con los colores del tema global */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="contained" color="secondary" sx={{ width: "48%" }} onClick={() => router.push("/login")}>
            Volver
          </Button>
          <Button variant="contained" color="primary" sx={{ width: "48%" }} type="submit">
            Registrarse
          </Button>
        </Box>
      </form>
    </Box>
  );
}
