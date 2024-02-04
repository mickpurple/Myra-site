import { useEffect } from "react";
import gsap from "gsap";

export const Navbar = () => {
  // animations
  useEffect(() => {
    gsap.fromTo(
      ".nav-parent",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div className="absolute z-10 top-0 w-full nav-parent">
      <div className="relative h-[100px] text-white mx-20 mt-8 bg-red-100s flex flex-col justify-between">
        <div className="grid grid-cols-3">
          <div className="flex gap-8">
            <div className="flex gap-2 items-center cursor-pointer">
              <p className="text-2xl font-medium">INR</p>
              <img src="/Images/icon_chevron.png" className="w-6 h-6" />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="/Images/icon_location.png" className="w-6 h-6" />
              <p className="text-lg font-medium">All Stores</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/Images/logo.png"
              alt="Myra"
              className="w-[128px] h-auto cursor-pointer"
            />
          </div>
          <div className="flex gap-6 justify-end">
            <img
              src="/Images/icon_search.png"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="/Images/icon_cart.png"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="/Images/icon_account.png"
              className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-lg font-medium">All Jewllery</p>
            <img src="/Images/icon_chevron.png" className="w-6 h-6" />
          </div>
          <p className="text-lg font-medium cursor-pointer">New Arrivals</p>
          <p className="text-lg font-medium cursor-pointer">Earrings</p>
          <p className="text-lg font-medium cursor-pointer">Pendants</p>
          <p className="text-lg font-medium cursor-pointer">Bangles</p>
          <p className="text-lg font-medium cursor-pointer">Necklace</p>
          <p className="text-lg font-medium cursor-pointer">Offers</p>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-lg font-medium">Gifts</p>
            <img src="/Images/icon_chevron.png" className="w-6 h-6" />
          </div>
          <p className="text-lg font-medium cursor-pointer">Blog</p>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-lg font-medium">Contact</p>
            <img src="/Images/icon_chevron.png" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
