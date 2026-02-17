import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Askedquestion = () => {
  const FAQData =[
    {
      title:"What is Netflix",
    description:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      title:"How much does Netflix cost?",
    description:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99/month. "
    },
    {
      title:"Where can I watch?",
      description:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      title:"How do I cancel Netflix is flexible?",
      description:"Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      title:"What can I watch on Netflix?",
      description:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      title:"Is Netflix good for kids?",
      description:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },

  ]
  return (
    <div className=' bg-black text-white pb-20'>
      <div className='ml-45 mr-45 py-2 '>
      <h1 className='text-3xl'>Frequently Asked Questions</h1>

    

    {FAQData.map((data)=>(
        <div >
      
          <Accordion type="single" collapsible className="w-full">
              {/* */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl mb-5 mt-4">{data.title}</AccordionTrigger>
                <AccordionContent>
                  {data.description}
                </AccordionContent>
              </AccordionItem>
              </Accordion>

       </div>
    ))}

      </div>
    </div>
  )
}

export default Askedquestion
