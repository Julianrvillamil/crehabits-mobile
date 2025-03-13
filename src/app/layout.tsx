"use client";


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
