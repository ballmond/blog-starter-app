import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

export default function Sidebar() {
  return (
    <Menu>
      <span>
        <Link href="/">
          <a id="home">Home</a>
        </Link>
      </span>
      <span>
        <Link href="/what-we-believe">
          <a id="about">What We Believe</a>
        </Link>
      </span>
      <span>
        <Link href="/our-staff">
          <a id="contact">Our Staff</a>
        </Link>
      </span>
    </Menu>
  )
}
