import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Smartphone, Package, User } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce website with React frontend, Node.js backend, and MongoDB database. Features include product catalog, shopping cart, user authentication, and payment integration.",
      icon: ShoppingCart,
      color: "text-blue-500",
    },
    {
      title: "Restaurant Review App",
      description: "Flutter application allowing users to review restaurants on food, safety, and hygiene with real-time updates and location-based services.",
      icon: Smartphone,
      color: "text-green-500",
    },
    {
      title: "Inventory Management System",
      description: "Developed a responsive front-end interface for an Inventory Management System using HTML5 and CSS3.",
      icon: Package,
      color: "text-purple-500",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive personal portfolio built with Bootstrap 5, AOS animations, and JavaScript showcasing my projects and skills.",
      icon: User,
      color: "text-orange-500",
    },
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title slide-up">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="portfolio-card group h-full fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="p-4 bg-muted rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-12 h-12 ${project.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;