// {href, text}:  {href: string, text: string}
interface NavItemProps {
  href: string; 
  text: string
}

const NavItem = (props: NavItemProps) => {
  const {href, text} = props
  return (
    <a
        href={href}
        className="border-b-2 border-transparent text-sm text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink"
    >{text}</a>
  )
}

export default NavItem