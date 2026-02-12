import { Wifi, Cloud, Code, Aperture, Shield, BarChart3 } from 'lucide-react';

export const servicesData = {
    es: [
        {
            id: 'conectividad',
            title: "Conectividad",
            icon: Wifi,
            description: "Acompañamiento especializado en gestión de canales y diseño de infraestructuras de red robustas (FTTH, Cableado Estructurado, RF/Wi-Fi empresarial, Satelital LEO/GEO) para garantizar alta disponibilidad (HA) y continuidad operativa.",
            details: "Aplicamos buenas prácticas TIA/EIA, IEEE 802.x e implementamos topologías redundantes, balanceo de carga, segmentación VLAN y QoS.",
            image: "/images/conectividad.png"
        },
        {
            id: 'infraestructura',
            title: "Infraestructura y Data Center",
            icon: Cloud,
            description: "Diseño e implementación de arquitecturas de Data Center (on-premise, cloud, híbridas) y Micro Data Centers (edge computing), alineados con estándares internacionales (TIA-942, Uptime TIER I–IV).",
            details: "Despliegue de clusters de virtualización (VMware, Hyper-V), plataformas Hiperconvergentes (HCI) y soluciones de alta disponibilidad (HA) y recuperación ante desastres (DR).",
            image: "/images/infraestructura.png"
        },
        {
            id: 'desarrollo',
            title: "Desarrollo de Software a la Medida",
            icon: Code,
            description: "Desarrollo de software bajo arquitecturas modernas y escalables (microservicios, arquitectura limpia), con integración continua (CI/CD) y prácticas DevSecOps.",
            details: "Implementamos motores de DB relacionales y NoSQL, garantizando modelos de datos optimizados para analítica avanzada, Machine Learning e Inteligencia de Negocio (BI).",
            image: "/images/desarrollo.png"
        },
        {
            id: 'iot',
            title: "Internet de las Cosas (IoT)",
            icon: Aperture,
            description: "Pioneros en sistemas IoT industriales para monitoreo y automatización de procesos en la Industria y la Agroindustria (sensores, telemetría, mantenimiento predictivo).",
            details: "Integración de tecnologías LoRaWAN, NB-IoT, Zigbee y plataformas cloud para soluciones escalables, confiables y seguras que aumentan la eficiencia y reducen costos.",
            image: "/images/iot.png"
        },
        {
            id: 'seguridad',
            title: "Seguridad Perimetral y Análisis de Vulnerabilidades",
            icon: Shield,
            description: "Implementación de firewalls de próxima generación (NGFW), sistemas IPS/IDS, filtrado de tráfico y políticas Zero Trust para mitigar riesgos cibernéticos.",
            details: "Realizamos análisis de vulnerabilidades (OWASP, NIST, ISO 27001) y emitimos planes de remediación para fortalecer la postura de seguridad, protegiendo la integridad y confidencialidad de los datos.",
            image: "/images/seguridad.png"
        },
        {
            id: 'analitica',
            title: "Inteligencia de Datos y Analítica Estratégica",
            icon: BarChart3,
            description: "Transformamos datos en decisiones estratégicas de alto impacto. Integramos y analizamos información en tiempo real para optimizar procesos y reducir costos operativos.",
            details: "Aplicamos modelos predictivos e inteligencia artificial para anticipar riesgos, identificar oportunidades de crecimiento y fortalecer la competitividad mediante soluciones basadas en evidencia.",
            image: "/images/inteligencia-datos.png"
        }
    ],
    en: [
        {
            id: 'conectividad',
            title: "Connectivity",
            icon: Wifi,
            description: "Specialized support in channel management and design of robust network infrastructures (FTTH, Structured Cabling, Enterprise RF/Wi-Fi, LEO/GEO Satellite) to ensure high availability (HA) and operational continuity.",
            details: "We apply TIA/EIA, IEEE 802.x best practices and implement redundant topologies, load balancing, VLAN segmentation, and QoS.",
            image: "/images/conectividad.png"
        },
        {
            id: 'infraestructura',
            title: "Infrastructure and Data Center",
            icon: Cloud,
            description: "Design and implementation of Data Center architectures (on-premise, cloud, hybrid) and Micro Data Centers (edge computing), aligned with international standards (TIA-942, Uptime TIER I–IV).",
            details: "Deployment of virtualization clusters (VMware, Hyper-V), Hyperconverged platforms (HCI), and high availability (HA) and disaster recovery (DR) solutions.",
            image: "/images/infraestructura.png"
        },
        {
            id: 'desarrollo',
            title: "Custom Software Development",
            icon: Code,
            description: "Software development under modern and scalable architectures (microservices, clean architecture), with continuous integration (CI/CD) and DevSecOps practices.",
            details: "We implement relational and NoSQL DB engines, ensuring optimized data models for advanced analytics, Machine Learning, and Business Intelligence (BI).",
            image: "/images/desarrollo.png"
        },
        {
            id: 'iot',
            title: "Internet of Things (IoT)",
            icon: Aperture,
            description: "Pioneers in industrial IoT systems for monitoring and automation of processes in Industry and Agribusiness (sensors, telemetry, predictive maintenance).",
            details: "Integration of LoRaWAN, NB-IoT, Zigbee technologies and cloud platforms for scalable, reliable, and secure solutions that increase efficiency and reduce costs.",
            image: "/images/iot.png"
        },
        {
            id: 'seguridad',
            title: "Perimeter Security and Vulnerability Analysis",
            icon: Shield,
            description: "Implementation of next-generation firewalls (NGFW), IPS/IDS systems, traffic filtering, and Zero Trust policies to mitigate cyber risks.",
            details: "We perform vulnerability analysis (OWASP, NIST, ISO 27001) and issue remediation plans to strengthen security posture, protecting data integrity and confidentiality.",
            image: "/images/seguridad.png"
        },
        {
            id: 'analitica',
            title: "Data Intelligence and Strategic Analytics",
            icon: BarChart3,
            description: "We transform data into high-impact strategic decisions. We integrate and analyze real-time information to optimize processes and reduce operational costs.",
            details: "We apply predictive models and artificial intelligence to anticipate risks, identify growth opportunities, and strengthen competitiveness through evidence-based solutions.",
            image: "/images/inteligencia-datos.png"
        }
    ]
};

export default servicesData;
