import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQSection({ items, title = "Preguntas Frecuentes" }: FAQSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
                <Accordion type="single" collapsible className="w-full">
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium text-left hover:text-[#A52A2A] transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-base leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
