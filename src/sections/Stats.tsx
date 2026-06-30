import Container from "../components/Container";
import { stats } from "../data/stats";

const Stats = () => {
  return (
    <section className=" py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why RemoveMe
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm"
            >
              <h3 className="text-5xl font-bold text-dark-600">
                {item.number}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;