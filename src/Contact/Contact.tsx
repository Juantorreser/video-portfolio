import "./Contact.scss";

export default function Contact() {
  return (
    <div id="contactMe" className="h-screen">
      <h1 className="sectionTitle">Contact Me</h1>
      <form action="">
        <input type="email" id="formEmail" placeholder="Email" />
        <input type="text" id="formName" placeholder="Name"/>
        <input type="text" id="formBudget" placeholder="Budget (Optional)" />
        <textarea name="formMessage" id="formMessage">Message</textarea>
      </form>
      <button type="submit">Send Message</button>
    </div>
  );
}
