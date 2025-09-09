import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, TrendingUp, Users, Truck, Heart, FileText } from "lucide-react";
import customerServiceImage from "@/assets/modern-ai-customer-service.jpg";
import salesMarketingImage from "@/assets/elegant-sales-marketing.jpg";
import hrAutomationImage from "@/assets/hr-automation.jpg";
import logisticsImage from "@/assets/logistics-optimization.jpg";
import healthFinancialImage from "@/assets/elegant-health-financial.jpg";
import administrativeImage from "@/assets/elegant-administrative.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogGrid = () => {
  useScrollAnimation();
  
  const articles = [
    {
      id: "atendimento",
      title: "Atendimento ao Cliente com IA",
      description: "Chatbots inteligentes, análise de sentimento e suporte 24/7 que revolucionam a experiência do cliente.",
      icon: MessageSquare,
      image: customerServiceImage,
      tags: ["Chatbots", "Suporte 24/7", "Análise de Sentimento"],
      features: [
        "Chatbots com processamento de linguagem natural",
        "Análise de sentimento em tempo real",
        "Suporte 24/7 automatizado",
        "Integração com CRM e sistemas existentes"
      ]
    },
    {
      id: "vendas",
      title: "Vendas & Marketing Inteligente",
      description: "Qualificação automática de leads, campanhas personalizadas e análise preditiva para maximizar conversões.",
      icon: TrendingUp,
      image: salesMarketingImage,
      tags: ["Lead Scoring", "Automação", "Personalização"],
      features: [
        "Lead scoring automatizado",
        "Campanhas personalizadas por IA",
        "Análise preditiva de vendas",
        "Automação de follow-up"
      ]
    },
    {
      id: "recursos-humanos",
      title: "Recursos Humanos Automatizados",
      description: "Recrutamento inteligente, onboarding digital e gestão de benefícios totalmente automatizada.",
      icon: Users,
      image: hrAutomationImage,
      tags: ["Recrutamento", "Onboarding", "Gestão"],
      features: [
        "Triagem automatizada de currículos",
        "Onboarding digital personalizado",
        "Gestão automatizada de benefícios",
        "Análise de performance"
      ]
    },
    {
      id: "logistica",
      title: "Logística & Otimização",
      description: "Rastreamento inteligente, otimização de rotas e gestão de estoque com machine learning.",
      icon: Truck,
      image: logisticsImage,
      tags: ["Rastreamento", "Rotas", "Estoque"],
      features: [
        "Otimização de rotas com IA",
        "Rastreamento em tempo real",
        "Gestão inteligente de estoque",
        "Previsão de demanda"
      ]
    },
    {
      id: "saude-financeiro",
      title: "Saúde & Financeiro",
      description: "Agendamentos automáticos, conciliação bancária e gestão financeira inteligente.",
      icon: Heart,
      image: healthFinancialImage,
      tags: ["Agendamentos", "Conciliação", "Gestão"],
      features: [
        "Agendamentos automatizados",
        "Conciliação bancária inteligente",
        "Gestão financeira preditiva",
        "Relatórios automatizados"
      ]
    }
  ];

  return (
    <>
      <section id="areas-negocio" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluções de Automação por{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Área de Negócio
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como a Inteligência Artificial pode transformar cada setor da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <Card key={article.id} className={`group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="pb-4">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {articles.map((article) => {
        const IconComponent = article.icon;
        return (
          <section key={article.id} id={article.id} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 fade-in-left">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      <span className="bg-gradient-primary bg-clip-text text-transparent">
                        {article.title}
                      </span>
                    </h2>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Principais Funcionalidades:</h3>
                    <ul className="space-y-3">
                      {article.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative fade-in-right">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20"></div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="relative rounded-2xl shadow-hover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default BlogGrid;