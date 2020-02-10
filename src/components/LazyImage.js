import React, { useCallback, useState } from 'react';
import bound from 'react-bounds.js';

const BoundImg = bound.img({ threshold: [.5] });

function LazyImage({ src }) {
  // eslint-disable-next-line
  const [active, setActive] = useState(false)
  const [imgClass, setImgClass] = useState('')
  const handleEnter = useCallback((el, ratio) => {
    if(ratio > .3 && !active)
      setActive(true)
  }, [])
  return (
    <BoundImg
      className={imgClass}
      onLoad={() => setImgClass('active')}
      onEnter={handleEnter}
      src={active ? src : ''}
    />
  )
}

export default LazyImage