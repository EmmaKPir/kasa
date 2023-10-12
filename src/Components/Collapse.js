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
      {openCollapse && (
        <div key={collapse} className={`toogle kasa-container-description ${openCollapse ? 'openText' : 'closeText'}`}>
          <p className={`toogle kasa-description ${openCollapse ? 'openText' : 'closeText'}`}>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
