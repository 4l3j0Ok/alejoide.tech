import { useState } from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("sent");
        setResponseMessage("¡Mensaje enviado! Te contactamos pronto.");
      } else {
        setStatus("error");
        setResponseMessage(data.message ?? "Hubo un error. Intentá de nuevo.");
      }
    } catch {
      setStatus("error");
      setResponseMessage("Error de conexión. Intentá de nuevo.");
    }
  }

  const disabled = status === "sending" || status === "sent";

  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Juan García"
            disabled={disabled}
            required
          />
        </div>
        <div className="form-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="juan@email.com"
            disabled={disabled}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-col full">
          <label htmlFor="service">¿Qué necesitás?</label>
          <select id="service" name="service" disabled={disabled}>
            <option>Armado de PC</option>
            <option>Armado de Servidor</option>
            <option>Diagnóstico</option>
            <option>Eliminación de virus</option>
            <option>Instalación de software</option>
            <option>Limpieza y mantenimiento</option>
            <option>Reparación de hardware</option>
            <option>Redes y conectividad</option>
            <option>Upgrades / mejoras</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-col full">
          <label htmlFor="message">Describí el problema</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ej: Mi PC no enciende, hace un ruido raro, o arranca pero se apaga sola..."
            disabled={disabled}
            required
          />
        </div>
      </div>
      <button type="submit" disabled={disabled}>
        {status === "sending"
          ? "Enviando..."
          : status === "sent"
            ? "Enviado ✓"
            : "Enviar mensaje"}
      </button>
      {responseMessage && (
        <div
          className={`response-msg ${status === "sent" ? "success" : "error"}`}
        >
          {responseMessage}
        </div>
      )}
    </form>
  );
}
