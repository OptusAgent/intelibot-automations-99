import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, TrendingUp, FileText, Calendar, Brain, BarChart3, CheckCircle } from "lucide-react";
import hrImage from "@/assets/hr-automation.jpg";

const RecursosHumanos = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Recrutamento Inteligente",
      description: "IA para triagem de currículos e identificação dos melhores candidatos",
      benefits: [
        "Redução de 70% no tempo de triagem",
        "Análise automática de competências",
        "Score de compatibilidade com vaga",
        "Entrevistas pré-selecionadas por IA"
      ]
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Gestão de Performance",
      description: "Automação de avaliações e acompanhamento de desenvolvimento",
      benefits: [
        "Feedbacks automáticos personalizados",
        "Planos de desenvolvimento individuais",
        "Métricas de produtividade em tempo real",
        "Alertas de baixo desempenho"
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Treinamento Personalizado",
      description: "IA que cria trilhas de aprendizado baseadas no perfil do colaborador",
      benefits: [
        "Conteúdo adaptativo por função",
        "Gamificação do aprendizado",
        "Certificações automáticas",
        "ROI de treinamentos mensurado"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Gestão Documental",
      description: "Automação completa de processos administrativos de RH",
      benefits: [
        "Digitalização de documentos",
        "Assinatura eletrônica integrada",
        "Controle de prazos automático",
        "Conformidade com LGPD"
      ]
    }
  ];

  const metrics = [
    { label: "Redução no Tempo de Contratação", value: "65%", icon: <Clock className="h-5 w-5" /> },
    { label: "Aumento na Retenção", value: "40%", icon: <Users className="h-5 w-5" /> },
    { label: "Economia em Processos", value: "45%", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Satisfação dos Colaboradores", value: "85%", icon: <CheckCircle className="h-5 w-5" /> }
  ];

  const automationTypes = [
    {
      title: "Onboarding Automatizado",
      description: "Processo completo de integração de novos colaboradores com IA",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Análise Preditiva de Turnover",
      description: "Identificação precoce de riscos de desligamento",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Agente de IA para RH",
      description: "Assistente virtual para dúvidas de políticas e benefícios",
      icon: <Brain className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Recursos Humanos
                  </span>
                  <br />
                  com Inteligência Artificial
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transforme sua gestão de pessoas com automações inteligentes que otimizam 
                  processos, melhoram a experiência do colaborador e aumentam a produtividade do RH.
                </p>
              </div>
              <div className="flex gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  Recrutamento IA
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Performance Analytics
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Gestão Automatizada
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src={hrImage} 
                alt="Automação de RH com IA" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados que Transformam o RH</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Principais Funcionalidades</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como nossa IA pode revolucionar cada aspecto da gestão de recursos humanos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Automação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {automationTypes.map((type, index) => (
              <Card key={index} className="text-center border-border/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Uso</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Empresas de Grande Porte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Gestão de milhares de colaboradores com eficiência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Padronização de processos entre filiais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Analytics avançado de workforce</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Startups e Scale-ups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Crescimento acelerado com estrutura enxuta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Recrutamento ágil para expansão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Cultura organizacional automatizada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecursosHumanos;