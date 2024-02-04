import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar";
import { PointElement } from "../../Components/PointElement";
import "./index.css";
import gsap from "gsap";

export const Header = () => {
  // animations
  useEffect(() => {
    gsap.fromTo(
      ".header-text",
      { opacity: 0, x: "100%" },
      { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".header-images",
      { zIndex: 100 },
      { zIndex: 1, duration: 1.5 }
    );

    gsap.fromTo(
      ".info-texts",
      { y: 20, opacity: 0 },
      { y: 0, delay: 1, opacity: 1 }
    );

    gsap.fromTo(
      ".nav-buttons",
      { x: 40, scaleX: 4, opacity: 0 },
      { x: 0, scaleX: 1, delay: 1, opacity: 1, stagger: 0.2 }
    );
  }, []);
  return (
    <>
      <Navbar />
      <div className="parentDiv relative h-screen overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-center">
          {/* image and its elements */}
          <div className="absolute w-full h-full flex items-center justify-center header-images">
            <img
              src="./Images/model_1.png"
              className="w-auto h-full absolute object-cover pointer-events-none"
            />

            <PointElement
              classes={"mb-[5%] -translate-x-[40%]"}
              name={"Gold Knot Earrings"}
              price={"$7,499"}
            />
            <PointElement
              classes={"ml-[13%] bottom-[28%]"}
              name={"Gold Lock Chain"}
              price={"$9,999"}
              RightDir={true}
            />
          </div>

          {/* persistent elements of header */}
          <div className="relative w-full h-full mx-20">
            <p className="text-white text-[62px] leading-[74.4px] absolute top-52 header-text">
              Every moment deserves
              <br />a little elegance.
            </p>
            <div className="absolute bottom-20 text-white info-texts">
              <p className="text-white text-base mb-5 max-w-[342px]">
                Explore jewellery that celebrates your unique style, from
                everyday elegance to statement pieces, meticulously crafted to
                suit every occasion.
              </p>
              <div className="flex gap-2 items-center cursor-pointer w-fit">
                <p className="underline">Shop our New Collection</p>
                <img src="./Images/arrow_long.png" className="w-7 h-full" />
              </div>
            </div>

            {/* switch element */}
            <div className="flex flex-col gap-1 h-full justify-center items-end absolute right-0">
              <div className="w-10 h-[5px] my-3 bg-white nav-buttons"></div>
              {[1, 2, 3].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-5 py-3 hover:w-10 transition-[width] cursor-pointer nav-buttons"
                  >
                    <div className="w-full h-[1px] bg-white"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
