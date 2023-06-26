import { useEffect } from 'react';
import { useLayoutEffect, useRef } from 'react';

const Layout = () => {
  const elementRef = useRef(null); // {current: elemet}

  useEffect(() => {
    console.log('use effect will render in last');
  });

  useLayoutEffect(() => {
    const element = elementRef.current;
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    // Update DOM or trigger other synchronous actions
    // ...

    console.log('Element width:', width, height);
  });
  return (
    <div>
      <div ref={elementRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          numquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repudiandae excepturi labore perspiciatis tempore ipsam, aperiam dicta
          voluptatibus enim ipsum reiciendis, ab doloremque error, aliquam
          quidem sit eligendi cupiditate eaque voluptates.
        </p>
      </div>
    </div>
  );
};

export default Layout;
