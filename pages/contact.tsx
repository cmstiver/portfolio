import type { NextPage } from "next";
import style from "../styles/Contact.module.scss";

const Contact: NextPage = () => {
  return (
    <div className={style.contact}>
      <form
        acceptCharset="UTF-8"
        action="https://getform.io/f/53b6a1db-6017-4fd7-bea4-f63c591c6de7"
        method="POST"
        encType="multipart/form-data"
        target="_blank"
        id="wpform"
      >
        <div className={style.labelinput}>
          <label>Name</label>
          <div>
            <input
              className={style.input}
              type="text"
              name="name"
              placeholder="Name"
              required={true}
            />
          </div>
        </div>
        <div className={style.labelinput}>
          <label>Email Address</label>
          <div>
            <input
              className={style.input}
              type="text"
              name="email"
              placeholder="Email"
              required={true}
            />
          </div>
        </div>
        <div className={style.labelinput}>
          <label>Your Message:</label>
          <div>
            <textarea
              className={style.inputbox}
              name="message"
              required={true}
            />
          </div>
        </div>
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
