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
        Project1: Weather App
        <br />
        Objective:
        <br />
        Build a mobile Weather App using Kotlin, Flutter, or React Native that provides real-time weather updates based on the user's current location.
        <br />
        Mandatory Features:
        <br />
        Detect the user's location automatically using GPS.
        <br />
        Fetch real-time weather data from a reliable API (e.g., OpenWeatherMap).
        <br />
        Display key information: temperature, humidity, wind speed, weather condition (sunny, rainy, etc.).
        <br />
        Clean and responsive UI that works on both Android and iOS.
      </p>
      <p className="text-muted-foreground mt-2">
        Project2: To-Do App
        <br/>
        Objective:
        <br/>
        Build a cross-platform mobile To-Do App using Kotlin, Flutter, or React Native that manages tasks efficiently with a clean and intuitive interface.
        <br/>
        Mandatory Features:
        <br/>
        Task Creation & Management Allow users to add, edit, delete, and mark tasks as completed.
        <br/>
        Persistent Storage Store tasks locally using SQLite or even a txt file will work fine.
        <br/>
        Responsive UI Design a clean, minimal, and responsive interface.
        <br/>
        Optional Enhancements:
        <br/>
        Use FireBase with User authentication.
      </p>
      <div className="mt-8">
        <DevList kind="appDev" />
      </div>
    </section>
  );
}
