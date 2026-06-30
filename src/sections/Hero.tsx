import { Clock3, SearchCheck, Zap, LockKeyhole } from "lucide-react";
import Container from "../components/Container";

const heroStats = [
  { icon: Clock3, text: "200+ hours of\nmanual labor saved" },
  { icon: SearchCheck, text: "115 data broker\nsites monitored" },
  { icon: Zap, text: "48 hours from\nactivation to first removal" },
  { icon: LockKeyhole, text: "12+ types of personal\ndata removed" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[20%] top-24 h-36 w-36 rotate-45 bg-white/20" />
        <div className="absolute right-[18%] top-48 h-40 w-40 rotate-45 bg-white/10" />
        <div className="absolute bottom-10 left-[35%] h-52 w-52 rotate-45 bg-white/10" />
      </div>

      <Container className="max-w-[1374px]">
        <div className="relative grid items-center gap-8 lg:grid-cols-[60%_40%]">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Remove Your Personal Data from the Internet
            </h1>

            <p className="mt-8 text-2xl leading-snug text-white/80">
              Reduce Spam, Fraud, Robocalls, Text Message Fraud, by removing
              your personal data from the internet.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {heroStats.map(({ icon: Icon, text }) => (
                <div key={text} className="text-center">
                  <Icon className="mx-auto h-12 w-12 text-white" />
                  <p className="mt-3 whitespace-pre-line text-sm font-semibold leading-5">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">
              <button className="rounded-lg bg-green-500 px-12 py-5 text-xl font-bold uppercase text-white hover:bg-green-600">
                Start Free Scan
              </button>

              <div>
                <p className="mb-2 text-sm font-semibold text-green-400">
                  ★ Trustpilot
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="flex h-7 w-7 items-center justify-center bg-green-500 text-sm font-bold"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-1 text-xs text-white/70">
                  TrustScore 4.0 | 3,837 reviews
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center lg:items-start pt-10">
            <div className="absolute right-15 top-0 max-w-[220px] border-l-4 border-red-500 pl-4 text-left">
              <h3 className="text-xl font-bold leading-6 text-white">
                Covers 115 major
                <br />
                data broker sites
              </h3>
                  </div>
                  <div className="absolute right-5 top-10 max-w-[220px]  text-left">
                      <p className="mt-2 text-sm text-white/70">
                Protect your personal data across the web.
              </p>
                  </div>
            
             

            <div className="w-full max-w-xl rounded-lg border border-slate-300 bg-white p-5 text-slate-800 shadow-2xl">
              <p className="text-center text-sm font-semibold">
                Scanning the web for your personal information
              </p>

              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[78%] rounded-full bg-slate-700" />
              </div>

              <div className="mt-5 space-y-2 text-xs">
                {[
                  "PeopleSearchNow",
                  "Spokeo",
                  "TelephoneDirectory",
                  "PeopleWin",
                  "Centeda",
                  "NeighborWho",
                  "Intelius",
                ].map((site) => (
                  <div
                    key={site}
                    className="grid grid-cols-4 gap-2 border-b border-slate-100 py-2"
                  >
                    <span className="font-medium text-blue-600">{site}</span>
                    <span>John Doe</span>
                    <span>Jane Doe</span>
                    <span className="font-semibold text-red-500">Exposed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;