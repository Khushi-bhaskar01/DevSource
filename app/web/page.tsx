// import DevList from "@/components/dev-list"

// export default function WebPage() {
//   return (
//     <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
//       <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Web Development</h1>
//       <p className="text-muted-foreground mt-2">Explore student progress and tasks for web development.</p>
//       <div className="mt-8">
//         <DevList kind="webDev" accent="var(--color-ds-accent)" />
//       </div>
//     </section>
//   )
// }
import DevList from "@/components/dev-list";

export default function WebPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-pretty">
        Web Development
      </h1>
      <p className="text-muted-foreground mt-2">
        {/* //Explore student progress and tasks for web development. */}

        Project: To-Do List App
        <br />
        Objective:
        Build a responsive To-Do List app where users can add, edit, delete, and mark tasks as completed. Tasks should be stored in local storage to persist across page reloads.
 
        Mandatory Features:
        <br />
        Add, edit, and delete tasks
        <br />
        Mark tasks as completed with visual distinction
        <br />
        Persistent data using local storage
        <br />
        Responsive layout for desktop and mobile
        <br />
        Clean and intuitive UI
        <br />
        Optional Enhancements (Unique Features):
        <br />
        Category Filter: Organize tasks into categories like Work, Personal, School, and filter by category.
        <br />
        Priority Levels: Assign High, Medium, or Low priority and sort or highlight tasks accordingly.
      </p>
      <div className="mt-8">
        <DevList kind="webDev" />
      </div>
    </section>
  );
}
