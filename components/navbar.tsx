"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "/web", label: "Web" },
  { href: "/app", label: "App" },
  { href: "/game", label: "Game" },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto max-w-5xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          🔥DevSource
        </Link>
        <ul className="flex items-center gap-2 md:gap-4">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href} className="relative">
                <Link href={l.href} className="px-3 py-1.5 rounded-md text-sm transition-colors hover:text-primary">
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
      </nav>
    </header>
  )
}
