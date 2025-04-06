import React, { useState, useEffect } from 'react';
import api from './services/api';
import CountryCard from './components/CountryCard';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/all');
        const desiredCountries = ['United States', 'Russia', 'United Kingdom', 'Spain', 'Brazil'];
        const filtered = response.data.filter((country) =>
          desiredCountries.includes(country.name.common)
        );
        setCountries(filtered);
      } catch (error) {
        console.error('Erro ao buscar países:', error);
      }
    }

    fetchData();
  }, []);

  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement('h1', null, 'Países Selecionados 🌍'),
    React.createElement(
      'div',
      { className: 'grid' },
      countries.map((country) =>
        React.createElement(CountryCard, {
          key: country.cca3,
          flag: country.flags?.svg,
          name: country.name.common,
          capital: country.capital?.[0] || 'N/A',
          population: country.population,
        })
      )
    )
  );
}

export default App;