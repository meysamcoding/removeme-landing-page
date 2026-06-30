import Container from "../components/Container";
import { highlights } from "../data/highlights";

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
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div key={value} className="flex flex-col items-center text-center">
                  <Icon className="mb-3 h-8 w-8 text-gray-700" />

                  <h3 className="text-xl font-bold text-gray-900">
                    {value}
                  </h3>

                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>

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
          <div className="flex flex-col items-center">
            {/* Top Text */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
                <span className="text-green-600">✔</span>

                <span className="text-sm font-semibold text-slate-800">
                  Covers 115 major data broker sites
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Protect your personal data
                <br />
                across the web.
              </h3>
            </div>

            {/* Image */}
            <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl bg-slate-200">
               replace with the final privacy protection illustration.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;