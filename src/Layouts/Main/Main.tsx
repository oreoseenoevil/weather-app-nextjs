import { useEffect, useState } from 'react';
import { LinkButton } from 'Components/LinkButton';
import moment from 'moment';

import useWeatherForecast from 'hooks/useWeatherForecast';
import { formatCapitalizeWord } from 'Utils/helper';
import styles from './Main.module.css';

interface UserProfile {
  [key: string]: any;
}

interface MainProps {
  user?: UserProfile;
  isLoading?: boolean;
}

export const Main = ({ user, isLoading }: MainProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [screen, setScreen] = useState('home');
  const { setLocation, location, handleSearch, weatherData, loading, setWeatherData, error, setError } =
    useWeatherForecast();

  const handleScreen = () => {
    if (location) {
      handleSearch();
      setScreen('weather');
    }
  };

  const handleBack = () => {
    setScreen('home');
    setWeatherData(null);
    setError(null);
  };

  useEffect(() => {
    let isActive = true;

    if (user) {
      if (isActive) {
        setIsLoggedIn(true);
      }
    }

    return () => {
      isActive = false;
    };
  }, [user]);

  const screens = () => {
    switch (screen) {
      case 'weather':
        return (
          <div className={styles.group}>
            {!loading && !!weatherData && !error && (
              <>
                <h2>{weatherData?.name} Weather</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Date (mm/dd/yyyy)</th>
                      <th>Temp(F)</th>
                      <th className={styles.tablemobile}>Description</th>
                      <th className={styles.tablemobile}>Main</th>
                      <th className={styles.tablemobile}>Pressure</th>
                      <th className={styles.tablemobile}>Humidity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{moment().format('L')}</td>
                      <td>{weatherData?.main?.temp}</td>
                      <td className={styles.tablemobile}>
                        {formatCapitalizeWord(weatherData?.weather[0]?.description)}
                      </td>
                      <td className={styles.tablemobile}>{formatCapitalizeWord(weatherData?.weather[0]?.main)}</td>
                      <td className={styles.tablemobile}>{weatherData?.main?.pressure}</td>
                      <td className={styles.tablemobile}>{weatherData?.main?.humidity}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {!isLoading && error && <h1>{error}</h1>}
            {loading && <h1>Loading...</h1>}
            <span className={styles.weather_button}>
              <button onClick={handleBack} type="button">
                Back
              </button>
            </span>
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <div className={styles.profile}>
              <span>{user?.name}</span>
              <a href={`https://github.com/${user?.nickname}`} target="_blank" rel="noopener noreferrer">
                https://github.com/{user?.nickname}
              </a>
            </div>
            <div className={styles.group}>
              <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Search City" />
              <span className={styles.buttons}>
                <button onClick={handleScreen} type="button">
                  Display Weather
                </button>
              </span>
            </div>
          </>
        );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {isLoggedIn ? (
          screens()
        ) : (
          <>
            <p>
              Welcome to the weather forecast web application. Please login with your Github user to use the application
              and view the weather in the city.
            </p>
            <LinkButton href="/api/auth/login">Login</LinkButton>
          </>
        )}
      </div>
    </div>
  );
};
