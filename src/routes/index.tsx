import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  // Define the sections on the homepage. In a real application this could come
  // from a CMS or remote config.
  const sections = [
    {
      name: "Sorting Algorithms",
      href: "/algorithms/sorting",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcOCMRjemV5hLwxBTjdfuzCGgHntOmlPcs3kvq",
      className: "col-span-12 sm:col-span-6 row-span-2",
    },
    {
      name: "Searching Algorithms",
      href: "/algorithms/searching",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcvBIf4qbglkhbTpKtMsdQ8FPNqRYBafSO06Dz",
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "Path-Finding Algorithms",
      href: "/algorithms/pathfinding",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcukltJoT97Gyf2Bo0s8V6tkxeXzhNvHdbpaIL",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Graph Algorithms",
      href: "/algorithms/graphs",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcyxTpEidvTxIewJhzAPYuQZ8WNygtD3mR0n7K", // Placeholder image
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Tree Algorithms",
      href: "/algorithms/trees",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcqI2IlZD2DaOgdFi018c59o7IE3ALKURWrQZ4", // Placeholder image
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Dynamic Programming",
      href: "/algorithms/dynamic-programming",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgciQQpJncuzQ9UVOny6PsSxNLpvrb1Ca05liIq", // Placeholder image
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "Data Structures",
      href: "/data-structures",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgc9UB4vj56I4HPmw1SbZvTiNjpDyu2BVoGOh3M", // Placeholder image
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "Compression Algorithms",
      href: "/algorithms/compression",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgc5fpvK7s62NgZB4OI8cwlkYRWxFCHi73sqa9X", // Placeholder image
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "String Algorithms",
      href: "/algorithms/strings",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcnZ0I61MlZ5TQGIWxf7HOdzYuU6voaJtjewhk", // Placeholder image
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Recursion",
      href: "/algorithms/recursion",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcd8Afrl3BNAG8e4Fn9HyoYkEtwspRKWLhqDc0", // Placeholder image
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Machine Learning (Basic)",
      href: "/algorithms/machine-learning",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgccjb8BkogIuXwJsWVfCZ698kqFb7ylpSeUvax", // Placeholder image
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "About & Docs",
      href: "/about-docs",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgctFIXLcV2skmVQPwSIZaGbDuM1LcUClRfnWpd",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 p-4 text-white md:p-8">
      {/* Title */}
      <h1 className="mb-10 text-center text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-7xl">
        <span className="bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
          The Oracle's Trace
        </span>
      </h1>

      {/* Bento grid */}
      <section className="mx-auto grid max-w-7xl auto-rows-[150px] grid-cols-12 gap-4">
        {sections.map((section) => (
          <Link
            key={section.name}
            to={section.href}
            className={
              "group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-pink-500/50 " +
              section.className
            }
          >
            {/* Background image */}
            <img
              src={section.img}
              alt={section.name}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/25" />
            {/* Label */}
            <span className="absolute bottom-4 left-4 text-2xl font-semibold drop-shadow-md">
              {section.name}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
