"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Fab,
  Modal,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

export default function AlarmasPage() {
  const [open, setOpen] = useState(false);
  const [alarmName, setAlarmName] = useState("");
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAccept = () => {
    router.push("/alarmas/crear-alarma"); // Redirige a la selección de hora
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
        onClick={handleOpen} // ✅ Abre el modal
      >
        <AddIcon />
      </Fab>

      {/* Modal para agregar nueva alarma */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: 300,
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow: 3,
            p: 3,
          }}
        >
          {/* Encabezado del modal */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" fontWeight="bold">Nombre de la Alarma</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Input para el nombre de la alarma */}
          <TextField
            fullWidth
            placeholder="Digita el nombre de la alarma"
            variant="outlined"
            value={alarmName}
            onChange={(e) => setAlarmName(e.target.value)}
            sx={{ mt: 2 }}
          />

          {/* Botones de acción */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button onClick={handleClose} sx={{ color: "#F2994A", fontWeight: "bold" }}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F2994A",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#E68A38" },
              }}
              onClick={handleAccept}
            >
              Aceptar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
