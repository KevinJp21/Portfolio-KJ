import React from 'react';
import './ToolBadge.css'; 

const ToolBadge = ({ icon, name, className }) => {
  return (
    <li className={`ToolBadge ${className}`}>
      <span>
        {icon}
        {name}
      </span>
    </li>
  );
}

export default ToolBadge;
