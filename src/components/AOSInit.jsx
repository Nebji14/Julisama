"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    // 1. Initialisation
    AOS.init({
      duration: 1200,
      easing: "ease-out",
      once: true,
      offset: 10, // Réduit à 10 pour que ça se déclenche très vite sur mobile
    });

    // 2. Le hack pour Next.js : forcer AOS à recalculer les positions
    // une fois que le navigateur a fini de charger les images (Portfolio/Contact)
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
