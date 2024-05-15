import "./Contact.scss";

export default function Contact() {
  return (
    <div id="contactMe" className="h-screen pt-2">
      <h1 className="sectionTitle">Contact Me</h1>
      <form action="">
        <div className="col">
          <input type="email" id="formEmail" placeholder="Email" />
          <input type="text" id="formName" placeholder="Name" />
          <input type="text" id="formBudget" placeholder="Budget (Optional)" />
        </div>
        <div className="col">
          <textarea
            name="formMessage"
            id="formMessage"
            placeholder="Message"
          ></textarea>
        </div>
      </form>
      <div className="row">
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
}
