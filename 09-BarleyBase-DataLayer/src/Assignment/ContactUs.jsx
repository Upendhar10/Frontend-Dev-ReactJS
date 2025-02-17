import { useState } from "react";

const FormInput = ({ label, val, type, placeholder }) => {
  const [data, setData] = useState(val);
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type={type}
        value={data}
        placeholder={pla}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

const ContactUs = () => {
  function formSubmit(e) {
    e.preventDefault();

    alert("Thank You, Message Sent!");
  }

  return (
    <div className="contactUs">
      <h1>Get In Touch</h1>
      <form onSubmit={formSubmit}>
        <FormInput
          label={"First Name"}
          val={null}
          type={"text"}
          placeholder={"John"}
        />
        <FormInput
          label={"Last Name"}
          val={null}
          type={"text"}
          placeholder={"Doe"}
        />
        <FormInput
          label={"Email"}
          val={null}
          type={"email"}
          placeholder={"Johndoe@gmail.com"}
        />
        <FormInput
          label={"Phone Number"}
          val={null}
          type={"number"}
          placeholder={"your number here"}
        />
        <FormInput
          label={"Message"}
          val={null}
          type={"text"}
          placeholder={"Your message here"}
        />
        <button type="submit">Submit ↗️</button>
      </form>
    </div>
  );
};

export default ContactUs;
