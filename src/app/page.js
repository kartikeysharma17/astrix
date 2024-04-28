"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    const handleClick = () => {
      router.push("/Landing"); // Replace "/your-page" with the path you want to redirect to
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <div className="w-full relative bg-antiquewhite overflow-hidden flex flex-col items-start justify-start pt-[6.125rem] px-[7.937rem] pb-[17.5rem] box-border gap-[9.375rem] leading-[normal] tracking-[normal] text-left text-[2.75rem] text-black font-space-grotesk mq750:gap-[4.688rem] mq750:pl-[3.938rem] mq750:pr-[3.938rem] mq750:box-border mq450:gap-[2.313rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border bg-[#fff4df]">
      <b className="h-[1.938rem] relative inline-block mq750:text-[2.188rem] mq450:text-[1.625rem]">
        Astrix.
      </b>
      <img
        className="w-[3.563rem] h-[3.181rem] absolute !m-[0] top-[5.5rem] left-[3.125rem] object-contain"
        loading="lazy"
        alt=""
        src="/images/Emlblem.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-left text-[4rem] text-black font-lexend">
        <div className="">
          <p className="flex hero-row">
            <span>WE</span>
            <span className="">
              <img src="/images/Frame1.png" alt="" />
            </span>
            <span className="increasing-width">ORGANIZE THE</span>
          </p>
          <p className="flex hero-row">
            CONNECTION
            <span className="">
              <img src="/images/Frame2.png" alt="" />
            </span>
            <span className="increasing-width"></span>
          </p>
          <p className="flex hero-row">
            <img src="/images/Frame3.png" alt="" />

            <span className="increasing-width">
              BETWEEN
              <img src="/images/Frame4.png" alt="" />
              MUSIC
            </span>
          </p>
          <p className="flex hero-row">
            ARTIST
            <span>
              <img src="/images/Frame5.png" alt="" />
            </span>
            <span className="increasing-width">
              CULTURE
              <img src="/images/Frame6.png" alt="" />
            </span>
          </p>
          <p className="flex hero-row">
            <img src="/images/Frame7.png" alt="" />
            <span className="increasing-width">
              ART
              <img src="/images/Frame8.png" alt="" />& COLLECTIONS
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
