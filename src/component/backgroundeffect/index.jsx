import Sidebar from "../sidebar/Sidebar";
import "./index.css";
const BackgroundEffect = () => {
  return (
    <>
      <Sidebar />
      <div className="background-effect">
        <section>
          <h2>Happy Birthday</h2>
          <div className="banner">
            <div className="blocks"></div>
          </div>
        </section>
      </div>
    </>
  );
};
export default BackgroundEffect;
