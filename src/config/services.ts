export interface ServiceExample {
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  color: string;
  title: string;
  description: string;
  example?: ServiceExample;
}

export const services: Service[] = [
  {
    icon: "mdi:fan",
    color: "#16a34a",
    title: "Limpieza y mantenimiento",
    description:
      "Limpieza profunda interna y externa, cambio de pasta térmica, limpieza de ventiladores y disipadores. Previene el sobrecalentamiento y prolonga la vida útil.",
    example: {
      title: "Limpieza profunda + cambio de pasta",
      description:
        "Desmontaje completo, limpieza con aire comprimido, cambio de pasta térmica para reducir temperaturas y mejorar rendimiento.",
    },
  },
  {
    icon: "mdi:wrench",
    color: "#dc2626",
    title: "Reparación de hardware",
    description:
      "Diagnóstico y reparación de fallas en motherboard, RAM, fuentes de alimentación, discos y periféricos.",
    example: {
      title: "Reparación y reemplazo de fuente",
      description:
        "Equipo que no encendía por fuente dañada. Identificación de la falla, reemplazo por fuente certificada 80+ y testeo completo.",
    },
  },
  {
    icon: "mdi:desktop-tower",
    color: "#e8621a",
    title: "Armado de PCs",
    description:
      "Asesoramiento y armado de equipos a medida según tu presupuesto y necesidad: gaming, trabajo, edición o uso general.",
    example: {
      title: "Armado PC Gaming",
      description:
        "Asesoramiento y ensamble completo de PCs gaming. Configuración de BIOS, instalación de drivers y optimización para juegos.",
    },
  },
  {
    icon: "mdi:server",
    color: "#d97706",
    title: "Armado de servidores",
    description:
      "Armado de servidores para home labs, oficinas o empresas. Configuración de RAID, virtualización y optimización para cargas de trabajo.",
    example: {
      title: "Servidor para home lab",
      description:
        "Asesoramiento y armado de servidor con RAID 1, instalación de Proxmox y configuración de VMs para desarrollo y almacenamiento.",
    },
  },
  {
    icon: "mdi:linux",
    color: "#0891b2",
    title: "Instalación de sistemas operativos",
    description:
      "Instalación y configuración de Windows y Linux, dual boot con GRUB, drivers y optimización del sistema.",
    example: {
      title: "Instalación de Linux + dual boot",
      description:
        "Instalación de Linux en dual boot con Windows, configuración de GRUB y optimización de rendimiento.",
    },
  },
  {
    icon: "mdi:shield-bug",
    color: "#db2777",
    title: "Eliminación de virus y seguridad",
    description:
      "Análisis completo, eliminación de malware y ransomware, limpieza de inicio y configuración de protección en tiempo real.",
    example: {
      title: "Eliminación de malware",
      description:
        "Remoción de malware, limpieza de inicio, desfragmentación y configuración de protección en tiempo real.",
    },
  },
  {
    icon: "mdi:harddisk",
    color: "#2563eb",
    title: "Upgrades y mejoras",
    description:
      "Ampliación de RAM, migración a SSD NVMe, instalación de placas de video y mejoras de hardware para darle nueva vida a tu equipo.",
  },
  {
    icon: "mdi:router-network",
    color: "#7c3aed",
    title: "Redes y conectividad",
    description:
      "Configuración de routers, puntos de acceso y redes domésticas o de oficina. Diagnóstico de problemas de conectividad y optimización de señal Wi-Fi.",
    example: {
      title: "Configuración de red doméstica",
      description:
        "Configuración de router, extensores Wi-Fi y segmentación de red para mejorar cobertura y seguridad en el hogar u oficina.",
    },
  },
];
