import {
  Search,
  Trash2,
  CircleArrowUp,
  Eye,
} from "lucide-react";
import Container from "../components/Container";

const cards = [
  {
    title: "Comprehensive Scanning",
    description:
      "Our technology scours more than 115 data broker sites, people search engines, and online databases to identify where your personal information has been exposed and needs to be removed.",
    Icon: Search,
  },
  {
    title: "Automated Removals",
    description:
      "When we locate your personal information online, we automatically make removal requests and streamline the opt-out process for you.",
    Icon: Trash2,
  },
  {
    title: "Progress Tracking",
    description:
      "A realtime dashboard tracks which sites were scanned, exposures, requests in progress, and completed removals.",
    Icon: CircleArrowUp,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Our monitoring works continuously in the background and removes your information if it reappears.",
    Icon: Eye,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            How RemoveMe Works
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            RemoveMe automatically finds and removes your personal information
            from over 115 data broker and people search websites, then
            continuously monitors to keep it removed. Rest easy when you reduce
            your risk of identity theft, robocalls, scams, and doxxing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {cards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-2xl bg-white px-8 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                <Icon className="h-10 w-10 text-slate-700" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                {title}
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;