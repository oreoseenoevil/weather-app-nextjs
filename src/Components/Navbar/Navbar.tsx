import { LinkButton } from 'Components/LinkButton';
import styles from './Navbar.module.css';

interface NavbarProps {
  user: any;
}

export const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <h1>Weather Forecast</h1>
      {user && <LinkButton href="/api/auth/logout">Logout</LinkButton>}
    </div>
  );
};
