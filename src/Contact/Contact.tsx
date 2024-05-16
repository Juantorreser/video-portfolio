import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Contact.scss";

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
  };

  return (
    <div id="contactMe" className="h-screen pt-2">
      <h1 className="sectionTitle">Contact Me</h1>
      <form action="https://formsubmit.co/jdtorreser@gmail.com" method="POST">
        <div className="col">
          <input
            type="email"
            id="formEmail"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="formName"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="formBudget"
            placeholder="Budget (Optional)"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <textarea
            name="message"
            id="formMessage"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="row">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
