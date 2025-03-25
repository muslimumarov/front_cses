import { Banner } from "../../core/components/templates/banner";
import Services from "../../core/components/templates/services/Services.tsx";
import NewsCarousel from "../../core/components/templates/news/NewsCarousel.tsx";
import Statistics from "../../core/components/templates/statistics/Statistics.tsx";
import Partners from "../../core/components/templates/partners/Partners.tsx";
import Footer from "../../core/components/templates/footer/Footer.tsx";
import ChatBot from "../../core/components/templates/chatBot/ChatBot.tsx";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={"relative -mt-24 mb-20"}>
        <Services />
      </div>
      <NewsCarousel />
      <Statistics />
      <Partners />
      <Footer />
      <ChatBot />
    </>
  );
};

export default Home;
