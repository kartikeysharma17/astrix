"use client";
import CollectibleData from "./collectibleData";
const FrameComponent2 = () => {
  return (
    <div className="w-[28rem] flex flex-col items-start justify-start gap-[3.187rem] min-w-[28rem] max-w-full text-left text-[1.625rem] text-white font-astrix-beta-heading-s mq750:min-w-full mq450:gap-[1.563rem] mq1125:flex-1">
      <h3 className="m-0 w-[21.313rem] relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-full mq450:text-[1.313rem]">
        Explore Your First Collectible
      </h3>
      <div className="w-[21rem] flex flex-col items-start justify-start pt-[0rem] pb-[4.625rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.75rem] max-w-full text-[3.563rem] mq450:pb-[3rem] mq450:box-border">
        <h1 className="m-0 w-[18.75rem] h-[8.875rem] relative text-inherit tracking-[-0.25px] leading-[4rem] font-extrabold font-inherit inline-block shrink-0 mq450:text-[2.125rem] mq450:leading-[2.375rem] mq1050:text-[2.875rem] mq1050:leading-[3.188rem]">
          Meta Lives
        </h1>
        <b className="w-[15.938rem] relative text-[1.5rem] leading-[2rem] inline-block mq450:text-[1.188rem] mq450:leading-[1.625rem]">
          Live in Astrix
        </b>
        <div className="self-stretch h-[6.5rem] relative text-[1rem] tracking-[0.15px] leading-[1.5rem] font-semibold inline-block shrink-0">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.
        </div>
      </div>

      <div className="h-[18.188rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.937rem] box-border gap-[1.062rem] max-w-full text-[0.875rem]">
        <div className="relative font-semibold inline-block min-w-[5.063rem]">
          Collectibles
        </div>
        <div className="w-[28rem] flex-1 overflow-x-auto flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.025rem] box-border gap-[1.056rem] max-w-full text-[0.419rem] font-inter">
          {CollectibleData.map((item) => (
            <>
              <div className="self-stretch w-[10.256rem] rounded-[8.96px] bg-mediumpurple overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0.662rem] px-[0.631rem] pb-[0.631rem] box-border gap-[0.506rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="rounded-[8.96px] bg-black overflow-hidden flex flex-row items-start justify-start pt-[0.037rem] pb-[0.056rem] pr-[0.35rem] pl-[0.381rem]">
                    <b className="relative inline-block min-w-[1.125rem]">
                      {item.year}
                    </b>
                  </div>
                  <div className="relative text-[0.488rem] text-black inline-block min-w-[2.063rem]">
                    <span className="font-semibold"> {item.name}</span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.562rem] pl-[1.575rem] text-[0.7rem] text-black font-astrix-beta-heading-s">
                  <div className="relative font-medium inline-block min-w-[5.875rem] whitespace-nowrap">
                    Collectible Name
                  </div>
                </div>
                <img
                  className="self-stretch flex-1 relative rounded-[8.96px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src={item.Image}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[3.187rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <button className="cursor-pointer border-none py-[0.625rem] px-[1.25rem] bg-palette-pac-man-500 rounded-21xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-goldenrod">
          <b className="relative text-[1.5rem] leading-[2rem] font-astrix-beta-heading-s text-palette-noble-black-600 text-left">
            Join Waitlist
          </b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
