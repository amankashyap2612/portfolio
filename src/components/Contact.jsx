function Contact() {
  return (
    <section id="contact">

      <div className="container">

        <div className="row g-5 align-items-center">

          {/* LEFT SIDE */}

          <div className="col-lg-5">

            <h2 className="display-6 fw-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>

            <div className="d-flex align-items-center mb-4">

              <div className="info-icon">
                <i className="fa fa-envelope"></i>
              </div>

              <div>
                <p className="mb-0 text-secondary">Email</p>
                <h6>amankashyap2312@gmail.com</h6>
              </div>

            </div>

            <div className="d-flex align-items-center">

              <div className="info-icon">
                <i className="fa fa-phone"></i>
              </div>

              <div>
                <p className="mb-0 text-secondary">Phone</p>
                <h6>8700435202</h6>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="col-lg-7">

            <div className="contact-box">

              <form className="row g-3">

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn-gradient w-100">
                    Send Message
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