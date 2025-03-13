"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs, { Dayjs } from "dayjs";

export default function CrearAlarma() {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

  const handleCancel = () => {
    router.back(); // Volver a la pantalla anterior
  };

  const handleConfirm = () => {
    console.log("Hora seleccionada:", selectedTime?.format("hh:mm A"));
    router.push("/alarmas/configurar-alarma"); 
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
        p: 3,
      }}
    >
      {/* Título */}
      <Typography variant="h4" fontWeight="bold">
        Crear <span style={{ color: "#FF7A00" }}>Alarma</span>
      </Typography>

      {/* Picker de hora */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticTimePicker
          displayStaticWrapperAs="mobile"
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
          ampm
        />
      </LocalizationProvider>

      {/* Botones de acción */}
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%", mt: 2 }}>
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
