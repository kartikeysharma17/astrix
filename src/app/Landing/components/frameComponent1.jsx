"use client";

import { useMemo } from "react";

const FrameComponent1 = ({ item, Image, propWidth, propPadding }) => {
  const joinWaitlistLabelStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.437rem] max-w-full text-left text-[2rem] text-white font-astrix-beta-heading-s">
      <div
        className="w-[14.75rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border"
        style={joinWaitlistLabelStyle}
      >
        <b className="flex-1 relative leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
          <p className="m-0">{item.Title}</p>
          <p className="m-0 text-[1.5rem]">{item.SubTitle}</p>
        </b>
      </div>
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={Image}
      />
    </div>
  );
};

export default FrameComponent1;
