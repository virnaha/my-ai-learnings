import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techItems = [
  { name: "Storage", tech: "Supabase + pgvector" },
  { name: "Embeddings", tech: "OpenAI text-embedding-ada-002" },
  { name: "Search", tech: "Cosine similarity" },
  { name: "Generation", tech: "GPT-4" },
  { name: "Cost", tech: "€20-50/month" },
];

const TechStack = () => {
  return (
    <section className="py-8 md:py-12 opacity-0 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-xl font-semibold md:text-2xl">Technical Stack</h2>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Simple, effective, and cost-efficient
          </p>
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Core Components</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-3">
                {techItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between border-b border-border pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <dt className="font-medium text-foreground">{item.name}</dt>
                    <dd className="text-muted-foreground">{item.tech}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
