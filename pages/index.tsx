import type { NextPage } from 'next';
import { useUser } from '@auth0/nextjs-auth0';
import { LinkButton } from 'Components/LinkButton';
import { Navbar } from 'Components/Navbar';
import { Main } from 'Layouts/Main';

const Home: NextPage = () => {
  const { user, isLoading, error } = useUser();

  console.log({ user });

  return (
    <div>
      <Navbar user={user} />
      <Main>{!user && <LinkButton href="/api/auth/login">Login</LinkButton>}</Main>
    </div>
  );
};

export default Home;
