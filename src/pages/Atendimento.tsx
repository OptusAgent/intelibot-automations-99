import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, Users, TrendingUp, Bot, Heart, BarChart3 } from "lucide-react";
import customerServiceImage from "@/assets/modern-ai-customer-service.jpg";

const Atendimento = () => {
  const features = [
    {
      icon: Bot,
      title: "Chatbots e Agentes Virtuais",
      description: "Respostas instantâneas a perguntas frequentes com processamento de linguagem natural avançado",
      benefits: ["Disponibilidade 24/7", "Resposta em segundos", "Múltiplos idiomas"]
    },
    {
      icon: Users,
      title: "Triagem Automática",
      description: "Classificação inteligente de chamados e direcionamento para o setor apropriado",
      benefits: ["Redução de 70% no tempo", "Priorização automática", "Menor sobrecarga"]
    },
    {
      icon: Clock,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado para agendamento de serviços com confirmações automáticas",
      benefits: ["Zero conflitos", "Lembretes automáticos", "Reagendamento fácil"]
    },
    {
      icon: Heart,
      title: "Análise de Sentimento",
      description: "Identificação automática do humor do cliente para priorização de casos críticos",
      benefits: ["Detecção de urgência", "Melhoria contínua", "Satisfação maior"]
    }
  ];

  const metrics = [
    { label: "Redução no Tempo de Resposta", value: "90%", icon: Clock },
    { label: "Disponibilidade do Serviço", value: "24/7", icon: Users },
    { label: "Precisão nas Respostas", value: "95%", icon: TrendingUp },
    { label: "Satisfação do Cliente", value: "+40%", icon: Heart }
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
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Atendimento ao Cliente
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Optus Agent
                    </span>
                    <br />
                    Atendimento Inteligente
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transforme a experiência do cliente com chatbots inteligentes, 
                    análise de sentimento em tempo real e suporte automatizado 24/7.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={customerServiceImage}
                  alt="Atendimento ao Cliente com IA"
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
                Soluções completas para revolucionar o atendimento ao cliente
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

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Casos de Uso Práticos
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                    E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Atendimento automatizado de clientes</li>
                    <li>• Gestão de pedidos e devoluções</li>
                    <li>• Suporte para dúvidas sobre produtos</li>
                    <li>• Rastreamento de entregas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" />
                    Clínicas e Hospitais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Agendamento e confirmação de consultas</li>
                    <li>• Triagem de pacientes</li>
                    <li>• Lembretes de medicamentos</li>
                    <li>• Informações sobre exames</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Serviços Gerais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Suporte técnico automatizado</li>
                    <li>• Informações sobre produtos/serviços</li>
                    <li>• Coleta de feedback dos clientes</li>
                    <li>• Direcionamento para especialistas</li>
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

export default Atendimento;