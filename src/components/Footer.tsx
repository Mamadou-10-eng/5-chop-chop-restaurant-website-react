interface FooterLinkInterface {
  text: string;
  href: string;
}

interface FooterLinkGroupInterface {
  title: string;
  links: FooterLinkInterface[];
}

const FOOTER_LINK_GROUPS: FooterLinkGroupInterface[] = [
  {
    title: "Chop Chop",
    links: [
      { text: "How it works", href: "#how-it-works" },
      { text: "Delivery areas", href: "#areas" },
      { text: "Get the app", href: "#get-the-app" },
    ],
  },
  {
    title: "Help",
    links: [
      { text: "Kitchens", href: "#" },
      { text: "Jobs", href: "#" },
      { text: "Contact", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-ink py-12 text-sm text-on-dark-soft">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#" className="inline-flex items-center gap-2">
              <img src="/assets/logo.svg" alt="" className="h-8 w-8" />
              <span className="text-lg font-semibold text-on-dark">
                Chop Chop
              </span>
            </a>
            <p className="mt-3 max-w-prose">
              Hot food from the Kombos, at your door, still warm.
            </p>
          </div>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {FOOTER_LINK_GROUPS.map((group) => (
              <FooterLinkGroup key={group.title} group={group} />
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-dark-line pt-6">
          © 2026 Chop Chop. A fictional company, built for C520.
        </p>
      </div>
    </footer>
  );
};

const FooterLinkGroup = (props: { group: FooterLinkGroupInterface }) => {
  const { group } = props;
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-on-dark">{group.title}</p>
      {group.links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          className="w-fit transition duration-200 hover:text-chop-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Footer
