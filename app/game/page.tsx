// import DevList from "@/components/dev-list"

// export default function GamePage() {
//   return (
//     <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
//       <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Game Development</h1>
//       <p className="text-muted-foreground mt-2">Explore student progress and tasks for game development.</p>
//       <div className="mt-8">
//         <DevList kind="gameDev" accent="var(--color-ds-accent)" />
//       </div>
//     </section>
//   )
// }

import DevList from "@/components/dev-list";

export default function GamePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-pretty">
        Game Development
      </h1>
      <p className="text-muted-foreground mt-2">
        Explore student progress and tasks for game development.
      </p>
      <div className="mt-8">
        <DevList kind="gameDev" />
      </div>
    </section>
  );
}
