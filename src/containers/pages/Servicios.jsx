import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Header from "components/Servicios/Header";
import ServicesList from "components/Servicios/ServicesList";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import seguros_img from "assets/img/Servicios/pago-seguro.png"; // coloca una imagen genérica de seguros

// 🟡 Seguros de Automóviles
const posts_automoviles = [
  {
    title: "Todo riesgo",
    img: seguros_img,
    description:
      "Cubre daños totales o parciales por accidente, robo o eventos naturales, con asistencia en carretera y respaldo permanente.",
  },
  {
    title: "Responsabilidad civil extracontractual",
    img: seguros_img,
    description:
      "Protege contra daños ocasionados a terceros en bienes o personas durante la conducción de tu vehículo.",
  },
  {
    title: "Responsabilidad civil contractual",
    img: seguros_img,
    description:
      "Garantiza el cumplimiento de obligaciones derivadas de contratos relacionados con el uso de vehículos.",
  },
];

// 🔵 Cumplimiento
const posts_cumplimiento = [
  {
    title: "Disposición legal",
    img: seguros_img,
    description:
      "Cumple con las normativas exigidas por la ley para la ejecución de contratos públicos o privados.",
  },
  {
    title: "Garantía de pago",
    img: seguros_img,
    description:
      "Asegura el pago de obligaciones económicas en operaciones comerciales y contractuales.",
  },
  {
    title: "Cumplimiento de contrato",
    img: seguros_img,
    description:
      "Respalda el cumplimiento de términos y condiciones establecidos en contratos de obras, servicios o suministros.",
  },
  {
    title: "Cartera",
    img: seguros_img,
    description:
      "Protege tus ingresos ante el incumplimiento o mora de tus clientes en el pago de deudas.",
  },
  {
    title: "Contrato de obras",
    img: seguros_img,
    description:
      "Garantiza la correcta ejecución y entrega de proyectos de construcción o infraestructura.",
  },
  {
    title: "Arrendamientos",
    img: seguros_img,
    description:
      "Respalda al arrendador ante el incumplimiento de pago o daños ocasionados al inmueble arrendado.",
  },
];

// 🟠 Seguros Generales
const posts_generales = [
  {
    title: "Todo riesgo daño mecánico",
    img: seguros_img,
    description:
      "Protección completa ante averías o daños mecánicos imprevistos en equipos, maquinaria o vehículos, garantizando la continuidad de tus operaciones.",
  },
  {
    title: "Directores administrativos",
    img: seguros_img,
    description:
      "Cobertura para directivos frente a reclamaciones por decisiones empresariales, brindando respaldo legal y financiero ante posibles responsabilidades.",
  },
  {
    title: "Responsabilidad civil extracontractual",
    img: seguros_img,
    description:
      "Cubre los daños o perjuicios que puedas causar a terceros sin existir contrato previo, garantizando tranquilidad y respaldo ante imprevistos.",
  },
  {
    title: "Activos digitales / Cyber",
    img: seguros_img,
    description:
      "Protección ante ciberataques, pérdida de datos o vulneraciones informáticas, salvaguardando la integridad de tus activos digitales y reputación online.",
  },
];

// 🟢 Seguros de Personas
const posts_personas = [
  {
    title: "Salud",
    img: seguros_img,
    description:
      "Cobertura médica integral para consultas, hospitalización y emergencias, asegurando bienestar y atención oportuna.",
  },
  {
    title: "Vida",
    img: seguros_img,
    description:
      "Protege a tus seres queridos con respaldo económico ante cualquier eventualidad que afecte tu vida.",
  },
  {
    title: "Educación",
    img: seguros_img,
    description:
      "Asegura la continuidad educativa de tus hijos ante imprevistos, garantizando su futuro académico.",
  },
  {
    title: "Salud mascotas",
    img: seguros_img,
    description:
      "Protección veterinaria ante accidentes o enfermedades, para que tus mascotas reciban el mejor cuidado.",
  },
  {
    title: "Accidentes personales",
    img: seguros_img,
    description:
      "Cobertura inmediata ante accidentes que generen lesiones, incapacidad o fallecimiento.",
  },
  {
    title: "Seguros de créditos",
    img: seguros_img,
    description:
      "Cubre el riesgo de impago de deudas o créditos otorgados, garantizando estabilidad financiera.",
  },
  {
    title: "Exequias",
    img: seguros_img,
    description:
      "Respaldo económico y acompañamiento en momentos difíciles, cubriendo los gastos funerarios.",
  },
];

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />

        {/* Sección de servicios */}
        <div className="py-12 bg-gray-50">
          <ServicesList posts={posts_automoviles} section_title={"Seguros de Automóviles"} />
          <ServicesList posts={posts_cumplimiento} section_title={"Cumplimiento"} />
          <ServicesList posts={posts_generales} section_title={"Seguros Generales"} />
          <ServicesList posts={posts_personas} section_title={"Seguros de Personas"} />
        </div>

        <Footer />
      </div>
    </Layout>
  );
}

export default Services;
