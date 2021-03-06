import style from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navbuttons}>
        <Link href="/">
          <a className={style.btn}>Home</a>
        </Link>
        <Link href="/skills">
          <a className={style.btn}>Skills</a>
        </Link>
        <Link href="/work">
          <a className={style.btn}>Work</a>
        </Link>
        <Link href="/contact">
          <a className={style.btn}>Contact</a>
        </Link>
        <Link href="https://drive.google.com/file/d/1S_HUJ1rUS7QyNED5Iq1E8DdpDf2n189g/view?usp=sharing">
          <a className={style.btn}>Resume</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
