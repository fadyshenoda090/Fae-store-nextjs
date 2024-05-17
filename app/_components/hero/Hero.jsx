import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-WhiteText">
            All Your Digital products
            <strong className="font-extrabold text-mintText sm:block mt-5">
              is here
            </strong>
          </h1>
          <p className="mt-4 text-3xl">
            Start Browsing Now !
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-lighterBg px-12 py-3 text-sm font-medium text-whiteText shadow hover:bg-mintBg hover:text-darkText focus:outline-none sm:w-auto"
              href="#"
            >
              Let&apos;s Go
            </a>
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-darkText shadow bg-whiteBg hover:bg-transparent hover:text-whiteText border border-white sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
