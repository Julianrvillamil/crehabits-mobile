"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import ThemeRegistry from "@/app/components/ThemeRegistry";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry> {/* Aplica el tema en toda la app */}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
