interface DishBadge {
  label: string;
  variant: "popular" | "vegetarian";
}

interface PopularDishInterface {
  name: string;
  kitchen: string;
  image: string;
  alt: string;
  price: string;
  badge?: DishBadge;
}

const POPULAR_DISHES: PopularDishInterface[] = [
  {
    name: "Benachin",
    kitchen: "Mama Binta’s Kitchen · Westfield",
    image:
      "https://images.unsplash.com/photo-1664993101841-036f189719b6?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Benachin plate",
    price: "D250",
    badge: { label: "Popular", variant: "popular" },
  },
  {
    name: "Domoda",
    kitchen: "Kaira’s Corner · Kololi",
    image:
      "https://images.pexels.com/photos/8024112/pexels-photo-8024112.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Domoda bowl",
    price: "D200",
  },
  {
    name: "Chicken yassa",
    kitchen: "Sorehula’s Grill · Kotu",
    image: "/assets/dish-3.svg",
    alt: "",
    price: "D350",
  },
  {
    name: "Afra",
    kitchen: "Aisha’s Kitchen · Bakau",
    image: "/assets/dish-4.svg",
    alt: "",
    price: "D400",
  },
  {
    name: "Superkanja",
    kitchen: "Auntie Haddy’s · Serrekunda",
    image: "/assets/dish-5.svg",
    alt: "",
    price: "D180",
    badge: { label: "Vegetarian", variant: "vegetarian" },
  },
  {
    name: "Tapalapa and egg",
    kitchen: "Morning Bread · Bakau",
    image: "/assets/dish-6.svg",
    alt: "",
    price: "D75",
  },
];

const PopularSection = () => {
  return (
    <section id="popular" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Popular this week
        </h2>
        <p className="mt-3 max-w-prose text-lg">
          What the Kombos ordered most in the last seven days.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_DISHES.map((item) => (
            <DishCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DishCard = (props: { item: PopularDishInterface }) => {
  const { item } = props;
  const badgeClass =
    item.badge?.variant === "vegetarian"
      ? "rounded-full bg-leaf-soft px-2.5 py-0.5 text-xs font-semibold text-leaf"
      : "rounded-full bg-chop-soft px-2.5 py-0.5 text-xs font-semibold text-chop-dark";

  return (
    <article className="rounded-xl border border-line bg-surface p-5 transition duration-200 hover:-translate-y-1">
      <img
        src={item.image}
        alt={item.alt}
        className="aspect-3/2 w-full object-cover"
      />
      <h3 className="mt-5 text-lg font-semibold text-ink">{item.name}</h3>
      <p className="text-sm text-ink-3">{item.kitchen}</p>
      {item.badge && (
        <p className="mt-3">
          <span className={badgeClass}>{item.badge.label}</span>
        </p>
      )}
      <div className="flex items-center justify-between pt-5">
        <p className="text-lg font-semibold text-ink">{item.price}</p>
        <button
          type="button"
          className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition duration-200 hover:border-ink hover:bg-ink hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
        >
          Add
        </button>
      </div>
    </article>
  );
};

export default PopularSection
