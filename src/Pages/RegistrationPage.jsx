import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import HeaderWrapper from "../Component/HeaderWrapper";

const RegistrationPage = () => {
  return (
    <>
      <HeaderWrapper/>

      <div style={styles.page}>
        <h2 style={styles.mainTitle}>Registration Form</h2>
        <p style={styles.subtitle}>
          To register as a new user please complete the form below and click the submit button.
        </p>

        <div style={styles.card}>
          {/* ======================== PERSONAL DETAILS ======================== */}

          <h3 style={styles.sectionTitle}>Personal Details</h3>

          <div style={styles.grid4}>
            <div style={styles.field}>
              <label style={styles.label}>Title</label>
              <select style={styles.input}>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Full Name</label>
              <input style={styles.input} type="text" placeholder="Enter your name here" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Email ID*</label>
              <input style={styles.input} type="email" placeholder="Enter your business email" />
            </div>
          </div>

          <div style={styles.grid4}>
            <div style={styles.field}>
              <label style={styles.label}>Phone Number*</label>

              <div style={styles.phoneRow}>
                <select style={{ ...styles.input, width: "80px" }}>
                  <option>+91</option>
                </select>

                <input style={styles.input} type="text" placeholder="Enter phone number" />
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Job Title</label>
              <input style={styles.input} type="text" placeholder="Type here" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Organisation Type</label>
              <input style={styles.input} type="text" placeholder="Type here" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Organisation Name</label>
              <input style={styles.input} type="text" placeholder="Mention your current company" />
            </div>
          </div>

          {/* ======================== POSTAL ======================== */}

          <h3 style={styles.sectionTitle}>Postal Address</h3>

          <div style={styles.grid4}>
            <div style={styles.field}>
              <label style={styles.label}>Street*</label>
              <input style={styles.input} type="text" placeholder="Type here" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Country*</label>
              <select style={styles.input}>
                <option>-- Please Select --</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>State*</label>
              <select style={styles.input}>
                <option>-- Please Select --</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>City*</label>
              <select style={styles.input}>
                <option>-- Please Select --</option>
              </select>
            </div>
          </div>

          {/* ======================== BUSINESS ======================== */}

          <h3 style={styles.sectionTitle}>Business Address</h3>

          <div style={styles.grid4}>
            <div style={styles.field}>
              <label style={styles.label}>Street*</label>
              <input style={styles.input} type="text" placeholder="Type here" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Country*</label>
              <select style={styles.input}>
                <option>-- Please Select --</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>State*</label>
              <select style={styles.input}>
                <option>-- Please Select --</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>City*</label>
              <select style={styles.input}>
                <option>-- Please Select --</option>
              </select>
            </div>
          </div>

          {/* ======================== COMMENTS + CAPTCHA ======================== */}

          <h3 style={styles.sectionTitle}>Business Address</h3>

          <div style={styles.commentRow}>
            <div style={{ ...styles.field, flex: 3 }}>
              <label style={styles.label}>Additional Comments</label>
              <textarea style={styles.textarea} placeholder="Write in 250 characters"></textarea>
            </div>

            <div style={{ ...styles.field, flex: 1 }}>
              <label style={styles.label}>Enter Captcha Code</label>

              <div style={styles.captchaRow}>
                <input style={styles.input} type="text" placeholder="Enter code" />
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="captcha"
                  style={{ width: "55px" }}
                />
              </div>
            </div>
          </div>

          <button style={styles.submitBtn}>Submit</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegistrationPage;

const styles = {
  page: {
    width: "90%",
    maxWidth: "1324px",
    margin: "40px auto",
  },

  mainTitle: {
    fontSize: "26px",
    fontWeight: "700",
  },

  subtitle: {
    marginBottom: "25px",
    color: "#444",
  },

  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  sectionTitle: {
    margin: "25px 0 10px",
    fontSize: "18px",
    fontWeight: "600",
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "25px",
    marginBottom: "20px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: "600",
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    background: "#fafafa",
  },

  phoneRow: {
    display: "flex",
    gap: "10px",
  },

  textarea: {
    padding: "10px",
    height: "120px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    resize: "none",
    background: "#fafafa",
  },

  commentRow: {
    display: "flex",
    gap: "25px",
  },

  captchaRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  submitBtn: {
    margin: "30px auto 0",
    display: "block",
    width: "180px",
    padding: "12px 0",
    background: "#00aaff",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
