import { useEffect, useState } from 'react';
import _ from 'lodash';

const ThrottleComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
console.log("scrollPosition", scrollPosition)
  const handleScroll = _.throttle(() => {
    setScrollPosition(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>Scroll Position: {scrollPosition}</div>;
};
export default ThrottleComponent;