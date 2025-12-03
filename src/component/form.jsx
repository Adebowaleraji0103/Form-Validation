import Input from "./input";
import Button from "./button";

const formInputs = [
  { type: "text", holder: "First Name" },
  { type: "text", holder: "Last Name" },
  { type: "email", holder: "Email Address" },
  { type: "password", holder: "Password" },
];

export default function Form() {
  return (
    <form>
      {formInputs.map((input, id) => (
        <Input type={input.type} placeholder={input.holder} key={id} />
      ))}
      <Button> Claim your free trial </Button>
      <p>
        By clicking the button, you are agreeing to our
        <span> Terms and Services</span>
      </p>
    </form>
  );
}
