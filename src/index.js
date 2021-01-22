import React from 'react';
import ReactDOM from 'react-dom';

const favoriteColors = React.createElement('li', { className: 'favoriteColors' }, 'Red',
      React.createElement('li', { className: 'favoriteColors' }, 'Blue', React.createElement('li', { className: 'favoriteColors' }, 'Green')));
const favoriteMusic = React.createElement('li', { className: 'favoriteMusic' }, 'Christian Rock',
      React.createElement('li', { className: 'favoriteMusic' }, 'Worship', React.createElement('li', { className: 'favoriteMusic' }, 'Gospel')));
const favoriteFood = React.createElement('li', { className: 'favoriteFood' }, 'Lazagna', React.createElement('li', { className: 'favoriteFood' }, 'Steak', React.createElement('li', { className: 'favoriteFood' }, 'Tacos')));
const favoriteWebsites = React.createElement('li', { className: 'favoriteWebsites' }, React.createElement('a', { href: 'https://www.google.com' }, 'Google'),
      React.createElement('li', { className: 'favoriteWebsites' }, React.createElement('a', { href: 'https://www.msn.com' }, 'Microsoft'), React.createElement('li', { className: 'favoriteWebsites' }, React.createElement('a', { href: 'https://www.yahoo.com' }, 'Yahoo'))));






ReactDOM.render(
      React.createElement('ul', {}, React.createElement('h1', { className: 'favoriteThings' }, 'My Favorite Things'),
            React.createElement('li', {}, 'Favorite Colors', React.createElement('ol', { className: 'favoriteColors' }, favoriteColors)),
            React.createElement('li', {}, 'Favorite Music', React.createElement('ol', { className: 'favoriteMusic' }, favoriteMusic)),
            React.createElement('li', {}, 'Favorite Food', React.createElement('ol', { className: 'favoriteFood' }, favoriteFood)),
            React.createElement('li', {}, 'Favorite Websites', React.createElement('ol', { className: 'favoriteWebsites' }, favoriteWebsites)),
      ),
      document.getElementById('root')
);
