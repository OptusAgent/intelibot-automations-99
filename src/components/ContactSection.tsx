import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  useScrollAnimation();
  
  return (
    <section id="contato" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio com IA? Nossa equipe está aqui para ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 fade-in-up">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-500">
                  <div className="h-6 w-6 text-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.794.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.687"/>
                    </svg>
                  </div>
                </div>
              </div>
              <CardTitle className="text-lg">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Converse diretamente conosco
              </p>
               <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://wa.me/5511993903011', '_blank')}
              >
                +55 11 99390-3011
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 fade-in-up">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Entre em contato por E-mail
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('mailto:optusagent.ia@gmail.com', '_blank')}
              >
                optusagent.ia@gmail.com
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 fade-in-up">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-lg">Instagram</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Acompanhe nossas novidades
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://instagram.com/optusagent', '_blank')}
              >
                @optusagent
              </Button>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 fade-in-up">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-600">
                  <Facebook className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-lg">Facebook</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Conecte-se conosco no Facebook
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://facebook.com/optusagent', '_blank')}
              >
                /optusagent
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-border/50 bg-gradient-card backdrop-blur-sm max-w-4xl mx-auto fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Transforme seu Negócio com IA Hoje Mesmo
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Agende uma demonstração personalizada e veja como nossas soluções podem 
                revolucionar seus processos em apenas 30 dias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('mailto:optusagent.ia@gmail.com?subject=Demonstração Optus Agent', '_blank')}
                >
                  Agendar Demonstração
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511993903011', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;