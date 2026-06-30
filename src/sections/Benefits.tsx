import Container from "../components/Container";
import { benefits } from "../data/benefits";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-white py-20 lg:py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            How We Protect You Online
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Trust RemoveMe to keep your personal information private.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-5">
                {/* Icon */}
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;