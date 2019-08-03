import React from 'react';
import SearchPageContainer from '../../pages/SearchPage/SearchPageContainer';
import Provider from '../../store/store';
import './App.css';

const App = () => (
  <Provider>
    <div className="App">
      <header className="App__Header">
        Indie Film
      </header>
      <SearchPageContainer />
      <footer>
        Footer
      </footer>
    </div>
  </Provider>
);

export default App;
