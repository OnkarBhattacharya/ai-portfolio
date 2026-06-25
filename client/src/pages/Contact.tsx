import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import EnquiryDialog from "@/components/EnquiryDialog";

export default function Contact() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

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
              AI Solutions
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#solutions" className="text-sm hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="/#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </a>
            <a href="/#security" className="text-sm hover:text-primary transition-colors">
              Security
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors font-semibold">
              Contact
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions about our AI solutions? We'd love to hear from you. Reach out today and let's discuss how we can help transform your organization.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <Card className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Email
              </h3>
              <p className="text-foreground/70 mb-4">Send us an email and we'll respond within 24 hours.</p>
              <a
                href="mailto:contact@koventures.co.uk"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                contact@koventures.co.uk
              </a>
            </Card>

            {/* Phone Card */}
            <Card className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Phone
              </h3>
              <p className="text-foreground/70 mb-4">Call us directly for immediate assistance.</p>
              <a
                href="tel:+447359548968"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                +44 7359 548968
              </a>
            </Card>

            {/* Send Enquiry Card */}
            <Card className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Send Enquiry
              </h3>
              <p className="text-foreground/70 mb-4">Fill out our form and we'll get back to you shortly.</p>
              <Button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Send Enquiry
              </Button>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="bg-secondary/20 rounded-lg p-12 text-center">
            <h2
              className="text-3xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Transform Your Organization?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Whether you're interested in our corporate talent solutions, educational AI platforms, or research tools, our team is here to help. Contact us today to schedule a personalized demo or discuss your specific requirements.
            </p>
            <Button
              onClick={() => setIsEnquiryOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Start Your Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Dialog */}
      <EnquiryDialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663447606511/UKzFJFt4PhvUCatP5r3J76/logo-2Cpdnge5Ldo74NHHcnkgR3.webp"
                  alt="Logo"
                  className="w-6 h-6"
                />
                <span className="font-bold text-primary">AI Solutions</span>
              </div>
              <p className="text-sm text-foreground/70">
                Secure, ethical, and conscious AI for organizations that care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="/#solutions" className="hover:text-primary">For Corporates</a></li>
                <li><a href="/#solutions" className="hover:text-primary">For Schools</a></li>
                <li><a href="/#solutions" className="hover:text-primary">For Research</a></li>
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
                <li><a href="/" className="hover:text-primary">Home</a></li>
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
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
