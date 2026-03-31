import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Какой минимальный заказ?",
      answer:
        "Минимальная партия — 10 штук. Это одинаково работает для шевронов, нашивок на липучке и ремувок. Если нужно несколько видов — каждый считается отдельно.",
    },
    {
      question: "У меня нет макета — вы поможете?",
      answer:
        "Да, помогаем с разработкой макета. Расскажите, что хотите — форму, цвета, надписи — и наши специалисты подготовят макет для согласования перед производством.",
    },
    {
      question: "Реально ли сделать за 1–2 дня?",
      answer:
        "Да, это реальный срок при готовом макете. Если макет нужно разрабатывать — добавьте ещё 1 день на согласование. При срочном заказе берём в приоритет.",
    },
    {
      question: "Как происходит оплата и доставка?",
      answer:
        "Оплата после согласования макета. Готовые изделия отправляем в день производства — транспортной компанией или Почтой России на ваш выбор.",
    },
    {
      question: "Можно ли заказать нашивки на липучке?",
      answer:
        "Да, производим нашивки на липучке (велкро). Укажите размер, форму и дизайн — сделаем. Липучка вшита качественно, держится надёжно.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Отвечаем на самые частые вопросы о заказе шевронов и нашивок.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}