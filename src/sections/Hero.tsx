import Container from "../components/Container";

const Hero = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Privacy Protection
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Remove Your Personal Data From The Internet
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Reduce spam, robocalls, fraud, and identity theft by removing
              your personal information from online data brokers.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                Start Free Scan
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl bg-slate-200">
              Hero Image
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;