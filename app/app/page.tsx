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
        Build a mobile Weather App using Kotlin, Flutter, or React Native that
        provides real-time weather updates based on the user's current
        location.
        <br />
        Mandatory Features:
        <br />
        Detect the user's location automatically using GPS.
        <br />
        Fetch real-time weather data from a reliable API (e.g., OpenWeatherMap).
        <br />
        Display key information: temperature, humidity, wind speed, weather
        condition (sunny, rainy, etc.).
        <br />
        Clean and responsive UI that works on both Android and iOS.
      </p>

      <p className="text-muted-foreground mt-2">
        Project2: To-Do App
        <br />
        Objective:
        <br />
        Build a cross-platform mobile To-Do App using Kotlin, Flutter, or React
        Native that manages tasks efficiently with a clean and intuitive
        interface.
        <br />
        Mandatory Features:
        <br />
        Add, edit, delete, and mark tasks as completed.
        <br />
        Store tasks locally using SQLite or text file for persistent storage.
        <br />
        Responsive UI with a simple, minimal design.
        <br />
        Optional Enhancements (Unique Features):
        <br />
        Add user authentication using Firebase.
      </p>

      <p className="text-muted-foreground mt-2">
        Project3: Movie Discovery App
        <br />
        Objective:
        <br />
        Build a modern mobile Movie Discovery App using Kotlin, Flutter, or
        React Native that allows users to search, browse, and explore movies
        with detailed information powered by The Movie Database (TMDb) API.
        <br />
        Mandatory Features:
        <br />
        Search for movies by title using the TMDb API.
        <br />
        Display trending, popular, and top-rated movies on the home screen.
        <br />
        Show detailed movie info — title, poster, rating, release date,
        overview, genres, and cast.
        <br />
        Enable filtering by genre and sorting by popularity or rating.
        <br />
        Responsive UI that works smoothly on both Android and iOS.
        <br />
        Proper TMDb API integration with authentication.
      </p>

      <div className="mt-8">
        <DevList kind="appDev" />
      </div>
    </section>
  );
}
