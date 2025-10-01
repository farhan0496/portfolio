import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Upcode software lab",
      type: "Internship",
      achievements: [
        "Developed REST APIs with Node.js handling 10k+ daily requests",
        "Implemented JWT authentication system improving security",
        "Optimized MongoDB queries reducing response time by 40%",
        "Built responsive frontend components with React and Redux",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      type: "Freelance",
      achievements: [
        "Developed and maintained websites for small businesses",
        "Created custom WordPress themes and plugins",
        "Implemented SEO best practices improving client visibility",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title slide-up">
          Professional Experience
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <Card 
                key={experience.title}
                className="portfolio-card h-full fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      {experience.type === "Internship" ? (
                        <Code className="w-8 h-8 text-primary" />
                      ) : (
                        <Briefcase className="w-8 h-8 text-primary" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-muted-foreground">
                          {experience.company}
                        </span>
                        <Badge variant="secondary">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;