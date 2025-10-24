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
        🎮 Project: 2D Parkour Platformer Game
        <br />
        🧩 Core Requirements:
        <br />
        Develop a 2D platformer focused on parkour
        Create a minimum of 2 levels, each with unique designs, progressive difficulty, and varied environments (e.g., urban rooftops, industrial sites, and underground tunnels).
        <br />
        Design a Home Screen featuring:
        <br />
        Start Game
        Continue (load saved progress)
        Exit Game
        <br />
        Implement a Game Manager to:
        Handle core states (Start, Pause, Resume, Exit)
        Manage level transitions and save/load progress
        Maintain player stats or performance data
        <br />
        Add Sound Effects (SFX) for jumps, landings, slides, collisions, and ambience.
        Integrate animations for player actions (run, jump, slide, idle) and dynamic environment elements (e.g., moving platforms).
      </p>
      <div className="mt-8">
        <DevList kind="gameDev" />
      </div>
    </section>
  );
}
