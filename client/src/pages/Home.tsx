import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Brain, Lock, Users, Zap, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("corporate");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/logo-2Cpdnge5Ldo74NHHcnkgR3.webp"
              alt="AI Solutions Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
              AI World
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#security" className="text-sm hover:text-primary transition-colors">
              Security
            </a>
            <a href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/contact'}>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/hero_corporate-4HDa9jSURvTXfhF4Y6cTbe.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
        </div>

        <div className="container relative py-20 md:py-32">
          <div className="max-w-2xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Unlocking Intelligent Potential, Responsibly.
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Secure, ethical, and conscious AI solutions designed for corporates, schools and institutes. Deploy powerful AI on your own network with complete control and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <h2
            className="text-4xl font-bold text-center mb-16 text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built on Trust. Powered by Ethics.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security by Design",
                description: "End-to-end encryption, role-based access control, and immutable audit logs ensure your data remains protected within your network.",
              },
              {
                icon: Brain,
                title: "Ethical by Choice",
                description: "Transparent AI models with built-in fairness detection, bias mitigation, and explainable decision-making for responsible AI deployment.",
              },
              {
                icon: Users,
                title: "Human-Centric AI",
                description: "AI that empowers, not replaces. Our solutions are designed to augment human capabilities and maintain human oversight at every step.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="text-foreground/70" style={{ fontFamily: "var(--font-body)" }}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container">
          <h2
            className="text-4xl font-bold text-center mb-4 text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AI Solutions for Every Sector
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Tailored AI solutions designed specifically for corporate enterprises, educational institutions and research organizations.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "corporate", label: "For Corporates" },
              { id: "education", label: "For Schools & Institutes" },
              { id: "research", label: "For Research" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Corporate Solutions */}
          {activeTab === "corporate" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="text-3xl font-bold mb-6 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PortfolioForge: AI-Powered Talent Intelligence
                </h3>
                <p className="text-foreground/70 mb-6">
                  Revolutionize recruitment and talent management with intelligent CV parsing, content suggestion and candidate matching powered by Google's Generative AI.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Intelligent CV parsing and candidate profiling",
                    "AI-powered job description generation",
                    "Real-time content suggestions for better matches",
                    "Secure Firebase backend with role-based access",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden border border-border">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/hero_corporate-4HDa9jSURvTXfhF4Y6cTbe.webp"
                  alt="PortfolioForge"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Education Solutions */}
          {activeTab === "education" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden border border-border order-2 md:order-1">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/hero_education-XVRgmGRuNuBitrSWpVUiTf.webp"
                  alt="Education AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3
                  className="text-3xl font-bold mb-6 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Education-Focused AI Chat: Ethical Learning at Scale
                </h3>
                <p className="text-foreground/70 mb-6">
                  A comprehensive, LAN-based AI solution designed for schools and institutes with built-in compliance for GDPR, COPPA, FERPA and EU AI Act regulations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Age-appropriate content filtering (3-18 years)",
                    "Teacher dashboard for monitoring and analytics",
                    "LMS integration (Canvas, Google Classroom, Moodle)",
                    "Quantized models for low-resource school hardware",
                    "Complete regulatory compliance built-in",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
            </div>
          )}

          {/* Research Solutions */}
          {activeTab === "research" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="text-3xl font-bold mb-6 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ML Training System & Wind Turbine Calculator
                </h3>
                <p className="text-foreground/70 mb-6">
                  Specialized tools for research institutions and sustainability projects. Train custom ML models and perform complex energy calculations with precision.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Multi-algorithm ML training framework",
                    "Configurable data preprocessing pipelines",
                    "Real-time performance visualization",
                    "Wind energy analysis with NASA POWER data",
                    "Advanced loss modeling and site analysis",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden border border-border">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/hero_security-7pYxmWgA3WwbPbQ3Tniqy8.webp"
                  alt="Research Tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/10">
        <div className="container">
          <h2
            className="text-4xl font-bold text-center mb-16 text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Project Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "PortfolioForge",
                description: "AI-powered recruitment platform with intelligent CV parsing and content suggestions.",
                tech: ["React", "Google Generative AI", "Firebase", "TypeScript"],
                link: "https://github.com/OnkarBhattacharya/PortfolioForge",
              },
              {
                name: "Gentle Companion",
                description: "Privacy-first mental health companion app with therapeutic tools and crisis support.",
                tech: ["React", "PWA", "localStorage", "GDPR-compliant"],
                link: "https://github.com/OnkarBhattacharya/gentle-companion",
              },
              {
                name: "Education-Focused Chat",
                description: "Comprehensive LAN-based AI chat system for schools with full regulatory compliance.",
                tech: ["Python", "LLM", "LMS Integration", "Compliance"],
                link: "https://github.com/OnkarBhattacharya/scratch/tree/feature/education-focused-chat",
              },
              {
                name: "Wind Turbine Calculator",
                description: "Interactive calculator for renewable energy site analysis using NASA POWER data.",
                tech: ["React", "TypeScript", "NASA API", "Vite"],
                link: "https://github.com/OnkarBhattacharya/wind-turbine-calculator",
              },
              {
                name: "AgroAdvisor",
                description: "AI-powered agricultural advisory system for sustainable farming practices.",
                tech: ["ML", "Python", "Data Analysis", "Agriculture"],
                link: "https://github.com/OnkarBhattacharya/scratch/tree/AgroAdvisor",
              },
              {
                name: "ML Training System",
                description: "Flexible framework for training and evaluating machine learning models.",
                tech: ["Python", "scikit-learn", "TensorFlow", "Visualization"],
                link: "https://github.com/OnkarBhattacharya/scratch",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <h3
                  className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.name}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  View on GitHub <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section id="security" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border border-border">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/hero_security-7pYxmWgA3WwbPbQ3Tniqy8.webp"
                alt="Security Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2
                className="text-4xl font-bold mb-6 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-foreground/70 mb-8">
                Our solutions are built with security as a foundational principle, not an afterthought. We ensure compliance with all major regulatory frameworks.
              </p>
              <div className="space-y-4">
                {[
                  { title: "GDPR Compliant", desc: "Full data privacy and consent management" },
                  { title: "EU AI Act Ready", desc: "Transparent, accountable AI systems" },
                  { title: "COPPA & FERPA", desc: "Child and student data protection" },
                  { title: "End-to-End Encryption", desc: "Data protected in transit and at rest" },
                  { title: "Audit Logging", desc: "Immutable records of all system actions" },
                  { title: "Role-Based Access", desc: "Granular permission management" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Empowering Tomorrow's Leaders with Secure AI Today. Let's build the future of responsible AI together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Schedule a Demo
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Download Whitepaper
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/logo-2Cpdnge5Ldo74NHHcnkgR3.webp"
                  alt="Logo"
                  className="w-6 h-6"
                />
                <span className="font-bold text-primary">AI World</span>
              </div>
              <p className="text-sm text-foreground/70">
                Secure, ethical and conscious AI for organizations that care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary">For Corporates</a></li>
                <li><a href="#" className="hover:text-primary">For Schools</a></li>
                <li><a href="#" className="hover:text-primary">For Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2026 AI Solutions. All rights reserved. Built with ethics. Powered by responsibility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
