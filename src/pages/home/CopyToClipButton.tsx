"use client";
import Image from "next/image";

const CopyToClipButton = () => {
  const copyToClip = () => {
    navigator.clipboard.writeText("0x000000000000000000000000000000");
  };

  return (
    <button
      onClick={copyToClip}
      data-aos="zoom-in"
      className="px-5 rounded-full border-2 border-foreground  flex gap-5  justify-center items-center sm:h-11 py-4 sm:py-0 mt-5 lg:mt-12 2xl:mt-20 copy-button-tooltip"
    >
      <span className="sm:text-xl text-[12px]">CA : 0x000000000000000000000000000000</span>
      <div>
        <Image src="/img/Copy.png" alt="copy" width={24} height={24} />
      </div>
    </button>
  );
};

export default CopyToClipButton;
