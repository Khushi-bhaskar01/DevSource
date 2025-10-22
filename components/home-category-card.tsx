"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomeCategoryCard({
  title,
  href,
  accent,
}: {
  title: string
  href: string
  accent: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
    >
      <Link
        href={href}
        className="block rounded-lg border border-border bg-secondary/30 p-6 transition-transform"
        style={{
          boxShadow: `0 0 0px 0px transparent`,
        }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
        </div>
        <p className="text-sm text-muted-foreground mt-2">Tap to view members and tasks.</p>
      </Link>
      <style jsx>{`
        a:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 24px ${accent};
        }
      `}</style>
    </motion.div>
  )
}
