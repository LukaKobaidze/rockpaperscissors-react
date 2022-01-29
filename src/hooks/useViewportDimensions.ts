import { useEffect, useState } from 'react';

const getViewportDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const useViewportDimensions = () => {
  const [viewportDimensions, setViewportDimensions] = useState(
    getViewportDimensions()
  );

  useEffect(() => {
    const resizeHandler = () => {
      setViewportDimensions(getViewportDimensions());
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return viewportDimensions;
};

export default useViewportDimensions;
