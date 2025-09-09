import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Package, BarChart3, Clock, Route, Zap, TrendingUp, CheckCircle } from "lucide-react";
import logisticsImage from "@/assets/logistics-optimization.jpg";

const Logistica = () => {
  const features = [
    {
      icon: MapPin,
      title: "Rastreamento Inteligente",
      description: "Notificações automáticas de status de entregas com atualizações em tempo real para clientes",
      benefits: ["Transparência total", "Redução de chamados", "Satisfação do cliente"]
    },
    {
      icon: Route,
      title: "Otimização de Rotas",
      description: "Planejamento inteligente considerando tráfego, prazos e capacidade de veículos automaticamente",
      benefits: ["Redução de 30% nos custos", "Entregas mais rápidas", "Menor consumo combustível"]
    },
    {
      icon: Package,
      title: "Gestão de Estoque",
      description: "Controle automatizado com alertas inteligentes para reposição e previsão de demanda",
      benefits: ["Zero ruptura", "Estoque otimizado", "Previsão precisa"]
    },
    {
      icon: BarChart3,
      title: "Analytics Logístico",
      description: "Dashboards de performance com métricas em tempo real e relatórios automatizados",
      benefits: ["Visibilidade total", "KPIs em tempo real", "Decisões rápidas"]
    }
  ];

  const metrics = [
    { label: "Redução de Custos Operacionais", value: "30%", icon: TrendingUp },
    { label: "Melhoria no Tempo de Entrega", value: "45%", icon: Clock },
    { label: "Precisão no Rastreamento", value: "99%", icon: MapPin },
    { label: "Otimização de Rotas", value: "50%", icon: Route }
  ];

  const integrations = [
    { name: "Correios", description: "Integração completa com APIs dos Correios" },
    { name: "Transportadoras", description: "Conectores para principais transportadoras" },
    { name: "E-commerce", description: "Integração nativa com plataformas de venda" },
    { name: "ERP/WMS", description: "Sincronização com sistemas de gestão" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold leading-tight">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Logística & Otimização
                    </span>
                    <br />
                    com Inteligência Artificial
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transforme sua operação logística com rastreamento inteligente, 
                    otimização de rotas com IA e gestão automatizada de estoque.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    Rastreamento IA
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Rotas Otimizadas
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    Gestão Automatizada
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={logisticsImage} 
                  alt="Logística e Otimização com IA" 
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
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
                Soluções completas para otimizar toda sua cadeia logística
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

        {/* Integrations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Integrações Disponíveis
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="bg-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-center">{integration.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{integration.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Casos de Uso Práticos
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="w-5 h-5 mr-2 text-primary" />
                    E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rastreamento em tempo real para clientes</li>
                    <li>• Otimização de entregas por região</li>
                    <li>• Gestão automática de devoluções</li>
                    <li>• Alertas proativos de atrasos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-primary" />
                    Transportadoras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Planejamento inteligente de rotas</li>
                    <li>• Monitoramento de frota em tempo real</li>
                    <li>• Otimização de capacidade de carga</li>
                    <li>• Redução de custos operacionais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                    Varejo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Controle inteligente de estoque</li>
                    <li>• Previsão de demanda automatizada</li>
                    <li>• Reposição automática de produtos</li>
                    <li>• Analytics de performance logística</li>
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

export default Logistica;