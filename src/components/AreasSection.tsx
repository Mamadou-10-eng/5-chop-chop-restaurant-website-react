interface DeliveryAreaInterface {
  name: string;
  eta: string;
}

const DELIVERY_AREAS: DeliveryAreaInterface[] = [
  { name: "Serrekunda", eta: "25 min" },
  { name: "Bakau", eta: "30 min" },
  { name: "Kololi", eta: "30 min" },
  { name: "Brusubi", eta: "40 min" },
  { name: "Banjul", eta: "45 min" },
  { name: "Lamin", eta: "45 min" },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Where we deliver
        </h2>
        <p className="mt-3 max-w-prose text-lg">
          Typical time from the kitchen to your gate. Lamin and Banjul open at
          lunch and dinner only.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERY_AREAS.map((item) => (
            <AreaItem key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const AreaItem = (props: { item: DeliveryAreaInterface }) => {
  const { item } = props;
  return (
    <li className="rounded-lg border border-line px-5 py-4">
      {item.name}{" "}
      <span className="float-right text-ink-3">{item.eta}</span>
    </li>
  );
};

export default AreasSection
