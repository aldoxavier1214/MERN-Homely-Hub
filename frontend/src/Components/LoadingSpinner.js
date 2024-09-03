// import React from 'react';

// const LoadingSpinner = () => {
//   return (
//     <div className="text-center" style={{marginTop:"2rem"}}>
//     <div className="spinner-border" role="status">

//     </div>
//     </div>
//   )
// }

// export default LoadingSpinner;
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="text-center" style={{ marginTop: '2rem' }}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p style={{ marginTop: '0.5rem' }}>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
