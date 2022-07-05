import { LinkButton } from 'Components/LinkButton';
import { FaCloud } from 'react-icons/fa';
import styles from './Navbar.module.css';

interface NavbarProps {
  user: any;
}

export const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <FaCloud size="3em" />
        <h1>Weather Forecast</h1>
      </div>
      {user && <LinkButton href="/api/auth/logout">Logout</LinkButton>}
    </div>
  );
};
