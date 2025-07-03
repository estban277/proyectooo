import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=8.0162&longitude=-62.4056&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
  const respuestas = await axios.get(API_URL);
  const nuevaTemperatura = respuestas.data.current.temperature_2m;
  return nuevaTemperatura;
}

