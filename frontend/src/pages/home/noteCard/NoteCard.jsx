import "./noteCard.css";

const NoteCard = ({ category, noteText, className }) => {
  return (
    <div className={`note-card-container ${className}`}>
      <span className="note-card-category">{category}</span>
      <p className="note-card-text">{noteText}</p>
    </div>
  );
};

export default NoteCard;
