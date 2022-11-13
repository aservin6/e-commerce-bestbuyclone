import Wrapper from "../../components/UI/Wrapper";
import DealOfTheDayWidget from "../../components/Widgets/DealOfTheDayWidget";
import IPadWidget from "../../components/Widgets/IPadWidget";
import OutletDealsWidget from "../../components/Widgets/OutletDealsWidget";
import TodaysTopPicksWidget from "../../components/Widgets/TodaysTopPicksWidget";
import TrendingProducts from "../../components/Widgets/TrendingProducts";
import WidgetContainer from "../../components/Widgets/WidgetContainer";

const Home = () => {
  return (
    <Wrapper bgColor={"bg-white"}>
      <section id="widget-section" className="bg-lightGray px-3 lg:px-0">
        <WidgetContainer>
          <IPadWidget />
          <TodaysTopPicksWidget />
          <div className="grid md:grid-cols-2 gap-6">
            <OutletDealsWidget />
            <DealOfTheDayWidget />
          </div>
        </WidgetContainer>
      </section>
      <section id="trending-section" className="bg-white px-3 lg:px-0">
        <TrendingProducts />
      </section>
    </Wrapper>
  );
};

export default Home;
