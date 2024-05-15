import { ChangeEvent, FormEvent, useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] =
    useState <
    FormData >
    {
      name: "",
      email: "",
      budget: "",
      message: "",
    };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <div id="contactMe" className="h-screen pt-2">
      <h1 className="sectionTitle">Contact Me</h1>
      <form action="">
        <div className="col">
          <input
            type="email"
            id="formEmail"
            placeholder="Email"
            name="email"
            value={formData.name}
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
      </form>
      <div className="row">
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
}
