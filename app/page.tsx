
// // app/page.tsx
// import Spline from "@splinetool/react-spline/next";
// import AboutSection from "@/components/about-section";
// import HomeCategoryCard from "@/components/home-category-card";

// export default function HomePage() {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//      
//       <div className="absolute inset-0 z-0">
//         <Spline scene="https://prod.spline.design/ESX4dMyROOpdP4QD/scene.splinecode" />
//       </div>

//       {/* ✨ Foreground Content */}
//       <section className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16">
//         <AboutSection />
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <HomeCategoryCard title="Web Dev" href="/web" accent="var(--color-ds-accent)" />
//           <HomeCategoryCard title="App Dev" href="/app" accent="var(--color-ds-fire)" />
//           <HomeCategoryCard title="Game Dev" href="/game" accent="var(--color-ds-accent)" />
//         </div>
//       </section>

//       {/* Optional gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-[5] pointer-events-none"></div>
//     </div>
//   );
// }

import ParticleBackground from "@/components/particle-background"
import AboutSection from "@/components/about-section"
import HomeCategoryCard from "@/components/home-category-card"

export default function HomePage() {
  return (
    <div className="relative">
      <ParticleBackground />
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16">
        <AboutSection />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <HomeCategoryCard title="Web Dev" href="/web" accent="var(--color-ds-accent)" />
          <HomeCategoryCard title="App Dev" href="/app" accent="var(--color-ds-fire)" />
          <HomeCategoryCard title="Game Dev" href="/game" accent="var(--color-ds-accent)" />
        </div>
      </section>
    </div>
  )
}   