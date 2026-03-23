import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.first_name) newErrors.first_name = "First name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // API Call
      await axios.post("https://gymcoachcrm.com/api/portfilo/contact", form);

      // ✨ ATTRACTIVE SUCCESS ALERT
      Swal.fire({
        title: '<strong style="color:#fff">Message Sent! 🚀</strong>',
        icon: 'success',
        iconColor: '#10b981',
        html: `
          <div style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
            Thanks for reaching out, <b>${form.first_name}</b>!<br>
            I've received your message and will get back to you shortly.
          </div>
        `,
        background: 'linear-gradient(145deg, #0f172a, #1e293b)',
        showConfirmButton: true,
        confirmButtonText: 'Awesome',
        confirmButtonColor: '#6366f1',
        timer: 4000,
        timerProgressBar: true,
        width: '400px',
        padding: '1.5rem',
        customClass: {
          popup: 'rounded-4 shadow-lg border border-secondary',
          confirmButton: 'rounded-pill px-4'
        },
        showClass: {
          popup: 'animate__animated animate__fadeInUp animate__faster'
        }
      });

      // Form reset
      setForm({ first_name: "", last_name: "", email: "", message: "" });

    } catch (error) {
      // ❌ ATTRACTIVE ERROR ALERT
      Swal.fire({
        title: '<span style="color:#fff">Oops! 😅</span>',
        text: "Something went wrong. Please check your connection.",
        icon: "error",
        iconColor: "#ef4444",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Try Again",
        customClass: {
          popup: 'rounded-4 border border-danger'
        }
      });

      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }

    setLoading(false);
  };

  return (
    <section id="hireme" style={{   padding: "80px 0", color: "#fff" }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          
          {/* LEFT SIDE - INFO */}
          <div className="col-lg-5">
            <h2 className="display-6 fw-bold mb-4">
              Let's <span style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
            </h2>
            <p className="text-secondary mb-5">
              Have a project in mind? Fill out the form and I'll help you bring your ideas to life.
            </p>

            <div className="d-flex align-items-center mb-4">
              <div className="me-3 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", background: "rgba(99, 102, 241, 0.1)", borderRadius: "12px", color: "#6366f1" }}>
                <i className="fa fa-envelope fs-5"></i>
              </div>
              <div>
                <p className="mb-0 text-secondary small">Email</p>
                <h6 className="mb-0">amankashyap2312@gmail.com</h6>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="me-3 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", background: "rgba(168, 85, 247, 0.1)", borderRadius: "12px", color: "#a855f7" }}>
                <i className="fa fa-phone fs-5"></i>
              </div>
              <div>
                <p className="mb-0 text-secondary small">Phone</p>
                <h6 className="mb-0">+91 8700435202</h6>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5" style={{   borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <form className="row g-4" onSubmit={handleSubmit}>
                
                <div className="col-md-6">
                  <label className="form-label small text-secondary">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className={`form-control border-secondary  py-2 ${errors.first_name ? "is-invalid" : ""}`} 
                    value={form.first_name}
                    onChange={handleChange}
                  />
                  {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-secondary">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control  border-secondary  py-2" 
                    value={form.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label small text-secondary">Phone</label>
                  <input
                    type="tel"   // ✅ better UX
                    name="phone" // ✅ correct name
                    className="form-control border-secondary  py-2"
                    value={form.phone} // ✅ correct bind
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small text-secondary">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control  border-secondary  py-2 ${errors.email ? "is-invalid" : ""}`} 
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label small text-secondary">Your Message</label>
                  <textarea
                    name="message"
                    className={`form-control border-secondary  ${errors.message ? "is-invalid" : ""}`}
                    rows="4"
                    placeholder="How can I help you?"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn w-100 py-3 fw-bold text-white shadow"
                    style={{ 
                      background: "linear-gradient(90deg, #6366f1, #a855f7)", 
                      border: "none", 
                      borderRadius: "12px",
                      transition: "transform 0.2s ease"
                    }}
                    disabled={loading}
                    onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                    onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;