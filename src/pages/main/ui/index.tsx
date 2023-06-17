import Hero from "../sections/hero";
import Information from "../sections/information";
import Statistics from "../sections/statistics";
import Quote from "../sections/quote";
import FamiliarizationFirst from "../sections/familiarization-first";

const index = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      <Information />
      <Quote />
      <FamiliarizationFirst/>
    </main>
  );
};

export default index;
