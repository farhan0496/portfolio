import { Card } from "@/components/ui/card";
import { Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title slide-up">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate MERN stack developer with a strong foundation in Computer Engineering 
              and hands-on experience building dynamic, responsive web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="portfolio-card p-8 fade-in">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg mr-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Development Skills</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in MongoDB, Express.js, React, and Node.js, with expertise in building 
                RESTful APIs and responsive UIs using modern JavaScript frameworks and libraries.
              </p>
            </Card>
            
            <Card className="portfolio-card p-8 fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg mr-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Driven by a passion for technology and continuous learning, I thrive in collaborative 
                environments and excel at transforming complex problems into scalable solutions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;