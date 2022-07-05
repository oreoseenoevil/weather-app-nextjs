import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import { Navbar } from 'Components/Navbar';
import { Main } from 'Layouts/Main';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();

  return (
    <div className={styles.main}>
      <Navbar user={user} />
      <Main user={user} isLoading={isLoading} />
    </div>
  );
};

export default Home;
