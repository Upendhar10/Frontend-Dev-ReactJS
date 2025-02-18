import { useState } from "react";
import { accordionList } from "../constants";

const Techstack = () => {
  const [show, setShow] = useState(-1); // -1 => no accordion is open

  return (
    <div className="techstack">
      {accordionList.map((acc, idx) => {
        return (
          <Accordion
            Question={acc.Question}
            Answer={acc.Answer}
            index={idx} // pass the index to the child accordion as a prop
            key={idx}
            show={show}
            setShow={setShow}
          />
        );
      })}
    </div>
  );
};

export default Techstack;

const Accordion = ({ Question, Answer, show, setShow, index }) => {
  // Check if this accordion item is open
  const isOpen = show === index;

  const handleToggle = () => {
    // If already open, close it; otherwise, open this one.
    setShow(isOpen ? -1 : index);
  };

  return (
    <div className="accordion">
      <div className="acc-Q" onClick={handleToggle}>
        <p>{Question}</p>
        <span>{!isOpen ? "🔽" : "🔼"}</span>
      </div>
      {isOpen && <p className="acc-A">{Answer}</p>}
    </div>
  );
};
