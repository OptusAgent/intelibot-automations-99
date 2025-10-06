import { Check, Shield, Clock, TrendingUp, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BenefitsSection = () => {
  useScrollAnimation();
  
  const benefits = [
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Implemente soluções de IA em até 30 dias, sem complexidade técnica"
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Retorno sobre investimento mensurável em até 90 dias"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Proteção de dados com criptografia de ponta e compliance LGPD"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Equipe técnica disponível sempre que você precisar"
    },
    {
      icon: Users,
      title: "Treinamento Incluído",
      description: "Capacitação completa da sua equipe sem custo adicional"
    },
    {
      icon: Check,
      title: "Garantia de Satisfação",
      description: "30 dias de garantia ou seu dinheiro de volta"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Optus Agent
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais do que tecnologia, oferecemos uma parceria completa para o sucesso do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex gap-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:shadow-hover transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;