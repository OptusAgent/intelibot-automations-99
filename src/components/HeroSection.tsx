import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-ai-realistic.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  useScrollAnimation();
  
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Optus Agent
                </span>
                <br />
                Soluções em Automações
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforme seus processos empresariais com soluções de IA que automatizam 
                até 80% das tarefas repetitivas, reduzem custos em 70% e aumentam a 
                produtividade em 50%.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://wa.me/5585917333321', '_blank')}
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 mx-auto">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm text-muted-foreground">Automação</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 mx-auto">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm text-muted-foreground">Redução Custos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Disponível</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in-right">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20"></div>
            <img
              src={heroImage}
              alt="Automação com IA"
              className="relative rounded-2xl shadow-hover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;