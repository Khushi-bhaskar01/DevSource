// import DevList from "@/components/dev-list"

// export default function AppPage() {
//   return (
//     <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
//       <h1 className="text-3xl md:text-4xl font-semibold text-pretty">App Development</h1>
//       <p className="text-muted-foreground mt-2">Explore student progress and tasks for app development.</p>
//       <div className="mt-8">
//         <DevList kind="appDev" accent="var(--color-ds-fire)" />
//       </div>
//     </section>
//   )
// }


import DevList from "@/components/dev-list";

export default function AppPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-pretty">
        App Development
      </h1>
      <p className="text-muted-foreground mt-2">
        Explore student progress and tasks for app development.
      </p>
      <div className="mt-8">
        <DevList kind="appDev" />
      </div>
    </section>
  );
}
