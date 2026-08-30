import { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const [notRobot, setNotRobot] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !subject || !message || !notRobot) {
      setStatus('Please fill out all fields and confirm you are not a robot.');
      setStatusType('error');
      return;
    }

    if (message.length > 650) {
      setStatus('Message must be 650 characters or less.');
      setStatusType('error');
      return;
    }

    setStatus('Sending...');
    setStatusType('sending');

    const endpoint = 'https://formspree.io/f/mgvykppw';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setStatus('Thank you! Your message has been sent.');
        setStatusType('success');

        setFormData({
          name: '',
          subject: '',
          message: '',
        });

        setNotRobot(false);
      } else {
        setStatus(
          'There was an error sending your message. Please try again later.'
        );
        setStatusType('error');
      }
    } catch {
      setStatus(
        'There was an error sending your message. Please try again later.'
      );
      setStatusType('error');
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-blob contact-blob-one"></div>
      <div className="contact-blob contact-blob-two"></div>

      <section className="contact-content">
        <p className="contact-eyebrow">GET IN TOUCH</p>

        <h1>Let’s Work Together!</h1>

        <p className="contact-description">
          If you'd like to learn more about my work or get in touch, feel free
          to reach out — I’d love to hear from you!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">Name*</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="subject">Subject*</label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message*</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              maxLength="650"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <span className="character-count">
              {formData.message.length}/650
            </span>
          </div>

          <div className="contact-actions">
            <button
              type="button"
              className={`robot-button ${notRobot ? 'robot-confirmed' : ''}`}
              onClick={() => setNotRobot((prev) => !prev)}
            >
              <i
                className={
                  notRobot ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'
                }
              ></i>

              <span>{notRobot ? 'Confirmed' : "I'm not a robot"}</span>
            </button>

            <button type="submit" className="contact-submit">
              Send
            </button>
          </div>

          {status && <p className={`form-status ${statusType}`}>{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;
