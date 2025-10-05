import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import ContentSection from "@/components/ContentSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <ContentSection title="The Problem">
        <div className="space-y-4">
          <div className="opacity-0 animate-fade-in-delay-1 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-coral">The RFP Reality</h3>
            <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 bg-accent/5">
              <p className="mb-1 text-base font-medium">
                "Got an RFP. 200 questions. Need it by next week."
              </p>
              <footer className="text-sm text-muted-foreground">
                That Slack message used to mean one thing: my entire week was gone.
              </footer>
            </blockquote>
            <p>
              Manuel is our sales team. When an RFP comes in, he needs answers fast. But these aren't simple questionnaires:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>100-200 questions covering everything from GDPR compliance to product features to data security</li>
              <li>1-7 days to complete depending on complexity and stakeholder availability</li>
              <li>80% repetition — we'd answered most questions before, somewhere</li>
              <li>One at a time — Manuel couldn't handle multiple RFPs simultaneously</li>
            </ul>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-2 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-tech-blue">The Old Process</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Skim the RFP, assess scope, panic slightly</li>
              <li>Search through old RFPs, Notion docs, email threads</li>
              <li>Copy-paste, adapt language, hope it still applies</li>
              <li>Wait on legal for security questions</li>
              <li>Wait on product for feature confirmations</li>
              <li>Final polish, send to Manuel</li>
              <li>Repeat everything next week for a similar RFP</li>
            </ol>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-3 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-purple">Why This Mattered</h3>
            <p>Every hour spent hunting through old documents was an hour not spent on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>AI enablement workshops</li>
              <li>Building other tools</li>
              <li>Strategic work</li>
            </ul>
            <p className="mt-3">
              We had to prioritize which opportunities to pursue based on my availability, not on business value.
            </p>
          </div>

          <Card className="my-6 border-l-4 border-accent bg-accent/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium">
                <strong>The Insight:</strong> We have 8-10 really solid past RFPs. We have product documentation. We have legal templates. This is just a knowledge retrieval problem.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection title="The Journey">
        <div className="space-y-4">
          <p className="opacity-0 animate-fade-in">
            I'm not an AI researcher. I'm a solution engineer who saw a problem and wasn't afraid to try different tools until something worked.
          </p>
          
          <div className="mt-6 opacity-0 animate-fade-in-delay-1 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-purple">Lovable — Fast Prototyping</h3>
            <p><strong>What I built:</strong> Basic interface to upload RFPs, display questions, enter answers manually.</p>
            <p><strong>Why it worked:</strong> Got something functional in a few hours. Perfect for proving the concept.</p>
            <p><strong>The limitation:</strong> Hit backend constraints quickly. Couldn't build the actual RAG system I needed.</p>
            <p><strong>Key lesson:</strong> Start with whatever tool gets you to "does this work?" fastest.</p>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-2 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-tech-blue">Cursor — Building the Real System</h3>
            <p><strong>What I built:</strong> The actual RAG implementation — Supabase database, vector embeddings, semantic search.</p>
            <p><strong>Why it worked:</strong> Excellent for debugging. When things broke (and they did), Cursor helped me understand what went wrong and how to fix it.</p>
            <p><strong>What I learned:</strong> Actually understanding what I was building, not just copy-pasting code. This matters when things break at 5 PM.</p>
            <p><strong>Key lesson:</strong> Use Cursor when you need to build something properly and want to understand it.</p>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-3 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-coral">Replit — The Failed Experiment</h3>
            <p><strong>What happened:</strong> Tried it because people recommended it. The interface just didn't click with how I work.</p>
            <p><strong>What I learned:</strong> No criticism of Replit itself—it's probably great for others. But developer experience matters.</p>
            <p><strong>Key lesson:</strong> If a tool frustrates you, switch. You won't finish the project if you hate the tool.</p>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-4 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-mint">Claude Code — Final Polish</h3>
            <p><strong>What I built:</strong> Bug fixes, optimizations, UI improvements.</p>
            <p><strong>Why it worked:</strong> Terminal-based, quick iterations, perfect for "this button doesn't quite work right."</p>
            <p><strong>Key lesson:</strong> Use Claude Code when your core system works and you just need refinements.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="How It Works: RAG in 5 Steps">
        <div className="space-y-4">
          <p>
            RAG = Retrieval Augmented Generation. Fancy term for: find relevant past answers, use them as context for AI generation.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Document Storage:</strong> Upload our best past RFPs into a Supabase database with pgvector extension.</li>
            <li><strong>Chunking:</strong> Break documents into ~500 word pieces with 50-token overlap. You can't feed entire RFPs to an AI at once.</li>
            <li><strong>Vector Embeddings:</strong> Convert each chunk into numerical coordinates (1536 dimensions) using OpenAI's text-embedding-ada-002. Think of it like GPS coordinates for meaning.</li>
            <li><strong>Semantic Search:</strong> When a new question comes in, embed it and find chunks with similar "coordinates" using cosine similarity (0.7+ threshold).</li>
            <li><strong>Context-Aware Generation:</strong> Take the relevant chunks, inject them into a GPT-4 prompt, generate an answer adapted for the new question.</li>
          </ol>
        </div>
      </ContentSection>

      <TechStack />

      <ContentSection title="Current Workflow">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Upload new RFP (PDF)</li>
          <li>System extracts questions automatically</li>
          <li>For each question, search knowledge base (top 10 chunks, 0.7+ similarity)</li>
          <li>GPT-4 generates first draft using retrieved context</li>
          <li>Export document</li>
          <li>Manuel reviews, polishes, validates accuracy</li>
        </ol>
      </ContentSection>

      <StatsGrid />

      <ContentSection title="The Meta-Prompting Breakthrough">
        <div className="space-y-4">
          <p>
            Here's something I learned that changed everything: meta-prompting — teaching the AI how to help you.
          </p>
          
          <h3 className="text-lg font-semibold mt-6">What is Meta-Prompting?</h3>
          <p>
            Instead of asking "Build me an RFP analyzer," I'd tell the AI how to think about the problem. Give it context about my role, my constraints, what success looks like.
          </p>

          <div className="my-4">
            <p className="font-semibold">Generic Prompt:</p>
            <p className="italic">"How do I implement vector search?"</p>
            <p className="mt-2"><strong>Result:</strong> Generic tutorial, too complex, didn't fit my stack.</p>
          </div>

          <div className="my-4">
            <p className="font-semibold">Meta-Prompt:</p>
            <p className="italic">"I'm using Supabase pgvector. I understand SQL basics but not vector operations. Explain how to implement semantic search for RFP questions, optimized for ~10 documents, where response time matters more than perfect accuracy."</p>
            <p className="mt-2"><strong>Result:</strong> Specific code for my setup, explanation of tradeoffs, suggestions for my use case.</p>
          </div>

          <h3 className="text-lg font-semibold mt-6">The Framework</h3>
          <Card className="my-4 bg-secondary">
            <CardContent className="p-4">
              <ul className="space-y-1 text-sm">
                <li><strong>WHO:</strong> I'm an SE with basic coding, not a backend dev</li>
                <li><strong>WHAT:</strong> Building RFP analyzer with RAG</li>
                <li><strong>WHY:</strong> Need to save time, working solo, limited budget</li>
                <li><strong>HOW:</strong> Review my approach, explain tradeoffs</li>
                <li><strong>SUCCESS:</strong> Works reliably, I can maintain it, costs &lt;€50/month</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6">Why This Works</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sets the frame: AI understands your context, not just the task</li>
            <li>Defines success: Explicit about what "good" means for your situation</li>
            <li>Constrains solutions: Get answers that fit YOUR constraints</li>
            <li>Better explanations: Calibrated to your knowledge level</li>
          </ul>
          <p className="mt-3">
            <strong>Real Impact:</strong> Fewer iterations, faster debugging, relevant solutions. I learned as I built rather than just copy-pasting code I didn't understand.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="The Results">
        <div className="space-y-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2">Metric</th>
                <th className="text-left py-2 px-2">Before</th>
                <th className="text-left py-2 px-2">After</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-2">Time per RFP</td>
                <td className="py-2 px-2">1-7 days</td>
                <td className="py-2 px-2">1-2 hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2">First draft speed</td>
                <td className="py-2 px-2">Manual search</td>
                <td className="py-2 px-2">10 minutes</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2">Manuel's capacity</td>
                <td className="py-2 px-2">One RFP at a time</td>
                <td className="py-2 px-2">Multiple simultaneous</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2">Question coverage</td>
                <td className="py-2 px-2">Manual hunting</td>
                <td className="py-2 px-2">80-90% automated</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-lg font-semibold mt-6">The Hidden Value</h3>
          <p>Beyond speed savings, the tool provides strategic insights:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Focus signals: Shows which questions need real thinking vs. quick answers</li>
            <li>Gap identification: Flags questions we've never answered — signals for documentation needs</li>
            <li>Weak spots: Identifies areas where our answers are inconsistent or outdated</li>
            <li>Product feedback: Reveals gaps between what prospects ask and what we deliver</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection title="Lessons Learned">
        <div className="space-y-4">
          <div className="opacity-0 animate-fade-in-delay-1 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-coral">1. Ship 80%, Not 100%</h3>
            <p>
              I wanted one-click export, perfect formatting, beautiful UI, analytics dashboards. Could've spent months chasing that.
            </p>
            <p>
              Manuel doesn't care about a pretty interface. He cares about getting answers fast. We export a document, he polishes it—that's fine.
            </p>
            <p>
              <strong>Takeaway:</strong> The 80% solution that exists today beats the 100% solution you'll build "eventually."
            </p>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-2 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-tech-blue">2. Platform Selection Framework</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Testing an idea? → Use the easiest tool (Lovable, v0, Bolt)</li>
              <li>Building real backend logic? → Cursor (with AI assistance)</li>
              <li>Refining existing code? → Claude Code</li>
              <li>Comfortable with traditional dev? → Your preferred IDE + AI assistant</li>
            </ul>
            <p className="mt-3"><strong>Principles:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Start simple — don't overcomplicate at prototype stage</li>
              <li>Match tool to task — prototyping needs different tools than production</li>
              <li>Trust your workflow — if a tool frustrates you, switch</li>
              <li>Layer your stack — it's okay to use multiple tools across project lifecycle</li>
            </ul>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-3 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-purple">3. Adoption is Harder Than Building</h3>
            <p>
              Manuel uses it because it fits his existing workflow (Slacking me for RFP help). But broader adoption? That's a different challenge.
            </p>
            <p className="mt-2"><strong>The Adoption Pyramid:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Awareness: People need to know it exists (start here!)</li>
              <li>Trial: Make first use stupidly easy (no logins, no setup)</li>
              <li>Regular use: Integrate into existing workflows (don't create new habits)</li>
              <li>Advocates: Get power users who tell others organically</li>
            </ul>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in-delay-4 p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-accent-mint">4. What I'd Do Differently</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Clean data first:</strong> Our past RFPs weren't well organized. I spent time cleaning data I could've sorted upfront. Your AI is only as good as your data.</li>
              <li><strong>Test with real work from day one:</strong> Don't use fake examples. Found edge cases immediately—legal questions need different handling than product questions.</li>
              <li><strong>Build feedback loops early:</strong> Should've added a "was this helpful?" button from the start. Now retrofitting it.</li>
              <li><strong>Document as you go:</strong> I'm rebuilding parts now and can't remember why I made certain choices. Even a simple README helps.</li>
              <li><strong>Learn meta-prompting early:</strong> Would've saved weeks of getting mediocre answers and iterating blindly.</li>
            </ul>
          </div>

          <div className="mt-6 opacity-0 animate-fade-in p-4 rounded-lg border border-border/40 bg-card hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-semibold text-accent-coral">5. You Don't Need to Be an Expert</h3>
            <p>
              I don't understand transformer architecture. Can't explain how GPT-4 works under the hood.
            </p>
            <p>
              But I understand: retrieve relevant information → give it to AI as context → generate response.
            </p>
            <p>That's enough to build useful tools.</p>
            <p className="mt-3"><strong>What you actually need:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Curiosity and willingness to try things</li>
              <li>Ability to break big problems into smaller ones</li>
              <li>Patience when things don't work (they won't, initially)</li>
              <li>Ability to explain your situation clearly (meta-prompting!)</li>
              <li>A real problem worth solving</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Your Framework: Building Your Own Tool">
        <ol className="list-decimal pl-5 space-y-1">
          <li><strong>Identify the annoying thing:</strong> What manual task is eating your time? What do you do repeatedly that could be automated?</li>
          <li><strong>Check if you have data:</strong> Do you have past examples, documents, knowledge somewhere? AI needs something to work with.</li>
          <li><strong>Build quick & scrappy:</strong> Prove it works in hours, not weeks. Use the easiest tool available.</li>
          <li><strong>Rebuild properly:</strong> Once you've proven the concept, build the real version with appropriate tools.</li>
          <li><strong>Use it yourself first:</strong> Find the problems before anyone else does. Your frustrations = improvement opportunities.</li>
          <li><strong>Improve from real usage:</strong> Add features based on what people actually ask for, not what you think they want.</li>
        </ol>
      </ContentSection>

      <ContentSection title="Common Use Cases for This Approach">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>QBR Preparation:</strong> Search past customer interactions, generate summaries</li>
          <li><strong>Support Ticket Analysis:</strong> Find similar past issues, suggest solutions</li>
          <li><strong>Sales Call Summaries:</strong> Extract key points, action items, follow-ups</li>
          <li><strong>Product Feedback Synthesis:</strong> Aggregate feedback across channels, identify themes</li>
          <li><strong>Documentation Q&A:</strong> Answer questions from internal knowledge bases</li>
        </ul>
        <p className="mt-3">
          <strong>The Pattern:</strong> If you have knowledge scattered across documents, Slack, emails, or people's heads—AI can help consolidate and retrieve it efficiently.
        </p>
      </ContentSection>

      <section className="bg-gradient-to-br from-[hsl(210_85%_35%)] to-[hsl(215_75%_45%)] py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl drop-shadow-lg">Your Turn</h2>
            <p className="mb-4 text-base text-white/90">
              Pick a problem you see every day. Build something small. See what happens.
            </p>
            <p className="text-sm text-white/80">
              And when you do—message me. I'd genuinely like to see what you build.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
