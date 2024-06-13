import { Link } from "@tanstack/react-router";
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  sidebarData: {
    name: string;
    link: string;
  }[];
};

export const Sidebar = (props: SidebarProps) => {
  const renderedSidebarData = props.sidebarData.map((item) => (
    <li key={item.link}>
      <Link
        to={`/docs/${item.link}`}
        className={styles.link}
        activeProps={{ className: styles.link__active }}
      >
        <span className={styles.text}>{item.name}</span>
      </Link>
    </li>
  ));

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>{renderedSidebarData}</ul>
    </aside>
  );
};
