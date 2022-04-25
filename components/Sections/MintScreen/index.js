import { Section } from "./sections";
import { Buy } from "./openSea";

export default function OpenSea() {
  return (
    <>
      <Section name="buy" subtitle="BUY" mode="COMPRESSED">
        <div className="w-full flex flex-col items-center xl:flex-row justify-evenly">
          <section className="w-full xl:w-[48%] mb-8 xl:mb-0 max-w-xl">
            <img
              className="rounded-lg"
              src="/aliens/JoeBiden.gif"
              alt="TuxMan"
              width={350}
              height={350}
            />
          </section>
          <section className="w-full xl:w-[48%] lg:mb-8 xl:mb-0 xl:py-10 max-h-lg max-w-xl">
            <Buy />
          </section>
        </div>
      </Section>
    </>
  );
}
