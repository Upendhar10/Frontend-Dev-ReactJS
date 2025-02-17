import { useState } from "react";
import { accordionList } from "../constants";

const Techstack = () => {
  return (
    <div className="techstack">
      {accordionList.map((acc, idx) => {
        return (
          <Accordion Question={acc.Question} Answer={acc.Answer} key={idx} />
        );
      })}
    </div>
  );
};

export default Techstack;

const Accordion = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <div className="accordion">
      <div className="acc-Q" onClick={() => setShow(!show)}>
        <p>{Question}</p>
        <span>{!show ? "🔽" : "🔼"}</span>
      </div>
      {show ? <p className="acc-A">{Answer}</p> : null}
    </div>
  );
};
