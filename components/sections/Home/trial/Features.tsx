import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";
import FeatureFour from "./FeatureFour";

const Features = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureOne />
          <FeatureFour />
          <FeatureThree />
          <FeatureTwo />
        </div>
      </div>
    </section>
  );
};

export default Features;