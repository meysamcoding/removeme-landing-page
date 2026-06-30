import Container from "../components/Container";
import FAQItem from "../components/FAQItem";
import { faqs } from "../data/faq";

const FAQ = () => {
  return (
    <section id="faq" className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            FAQs
          </h2>

        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;