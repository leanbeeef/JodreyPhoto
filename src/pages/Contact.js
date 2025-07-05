import React from 'react';

const Contact = () => (
  <section className="container my-5">
    <h1>Contact Me</h1>
    <form className="mt-4" aria-label="Contact form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" className="form-control" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </section>
);

export default Contact;
