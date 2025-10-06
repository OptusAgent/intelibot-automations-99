const HeroAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_1s]"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite_2s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-primary/40 via-primary/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
      
      {/* AI Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4">
              <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Animated circuit paths */}
        <path d="M 50 100 Q 150 100 200 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 200 150 L 300 150 Q 350 150 350 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 100 300 Q 200 250 300 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>
        
        {/* Animated nodes */}
        <circle cx="200" cy="150" r="4" fill="hsl(var(--primary))">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="200" r="4" fill="hsl(var(--accent))">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="200" cy="250" r="4" fill="hsl(var(--primary))">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
      </svg>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Automação Inteligente</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
