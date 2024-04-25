import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
        <div>
              <Link href="/">Homapage</Link>   
              <Link href="/about">Aboutpage</Link>   
              <Link href="/contact">Contactpage</Link>   
         </div>
    </div>
    )

  }

export default Navbar