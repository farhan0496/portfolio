import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, User } from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = {
    frontend: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Bootstrap", icon: "📱" },
    ],
    backend: [
      { name: "Node.js", icon: "💚" },
      { name: "Express", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
      { name: "Docker", icon: "🐳" },
      { name: "GitHub", icon: "🐙" },
    ],
  };

  const softSkills = [
    "Problem Solving",
    "Self-Learning", 
    "Adaptability",
    "Creativity",
    "Communication",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Client Relations",
    "Conflict Resolution",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title slide-up">
          Skills
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 fade-in">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant="ghost"
                className={`skills-tab ${activeTab === "technical" ? "active" : ""}`}
                onClick={() => setActiveTab("technical")}
              >
                <Code className="w-5 h-5 mr-2" />
                Technical Skills
              </Button>
              <Button
                variant="ghost"
                className={`skills-tab ${activeTab === "personal" ? "active" : ""}`}
                onClick={() => setActiveTab("personal")}
              >
                <User className="w-5 h-5 mr-2" />
                Soft Skills
              </Button>
            </div>
          </div>

          {/* Tab Content */}
          <Card className="portfolio-card p-8">
            {activeTab === "technical" && (
              <div className="space-y-12 fade-in">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-center">Frontend Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {technicalSkills.frontend.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="skill-card p-6 text-center"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <h4 className="font-semibold">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-center">Backend Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {technicalSkills.backend.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="skill-card p-6 text-center"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <h4 className="font-semibold">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "personal" && (
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-8 text-center">Professional Attributes</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="skill-badge"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </div>
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