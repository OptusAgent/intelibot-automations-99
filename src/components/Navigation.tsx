import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#vendas", label: "Vendas & Marketing" },
    { href: "#recursos-humanos", label: "Recursos Humanos" },
    { href: "#logistica", label: "Logística" },
    { href: "#saude-financeiro", label: "Saúde & Financeiro" },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-0 cursor-pointer" onClick={() => scrollToSection('#inicio')}>
            <img 
              src="/lovable-uploads/bd14a099-517f-4256-bdd7-e56d84a87770.png" 
              alt="Optus Agent Logo" 
              className="h-24 w-24 object-contain -mr-1 mt-2"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Optus Agent
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contato';
                }
              }}
            >
              Contato
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 shadow-card">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const contactSection = document.getElementById('contato');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contato';
                    }
                    setIsOpen(false);
                  }}
                >
                  Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;