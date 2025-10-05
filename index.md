---
layout: default
title: "Building an AI-Powered RFP Analyzer"
---

> "Got an RFP. 200 questions. Need it by next week."

That Slack message used to mean one thing: my entire week was gone. Everything else on hold. Late nights searching through old documents. Waiting on legal. Waiting on product. Hoping I didn't miss anything.

Now? "Give me 10 minutes."

This is the story of how I built an AI-powered RFP analyzer that reduced our response time from days to hours—and what I learned along the way that you can apply to your own AI projects.

## The Problem

### The RFP Reality

Manuel is our sales team. When an RFP comes in, he needs answers fast. But these aren't simple questionnaires:

- **100-200 questions** covering everything from GDPR compliance to product features to data security
- **1-7 days to complete** depending on complexity and stakeholder availability
- **80% repetition** — we'd answered most questions before, somewhere
- **One at a time** — Manuel couldn't handle multiple RFPs simultaneously

### The Old Process

1. Skim the RFP, assess scope, panic slightly
2. Search through old RFPs, Notion docs, email threads
3. Copy-paste, adapt language, hope it still applies
4. Wait on legal for security questions
5. Wait on product for feature confirmations
6. Final polish, send to Manuel
7. Repeat everything next week for a similar RFP

### Why This Mattered

Every hour spent hunting through old documents was an hour not spent on:

- AI enablement workshops
- Building other tools
- Strategic work

We had to prioritize which opportunities to pursue based on my availability, not on business value.

**The Insight:** We have 8-10 really solid past RFPs. We have product documentation. We have legal templates. This is just a knowledge retrieval problem.

## The Journey

I'm not an AI researcher. I'm a solution engineer who saw a problem and wasn't afraid to try different tools until something worked.

### Lovable — Fast Prototyping

**What I built:** Basic interface to upload RFPs, display questions, enter answers manually.

**Why it worked:** Got something functional in a few hours. Perfect for proving the concept.

**The limitation:** Hit backend constraints quickly. Couldn't build the actual RAG system I needed.

*Key lesson: Start with whatever tool gets you to "does this work?" fastest.*

### Cursor — Building the Real System

**What I built:** The actual RAG implementation — Supabase database, vector embeddings, semantic search.

**Why it worked:** Excellent for debugging. When things broke (and they did), Cursor helped me understand what went wrong and how to fix it.

**What I learned:** Actually understanding what I was building, not just copy-pasting code. This matters when things break at 5 PM.

*Key lesson: Use Cursor when you need to build something properly and want to understand it.*

### Replit — The Failed Experiment

**What happened:** Tried it because people recommended it. The interface just didn't click with how I work.

**What I learned:** No criticism of Replit itself—it's probably great for others. But developer experience matters.

*Key lesson: If a tool frustrates you, switch. You won't finish the project if you hate the tool.*

### Claude Code — Final Polish

**What I built:** Bug fixes, optimizations, UI improvements.

**Why it worked:** Terminal-based, quick iterations, perfect for "this button doesn't quite work right."

*Key lesson: Use Claude Code when your core system works and you just need refinements.*

## How It Works: RAG in 5 Steps

**RAG = Retrieval Augmented Generation.** Fancy term for: find relevant past answers, use them as context for AI generation.

1. **Document Storage:** Upload our best past RFPs into a Supabase database with pgvector extension.

2. **Chunking:** Break documents into ~500 word pieces with 50-token overlap. You can't feed entire RFPs to an AI at once.

3. **Vector Embeddings:** Convert each chunk into numerical coordinates (1536 dimensions) using OpenAI's text-embedding-ada-002. Think of it like GPS coordinates for meaning.

4. **Semantic Search:** When a new question comes in, embed it and find chunks with similar "coordinates" using cosine similarity (0.7+ threshold).

5. **Context-Aware Generation:** Take the relevant chunks, inject them into a GPT-4 prompt, generate an answer adapted for the new question.

### Technical Stack

- **Storage:** Supabase + pgvector extension
- **Embeddings:** OpenAI text-embedding-ada-002 (1536 dimensions)
- **Search:** Cosine similarity via Supabase's match_documents function
- **Generation:** GPT-4 with retrieved context
- **Cost:** €20-50/month for API calls and storage

### Current Workflow

1. Upload new RFP (PDF)
2. System extracts questions automatically
3. For each question, search knowledge base (top 10 chunks, 0.7+ similarity)
4. GPT-4 generates first draft using retrieved context
5. Export document
6. Manuel reviews, polishes, validates accuracy

## The Meta-Prompting Breakthrough

Here's something I learned that changed everything: **meta-prompting** — teaching the AI how to help you.

### What is Meta-Prompting?

Instead of asking "Build me an RFP analyzer," I'd tell the AI *how* to think about the problem. Give it context about my role, my constraints, what success looks like.

**Generic Prompt:**
> "How do I implement vector search?"
>
> *Result:* Generic tutorial, too complex, didn't fit my stack.

**Meta-Prompt:**
> "I'm using Supabase pgvector. I understand SQL basics but not vector operations. Explain how to implement semantic search for RFP questions, optimized for ~10 documents, where response time matters more than perfect accuracy."
>
> *Result:* Specific code for my setup, explanation of tradeoffs, suggestions for my use case.

### The Framework

```
WHO: I'm an SE with basic coding, not a backend dev
WHAT: Building RFP analyzer with RAG
WHY: Need to save time, working solo, limited budget
HOW: Review my approach, explain tradeoffs
SUCCESS: Works reliably, I can maintain it, costs <€50/month
```

### Why This Works

- **Sets the frame:** AI understands your context, not just the task
- **Defines success:** Explicit about what "good" means for your situation
- **Constrains solutions:** Get answers that fit YOUR constraints
- **Better explanations:** Calibrated to your knowledge level

**Real Impact:** Fewer iterations, faster debugging, relevant solutions. I learned as I built rather than just copy-pasting code I didn't understand.

## The Results

| Metric | Before | After |
|--------|--------|-------|
| Time per RFP | 1-7 days | **1-2 hours** |
| First draft speed | Manual search | **10 minutes** |
| Manuel's capacity | One RFP at a time | **Multiple simultaneous** |
| Question coverage | Manual hunting | **80-90% automated** |

### Statistics

- **90% Time Reduction**
- **10 min** First Draft
- **85%** Question Coverage
- **€35** Monthly Cost

### The Hidden Value

Beyond speed savings, the tool provides strategic insights:

- **Focus signals:** Shows which questions need real thinking vs. quick answers
- **Gap identification:** Flags questions we've never answered — signals for documentation needs
- **Weak spots:** Identifies areas where our answers are inconsistent or outdated
- **Product feedback:** Reveals gaps between what prospects ask and what we deliver

## Lessons Learned

### 1. Ship 80%, Not 100%

I wanted one-click export, perfect formatting, beautiful UI, analytics dashboards. Could've spent months chasing that.

Manuel doesn't care about a pretty interface. He cares about getting answers fast. We export a document, he polishes it—that's fine.

**Takeaway:** The 80% solution that exists today beats the 100% solution you'll build "eventually."

### 2. Platform Selection Framework

- **Testing an idea?** → Use the easiest tool (Lovable, v0, Bolt)
- **Building real backend logic?** → Cursor (with AI assistance)
- **Refining existing code?** → Claude Code
- **Comfortable with traditional dev?** → Your preferred IDE + AI assistant

**Principles:**
- Start simple — don't overcomplicate at prototype stage
- Match tool to task — prototyping needs different tools than production
- Trust your workflow — if a tool frustrates you, switch
- Layer your stack — it's okay to use multiple tools across project lifecycle

### 3. Adoption is Harder Than Building

Manuel uses it because it fits his existing workflow (Slacking me for RFP help). But broader adoption? That's a different challenge.

**The Adoption Pyramid:**
- **Awareness:** People need to know it exists (start here!)
- **Trial:** Make first use stupidly easy (no logins, no setup)
- **Regular use:** Integrate into existing workflows (don't create new habits)
- **Advocates:** Get power users who tell others organically

### 4. What I'd Do Differently

- **Clean data first:** Our past RFPs weren't well organized. I spent time cleaning data I could've sorted upfront. Your AI is only as good as your data.
- **Test with real work from day one:** Don't use fake examples. Found edge cases immediately—legal questions need different handling than product questions.
- **Build feedback loops early:** Should've added a "was this helpful?" button from the start. Now retrofitting it.
- **Document as you go:** I'm rebuilding parts now and can't remember why I made certain choices. Even a simple README helps.
- **Learn meta-prompting early:** Would've saved weeks of getting mediocre answers and iterating blindly.

### 5. You Don't Need to Be an Expert

I don't understand transformer architecture. Can't explain how GPT-4 works under the hood.

But I understand: retrieve relevant information → give it to AI as context → generate response.

That's enough to build useful tools.

**What you actually need:**
- Curiosity and willingness to try things
- Ability to break big problems into smaller ones
- Patience when things don't work (they won't, initially)
- Ability to explain your situation clearly (meta-prompting!)
- A real problem worth solving

## Your Framework: Building Your Own Tool

1. **Identify the annoying thing:** What manual task is eating your time? What do you do repeatedly that could be automated?

2. **Check if you have data:** Do you have past examples, documents, knowledge somewhere? AI needs something to work with.

3. **Build quick & scrappy:** Prove it works in hours, not weeks. Use the easiest tool available.

4. **Rebuild properly:** Once you've proven the concept, build the real version with appropriate tools.

5. **Use it yourself first:** Find the problems before anyone else does. Your frustrations = improvement opportunities.

6. **Improve from real usage:** Add features based on what people actually ask for, not what you think they want.

### Common Use Cases for This Approach

- **QBR Preparation:** Search past customer interactions, generate summaries
- **Support Ticket Analysis:** Find similar past issues, suggest solutions
- **Sales Call Summaries:** Extract key points, action items, follow-ups
- **Product Feedback Synthesis:** Aggregate feedback across channels, identify themes
- **Documentation Q&A:** Answer questions from internal knowledge bases

**The Pattern:** If you have knowledge scattered across documents, Slack, emails, or people's heads—AI can help consolidate and retrieve it efficiently.

## Your Turn

Pick a problem you see every day. Build something small. See what happens.

And when you do—message me. I'd genuinely like to see what you build.

---

*Built with curiosity and a bit of frustration · 2025*
