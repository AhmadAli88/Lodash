import { useState, useEffect } from 'react';
import _ from 'lodash';

const ScrollComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = _.throttle(() => {
    setScrollY(window.scrollY);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>Scroll Y Position: {scrollY}</div>;
};

export default ScrollComponent