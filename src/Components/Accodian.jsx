import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; //

const Accodian = () => {
  return (
   <div className="p-10">
      <Accordion type="single" collapsible className="w-full">
        {/* */}
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does billing work?</AccordionTrigger>
          <AccordionContent>
            We offer monthly and annual subscription plans. Billing is charged at the
            beginning of each cycle, and you can cancel anytime.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use it in multiple projects?</AccordionTrigger>
          <AccordionContent>
            Yes, you can use it in as many projects as you want.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Accodian
