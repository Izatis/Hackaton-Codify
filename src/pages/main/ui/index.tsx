import Hero from "../sections/hero";
import Information from "../sections/information";
import Statistics from "../sections/statistics";
import Quote from "../sections/quote";
import FamiliarizationFirst from "../sections/familiarization-first";
import FamiliarizationSecond from "../sections/familiarization-second";
import FamiliarizationThird from "../sections/familiarization-third";
import FamiliarizationFourth from "../sections/familiarization-fourth";
import About from "../sections/about";

const index = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      <Information />
      <Quote />
      <FamiliarizationFirst/>
      <FamiliarizationSecond/>
      <FamiliarizationThird/>
      <FamiliarizationFourth/>
      <About/>
    </main>
  );
};

export default index;
