import imageFirst from "shared/image/imageFirst.png";
import imageSecond from "shared/imageSecond.png";
import imageThird from "shared/imageThird.png";
import imageFourth from "shared/imageFourth.png";
import imageFifth from "shared/avatar.png";

import Hero from "../sections/hero/hero";
import Information from "../sections/information";
import Statistics from "../sections/statistics/statistics";
import Slide from "../slider/slider";

const index = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      {/* <Slide /> */}
      <Information
        image={imageFirst}
        title={
          "Коммуна 2.0, платформа где люди делают мир лучше вокруг себя, обсуждая насущные проблемы."
        }
        descrition={
          "Небезразличие в обществе — это не только осознание проблем и недостатков, но и активное стремление к их решению и созданию справедливых условий для всех."
        }
      />
      ;
      <Information image={imageFirst} title={""} descrition={""} />;
      <Information image={imageThird} title={""} descrition={""} />;
      <Information image={imageFourth} title={""} descrition={""} />;
      <Information image={imageFifth} title={""} descrition={""} />;
    </main>
  );
};

export default index;
