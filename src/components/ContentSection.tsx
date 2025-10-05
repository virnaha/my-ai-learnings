import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

const ContentSection = ({ title, children, id }: ContentSectionProps) => {
  return (
    <section id={id} className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-3xl shadow-lg opacity-0 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="prose-compact text-sm md:text-base">
            <div className="space-y-3 text-foreground/85">
              {children}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContentSection;
