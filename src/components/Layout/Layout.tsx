import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styles from "./Layout.module.scss";

type DocsLayoutProps = {
  sidebarData: {
    name: string;
    link: string;
  }[];
  children: ReactNode;
};

export const Layout = (props: DocsLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.content}>
        <Sidebar sidebarData={props.sidebarData} />
        <main className={styles.main}>{props.children}</main>
      </div>
    </div>
  );
};
