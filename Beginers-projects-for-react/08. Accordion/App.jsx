import { accordionData } from "./data/content";
import "./components/styles.css";
import Accordion from "./components/Accordion";
function App() {
  return (
    <>
      {/* <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>
        Hooks Challenges
      </h1> */}
      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
