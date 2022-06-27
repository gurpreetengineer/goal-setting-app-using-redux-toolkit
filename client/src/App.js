import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loadingio-eclipse">
        <div className="ldio-rpinwye8j0b">
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
function App() {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
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
