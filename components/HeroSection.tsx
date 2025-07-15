const HeroSection = () => {
  const platforms = [
    {
      name: "Pump.fun",
      logo: "images/pump.webp",
      url: "https://pump.fun",
      category: "Launch Platforms"
    },
    {
      name: "LetsBonk",
      logo: "images/lets-bonk.png",
      url: "https://letsbonk.fun",
      category: "Launch Platforms"
    },
    {
      name: "Moonshot",
      logo: "images/moonshot.png",
      url: "https://dexscreener.com/moonshot",
      category: "Launch Platforms"
    },
    {
      name: "Raydium Launchpad",
      logo: "images/raydium-launchpad.png",
      url: "https://raydium.io/launchpad",
      category: "Launch Platforms"
    },
    {
      name: "Raydium",
      logo: "images/raydium-launchpad.png",
      url: "https://raydium.io",
      category: "DEX Swaps"
    },
    {
      name: "Jupiter",
      logo: "https://jup.ag/svg/jupiter-logo.svg",
      url: "https://jup.ag",
      category: "DEX Swaps"
    }
  ];

  const launchPlatforms = platforms.filter(p => p.category === "Launch Platforms");
  const dexPlatforms = platforms.filter(p => p.category === "DEX Swaps");

  return (
    <section id="hero" className="hero min-h-[200px] mt-[100px] w-full ">
      <div className="text-center space-y-6 mt-6">
        <span className="bg-gradient-to-r from-solana-purple to-solana-green text-transparent text-4xl font-extrabold text-center bg-clip-text ">
          Bump Your Tokens to the Spotlight!
        </span>
        <div className="text-2xl">
          Make your tokens trend 🔥
          <p className="text-xl">
            Enjoy the <strong className="text-accent">cheapest</strong> and most{" "}
            <strong className="text-accent">efficient</strong> micro pump bot.
          </p>
        </div>
        
        <div className="mt-12 max-w-5xl mx-auto px-4">
          <div className="glass-effect-strong rounded-xl p-8 shadow-xl mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Supported Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {launchPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glass-effect rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-base-300 hover:border-accent"
                >
                  {platform.name === "LetsBonk" && (
                    <span className="absolute -top-2 -right-2 bg-transparent border-2 border-accent text-accent text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">
                      {platform.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="glass-effect-strong rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Supported DEXes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto">
              {dexPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glass-effect rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-base-300 hover:border-accent"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">
                      {platform.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
