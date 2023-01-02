import Wrapper from "../../components/UI/Wrapper";
import DealOfTheDayWidget from "../../components/Widgets/DealOfTheDayWidget";
import IPadWidget from "../../components/Widgets/IPadWidget";
import OutletDealsWidget from "../../components/Widgets/OutletDealsWidget";
import TodaysTopPicksWidget from "../../components/Widgets/TodaysTopPicksWidget";
import TrendingProducts from "../../components/Widgets/TrendingProducts";
import WidgetContainer from "../../components/Widgets/WidgetContainer";
import { useState } from "react";

const Home = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const hideDisclaimer = () => setShowDisclaimer(false);
  return (
    <>
      {showDisclaimer && (
        <div
          onClick={hideDisclaimer}
          className="fixed top-0 left-0 z-50 w-full h-screen bg-opacity-80 bg-dark"
        >
          <span className="fixed z-50 max-w-4xl text-2xl font-semibold text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">Disclaimer: This projects API account is currently undergoing an approval process, some products may not load due to restricted API access. Click screen to continue.</span>

        </div>
      )}
      <Wrapper bgColor={"bg-white"}>
        <section id="widget-section" className="px-3 bg-lightGray lg:px-0">
          <WidgetContainer>
            <IPadWidget />
            <TodaysTopPicksWidget />
            <div className="grid gap-6 md:grid-cols-2">
              <OutletDealsWidget />
              <DealOfTheDayWidget />
            </div>
          </WidgetContainer>
        </section>
        <section id="trending-section" className="px-3 bg-white lg:px-0">
          <TrendingProducts />
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
