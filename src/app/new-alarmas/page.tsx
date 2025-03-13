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
  Card,
  Switch,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

      {/* Card de alarma estática */}
      <Box sx={{ width: "100%", mt: 2, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 320,
            p: 2,
            borderRadius: 3,
            boxShadow: 3,
            bgcolor: "#EAEAEA",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
            <Typography variant="body2">Agregar una categoría</Typography>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          {/* Hora */}
          <Box
            sx={{
              bgcolor: "#E0E0E0",
              borderRadius: 2,
              textAlign: "left",
              py: 1,
              my: 1,
              px: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              07:00 AM
            </Typography>
          </Box>

          {/* Nombre de la Alarma */}
          <Typography sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "left", px: 2 }}>
            Nombre de Alarma
          </Typography>

          {/* Días de la semana y Switch */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, px: 2 }}>
            <Typography sx={{ fontSize: "0.9rem", textAlign: "left", color: "#666" }}>
              Lun, Mar, Mie
            </Typography>
            <Switch checked={true} />
          </Box>
        </Card>
      </Box>

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
        onClick={handleOpen}
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
            <Button variant="contained" sx={{ backgroundColor: "#F2994A" }} onClick={handleAccept}>
              Aceptar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
