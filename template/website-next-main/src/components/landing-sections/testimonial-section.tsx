import RoundedButton from "../buttons/rounded-button";
import Testimonials from "./testimonials";
export default function TestimonialSection() {
  return (
    // scroll-section
    <section className=" pt-[3rem]  bg-backgroundClr relative z-[60] text-textClr">
      <div className="h-full flex md:mx-40 mx-3 justify-center items-center">
        <div className=" text-textClr my-16 md:my-24 gap-8 h-md:!gap-0 grid grid-cols-2 h-md:flex h-md:flex-col items-center justify-center">
          <div className="relative !w-full !h-md:w-[70%] mb-14 !h-md:block flex items-center justify-center flex-col gap-16">
          <div className="flex flex-col items-center justify-center w-[75%]">
            <p className="text-center text-sm md:h-md:text-2xl md:text-sm h-md:text-lg font-medium">
             
      Empowering workers to harness their full potential alongside AI workers, taking on more responsibilities while working smarter, not harder brainstorming new ideas while eliminating repetitive work and flows.
      </p>
</div>
            {/* <Testimonials /> */}
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* <p className="text-center text-sm h-md:text-lg lg:h-md:!text-xl lg:!text-lg xl:text-2xl leading-loose mb-5">
              Our robust AI engine meticulously handles all your routine
              business tasks, allowing your AI AlterEgos to ensure everything
              runs smoothly.
            </p> */}
            <RoundedButton
              text="Read More"
              color="white"
              hover="filledOrange"
              size="large"
              customClass="md:!px-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
