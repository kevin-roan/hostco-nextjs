import Home from "./home/page";
import { Layout, ServiceCard } from "@/components";
import PricingPlan from "./plan/page";

export default function App() {
  return (
    <Layout>
      <Home />
      <section className="flex item-center justify-center gap-4 my-4 flex-wrap">
        {ServiceCardItems.map((item, index) => (
          <ServiceCard
            key={index}
            imgUrl={item.imgUrl}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
      </section>
      <PricingPlan />
    </Layout>
  );
}

const ServiceCardItems = [
  {
    imgUrl:
      "https://madebydesignesia.com/themes/hostco/demo/icons/booststrap-5.png",
    heading: "Bootstrap 5 Framework",
    desc: "Hostco using latest Bootstrap 5 framework. The most camplete and flexible framework for website development. ",
  },
  {
    imgUrl:
      "https://madebydesignesia.com/themes/hostco/demo/icons/elements.png",
    heading: "Tailored Elements",
    desc: "Hostco is equipped with tailored elements crafted for website hosting needs. Build your own hosting website in no time! ",
  },
  {
    imgUrl: "https://madebydesignesia.com/themes/hostco/demo/icons/flash.png",
    heading: "Speed Optimization",
    desc: "Say goodbye to frustrating load times and hello to a seamless online experience. Explore, engage, and enjoy without the wait!",
  },
  {
    imgUrl:
      "https://madebydesignesia.com/themes/hostco/demo/icons/responsive.png",
    heading: "Fully Responsive",
    desc: "Hostco has responsive layouts which can fit to all screens sizes so it looks great on any kind of devices. One website for all devices. ",
  },
];
