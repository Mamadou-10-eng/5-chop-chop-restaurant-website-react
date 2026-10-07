interface HowItWorksStepInterface {
  step: number;
  title: string;
  description: string;
  icon: string; // URL, path, or icon identifier
}

const HOW_IT_WORKS_STEPS: HowItWorksStepInterface[] = [
  {
    step: 1,
    title: "Pick a kitchen",
    description: "Forty kitchens from Westfield to Brusubi, with live opening hours and honest delivery times.",
    icon: "/assets/step-1.svg"
  },
  {
    step: 2,
    title: "Build your order",
    description: "Extra pepper, no onions, two spoons. Every kitchen reads your note before it starts cooking.",
    icon: "/assets/step-2.svg"
  },
  {
    step: 3,
    title: "Track your rider",
    description: "See the scooter on the map from the moment it leaves. Pay cash at the gate or by mobile money in the app.",
    icon: "/assets/step-3.svg"
  }
];

const HowItWorksSection = () => {
  return (
   <section id="how-it-works" className="scroll-mt-[calc(4.75rem+1px)] py-20 sm:scroll-mt-0">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            How it works
          </h2>
          <p className="mt-3 max-w-prose text-lg">
            Three steps, and none of them is a phone call.
          </p>
          <ol className="mt-12 flex flex-col gap-10 sm:flex-row">
            {
              HOW_IT_WORKS_STEPS.map(item => (
                 <HowItWorksStep key={item.step} item={item} />
              ))
            }
         
          </ol>
        </div>
      </section>
  )
}


const HowItWorksStep = (props: {item: HowItWorksStepInterface}) => {
  const {item} = props
  return <li className="sm:flex-1">
              <img src={item.icon} alt="" className="h-20 w-20" />
              <p className="mt-6 text-sm font-semibold text-chop-dark">Step {item.step}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2">
               {item.description}
              </p>
            </li>
}

export default HowItWorksSection