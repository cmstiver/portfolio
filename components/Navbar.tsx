import style from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navbuttons}>
        <Link href="/">
          <a className={style.btn}>00. Home</a>
        </Link>
        <Link href="/skills">
          <a className={style.btn}>01. Skills</a>
        </Link>
        <Link href="/work">
          <a className={style.btn}>02. Work</a>
        </Link>
        <Link href="/contact">
          <a className={style.btn}>03. Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
