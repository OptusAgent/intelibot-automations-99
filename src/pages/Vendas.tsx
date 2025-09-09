import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Mail, Users, BarChart3, Zap, Brain, MessageSquare } from "lucide-react";
import salesMarketingImage from "@/assets/modern-sales-intelligence.jpg";

const Vendas = () => {
  const features = [
    {
      icon: Target,
      title: "Qualificação Inteligente de Leads",
      description: "Identificação automática de leads qualificados com scoring baseado em comportamento e dados históricos",
      benefits: ["Aumento de 60% na conversão", "Priorização automática", "Redução de tempo em 70%"]
    },
    {
      icon: Mail,
      title: "Automação de Campanhas",
      description: "Disparo automático de e-mails, mensagens em redes sociais e notificações push baseadas em triggers",
      benefits: ["Segmentação inteligente", "Timing perfeito", "Personalização em massa"]
    },
    {
      icon: Brain,
      title: "Personalização com IA",
      description: "Análise preditiva de dados para ofertas personalizadas e recomendações inteligentes de produtos",
      benefits: ["Ofertas relevantes", "Aumento do ticket médio", "Experiência única"]
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboards em tempo real com insights sobre performance de vendas e comportamento do cliente",
      benefits: ["Decisões data-driven", "ROI otimizado", "Previsões precisas"]
    }
  ];

  const metrics = [
    { label: "Aumento nas Conversões", value: "+60%", icon: TrendingUp },
    { label: "Redução no Ciclo de Vendas", value: "45%", icon: Zap },
    { label: "Precisão do Lead Scoring", value: "92%", icon: Target },
    { label: "ROI das Campanhas", value: "+300%", icon: BarChart3 }
  ];

  const automationTypes = [
    {
      title: "Nurturing de Prospects",
      description: "Sequências automatizadas de e-mails personalizados baseadas no comportamento do lead",
      icon: MessageSquare
    },
    {
      title: "Segmentação Dinâmica",
      description: "Classificação automática de audiências baseada em dados demográficos e comportamentais",
      icon: Users
    },
    {
      title: "Retargeting Inteligente",
      description: "Campanhas automatizadas para reengajar visitantes que não converteram",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-gradient-primary text-white border-0">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Vendas & Marketing
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Optus Agent
                    </span>
                    <br />
                    Vendas Inteligentes
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Qualificação automática de leads, campanhas personalizadas e análise 
                    preditiva que aumentam conversões em até 60% e reduzem custos de aquisição.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={salesMarketingImage}
                  alt="Vendas e Marketing com IA"
                  className="rounded-2xl shadow-hover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <Card key={index} className="text-center bg-card border-0 shadow-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Funcionalidades Principais
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tecnologia de ponta para maximizar resultados de vendas e marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-primary rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Benefícios:</h4>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Automation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tipos de Automação
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {automationTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="bg-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{type.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{type.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Casos de Uso Específicos
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>Carrinho Abandonado:</strong> Recuperação automática com e-mails personalizados</li>
                    <li>• <strong>Recomendações:</strong> Produtos similares baseados em histórico de compras</li>
                    <li>• <strong>Cross-sell/Up-sell:</strong> Ofertas complementares inteligentes</li>
                    <li>• <strong>Campanhas Sazonais:</strong> Promoções automatizadas por época do ano</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Agências de Marketing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>Gestão de Leads:</strong> Distribuição automática para vendedores</li>
                    <li>• <strong>Relatórios Cliente:</strong> Dashboards automatizados de performance</li>
                    <li>• <strong>Social Media:</strong> Postagens e engajamento automatizado</li>
                    <li>• <strong>A/B Testing:</strong> Otimização contínua de campanhas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Vendas;