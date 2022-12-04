import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./LayoutHeader.module.scss";
import logo from "../../assets/images/logo.png";

export const LayoutHeader: FC = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" scroll={false}>
            <Image src={logo} alt="" width={250} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
