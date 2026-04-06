import { Search, BookOpen, Layers, GitCompare, FileText, BookMarked, ArrowRight, CheckCircle2, Lightbulb, Target } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo and tagline */}
            <div className="flex flex-col">
              <div className="text-[22px] tracking-tight text-slate-900" style={{ fontWeight: 600 }}>
                SoloOpsGuide
              </div>
              <div className="text-[13px] text-slate-500 mt-0.5">
                Calm workflow guidance for solo operators
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <a href="#" className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">
                Workflows
              </a>
              <a href="#" className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">
                Blueprints
              </a>
              <a href="#" className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">
                Comparisons
              </a>
              <a href="#" className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">
                Templates
              </a>
              <a href="#" className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">
                Glossary
              </a>
              <a href="#" className="text-[15px] text-slate-700 hover:text-slate-900 transition-colors">
                FAQ
              </a>
            </nav>
            
            {/* CTA Button */}
            <button className="px-5 py-2.5 bg-teal-600 text-white rounded-lg text-[15px] hover:bg-teal-700 transition-colors" style={{ fontWeight: 500 }}>
              Explore workflows
            </button>
          </div>
          
          {/* Search bar */}
          <div className="pb-5">
            <div className="relative max-w-[600px]">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
              <input
                type="text"
                placeholder="Search guides, workflows, and templates..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-8 py-20">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-[12px] tracking-wide mb-6" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                For Solo Operators
              </div>
              <h1 className="text-[48px] leading-[1.15] tracking-tight text-slate-900 mb-6" style={{ fontWeight: 700 }}>
                Structured guidance for real solo operations
              </h1>
              <p className="text-[18px] leading-relaxed text-slate-600 mb-8">
                Make better decisions about the workflows, tools, and systems that run your business. 
                No hype. No overwhelm. Just calm, practical guidance designed for implementation.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3.5 bg-teal-600 text-white rounded-lg text-[16px] hover:bg-teal-700 transition-colors flex items-center gap-2" style={{ fontWeight: 500 }}>
                  Browse workflows
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3.5 bg-slate-100 text-slate-700 rounded-lg text-[16px] hover:bg-slate-200 transition-colors" style={{ fontWeight: 500 }}>
                  View blueprints
                </button>
              </div>
            </div>

            {/* Right featured card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-[12px] text-amber-700 tracking-wide" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Featured Guide
                </span>
              </div>
              <h3 className="text-[22px] tracking-tight text-slate-900 mb-3" style={{ fontWeight: 600 }}>
                Choosing Your First CRM as a Solo Consultant
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600 mb-6">
                A scenario-based guide comparing lightweight CRM options for independent consultants managing 5-30 clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[13px] text-slate-600">
                  Workflows
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[13px] text-slate-600">
                  Comparisons
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[13px] text-slate-600">
                  12 min read
                </span>
              </div>
              <button className="text-teal-700 text-[15px] flex items-center gap-2 hover:gap-3 transition-all" style={{ fontWeight: 500 }}>
                Read guide
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Value Section */}
      <section className="py-20 bg-[#fafbfc]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-[36px] tracking-tight text-slate-900 mb-4" style={{ fontWeight: 600 }}>
              Guidance designed for action
            </h2>
            <p className="text-[17px] text-slate-600 max-w-[640px] mx-auto">
              Every guide is built around real scenarios and implementation needs, not feature lists or generic advice.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <CheckCircle2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-[20px] tracking-tight text-slate-900 mb-3" style={{ fontWeight: 600 }}>
                Workflow-first
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                We start with your actual workflow needs, not tool marketing. Learn what works before choosing what to buy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-[20px] tracking-tight text-slate-900 mb-3" style={{ fontWeight: 600 }}>
                Scenario-based
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Recommendations tailored to your situation: volume, budget, technical comfort, and current setup.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-5">
                <Layers className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-[20px] tracking-tight text-slate-900 mb-3" style={{ fontWeight: 600 }}>
                Designed for implementation
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Clear next steps, realistic timelines, and practical trade-offs—no fluff, no overwhelming 47-step plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-[32px] tracking-tight text-slate-900 mb-2" style={{ fontWeight: 600 }}>
                Recently published guides
              </h2>
              <p className="text-[16px] text-slate-600">
                Fresh insights and practical workflow recommendations
              </p>
            </div>
            <button className="text-teal-700 text-[15px] flex items-center gap-2 hover:gap-3 transition-all" style={{ fontWeight: 500 }}>
              View all guides
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Guide 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544654262-e295983be0f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVzayUyMG9yZ2FuaXplZHxlbnwxfHx8fDE3NzU0NTk0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Minimalist workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-teal-700 tracking-wide" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Workflows
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[13px] text-slate-500">8 min read</span>
                </div>
                <h3 className="text-[19px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                  Setting Up Recurring Revenue Tracking
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  Simple spreadsheet methods for solo operators managing subscriptions, retainers, and monthly clients.
                </p>
                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <span>Updated Apr 3, 2026</span>
                </div>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwb2ZmaWNlJTIwc2V0dXAlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzc1NDU5NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Calm office setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-teal-700 tracking-wide" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Blueprints
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[13px] text-slate-500">15 min read</span>
                </div>
                <h3 className="text-[19px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                  Client Onboarding Blueprint for Consultants
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  A structured 7-step onboarding sequence that runs smoothly without feeling corporate or automated.
                </p>
                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <span>Updated Apr 1, 2026</span>
                </div>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557928082-c17dbf42a70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGRlc2slMjBub3RlcGFkJTIwY29mZmVlfGVufDF8fHx8MTc3NTQ1OTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Clean desk notepad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-teal-700 tracking-wide" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Comparisons
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[13px] text-slate-500">10 min read</span>
                </div>
                <h3 className="text-[19px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                  Email Tools for Solo Service Providers
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  Comparing lightweight email platforms: when Gmail is enough, and when to consider ConvertKit or Mailchimp.
                </p>
                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <span>Updated Mar 28, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category / Resource Section */}
      <section className="py-20 bg-[#fafbfc]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-[32px] tracking-tight text-slate-900 mb-4" style={{ fontWeight: 600 }}>
              Explore by resource type
            </h2>
            <p className="text-[16px] text-slate-600">
              Find the right format for your needs
            </p>
          </div>

          <div className="grid grid-cols-5 gap-5">
            {/* Workflows */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <BookOpen className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-[17px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                Workflows
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                Step-by-step process guides
              </p>
              <span className="text-[13px] text-teal-700" style={{ fontWeight: 500 }}>
                42 guides →
              </span>
            </div>

            {/* Blueprints */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <Layers className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-[17px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                Blueprints
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                Complete system designs
              </p>
              <span className="text-[13px] text-teal-700" style={{ fontWeight: 500 }}>
                28 blueprints →
              </span>
            </div>

            {/* Comparisons */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <GitCompare className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-[17px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                Comparisons
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                Side-by-side tool analysis
              </p>
              <span className="text-[13px] text-teal-700" style={{ fontWeight: 500 }}>
                35 comparisons →
              </span>
            </div>

            {/* Templates */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <FileText className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-[17px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                Templates
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                Ready-to-use documents
              </p>
              <span className="text-[13px] text-teal-700" style={{ fontWeight: 500 }}>
                19 templates →
              </span>
            </div>

            {/* Glossary */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <BookMarked className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-[17px] tracking-tight text-slate-900 mb-2 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                Glossary
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                Clear term definitions
              </p>
              <span className="text-[13px] text-teal-700" style={{ fontWeight: 500 }}>
                156 terms →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* More Featured Content */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-10">
            <h2 className="text-[32px] tracking-tight text-slate-900 mb-2" style={{ fontWeight: 600 }}>
              Popular guides
            </h2>
            <p className="text-[16px] text-slate-600">
              Most-read resources from the SoloOpsGuide library
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Large Guide 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876201598-67fd2a5570ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBwcm9kdWN0aXZpdHl8ZW58MXx8fHwxNzc1NDU5NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Organized workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-teal-700 tracking-wide" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Workflows
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[13px] text-slate-500">18 min read</span>
                </div>
                <h3 className="text-[24px] tracking-tight text-slate-900 mb-3 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                  Building Your First Sales Pipeline
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600 mb-5">
                  A practical guide to structuring deals, tracking conversations, and staying organized as you scale from 3 to 30 prospects without losing your mind.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] text-slate-500">
                    <span>Updated Mar 15, 2026</span>
                  </div>
                  <button className="text-teal-700 text-[15px] flex items-center gap-2 hover:gap-3 transition-all" style={{ fontWeight: 500 }}>
                    Read guide
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Large Guide 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765648684555-de2d0f6af467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1NDU5NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Laptop workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] text-teal-700 tracking-wide" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Blueprints
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[13px] text-slate-500">22 min read</span>
                </div>
                <h3 className="text-[24px] tracking-tight text-slate-900 mb-3 group-hover:text-teal-700 transition-colors" style={{ fontWeight: 600 }}>
                  Content Calendar for Solo Creators
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600 mb-5">
                  How to plan, produce, and publish consistently without burning out. Includes simple systems for batching, repurposing, and maintaining momentum.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] text-slate-500">
                    <span>Updated Mar 10, 2026</span>
                  </div>
                  <button className="text-teal-700 text-[15px] flex items-center gap-2 hover:gap-3 transition-all" style={{ fontWeight: 500 }}>
                    Read guide
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-teal-50/30">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <div className="max-w-[680px] mx-auto">
            <div className="inline-block px-3 py-1 bg-white border border-teal-200 rounded-full text-[12px] text-teal-700 tracking-wide mb-6" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Ready to get started?
            </div>
            <h2 className="text-[40px] leading-tight tracking-tight text-slate-900 mb-5" style={{ fontWeight: 700 }}>
              Find the guide that fits your current challenge
            </h2>
            <p className="text-[18px] leading-relaxed text-slate-600 mb-8">
              No email required. No sign-up walls. Just clear, structured guidance you can use today.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-7 py-4 bg-teal-600 text-white rounded-lg text-[16px] hover:bg-teal-700 transition-colors flex items-center gap-2" style={{ fontWeight: 500 }}>
                Browse all workflows
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-7 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg text-[16px] hover:bg-slate-50 transition-colors" style={{ fontWeight: 500 }}>
                Explore by category
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-5 gap-12 mb-12">
            {/* Logo and description */}
            <div className="col-span-2">
              <div className="text-[20px] text-white mb-3" style={{ fontWeight: 600 }}>
                SoloOpsGuide
              </div>
              <p className="text-[14px] leading-relaxed text-slate-400 mb-5">
                Calm workflow guidance for solo operators, freelancers, and consultants who need practical systems without the hype.
              </p>
              <div className="text-[13px] text-slate-500">
                © 2026 SoloOpsGuide. All rights reserved.
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[14px] text-white mb-4" style={{ fontWeight: 600 }}>
                Resources
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Workflows</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Blueprints</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Comparisons</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Templates</a></li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="text-[14px] text-white mb-4" style={{ fontWeight: 600 }}>
                Learn
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Glossary</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[14px] text-white mb-4" style={{ fontWeight: 600 }}>
                Legal
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-[14px] hover:text-teal-400 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-slate-500">
                Built for operators who value clarity over complexity.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-[13px] text-slate-400 hover:text-teal-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-[13px] text-slate-400 hover:text-teal-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-[13px] text-slate-400 hover:text-teal-400 transition-colors">
                  RSS Feed
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
