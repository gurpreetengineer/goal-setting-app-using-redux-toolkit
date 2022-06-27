import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';

function App() {
  return (
    <Fragment>
      <Suspense fallback={<p>Loading ...</p>}>
        <Router>
          <div className='container'>
            <CustomRoutes />
          </div>
        </Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
