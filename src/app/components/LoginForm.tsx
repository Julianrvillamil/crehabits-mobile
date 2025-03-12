"use client";

import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login exitoso:", form);
    router.push("/alarmas");
  };

  return (
    <Box sx={{ maxWidth: 360, mx: "auto", textAlign: "center", mt: 6 }}>
      <Typography variant="h4" fontWeight="bold">
        Cre <span style={{ color: "#FF7A00" }}>Habits</span>
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Si aún no tienes una cuenta registrada, puedes{" "}
        <span
          onClick={() => router.push("/registrarse")}
          style={{ color: "#FF7A00", cursor: "pointer", fontWeight: "bold" }}
        >
          Registrarte aquí
        </span>
      </Typography>

      <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
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

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 8, bgcolor: "#FF7A00", color: "#fff" }}
        >
          Iniciar Sesión
        </Button>
      </form>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" fontWeight="bold">
        ¿No te has registrado?
      </Typography>

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        sx={{
          mt: 2,
          fontWeight: "bold",
        }}
        onClick={() => router.push("/registrarse")}
      >
        Registrarse
      </Button>
    </Box>
  );
}
