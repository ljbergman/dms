import './header.css';
import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
        <Link href="/"><h1>J-DMS</h1></Link>

    </header>
  )
}
 