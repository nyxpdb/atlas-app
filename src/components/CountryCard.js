import React from 'react';
import './CountryCard.css';

function CountryCard({ flag, name, capital, population }) {
  return React.createElement(
    'div',
    { className: 'card' },
    React.createElement('img', {
      src: flag,
      alt: `Bandeira de ${name}`,
      className: 'flag',
    }),
    React.createElement('h2', null, name),
    React.createElement('p', null, React.createElement('strong', null, 'Capital: '), capital),
    React.createElement('p', null, React.createElement('strong', null, 'População: '), population.toLocaleString())
  );
}

export default CountryCard;