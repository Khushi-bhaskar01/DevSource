// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { motion } from "framer-motion"

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/web", label: "Web" },
//   { href: "/app", label: "App" },
//   { href: "/game", label: "Game" },
// ]

// export default function Navbar() {
//   const pathname = usePathname()
//   return (
//     <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
//       <nav className="mx-auto max-w-5xl px-4 md:px-6 h-16 flex items-center justify-between">
//         <Link href="/" className="font-semibold tracking-wide">
//           🔥DevSource
//         </Link>
//         <ul className="flex items-center gap-2 md:gap-4">
//           {links.map((l) => {
//             const active = pathname === l.href
//             return (
//               <li key={l.href} className="relative">
//                 <Link href={l.href} className="px-3 py-1.5 rounded-md text-sm transition-colors hover:text-primary">
//                   {l.label}
//                 </Link>
//                 {active && (
//                   <motion.div
//                     layoutId="active-underline"
//                     className="absolute left-0 right-0 -bottom-1 h-0.5"
//                     style={{ backgroundColor: "var(--color-ds-accent)" }}
//                     transition={{ type: "spring", stiffness: 500, damping: 40 }}
//                   />
//                 )}
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/web", label: "Web" },
  { href: "/app", label: "App" },
  { href: "/game", label: "Game" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto max-w-5xl px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold tracking-wide flex items-center gap-1">
          🔥DevSource
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 md:gap-4">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className="px-3 py-1.5 rounded-md text-sm transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5"
                    style={{ backgroundColor: "var(--color-ds-accent)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden flex flex-col items-center gap-2 py-4 border-t border-border bg-background/80 backdrop-blur"
        >
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href} onClick={() => setMenuOpen(false)} className="relative">
                <Link
                  href={l.href}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    active ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5"
                    style={{ backgroundColor: "var(--color-ds-accent)" }}
                  />
                )}
              </li>
            )
          })}
        </motion.ul>
      )}
    </header>
  )
}
