import Link from 'next/link'
import { NavLink, Flex } from 'theme-ui'

export default function HeaderNav() {
  return (
    <Flex as="nav">
      <Link href="/" passHref>
        <NavLink p={2}>Home</NavLink>
      </Link>
      <Link href="/about-us" passHref>
        <NavLink p={2}>About Us</NavLink>
      </Link>
    </Flex>
  )
}
