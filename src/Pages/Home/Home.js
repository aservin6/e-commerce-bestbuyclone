import Wrapper from "../../components/UI/Wrapper";
import DealOfTheDayWidget from "../../components/Widgets/DealOfTheDayWidget";
import IPadWidget from "../../components/Widgets/IPadWidget";
import OutletDealsWidget from "../../components/Widgets/OutletDealsWidget";
import TodaysTopPicksWidget from "../../components/Widgets/TodaysTopPicksWidget";
import TrendingProducts from "../../components/Widgets/TrendingProducts";
import WidgetContainer from "../../components/Widgets/WidgetContainer";

const Home = () => {
  return (
    <>
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
