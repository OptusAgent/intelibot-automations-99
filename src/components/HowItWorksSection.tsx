import { Search, MessageSquare, Rocket, BarChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksSection = () => {
  useScrollAnimation();
  
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Análise Inicial",
      description: "Avaliamos seus processos atuais e identificamos oportunidades de automação"
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Proposta Personalizada",
      description: "Criamos uma solução sob medida para as necessidades específicas do seu negócio"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementação Rápida",
      description: "Desenvolvemos e implantamos a solução em até 30 dias, com treinamento completo"
    },
    {
      number: "04",
      icon: BarChart,
      title: "Otimização Contínua",
      description: "Monitoramos resultados e ajustamos constantemente para maximizar o ROI"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Como Funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e transparente para transformar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative text-center fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-primary opacity-30"></div>
                )}
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 relative z-10">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;