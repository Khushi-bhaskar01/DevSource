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

        Project1: To-Do List App
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
      <p className="text-muted-foreground mt-2">
        {/* //Explore student progress and tasks for web development. */}

        Project2: Weather Application 
        <br />
        🎯 Objective:
        <br />
        Build a responsive Weather App that allows users to view current weather conditions and forecasts for their location or any searched city. The app should fetch data from a reliable weather API and present it in a clean, user-friendly interface.
        <br />
        Mandatory Features:
        <br />
        Search by City: Users can search for weather information by entering a city name.
        <br />
        Current Weather Display: Show temperature, weather condition, humidity, wind speed, and icon.
        <br />
        Forecast: Display a 5-day weather forecast with daily highs/lows and conditions.
        <br />
        Clean and Intuitive UI: Visually appealing design with clear weather indicators.
        <br />
        Optional Enhancements (Unique Features):
        <br />
        Unit Toggle: Switch between Celsius and Fahrenheit.
        <br />
        Theme Mode: Light/Dark mode based on time of day or user preference.
        <br />
        Hourly Forecast: Include hourly breakdowns for the current day.
        <br />
        Background Animation: Dynamic backgrounds based on weather (e.g., rain, snow, sunshine).
        <br />
        Air Quality Index (AQI): Show AQI data if available from the API.
      </p>
      <div className="mt-8">
        <DevList kind="webDev" />
      </div>
    </section>
  );
}
