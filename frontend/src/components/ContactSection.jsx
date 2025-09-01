import React, { useRef, useState } from 'react';
import { mockData } from './mock';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: null, msg: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Basic guard: ignore if honeypot has content
    const hp = formRef.current?.querySelector('input[name="_honeypot"]');
    if (hp && hp.value) return;

    setSending(true);
    setStatus({ type: null, msg: '' });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus({
        type: 'success',
        msg: 'Thanks for reaching out — we’ll get back to you shortly.',
      });
      formRef.current?.reset();
    } catch (err) {
      setStatus({
        type: 'error',
        msg: 'Something went wrong while sending your message. Please try again.',
      });
      // Optional: console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-default">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle max-w-2xl mx-auto text-justify text-slate-600 text-base">
            We are here to serve with love and compassion. Reach out for support, 
            questions, or to join our mission of bringing hope and healing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Our Location</h3>
              <p className="font-medium text-slate-700">{mockData.contact.address.name}</p>
              <p className="text-slate-600 text-sm">{mockData.contact.address.street}</p>
              <p className="text-slate-600 text-sm">Pin: {mockData.contact.address.pin}</p>
            </div>

            {/* Email */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm mb-2">We’d love to hear from you</p>
              <a
                href={`mailto:${mockData.contact.email}`}
                className="text-green-700 hover:underline font-medium text-sm"
              >
                {mockData.contact.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Call Us</h3>
              <p className="text-slate-600 text-sm">9947352450</p>
              {/* <p className="text-purple-600 font-medium text-sm">Updates pending</p> */}
            </div>

            {/* Trust Members */}
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Our Trust Members</h3>
              <div className="space-y-3">
                {mockData.contact.trustMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-rose-600 text-white p-1.5 rounded-full text-xs">♥</div>
                    <div>
                      <p className="font-medium text-slate-800 text-sm">{member.name}</p>
                      <p className="text-slate-600 text-xs">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images + Contact Form */}
          <div className="space-y-6">
            {/* Christ Images */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">
                In the Love of Christ
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {mockData.contact.christImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt={`Christ ${index + 1}`}
                      className="w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-6" id="contact-form">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Send Us a Message</h3>

              {/* Status message */}
              {status.type && (
                <div
                  className={`mb-3 rounded-md px-3 py-2 text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.msg}
                </div>
              )}

              <form ref={formRef} onSubmit={onSubmit} className="space-y-4 text-sm">
                {/* Honeypot (hidden) */}
                <input type="text" name="_honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="from_name"                 /* EmailJS variable */
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="email"
                    name="reply_to"                  /* EmailJS variable */
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <input
                  type="text"
                  name="subject"                      /* EmailJS variable */
                  placeholder="Subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />

                <textarea
                  name="message"                       /* EmailJS variable */
                  placeholder="Your Message"
                  rows={3}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>

                <button
                  type="submit"
                  disabled={sending}
                  className={`btn btn-primary w-full py-2 text-sm ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Join Our Mission of Love and Service</h3>
            <p className="text-base mb-4 opacity-90 max-w-2xl mx-auto text-justify">
              “By combining affordable care with generous giving, we can keep alive the spirit of 
              Mother <span className="font-semibold underline decoration-white/70">Teresa Fardella</span> and the Two Hearts of Jesus and Mary, offering love, presence, 
              and hope to those who suffer.”
            </p>
            <a className="btn btn-light px-6 py-2 text-sm" href="#contact-form">Support Our Cause</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;