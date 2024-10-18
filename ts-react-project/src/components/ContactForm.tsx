import { ChangeEvent, useState } from "react";

const ContactForm = () => {
  interface FormDataInt {
    name: string;
    email: string;
  }
  const [formData, setFormData] = useState<FormDataInt>({
    name: "",
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id=""
        placeholder="Name.."
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        id=""
        placeholder="Email..."
        value={formData.email}
        onChange={handleChange}
      />
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default ContactForm;
