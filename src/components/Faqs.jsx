import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Where does Aomni get its information from?',
      answer:
        'Aomni conducts research on the public web, extracts information directly from the source, and synthesizes it into digestible reports. Aomni’s AI utilizes information from company websites, published market research, public financial documents and social media. In the future, we will also offer integration with popular 3rd party data sources.',
    },
    {
      question: 'Does Aomni offer plans for teams?',
      answer: 'Yes we do. Please visit https://www.aomni.com/pricing to learn more about our subscription plans or reach out to team@aomni.com for more information.',
    },
  ],
  [
    {
      question: 'Can I use Aomni to do research on individuals at my prospect accounts??',
      answer:
        'We don’t currently offer individual profiles or contact data, but this is a top priority. We are planning to incorporate this information in upcoming versions.',
    },
    {
      question:
        'Something else is missing or is not working?',
      answer:
        'Please reach out to team@aomni.com with the details of any issue you encounter and our team will get back to you ASAP.',
    },
  ],
  [
    {
      question: 'Does Aomni integrate with other sales software platform?',
      answer:
        'Not at the moment, but this is a top priority. We are building integrations with CRMs and popular sales engagement tools.',
    },
    {
      question: 'What is the biggest reason for our success?',
      answer: 'Because great CEO outwork my competitors and build the strongest possible teams of the most talented players such as SuperStar & Zuper_Power',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32 dark:bg-zinc-900"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%] dark:hidden"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl dark:text-slate-300"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900 dark:text-blue-300">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
