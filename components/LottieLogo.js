import React, { useRef } from 'react';
const LottieLogo = () => {
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
        mode="normal"
        src="https://assets8.lottiefiles.com/packages/lf20_ot5gqdfc.json"
        style={{ width: '100%', height: '100%' }}
      ></lottie-player>
    </div>
  );
};

export default LottieLogo;
