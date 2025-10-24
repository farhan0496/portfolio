import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";


const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="hero-text-gradient">Farhanudeen</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            MERN Stack Developer | UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Passionate about creating modern web applications with clean code and intuitive user experiences. 
            Specialized in React, Node.js, MongoDB, and full-stack development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={() => scrollToSection("#projects")}
              className="btn-hero"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button 
              variant="outline"
              className="btn-outline"
              onClick={() => window.open("https://github.com/farhan0496/git_repository_git1", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline"
              className="btn-outline"
              onClick={() => window.open("https://www.linkedin.com/in/farhanudeen-a-c-1718262b8", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full float opacity-50" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full float opacity-30" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full float opacity-40" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default Hero;