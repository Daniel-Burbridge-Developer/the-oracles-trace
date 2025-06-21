import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

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
      className: "col-span-12 sm:col-span-7 row-span-2",
    },
    {
      name: "Path-Finding Algorithms",
      href: "/algorithms/pathfinding",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcukltJoT97Gyf2Bo0s8V6tkxeXzhNvHdbpaIL",
      className: "col-span-12 sm:col-span-5 row-span-1",
    },
    {
      name: "Searching Algorithms",
      href: "/algorithms/searching",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcvBIf4qbglkhbTpKtMsdQ8FPNqRYBafSO06Dz",
      className: "col-span-12 sm:col-span-5 row-span-1",
    },
    {
      name: "Graph Algorithms",
      href: "/algorithms/graphs",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcyxTpEidvTxIewJhzAPYuQZ8WNygtD3mR0n7K",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Tree Algorithms",
      href: "/algorithms/trees",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcqI2IlZD2DaOgdFi018c59o7IE3ALKURWrQZ4",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Dynamic Programming",
      href: "/algorithms/dynamic-programming",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgciQQpJncuzQ9UVOny6PsSxNLpvrb1Ca05liIq",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Data Structures",
      href: "/data-structures",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgc9UB4vj56I4HPmw1SbZvTiNjpDyu2BVoGOh3M",
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "Compression Algorithms",
      href: "/algorithms/compression",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgc5fpvK7s62NgZB4OI8cwlkYRWxFCHi73sqa9X",
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "String Algorithms",
      href: "/algorithms/strings",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcnZ0I61MlZ5TQGIWxf7HOdzYuU6voaJtjewhk",
      className: "col-span-12 sm:col-span-3 row-span-1",
    },
    {
      name: "Recursion",
      href: "/algorithms/recursion",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcd8Afrl3BNAG8e4Fn9HyoYkEtwspRKWLhqDc0",
      className: "col-span-12 sm:col-span-3 row-span-1",
    },
    {
      name: "Machine Learning (Basic)",
      href: "/algorithms/machine-learning",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgccjb8BkogIuXwJsWVfCZ698kqFb7ylpSeUvax",
      className: "col-span-12 sm:col-span-6 row-span-1",
    },
    {
      name: "Game Theory",
      href: "/algorithms/game-theory",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgcOVvFAzsmV5hLwxBTjdfuzCGgHntOmlPcs3kv",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "Load Balancing",
      href: "/algorithms/load-balancing",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgc3IVV4JrEDMHXCaz20l8rfZvm5QiF6bWkUTV3",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
    {
      name: "About & Docs",
      href: "/about-docs",
      img: "https://iv1bgce8et.ufs.sh/f/ryr1dmZ5jpgctFIXLcV2skmVQPwSIZaGbDuM1LcUClRfnWpd",
      className: "col-span-12 sm:col-span-4 row-span-1",
    },
  ];

  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen bg-neutral-950 p-4 text-white md:p-8">
      {/* Title */}
      <h1 className="mb-10 text-center text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-7xl">
        <span className="bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
          The Oracle's Trace
        </span>
      </h1>

      {/* Bento grid */}
      <section className="mx-auto grid max-w-7xl auto-rows-[200px] grid-cols-12 gap-4">
        {sections.map((section) => (
          <MotionLink
            key={section.name}
            to={section.href}
            className={
              "group relative block overflow-hidden rounded-xl border border-neutral-800 " +
              section.className
            }
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              hover: { scale: 1.02 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 h-full w-full"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={section.img}
                alt={section.name}
                className="pointer-events-none h-full w-full object-cover object-center"
              />
            </motion.div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />
            <motion.div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:animate-border-glow group-hover:border-pink-500/50" />
            {/* Label */}
            <motion.span
              className="absolute bottom-4 left-4 text-2xl font-semibold text-white drop-shadow-md"
              variants={{
                rest: { y: 0, opacity: 1 },
                hover: { y: -4, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {section.name}
            </motion.span>
          </MotionLink>
        ))}
      </section>
    </main>
  );
}
