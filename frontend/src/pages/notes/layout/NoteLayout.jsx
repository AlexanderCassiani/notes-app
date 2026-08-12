import "./notelayout.css";
import SideBar from "../sidebar/SideBar";
import Main from "../main/Main";

const NoteLayout = () => {
  return (
    <div className="notes-container">
      <SideBar />
      <Main />
    </div>
  );
};

export default NoteLayout;
