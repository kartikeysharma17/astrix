"use client";

import { useCallback, useState } from "react";
import FrameComponent1 from "./components/frameComponent1";
import FrameComponent2 from "./components/frameComponent2";
import EventHighlight from "./components/event";
import Data from "./components/collectionData";

const CollectionLanding = () => {
  const [toggle, setToggle] = useState("Collections");

  const onFrameClick = useCallback(() => {
    // Please sync "Event Landing" to the project
  }, []);

  return (
    <div className="w-full relative bg-palette-noble-black-700 overflow-hidden flex flex-row items-end justify-start pt-[1.437rem] pb-[2.187rem] pr-[0rem] pl-[2.437rem] box-border gap-[7.55rem] leading-[normal] tracking-[normal] text-left text-[8rem] text-gray-200 font-astrix-beta-heading-s mq750:gap-[5.063rem] mq450:gap-[2.5rem] mq1125:flex-wrap mq1125:pl-[1.25rem] mq1125:pr-[1.25rem] mq1125:box-border">
      <h1 className="!m-[0] w-[22.563rem] absolute bottom-[9.813rem] left-[2.125rem] text-inherit leading-[7.375rem] font-bold font-inherit flex items-center mq450:text-[2rem] mq450:leading-[2.938rem] mq1050:text-[3.188rem] mq1050:leading-[4.438rem]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">ASTRIX</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">COLLECTIBLE</p>
        </span>
      </h1>
      <div className="!m-[0] absolute h-full top-[0rem] right-[4.5rem] bottom-[0rem] flex flex-row items-end justify-start gap-[4.437rem] max-w-full text-[1.25rem] text-white  mq750:flex-wrap">
        <img
          className="h-[64rem] w-[5.688rem] relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/images/Roll.png"
        />
        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[30rem] box-border min-h-[32.75rem] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[0.875rem] mq450:flex-wrap">
            <div className="w-[9.375rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="self-stretch h-[2.5rem] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/images/22k.png"
              />
            </div>
            <div className="relative leading-[2.75rem] font-medium mq450:text-[1rem] mq450:leading-[2.188rem]">
              22k people interested
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.081rem] box-border max-w-full text-[2.5rem] text-palette-pac-man-500 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.25rem] max-w-full mq450:gap-[1.125rem]">
          <div className="w-[13.563rem] flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border relative">
            <img
              className="h-[4.638rem] w-[4.638rem] absolute !m-[0] top-[-0.5rem] left-[-1.487rem] object-contain"
              loading="lazy"
              alt=""
              src="/images/yellowAstrik.png"
            />
            <div className="flex-1 flex flex-row items-start justify-end">
              <h1 className="m-0 relative text-inherit tracking-[-0.25px] leading-[4rem] font-extrabold font-inherit mq450:text-[1.5rem] mq450:leading-[2.375rem] mq1050:text-[2rem] mq1050:leading-[3.188rem]">
                Astrix.
              </h1>
            </div>
          </div>
          <div className="self-stretch h-[47.5rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[1.75rem] box-border max-w-full">
            <div className="self-stretch w-[55.5rem] overflow-x-auto shrink-0 flex flex-row items-end justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border gap-[1.562rem] max-w-full z-[1]">
              <div className="self-stretch w-[50.188rem] shrink-0 flex flex-row items-start justify-start gap-[1.687rem] [debug_commit:1de1738]">
                {Data[toggle]?.map((item, index) => (
                  <FrameComponent1
                    key={index}
                    item={item}
                    propWidth="30rem"
                    propPadding="0rem 0.125rem"
                    Image={item.Image}
                  />
                ))}

                {/* <FrameComponent1
                  propWidth="30rem"
                  propPadding="0rem 0.125rem"
                  Image="/images/collection3.png"
                />
                <FrameComponent1
                  Image="/images/collection4.png"
                  propWidth="30rem"
                  propPadding="0rem 0.125rem"
                />
                <FrameComponent1
                  propWidth="30rem"
                  propPadding="0rem 0.125rem"
                  Image="/images/collection2.png"
                /> */}
              </div>
            </div>
          </div>
          <div className="w-[21.906rem] flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full text-center text-[1.125rem] text-gainsboro font-inter">
            <div className="flex-1 flex flex-row items-start justify-between pt-[1.05rem] pb-[1.331rem] pr-[1.625rem] pl-[3.025rem] box-border relative max-w-full gap-[1.25rem] mq450:flex-wrap mq450:pl-[1.25rem] mq450:box-border">
              <div className="h-full w-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0rem] rounded-81xl bg-darkslategray" />
              <button
                onClick={() => setToggle("Events")}
                className={`relative leading-[0.875rem] inline-block text-palette-pac-man-50 min-w-[6.494rem] z-[2] ${
                  toggle === "Events" ? "bg-darkslategray" : ""
                }`}
              >
                Events
              </button>
              <div className="h-full w-[10.225rem] absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] rounded-81xl bg-darkslategray z-[1]" />
              <button
                onClick={() => setToggle("Collections")}
                className={`relative leading-[0.875rem] inline-block text-palette-pac-man-50 min-w-[6.494rem] z-[2] ${
                  toggle == "Collections" ? " bg-red " : ""
                }`}
              >
                Collections
              </button>
            </div>
            <div
              className="h-[3.125rem] w-[8.75rem] relative overflow-hidden shrink-0 hidden cursor-pointer"
              onClick={onFrameClick}
            />
          </div>
        </div>
      </div>
      {toggle === "Collections" ? <FrameComponent2 /> : <EventHighlight />}
    </div>
  );
};
export default CollectionLanding;
