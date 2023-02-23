import { useEffect, useState } from 'react';

interface MeteoApi {
  city_info: {
    name: string;
    sunrise: string;
    sunset: string;
  };
  current_condition: {
    tmp: number;
    humidity: number;
    condition: string;
    icon_big: string;
  };
}
const App = () => {
  const [meteoJour, setMeteoJour] = useState<MeteoApi | null>(null);
  /**
   * Le useEffect permet de déclencher une action
   * (ici call API) lors du chargement du composant
   */
  useEffect(() => {
    fetch('https://www.prevision-meteo.ch/services/json/Chambly')
      .then((response) => {
        return response.json();
      })
      .then((data: MeteoApi) => {
        console.log(data);
        console.log('Temperature', data.current_condition.tmp);
        console.log('Temps du jour', data.current_condition.condition);
        setMeteoJour({ ...data });
      });
  }, []);

  return (
    <div className='App d-flex flex-column'>
      <div className='card' style={{ width: '12%' }}>
        {/* <div className='card-body h-25'> */}
        <div className='card-title h-25'>
          Metéo de {meteoJour?.city_info.name}
          <img
            src={meteoJour?.current_condition.icon_big}
            className='card-img-top w-25 m-auto'
            alt='icon'
          />
          {/* <ul className='card-text h-25'> */}
          Temperature: {meteoJour?.current_condition.tmp}°C --- Humidité:{' '}
          {meteoJour?.current_condition.humidity}%
        </div>
        {/* </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
