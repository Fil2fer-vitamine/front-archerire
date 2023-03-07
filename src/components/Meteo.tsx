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
  fcst_day_0: {
    day_long: string;
    date: string;
    condition: string;
  };
  fcst_day_1: {
    day_long: string;
    date: string;
    condition: string;
  };
  fcst_day_2: {
    day_long: string;
    date: string;
    condition: string;
  };
  fcst_day_3: {
    day_long: string;
    date: string;
    condition: string;
  };
  fcst_day_4: {
    day_long: string;
    date: string;
    condition: string;
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
        // console.log(data);
        // console.log('Temperature', data.current_condition.tmp);
        // console.log('Temps du jour', data.current_condition.condition);
        setMeteoJour({ ...data });
      });
  }, []);

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='App col d-flex'>
          <div className='card' style={{ width: '20%' }}>
            {/* <div className='card-body h-25'> */}
            <div className='card-title h-25'>
              Metéo actuelle à {meteoJour?.city_info.name}
              <img
                src={meteoJour?.current_condition.icon_big}
                className='card-img-top w-25 m-auto'
                alt='icon'
              />
              {/* <ul className='card-text h-25'> */}
              Température: {meteoJour?.current_condition.tmp}°C Humidité:{' '}
              {meteoJour?.current_condition.humidity}%
            </div>
            {/* </ul> */}
            {/* </div> */}
          </div>
          {/* ------------------------------------------------------------- */}
          <div className='container text-center'>
            <div className='row'>
              {/* <div className='App col d-flex flex-column'>
                <div className='card' style={{ width: '100%' }}>
                  <div className='card-title h-25'>
                    Prévisions pour {meteoJour?.fcst_day_0.day_long} : {''}
                    {meteoJour?.fcst_day_0.condition}
                  </div>
                </div>
              </div> */}
              <div className='App col d-flex flex-column'>
                <div className='card' style={{ width: '100%' }}>
                  <div className='card-title h-25'>
                    Prévisions pour {meteoJour?.fcst_day_1.day_long} : {''}
                    {meteoJour?.fcst_day_1.condition}
                  </div>
                </div>
              </div>
              <div className='App col d-flex flex-column'>
                <div className='card' style={{ width: '100%' }}>
                  <div className='card-title h-25'>
                    Prévisions pour {meteoJour?.fcst_day_2.day_long} : {''}
                    {meteoJour?.fcst_day_2.condition}
                  </div>
                </div>
              </div>
              <div className='App col d-flex flex-column'>
                <div className='card' style={{ width: '100%' }}>
                  <div className='card-title h-25'>
                    Prévisions pour {meteoJour?.fcst_day_3.day_long} : {''}
                    {meteoJour?.fcst_day_3.condition}
                  </div>
                </div>
              </div>
              <div className='App col d-flex flex-column'>
                <div className='card' style={{ width: '100%' }}>
                  <div className='card-title h-25'>
                    Prévisions pour {meteoJour?.fcst_day_4.day_long} : {''}
                    {meteoJour?.fcst_day_4.condition}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
