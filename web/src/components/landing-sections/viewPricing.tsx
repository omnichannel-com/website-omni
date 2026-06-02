import Image from "next/image";
import RoundedButton from "../buttons/rounded-button";
import Link from "next/link";

export default function ViewPricing() {
  return (
    <div className="relative h-[70svh] bg-ocx-bg overflow-hidden flex items-center justify-center">
      <Image
        src="/fifth-section.png"
        width={1000}
        height={1000}
        style={{ objectFit: 'cover'}}
        alt="waves image"
        className="absolute w-full h-full bottom-[-35%]"
      />
      <div className="relative flex flex-col mt-24 md:mt-0 items-center space-y-4 z-10 text-center px-4 md:px-8 lg:px-16">

      <p className="text-ocx-fg md:text-xl text-lg lg:text-3xl self-center mx-auto text-center font-bold font-display">
          Focus on core business functions
        </p>
        <p className="text-[14px] w-[70%] md:text-xl lg:text-3xl text-ocx-fg ">
          Let our platform handle routine inquiries so you can focus on what matters most
        </p>
        <div>

        <Link href={"/pricing"}>
        <RoundedButton
          text="View Pricing"
          color="white"
          hover="filledOrange"
          size="large"
          customClass="px-4 md:px-6 lg:px-16"
          />
        </Link>
          </div>
      </div>
    </div>
  );
}
