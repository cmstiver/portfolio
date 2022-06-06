import type { NextPage } from "next";
import style from "../styles/Contact.module.scss";

const Contact: NextPage = () => {
  return (
    <div className={style.contact}>
      <div>I&apos;d love to hear from you!</div>
      <div>Please contact me at:</div>
      <div className={style.email}>chayse.stiver@gmail.com</div>
    </div>
  );
};

export default Contact;
