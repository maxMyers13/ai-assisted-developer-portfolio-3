// Return your real projects. At least two of them, that you actually built.
const PROJECTS: Array<{
  title: string;
  description: string;
  technologies: string[];
  url: string;
}> = [
  {
    title: "Study Group Finder",
    description:
      "Matches classmates by course and free time, with a shared calendar and reminders before each session.",
    technologies: ["React", "TypeScript", "Node.js"],
    url: "https://example.com/study-group-finder",
  },
  {
    title: "Campus Eats",
    description:
      "Every dining hall's menu and hours on one fast page, refreshed each morning and readable on a phone.",
    technologies: ["Next.js", "PostgreSQL", "CSS"],
    url: "https://example.com/campus-eats",
  },
  {
    title: "Budget CLI",
    description:
      "A small command-line budget tracker that reads bank CSV exports and prints a monthly summary.",
    technologies: ["Python", "SQLite"],
    url: "https://example.com/budget-cli",
  },
];
export function GET(): Response {
  return new Response(JSON.stringify(PROJECTS), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
