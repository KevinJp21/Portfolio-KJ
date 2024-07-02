import React from 'react';

const Image = ({ src, alt, width, height }) => (
  <picture>
    <img decoding="async" src={src} alt={alt} width={width} height={height} />
  </picture>
);

export default Image;