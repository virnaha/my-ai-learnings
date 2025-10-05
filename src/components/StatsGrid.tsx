import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Time Reduction", value: "90%", icon: "⚡" },
  { label: "First Draft", value: "10 min", icon: "🚀" },
  { label: "Question Coverage", value: "85%", icon: "✓" },
  { label: "Monthly Cost", value: "€35", icon: "💰" },
];

const StatsGrid = () => {
  return (
    <section className="py-8 md:py-12 opacity-0 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl">The Results</h2>
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-border bg-card transition-all hover:shadow-lg hover:scale-105"
            >
              <CardContent className="p-4 text-center">
                <div className="mb-2 text-2xl">{stat.icon}</div>
                <div className="mb-1 text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
