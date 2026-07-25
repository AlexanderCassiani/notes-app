import "./hero.css";
import Button from "../../../components/button/Button";
import NoteCard from "../noteCard/NoteCard";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Gestiona todas tus ideas con <strong>Notely</strong>
        </h1>

        <p>
          Notely es el espacio donde tus notas dejan de perderse entre apps,
          chats y papeles sueltos. Escribe rápido, organiza sin esfuerzo y
          encuentra cualquier idea en segundos, sin importar cuánto tiempo haya
          pasado.
        </p>

        <Button className="btn-login btn-login-hero" text="Empezar ahora" />
        <Button className="btn-underline" text="Ver como funciona" />
      </div>

      <div className="hero-right">
        <NoteCard
          category="trabajo"
          noteText="Plan de la reunión del jueves: revisar métricas y próximos pasos."
          className="note-card-1"
        />
        <NoteCard
          category="ideas"
          noteText="Nombre para el proyecto nuevo — algo simple y fácil de recordar."
          className="note-card-2"
        />
        <NoteCard
          category="Personal"
          noteText="Lista de lectura: terminar el libro antes de fin de mes."
          className="note-card-3"
        />
      </div>
    </div>
  );
};

export default Hero;
