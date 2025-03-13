
"use client"; // Asegura que esto está presente si usas hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);
  return null;
}
