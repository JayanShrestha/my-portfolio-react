import Section from "./Section";
import useText from "../hooks/useText";
import { Globe } from "lucide-react";
import { Database } from "lucide-react";
import { Server } from "lucide-react";

const Skills = () => {
  const { animateOnLoad } = useText();

  return (
    <Section
      className="pt-48 "
      crosses
      crossesOffset="lg:translate-y-20"
      customPaddings
      id="skills"
    >
      <div className={`container mt-24 lg:mt-32 items-center`}>
        <h1
          className={`transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} h1 mb-6`}
        >
          <span className="block">Skills & Technologies</span>
        </h1>

        <div
          className={`relative transition-all duration-1000 ${animateOnLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} grid md:grid-cols-3 gap-12`}
        >
          <div className="relative gradient-animation rounded-2xl p-8 dark:border-n-8/50 border-n-1 backdrop-blur">
            <div className="dark:bg-n-8/50 bg-n-1 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-400 font-mono flex gap-2">
                  <Globe /> <h2 className="body-1 font-bold">Frontend</h2>
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm h-32">
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ React
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ TypeScript
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Next.js
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Tailwind CSS
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Redux
                </div>
              </div>
            </div>
          </div>
          <div className="relative gradient-animation rounded-2xl p-8 dark:border-n-8/50 border-n-1 backdrop-blur">
            <div className="dark:bg-n-8/50 bg-n-1 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-400 font-mono flex gap-2">
                  <Server /> <h2 className="body-1 font-bold">Backend</h2>
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm h-32">
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Node.js
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Express
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Laravel
                </div>
              </div>
            </div>
          </div>
          <div className="relative gradient-animation rounded-2xl p-8 dark:border-n-8/50 border-n-1 backdrop-blur">
            <div className="dark:bg-n-8/50 bg-n-1 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-400 font-mono flex gap-2">
                  <Database />{" "}
                  <h2 className="body-1 font-bold">Database & Tools</h2>
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm h-32">
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ PostgreSQL
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ MongoDB
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Redis
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ MySQL
                </div>
                <div className="pl-6 text-n-8/50 dark:text-slate-500">
                  ✓ Git, CI/CD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Skills;
