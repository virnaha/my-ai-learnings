const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(210_85%_35%)] to-[hsl(215_75%_45%)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-block rounded-lg bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/20">
            <p className="text-xs font-medium text-white/90">Case Study</p>
          </div>
          <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl drop-shadow-lg">
            Building an AI-Powered RFP Analyzer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
