import React, { useRef } from 'react';
const AboutUs = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://assets4.lottiefiles.com/packages/lf20_M9p23l.json"
        style={{ width: '100%', height: '100%' }}
      ></lottie-player>
    </div>
  );
};

export default AboutUs;
