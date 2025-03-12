"use client";

import { Box, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AlarmasPage() {
  const handleAddAlarm = () => {
    console.log("Agregar nueva alarma");
    // Aquí puedes agregar lógica para abrir un modal o navegar a otra página
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        p: 3,
      }}
    >
      {/* Título */}
      <Typography variant="h3" sx={{ color: "#FF7A00", fontWeight: "bold" }}>
        Alarmas
      </Typography>

      {/* Botón flotante para agregar alarma */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "#FF7A00",
          "&:hover": { backgroundColor: "#E06A00" },
        }}
        onClick={handleAddAlarm}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
