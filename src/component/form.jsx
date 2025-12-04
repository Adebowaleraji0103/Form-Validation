import Input from "./input";
import Button from "./button";
import { useState } from "react";

const formInputs = [
  { type: "text", holder: "First Name", name: "firstname" },
  { type: "text", holder: "Last Name", name: "lastname" },
  { type: "email", holder: "Email Address", name: "email" },
  { type: "password", holder: "Password", name: "password" },
];

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }}
    >
      {formInputs.map((input, id) => (
        <Input
          type={input.type}
          placeholder={input.holder}
          key={id}
          name={input.name}
          value={formData[input.name]}
          onChange={handleChange}
        />
      ))}
      <Button> Claim your free trial </Button>
      <p>
        By clicking the button, you are agreeing to our
        <span> Terms and Services</span>
      </p>
    </form>
  );
}
