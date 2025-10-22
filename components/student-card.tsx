// "use client";

// import { motion } from "framer-motion";

// export default function StudentCard({
//   name,
//   tasks,
//   accent,
// }: {
//   name: string;
//   tasks: string[];
//   accent: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.25 }}
//       className="rounded-lg border border-border bg-secondary/30 p-5"
//       style={{
//         boxShadow: "none", 
//       }}
//     >
//       <div className="flex items-center justify-between">
//         <h4 className="text-lg font-medium">{name}</h4>
//         <span
//           className="h-1.5 w-1.5 rounded-full"
//           style={{ backgroundColor: accent }}
//           aria-hidden
//         />
//       </div>
//       <ul className="mt-3 grid gap-2">
//         {tasks.map((t, i) => (
//           <li key={`${name}-${i}`} className="text-sm leading-relaxed text-pretty">
//             - {t}
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }


// import { motion } from "framer-motion";

// export default function StudentCard({
//   name,
//   tasks,
//   accent,
// }: {
//   name: string;
//   tasks: string[];
//   accent: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       className="relative rounded-lg border border-border p-5 overflow-hidden bg-black/50"
//     >
//       {/* Subtle animated glow */}
//       <motion.div
//         className="absolute inset-0 rounded-lg"
//         style={{
//           background: `radial-gradient(circle at 50% 50%, ${accent}40, transparent 70%)`,
//           mixBlendMode: "screen",
//           zIndex: 0,
//         }}
//         animate={{
//           scale: [1, 1.05, 1],
//           x: [0, 5, -5, 0],
//           y: [0, -5, 5, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Card content */}
//       <div className="relative z-10 flex flex-col gap-3">
//         <div className="flex items-center justify-between">
//           <h4 className="text-lg font-medium text-white">{name}</h4>
//           <span
//             className="h-1.5 w-1.5 rounded-full"
//             style={{ backgroundColor: accent }}
//             aria-hidden
//           />
//         </div>

//         <ul className="mt-3 grid gap-2 text-white/90">
//           {tasks.map((t, i) => (
//             <li key={`${name}-${i}`} className="text-sm leading-relaxed">
//               - {t}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }


// import { motion } from "framer-motion";

// export default function StudentCard({
//   name,
//   tasks,
//   accent,
// }: {
//   name: string;
//   tasks: string[];
//   accent: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       whileHover={{ scale: 1.02 }}
//       className="relative rounded-lg border border-border p-5 overflow-hidden bg-black/50 hover:shadow-lg transition-shadow duration-300"
//     >
//       {/* Gradient Glow 1 - Pink/Purple */}
//       <motion.div
//         className="absolute inset-0 rounded-lg"
//         style={{
//           background: `radial-gradient(circle at 30% 30%, #FF6EC7AA, transparent 70%)`,
//           mixBlendMode: "screen",
//           zIndex: 0,
//         }}
//         animate={{
//           scale: [1, 1.05, 1],
//           x: [0, 8, -8, 0],
//           y: [0, -5, 5, 0],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Gradient Glow 2 - Blue/Cyan */}
//       <motion.div
//         className="absolute inset-0 rounded-lg"
//         style={{
//           background: `radial-gradient(circle at 70% 70%, #3B82F6AA, transparent 70%)`,
//           mixBlendMode: "screen",
//           zIndex: 0,
//         }}
//         animate={{
//           scale: [1, 1.03, 1],
//           x: [0, -6, 6, 0],
//           y: [0, 4, -4, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Card content */}
//       <div className="relative z-10 flex flex-col gap-3">
//         <div className="flex items-center justify-between">
//           <h4 className="text-lg font-medium text-white">{name}</h4>
//           <span
//             className="h-1.5 w-1.5 rounded-full"
//             style={{ backgroundColor: accent }}
//             aria-hidden
//           />
//         </div>

//         <ul className="mt-3 grid gap-2 text-white/90">
//           {tasks.map((t, i) => (
//             <li key={`${name}-${i}`} className="text-sm leading-relaxed">
//               - {t}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function StudentCard({
  name,
  tasks,
  accent,
  secondaryAccent,
}: {
  name: string;
  tasks: string[];
  accent: string;
  secondaryAccent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-lg border border-border p-5 overflow-hidden bg-black/50 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Gradient Glow 1 */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent}60, transparent 70%)`,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 8, -8, 0],
          y: [0, -5, 5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gradient Glow 2 */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `radial-gradient(circle at 70% 70%, ${secondaryAccent}60, transparent 70%)`,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.03, 1],
          x: [0, -6, 6, 0],
          y: [0, 4, -4, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium text-white">{name}</h4>
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
        </div>

        <ul className="mt-3 grid gap-2 text-white/90">
          {tasks.map((t, i) => (
            <li key={`${name}-${i}`} className="text-sm leading-relaxed">
              - {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
