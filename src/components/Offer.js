import { Fade } from "react-awesome-reveal";
import "animate.css";

const Offer = () => {
  return (
    <div>
      <Fade
        cascade
        triggerOnce
        damping={0.1}
      >
        <p className='animate__animated animate__bounce'>I enter first...</p>
        <p>...then comes my turn...</p>
        <p>...and finally you see me!</p>
      </Fade>
    </div>
  );
};
export default Offer;
