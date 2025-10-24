import { useState, FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Code } from "lucide-react";

// Import actual skill icons from react-icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiPhp,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: ReactNode;
};

const TECHNICAL_SKILLS: Record<"frontend" | "backend", Skill[]> = {
  frontend: [
    { name: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="w-10 h-10 text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-indigo-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-600" /> },
    { name: "React.js", icon: <SiReact className="w-10 h-10 text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-black dark:text-white" /> },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="w-10 h-10 text-gray-700 dark:text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-sky-500" /> },
    { name: "Python", icon: <SiPython className="w-10 h-10 text-yellow-500" /> },
    { name: "PHP", icon: <SiPhp className="w-10 h-10 text-indigo-700" /> },
  ],
};

const SOFT_SKILLS = [
  "Problem Solving",
  "Self-Learning",
  "Adaptability",
  "Creativity",
  "Communication",
  "Teamwork",
  "Time Management",
  "Leadership",
];

const Skills: FC = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "personal">("technical");
  const sections = Object.keys(TECHNICAL_SKILLS) as Array<keyof typeof TECHNICAL_SKILLS>;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title">Skills</h2>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-lg p-1" role="tablist" aria-label="Skills tabs">
              <Button
                variant="ghost"
                className={`skills-tab ${activeTab === "technical" ? "active" : ""}`}
                onClick={() => setActiveTab("technical")}
                aria-pressed={activeTab === "technical"}
                role="tab"
                aria-selected={activeTab === "technical"}
              >
                <Code className="w-5 h-5 mr-2" />
                Technical Skills
              </Button>

              <Button
                variant="ghost"
                className={`skills-tab ${activeTab === "personal" ? "active" : ""}`}
                onClick={() => setActiveTab("personal")}
                aria-pressed={activeTab === "personal"}
                role="tab"
                aria-selected={activeTab === "personal"}
              >
                <User className="w-5 h-5 mr-2" />
                Soft Skills
              </Button>
            </div>
          </div>

          {/* Tab Content */}
          <Card className="portfolio-card p-8" role="tabpanel">
            {activeTab === "technical" && (
              <div className="space-y-12 fade-in">
                {/* MERN Stack title */}
                {/* <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
                  MERN Stack Developer
                </h3> */}

                {sections.map((section) => (
                  <div key={section}>
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                      {section.charAt(0).toUpperCase() + section.slice(1)} Technologies
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {TECHNICAL_SKILLS[section].map((skill) => (
                        <div
                          key={skill.name}
                          className="skill-card p-6 text-center bg-transparent hover:shadow-md rounded-lg transition-transform transform hover:-translate-y-1"
                        >
                          <div className="mb-3 flex justify-center text-4xl">{skill.icon}</div>
                          <h4 className="font-semibold">{skill.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "personal" && (
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Professional Attributes</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {SOFT_SKILLS.map((skill) => (
                    <span key={skill} className="skill-badge px-3 py-2 rounded-full bg-muted text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
