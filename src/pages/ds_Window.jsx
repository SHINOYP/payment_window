import React from 'react';
import { Navigate } from 'react-router-dom';
import Component1 from '../componets/pay_Confirm';
import Component2 from '../componets/pay_Summery';

function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {isMobile ? (
        <div>
             <Navigate to='/summary'/> 
        </div>
      ) : (
        <div className='md:mx-40 '>
           <Component1/>
           <Component2/>
        </div>
      )}
    </div>
  );
}

export default App;
