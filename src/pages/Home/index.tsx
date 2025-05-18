import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.pathname = '/cabinet';
  }, []);
  return <></>;
};

export default Home;
