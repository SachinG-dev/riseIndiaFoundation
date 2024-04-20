import React from "react";
import { ExpandableSection } from "../../atom/ExpandableSection/ExpandableSection";

export function FAQSection() {
  const faqs = [
    {
      question: "Can I donate by any means other than online?",
      answer:
        "Yes, you can. For in-kind donations, please connect with us at change@riseindiafoundation.in.",
    },
    {
      question: "Will my personal information and card details be safe?",
      answer:
        "We value the support provided by our donors. The website is safe for any kind of transaction. Also, any information exchange is kept safe and in no condition gets disclosed. Also, the payment gateway is a third-party payment gateway recognized by the financial institutions under the government of India. So, any transaction is thoroughly secured.",
    },
    {
      question: "Are donations accepted in other currencies?",
      answer:
        "No, Rise India Foundation does not accept donations in foreign (non-INR) currency currently.",
    },
    {
      question: "Can I set up a monthly or yearly donation process?",
      answer: "Yes, you can.",
    },
    {
      question:
        "Are there any tax benefits or tax exemption certification available on making a donation?",
      answer:
        "All donations to Rise India Foundation are eligible for 50% tax exemption under Section 80G. Tax receipts are provided to all our donors, regardless of the amount of contribution.",
    },
    {
      question: "Which are the major projects of Rise India Foundation?",
      answer:
        "We select projects based on our strategic programming framework, which directs where we work, with whom, and for what outcome.",
    },
    {
      question:
        "Is Rise India Foundation a government-affiliated organization?",
      answer:
        "No, we are a registered non-profit organization and not affiliated with any government organization. However, we may partner with them for maximum reach.",
    },
    {
      question: "Why should I volunteer with Rise India Foundation?",
      answer:
        "Volunteering with Rise India Foundation empowers you to make a tangible difference in the lives of marginalized communities while gaining valuable experience in social impact initiatives.",
    },
    {
      question:
        "How can I contact Rise India Foundation for collaborative purposes?",
      answer:
        "You can reach out for collaboration with Rise India Foundation by sending an email to change@riseindiafoundation.in.",
    },
    {
      question: "Are donations in kind accepted?",
      answer:
        "Yes, we gratefully accept donations in kind to support our initiatives. Please reach us at change@riseindiafoundation.in.",
    },
  ];

  return (
    <div className="container">
      <div className="m-4">
        {faqs.map((faq, index) => (
          <div className="m-2">
            <ExpandableSection
              key={index}
              title={faq.question}
              description={faq.answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
