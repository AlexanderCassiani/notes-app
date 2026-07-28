import Header from "../header/Header";
import Hero from "../hero/Hero";
import Features from "../features/Features";
import "./homeLayout.css";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Header />
      <main>
        <Hero />
        <section className="feature-section">
          <h2 className="feature-title">
            Pensado para cómo realmente trabajas
          </h2>
          <div className="feature-grid">
            <Features
              title="Crea notas"
              description="Regístrate y comienza a organizar tus ideas, tareas y recordatorios en segundos con."
            />

            <Features
              title="Búsqueda rápida"
              description="Encuentra cualquier nota al instante utilizando palabras clave, para acceder a la información que necesitas sin perder tiempo."
            />

            <Features
              title="Organización inteligente"
              description="Mantén tus notas perfectamente organizadas con etiquetas, facilitando la gestión de toda tu información."
            />

            <Features
              title="Favoritos"
              description="Fija o marca tus notas más importantes para acceder a ellas rápidamente siempre que las necesites."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
