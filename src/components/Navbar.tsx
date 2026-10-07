import { useEffect, useState } from "react"
import NavItem from "./NavItem"

const NAV_ITEMS = [
    {
        text: 'How it works',
        href: '#how-it-works'
    },
    {
        text: 'Popular',
        href: '#popular'
    },
    {
        text: 'Areas',
        href: '#areas'
    },
]

let navItemsJSX = []

for (let item of NAV_ITEMS) {
  navItemsJSX.push(<NavItem href={item.href} text={item.text} />)
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
    <div
      className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
    >
      <a href="#" className="flex items-center gap-2 text-lg font-semibold text-ink">
        <img src="/assets/logo.svg" alt="" className="h-8 w-8" />
        Chop Chop
      </a>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition duration-200 hover:-translate-y-0.5 hover:border-chop focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop sm:hidden"
        aria-expanded={menuOpen}
        aria-controls="menu-drawer"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        data-toggle
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg
          className={`h-5 w-5 ${menuOpen ? "hidden" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          data-icon-open
        >
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
        <svg
          className={`h-5 w-5 ${menuOpen ? "" : "hidden"}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          data-icon-close
         
        >
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      <div className="hidden sm:flex sm:items-center sm:gap-6">
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Primary">
         {/* <NavItem href="#how-it-works" text="How it works" />
         <NavItem href="#popular" text="Popular" />
         <NavItem href="#areas" text="Areas" /> */}
         {
            NAV_ITEMS.map(item => <NavItem key={item.href} href={item.href} text={item.text} />)
          
          
          
          }
          {/* {navItemsJSX} */}
         
        </nav>
        <a
          href="#get-the-app"
          className="inline-flex w-fit rounded-lg bg-chop px-4 py-2 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >Get the app</a>
      </div>
    </div>
    <div
      id="menu-drawer"
      data-state={menuOpen ? "open" : "closed"}
      inert={!menuOpen}
      className="fixed inset-y-0 right-0 z-30 flex w-64 translate-x-full flex-col border-l border-line bg-surface px-5 py-6 transition duration-200 data-[state=open]:translate-x-0 sm:hidden"
      onClick={(event) => {
        if (event.target instanceof HTMLAnchorElement) setMenuOpen(false)
      }}
    >
      <nav className="flex flex-col gap-2" aria-label="Drawer menu">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="py-2 text-lg font-semibold text-ink hover:text-chop-dark"
          >
            {item.text}
          </a>
        ))}
        <a
          href="#get-the-app"
          className="mt-4 w-fit rounded-lg bg-chop px-5 py-2.5 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
        >
          Get the app
        </a>
      </nav>
    </div>
    </>
  )
}

export default Navbar
