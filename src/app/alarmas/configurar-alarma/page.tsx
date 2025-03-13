"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Card,
  FormControlLabel,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function ConfigurarAlarma() {
  const router = useRouter();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [alarmName, setAlarmName] = useState("Alarma 1");
  const [vibration, setVibration] = useState(false);
  const [category] = useState(false);

  const handleToggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleCancel = () => {
    router.back();
  };

  const handleConfirm = () => {
    console.log("Alarma configurada:", {
      dias: selectedDays,
      nombre: alarmName,
      vibrar: vibration,
      categoria: category ? "Sí" : "No",
    });
    router.push("/alarmas");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F8F8F8",
        p: 2,
      }}
    >
      {/* Título */}
      <Typography variant="h5" fontWeight="bold">
        Crear <span style={{ color: "#FF7A00" }}>Alarma</span>
      </Typography>

      {/* Tarjeta con Configuración */}
      <Card
        sx={{
          width: "90%",
          maxWidth: 320,
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
          mt: 2,
          bgcolor: "#EAEAEA",
        }}
      >
        {/* Categoría */}
        <Box display="flex" alignItems="center" mb={1}>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
          <Typography variant="body1">Agregar una categoría</Typography>
        </Box>

        {/* Hora */}
        <Box
          sx={{
            bgcolor: "#E0E0E0",
            borderRadius: 2,
            textAlign: "center",
            py: 1,
            my: 1,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            07:00 AM
          </Typography>
        </Box>

        {/* Días de repetición */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
          {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
            <Box
              key={day}
              onClick={() => handleToggleDay(day)}
              sx={{
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: selectedDays.includes(day)
                  ? "#F2994A"
                  : "#D3D3D3",
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {day}
            </Box>
          ))}
        </Box>

        {/* Selección de Alarma */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <IconButton>
            <MusicNoteIcon />
          </IconButton>
          <FormControl fullWidth>
            <Select
              value={alarmName}
              onChange={(e) => setAlarmName(e.target.value)}
              sx={{ bgcolor: "white", borderRadius: 1 }}
            >
              <MenuItem value="Alarma 1">Alarma 1</MenuItem>
              <MenuItem value="Alarma 2">Alarma 2</MenuItem>
              <MenuItem value="Alarma 3">Alarma 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Vibración */}
        <FormControlLabel
          control={
            <IconButton onClick={() => setVibration(!vibration)}>
              <NotificationsActiveIcon
                sx={{ color: vibration ? "#F2994A" : "#D3D3D3" }}
              />
            </IconButton>
          }
          label="Vibrar"
          sx={{ display: "flex", alignItems: "center", mt: 2 }}
        />
      </Card>

      {/* Botones */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          mt: 2,
        }}
      >
        <Button
          sx={{ color: "#FF7A00", fontWeight: "bold" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF7A00",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            "&:hover": { backgroundColor: "#E06A00" },
          }}
          onClick={handleConfirm}
        >
          OK
        </Button>
      </Box>
    </Box>
  );
}
