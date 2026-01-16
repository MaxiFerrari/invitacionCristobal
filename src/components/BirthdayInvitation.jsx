/**
 * BirthdayInvitation Component
 * Invitación principal para el cumpleaños de Cristóbal
 * Estilo Stranger Things con todas las secciones requeridas
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import strangerThingsLogo from "./stranger-things-seeklogo.png";
import styles from "../styles/BirthdayInvitation.module.css";

// Hook para reproducir música de fondo (Running Up That Hill - Kate Bush)
const useBackgroundMusic = () => {
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);

  const startAudio = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/assets/running-up-that-hill.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
      }
      audioRef.current.currentTime = 5; // Adelantar 60 segundos (al coro)
      audioRef.current.play();
      isPlayingRef.current = true;
    } catch (error) {
      console.log("Error iniciando audio:", error);
      isPlayingRef.current = false;
    }
  }, []);

  const stopAudio = useCallback(() => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      isPlayingRef.current = false;
    } catch (error) {
      console.log("Error deteniendo audio:", error);
    }
  }, []);

  const toggleAudio = useCallback(() => {
    if (isPlayingRef.current) {
      stopAudio();
      return false;
    } else {
      startAudio();
      return true;
    }
  }, [startAudio, stopAudio]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return { toggleAudio, startAudio };
};

const BirthdayInvitation = () => {
  // Estado para el control del audio - OFF hasta que el usuario interactúe
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const { toggleAudio, startAudio } = useBackgroundMusic();

  // Iniciar audio automáticamente al hacer scroll
  useEffect(() => {
    const handleFirstScroll = () => {
      if (!audioStarted) {
        startAudio();
        setAudioStarted(true);
        setIsPlaying(true);
        window.removeEventListener("scroll", handleFirstScroll);
        window.removeEventListener("touchmove", handleFirstScroll);
      }
    };

    window.addEventListener("scroll", handleFirstScroll, { passive: true });
    window.addEventListener("touchmove", handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
    };
  }, [audioStarted, startAudio]);

  // Datos del cumpleaños
  const birthdayData = {
    name: "Cristóbal",
    age: 11,
    date: "Viernes 23 de Enero",
    time: "18:00 a 22:00 hs",
    rainDate: "Sábado 24 de Enero",
    address: "Godoy Cruz 320, Casa 14",
    city: "San Miguel de Tucumán",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Godoy+Cruz+320,+San+Miguel+de+Tucuman,+Argentina",
    theme: "Stranger Things",
    poolWarning: "🏊 Hay pileta – Traer toallón y malla",
  };

  // Toggle del audio
  const handleToggleAudio = () => {
    if (!audioStarted) {
      startAudio();
      setAudioStarted(true);
      setIsPlaying(true);
    } else {
      const nowPlaying = toggleAudio();
      setIsPlaying(nowPlaying);
    }
  };

  return (
    <div className={styles.invitation}>
      {/* Partículas flotantes del Upside Down */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              "--delay": `${Math.random() * 5}s`,
              "--x": `${Math.random() * 100}%`,
              "--duration": `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Efecto de luces parpadeantes */}
      <div className={styles.flickerOverlay}></div>

      {/* Botón de sonido */}
      <button
        className={`${styles.soundButton} ${isPlaying ? styles.playing : ""}`}
        onClick={handleToggleAudio}
        aria-label={isPlaying ? "Desactivar sonido" : "Activar sonido"}
      >
        <span className={styles.soundIcon}>{isPlaying ? "🔊" : "🔇"}</span>
        <span className={styles.soundText}>
          {isPlaying ? "Sonido ON" : "Activar sonido"}
        </span>
      </button>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        {/* Luces de Navidad superiores */}
        <div className={styles.heroLights}>
          {[
            "red",
            "yellow",
            "blue",
            "green",
            "red",
            "yellow",
            "blue",
            "green",
            "red",
          ].map((color, i) => (
            <div
              key={`hero-light-${color}-${i}`}
              className={styles.heroLight}
              style={{
                "--light-color":
                  color === "red"
                    ? "#ff3333"
                    : color === "yellow"
                      ? "#ffcc00"
                      : color === "blue"
                        ? "#3399ff"
                        : "#33cc33",
                "--light-delay": `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Título principal con efecto neón */}
        <h1 className={styles.mainTitle}>
          <span className={styles.titleSmall}>¡Estás invitado!</span>
          <span className={styles.titleBig}>al Upside Down</span>
        </h1>

        {/* Logo Stranger Things */}
        <div className={styles.logoWrapper}>
          <img
            src={strangerThingsLogo}
            alt="Stranger Things"
            className={styles.logoImage}
          />
        </div>

        {/* Fecha destacada */}
        <div className={styles.dateSection}>
          <div className={styles.dateCard}>
            <span className={styles.dateIcon}>📅</span>
            <div className={styles.dateInfo}>
              <span className={styles.dateText}>{birthdayData.date}</span>
              <span className={styles.timeText}>🕕 {birthdayData.time}</span>
            </div>
          </div>
        </div>

        {/* Nombre destacado */}
        <div className={styles.nameSection}>
          <span className={styles.nameLabel}>El cumpleaños de</span>
          <h2 className={styles.name}>{birthdayData.name}</h2>
        </div>

        {/* Decoración de portal en el hero */}
        <div className={styles.heroPortal}>
          <div className={styles.portalGlow}></div>
        </div>
      </section>

      {/* Sección de edad */}
      <section className={styles.ageSection}>
        <div className={styles.ageWrapper}>
          <span className={styles.cumple}>Cumple</span>
          <div className={styles.ageNumber}>
            <span className={styles.ageBig}>{birthdayData.age}</span>
            <span className={styles.ageYears}>años</span>
          </div>
        </div>

        {/* Decoración de luces navideñas estilo ST */}
        <div className={styles.christmasLights}>
          {["red", "yellow", "blue", "green", "red", "yellow", "blue"].map(
            (color, i) => (
              <div
                key={i}
                className={styles.light}
                style={{
                  "--light-color":
                    color === "red"
                      ? "#ff3333"
                      : color === "yellow"
                        ? "#ffcc00"
                        : color === "blue"
                          ? "#3399ff"
                          : "#33cc33",
                  "--light-delay": `${i * 0.2}s`,
                }}
              />
            ),
          )}
        </div>
      </section>

      {/* Información del evento */}
      <section className={styles.eventInfo}>
        <h3 className={styles.sectionTitle}>📍 ¿Dónde?</h3>

        <a
          href={birthdayData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.infoCardLink}
        >
          <div className={styles.infoCard}>
            <div className={styles.address}>
              <span className={styles.street}>{birthdayData.address}</span>
              <span className={styles.city}>{birthdayData.city}</span>
            </div>
            <div className={styles.mapsButton}>
              <span className={styles.mapsIcon}>🗺️</span>
              <span className={styles.mapsText}>Ver en Maps</span>
            </div>
          </div>
        </a>

        {/* Decoración de portal */}
        <div className={styles.portalDecoration}>
          <div className={styles.portalRing}></div>
          <div className={styles.portalRing}></div>
          <div className={styles.portalRing}></div>
        </div>
      </section>

      {/* Aviso especial de pileta */}
      <section className={styles.warningSection}>
        <div className={styles.warningCard}>
          <div className={styles.warningIcon}>🏊</div>
          <div className={styles.warningContent}>
            <span className={styles.warningTitle}>¡Hay pileta!</span>
            <span className={styles.warningText}>Traer toallón y malla</span>
          </div>
          <div className={styles.warningWaves}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* Aviso de suspensión por lluvia */}
      <section className={styles.rainSection}>
        <div className={styles.rainNotice}>
          <span className={styles.rainIcon}>🌧️</span>
          <div className={styles.rainInfo}>
            <span className={styles.rainTitle}>
              En caso de lluvia se suspende para el
            </span>
            <span className={styles.rainDate}>
              ➡️ {birthdayData.rainDate}, de 18 a 22 hs
            </span>
          </div>
        </div>
      </section>

      {/* Botón de confirmación de asistencia */}
      <section className={styles.confirmSection}>
        <a
          href="https://wa.me/543815746768?text=Confirmo%20mi%20asistencia%20al%20cumpleaños%20de%20Cristóbal"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.confirmButton}
        >
          <span className={styles.whatsappIcon}>📱</span>
          <span className={styles.confirmText}>Confirmar Asistencia</span>
        </a>
      </section>

      {/* Footer con decoración temática */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>¡Te esperamos en el Upside Down! 👹</p>

        {/* Efecto de vines/enredaderas del Upside Down */}
        <div className={styles.vines}>
          <svg viewBox="0 0 100 50" className={styles.vinesSvg}>
            <path
              d="M0,25 Q25,10 50,25 T100,25"
              fill="none"
              stroke="#3d1a1a"
              strokeWidth="2"
              className={styles.vinePath}
            />
            <path
              d="M0,35 Q30,20 60,35 T100,30"
              fill="none"
              stroke="#2a0f0f"
              strokeWidth="1.5"
              className={styles.vinePath}
            />
          </svg>
        </div>
      </footer>
    </div>
  );
};

export default BirthdayInvitation;
