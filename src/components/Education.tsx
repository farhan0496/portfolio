import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Book } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 section-title slide-up">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="portfolio-card fade-in">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">
                    Diploma in Computer Engineering
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <GraduationCap className="w-5 h-5 mr-3 text-primary" />
                      <span>Majlis Polytechnic College (AICTE)</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3 text-primary" />
                      <span>2021 - 2024</span>
                    </div>
                    
                    <div className="flex items-start text-muted-foreground">
                      <Book className="w-5 h-5 mr-3 text-primary mt-0.5" />
                      <span>
                        Relevant Coursework: Specialized in software development and database management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;