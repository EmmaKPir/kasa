import React, { useState } from 'react';
import chevron from '../assets/chevron.png';

function Collapse({ collapse, title, text }) {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleToggle = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
      <div className="kasa-collapse">
        <p className='kasa-quality'>{title}</p>
        <button onClick={handleToggle}>
          <img
            src={chevron}
            alt='chevron'
            className={`toogle ${openCollapse ? 'rotate180' : 'reverse'}`}
          />
       </button>
        <div key={collapse} className={`kasa-description ${openCollapse ? 'openText' : 'closeText'}`}>
          {text}
        </div>
    </div>
  );
}

export default Collapse;
