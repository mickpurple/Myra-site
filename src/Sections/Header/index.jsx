import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar";
import { PointElement } from "../../Components/PointElement";
import "./index.css";
import gsap from "gsap";

import img_model1 from "../../../src/Images/model_1.png";
import img_model2 from "../../../src/Images/model_2.png";
import img_arrowLong from "../../../src/Images/arrow_long.png";

export const Header = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [imgSrc, setImgSrc] = useState(img_model1);

  // page lopp functionality
  let looping = false;

  const loop = () => {
    setTimeout(() => {
      setPage((page) => (page + 1) % 4 || 4);
      loop();
    }, 5500);
  };

  useEffect(() => {
    // use effect sometimes runs twice, (specially on dev build), a check is implemented to prevent bugs
    if (!looping) {
      looping = true;
      loop();
    }

    // animations
    gsap.fromTo(
      ".header-text",
      { opacity: 0, x: "100%" },
      { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(".header-image", { zIndex: 100 }, { zIndex: 1, duration: 1.5 });

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

  useEffect(() => {
    console.log("page", page);
    if (page == 1 || page == 3) {
      gsap.to(".parent-div", { backgroundColor: "#ffb8ea" });
    } else if (page == 2 || page == 4) {
      gsap.to(".parent-div", { backgroundColor: "#ffc8a0" });
    }

    if (!firstLoad) {
      const tl = gsap.timeline();
      tl.to(".header-image", {
        opacity: 0,
        scale: 1,
        y: 20,
        duration: 0.5,
        ease: "power2.inOut",
      });
      tl.to(".header-image", { duration: 0.2 });
      tl.to(".header-image", {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power2",
      });
    } else {
      gsap.fromTo(
        ".header-image",
        { opacity: 0.5, y: 20 },
        { opacity: 1, y: 0 }
      );
    }

    //change image source after 0.55s
    setTimeout(() => {
      if (firstLoad) {
        setFirstLoad(false);
      }
      setImgSrc(
        page == 1
          ? img_model1
          : page == 2
          ? img_model2
          : page == 3
          ? img_model1
          : img_model2
      );
    }, 550);
  }, [page]);

  return (
    <>
      <Navbar />
      <div className={`parentDiv parent-div relative h-screen overflow-hidden`}>
        <div className="relative h-full w-full flex items-center justify-center">
          {/* image and its elements */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <img
              src={imgSrc}
              alt=""
              className="w-auto h-full absolute object-cover pointer-events-none header-image"
            />

            {(page == 1 || page == 3) && (
              <>
                <PointElement
                  classes={"mb-[5%] -translate-x-[40%]"}
                  name={"Gold Knot Earrings"}
                  price={"$899"}
                />
                <PointElement
                  classes={"ml-[13%] bottom-[28%]"}
                  name={"Gold Lock Chain"}
                  price={"$1,099"}
                  RightDir={true}
                />
              </>
            )}

            {(page == 2 || page == 4) && (
              <>
                <PointElement
                  classes={"mb-[12%] ml-[4%]"}
                  name={"Dangling Petal Earrings"}
                  price={"$499"}
                />
                <PointElement
                  classes={"ml-[2%] bottom-[42%]"}
                  name={"Opaque Flower Ring"}
                  price={"$199"}
                  RightDir={true}
                />
              </>
            )}
          </div>

          {/* persistent elements of header */}
          <div className="relative w-full h-full mx-20 z-10">
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
              <div className="flex gap-2 items-center cursor-pointer w-fit hyperText">
                <p className="underline">Shop our New Collection</p>
                <img src={img_arrowLong} className="w-7 h-full" />
              </div>
            </div>

            {/* switch element */}
            <div className="flex flex-col gap-1 h-full justify-center items-end absolute right-0">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setPage(index + 1);
                    }}
                    className={`${
                      page == index + 1 ? "w-10" : "w-5"
                    } py-3 hover:w-10 transition-[width] cursor-pointer nav-buttons`}
                  >
                    <div
                      className={`${
                        page == index + 1 ? "h-[5px]" : "h-[1px]"
                      } w-full bg-white`}
                    ></div>
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
