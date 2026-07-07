import { useState } from "react";
import faqData from "../components/FAQData";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section  id="faq" className="faq">

      <div className="section-header">
        <span>FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Common questions about garage door
          repair, installation and maintenance.
        </p>
      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}

              <span>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;