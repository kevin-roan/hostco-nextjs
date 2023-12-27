import Image from "next/image";
import React from "react";

const animatedImages = [
  "https://madebydesignesia.com/themes/hostco/demo/preview/homepage-7.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/homepage-3.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/homepage-5.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/homepage-7.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/homepage-3.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/domain-top-level.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/domain-top-level.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/homepage-3.jpg",
  "https://madebydesignesia.com/themes/hostco/demo/preview/domain-top-level.jpg",
];

function Home() {
  return (
    <main className="flex  p-0 items-center justify-center h-[83vh]">
      <section className="flex-1">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="font-semibold text-6xl">
            The only hosting theme you ever need to buy!
          </h1>
          <p className="text-[grey] text-xl">
            Hostco offers a sophisticated online presence for your hosting
            business. Created by a ThemeForest author with over 15 years of
            experience.
          </p>
          <div className="button_container flex gap-4">
            <button className="bg-[var(--primary-dark)] text-white px-14 py-3 rounded-[100px] font-bold">
              Purchae Hostco
            </button>
            <button className="bg-white text-black border-2 px-14 py-3 rounded-[100px] font-bold">
              Explore All Pages
            </button>
          </div>
        </div>
      </section>
      <section className="flex-1 border-2 h-[100%] overflow-hidden bg-grey overflow-y-auto ">
        {animatedImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="animted image"
            height={"400"}
            width={"400"}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
