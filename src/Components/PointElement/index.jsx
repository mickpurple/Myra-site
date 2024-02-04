import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const PointElement = ({ classes, name, price, RightDir = false }) => {
  const pointRef = useRef();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    pointRef?.current?.addEventListener("mouseover", () => {
      setHover(true);
    });

    pointRef?.current?.addEventListener("mouseleave", () => {
      setHover(false);
    });
  }, []);

  //   animations
  useEffect(() => {
    gsap.fromTo(
      ".el_points",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.5,
      }
    );

    [
      { el: ".el_point1", delay: 0 },
      { el: ".el_point2", delay: 0.45 },
    ].map((curr) => {
      gsap.fromTo(
        curr.el,
        {
          opacity: 1,
          scale: 1,
        },
        {
          scale: 2,
          opacity: 0,
          delay: 1.5 + curr.delay,
          duration: 0.9,
          ease: "power1.out",
          repeat: -1,
        }
      );
    });
  }, []);

  useEffect(() => {
    if (hover) {
      gsap.fromTo(
        ".el_info",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
        }
      );

      gsap.fromTo(
        ".el_bag",
        {
          y: 8,
        },
        {
          y: 0,
          ease: "power2.out",
        }
      );
    }
  }, [hover]);

  return (
    <div className={`absolute z-20 ${classes} el_points`} ref={pointRef}>
      <div className="relative z-20">
        <div className="cursor-pointer relative z-20 flex items-center justify-center">
          <img
            src="./Images/icon_element.png"
            className="w-5 h-5 relative z-20"
          />
          <div className="bg-white rounded-full w-5 h-5 absolute animate-pings el_point1"></div>
          <div className="bg-white rounded-full w-5 h-5 absolute animate-pings el_point2"></div>
        </div>
        {hover && (
          <div
            className={`absolute z-10 flex text-white gap-3 -translate-y-[10%] w-[350px] el_info ${
              RightDir ? "translate-x-[5%]" : "-translate-x-[98%]"
            }`}
          >
            {RightDir && (
              <img
                src="./Images/arrow_pointer.png"
                className={`absolute left-0 w-[200px] object-cover -scale-x-100`}
              />
            )}
            <div className={`flex gap-3 ${RightDir && "ml-[220px]"}`}>
              <img
                src="./Images/icon_shopping_bag.png"
                className="w-[42px] h-[42px] mt-6 el_bag"
              />
              <div className="w-full h-full mt-5">
                <p className="whitespace-nowrap">{name}</p>
                <p className="font-medium">{price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="font-medium underline cursor-pointer">View</p>
                  <img src="./Images/arrow_short.png" className="w-4 h-auto" />
                </div>
              </div>
            </div>
            {!RightDir && (
              <img
                src="./Images/arrow_pointer.png"
                className={`absolute right-0 w-[200px] object-cover`}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
