import styles from './Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <div className={styles.main}>{children}</div>;
};
