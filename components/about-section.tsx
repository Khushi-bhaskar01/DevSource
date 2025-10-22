"use client"

import useDevSourceData from "@/lib/use-data"
import { motion } from "framer-motion"

export default function AboutSection() {
  const { data, isLoading, error } = useDevSourceData()

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>
  if (error || !data) return <p className="text-destructive-foreground">Failed to load content.</p>

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="text-center"
    >
      <h1 className="text-balance text-2xl md:text-5xl font-semibold">{data.about.title}</h1>
      <p className="text-pretty text-base md:text-lg leading-relaxed text-muted-foreground mt-4 max-w-3xl mx-auto">
        {data.about.description}
      </p>
    </motion.div>
  )
}
