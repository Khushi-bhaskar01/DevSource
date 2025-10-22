// "use client"

// import useDevSourceData from "@/lib/use-data"
// import StudentCard from "./student-card"

// // type Kind = "webDev" | "appDev" | "gameDev"

// // export default function DevList({ kind, accent }: { kind: Kind; accent: string }) {
// //   const { data, isLoading, error } = useDevSourceData()

// //   if (isLoading) return <p className="text-muted-foreground">Loading...</p>
// //   if (error || !data) return <p className="text-destructive-foreground">Failed to load data.</p>

// //   const list = (data as any)[kind] as { name: string; tasks: string[] }[]
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //       {list.map((s) => (
// //         <StudentCard key={s.name} name={s.name} tasks={s.tasks} accent={accent} />
// //       ))}
// //     </div>
// //   )
// // }


// type Kind = "webDev" | "appDev" | "gameDev";

// export default function DevList({
//   kind,
//   accent,
//   secondaryAccent,
// }: {
//   kind: Kind;
//   accent?: string;
//   secondaryAccent?: string;
// }) {
//   const { data, isLoading, error } = useDevSourceData();

//   if (isLoading) return <p className="text-muted-foreground">Loading...</p>;
//   if (error || !data)
//     return <p className="text-destructive-foreground">Failed to load data.</p>;

//   const list = (data as any)[kind] as { name: string; tasks: string[] }[];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {list.map((s) => (
//         <StudentCard
//           key={s.name}
//           name={s.name}
//           tasks={s.tasks}
//           accent={accent || "#FF6EC7"}
//           secondaryAccent={secondaryAccent || "#3B82F6"}
//         />
//       ))}
//     </div>
//   );
// }

"use client";

import StudentCard from "./student-card";
import useDevSourceData from "@/lib/use-data";

type Kind = "webDev" | "appDev" | "gameDev";

export default function DevList({ kind }: { kind: Kind }) {
  const { data, isLoading, error } = useDevSourceData();

  if (isLoading) return <p className="text-gray-400">Loading...</p>;
  if (error || !data)
    return <p className="text-red-400">Failed to load data.</p>;

  const list = (data as any)[kind] as { name: string; tasks: string[] }[];

  // Soft, modern gradient colors per category
  const colors: Record<Kind, { primary: string; secondary: string }> = {
    webDev: { primary: "#60A5FA", secondary: "#A5B4FC" }, // soft blue + violet
    appDev: { primary: "#FBBF77", secondary: "#6EE7B7" }, // warm amber + mint combo
    gameDev: { primary: "#F472B6", secondary: "#C084FC" }, // pink + soft purple
  };

  const { primary, secondary } = colors[kind];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {list.map((s, index) => (
        <StudentCard
          key={`${s.name}-${index}`} // ✅ ensures unique keys
          name={s.name}
          tasks={s.tasks}
          accent={primary}
          secondaryAccent={secondary}
        />
      ))}
    </div>
  );
}
