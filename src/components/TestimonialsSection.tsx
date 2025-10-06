import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  useScrollAnimation();
  
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechSolutions",
      company: "Varejo Online",
      content: "A automação de atendimento reduziu nosso tempo de resposta em 85% e aumentou a satisfação dos clientes para 95%. Resultados impressionantes em apenas 2 meses.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Diretora de Vendas",
      company: "Indústria",
      content: "O lead scoring automatizado aumentou nossa taxa de conversão em 60%. A equipe de vendas agora foca apenas nos leads mais qualificados.",
      rating: 5
    },
    {
      name: "João Oliveira",
      role: "Gerente de RH",
      company: "Serviços Financeiros",
      content: "Automatizamos todo o processo de recrutamento. Reduzimos o tempo de contratação de 45 para 15 dias, mantendo a qualidade dos candidatos.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus processos com IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-border/50 bg-gradient-card hover:shadow-hover transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center fade-in-up">
          <p className="text-sm text-muted-foreground mb-6">Empresas confiam em nossas soluções</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">50+ Clientes</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold">95% Satisfação</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold">2M+ Processos Automatizados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;