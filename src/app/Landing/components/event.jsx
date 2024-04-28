const EventHighlight = () => {
  return (
    <div className="w-[28rem] flex flex-col items-start justify-start gap-[3.187rem] min-w-[28rem] max-w-full text-left text-[1.625rem] text-white font-astrix-beta-heading-s mq750:min-w-full mq450:gap-[1.563rem] mq1125:flex-1">
      <h3 className="m-0 w-[18rem] relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block mq450:text-[1.313rem]">
        Explore Youre First Event
      </h3>
      <div className="w-[24.063rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.187rem] box-border gap-[1.312rem] max-w-full text-[3.563rem]">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-[2.125rem] mq1050:text-[2.875rem]">
          Event Name
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[1.375rem]">
          <img
            className="h-[1.688rem] w-[1.688rem] absolute !m-[0] bottom-[0rem] left-[0.375rem]"
            loading="lazy"
            alt=""
            src="/icons-2.svg"
          />
          <img
            className="h-[1.688rem] w-[1.688rem] absolute !m-[0] bottom-[0rem] left-[8.75rem]"
            loading="lazy"
            alt=""
            src="/icons-3.svg"
          />
          <div className="flex-1 flex flex-row items-start justify-end max-w-full">
            <div className="w-[22.438rem] flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem] mq450:flex-wrap">
              <div className="relative leading-[1.75rem] font-semibold inline-block min-w-[4.25rem] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                Venue
              </div>
              <div className="relative leading-[1.75rem] font-semibold whitespace-nowrap mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                04/3/2024 @19:00
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border max-w-full text-[1rem]">
          <div className="flex-1 relative tracking-[0.15px] leading-[1.5rem] font-semibold">{`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[8.687rem]">
        <img
          className="h-[9.375rem] w-[9.063rem] relative rounded-lg overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/images/scanner.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.312rem]">
        <button className="cursor-pointer [border:none] py-[0.625rem] px-[1.25rem] bg-palette-pac-man-500 rounded-21xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-goldenrod">
          <b className="relative text-[1.5rem] leading-[2rem] font-astrix-beta-heading-s text-palette-noble-black-600 text-left">
            Join Waitlist
          </b>
        </button>
      </div>
    </div>
  );
};
export default EventHighlight;
