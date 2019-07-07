import React from 'react';

const SearchPage = ({movieDbResults}) => (
  <div 
    className='SearchPage' 
    data-testid='SearchPage'
  >
    SearchPage
    <pre>
      {movieDbResults 
        ? JSON.stringify(movieDbResults, null, 2)
        : <div>loading</div>
      }
    </pre>
  </div>
);

export default SearchPage;