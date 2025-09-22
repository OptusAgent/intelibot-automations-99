import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                <span className="text-white">Optus</span>
                <span className="text-primary">Agent</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Oferecemos experiências online excepcionais e impulsionando o 
              crescimento sustentável de negócios em todo o mundo.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-3 mt-6">
              <Button
                size="sm"
                variant="secondary"
                className="p-2 rounded-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://facebook.com/optusagent', '_blank')}
              >
                <Facebook className="h-4 w-4 text-white" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="p-2 rounded-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://instagram.com/optusagent', '_blank')}
              >
                <Instagram className="h-4 w-4 text-white" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="p-2 rounded-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://linkedin.com/company/optusagent', '_blank')}
              >
                <Linkedin className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/vendas" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Notícias
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pedir um Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações de Contato</h3>
            <p className="text-gray-300 text-sm mb-4">
              Sinta-se à vontade para entrar em contato conosco!
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-1 rounded bg-red-600">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-gray-300 text-sm">+55 11 99390-3011</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-1 rounded bg-red-600">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-gray-300 text-sm">contato@optusagent.com.br</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-1 rounded bg-red-600">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-gray-300 text-sm">
                  São Paulo - SP, Brasil
                </span>
              </div>
            </div>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Central de ajuda</p>
                <a 
                  href="mailto:contato@optusagent.com.br" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contato@optusagent.com.br
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">
                  De seg a sex, das 09 às 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Optus Agent. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;