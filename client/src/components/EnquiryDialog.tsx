import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail } from "lucide-react";

interface EnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EnquiryDialog({ open, onOpenChange }: EnquiryDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, enquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.enquiryType || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `New Enquiry: ${formData.enquiryType} from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}
      `.trim();

      // Encode the mailto link
      const mailtoLink = `mailto:contact@koventures.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the mailto link
      window.location.href = mailtoLink;

      // Show success message
      toast.success("Opening your email client. Please send the message to complete your enquiry.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        enquiryType: "",
        message: "",
      });

      // Close dialog after a short delay
      setTimeout(() => {
        onOpenChange(false);
      }, 1000);
    } catch (error) {
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Send Us an Enquiry
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border-border"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-border"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-semibold">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+44 7359 548968"
              value={formData.phone}
              onChange={handleInputChange}
              className="border-border"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company" className="font-semibold">
              Company / Organization
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={handleInputChange}
              className="border-border"
            />
          </div>

          {/* Enquiry Type */}
          <div className="space-y-2">
            <Label htmlFor="enquiryType" className="font-semibold">
              Enquiry Type <span className="text-destructive">*</span>
            </Label>
            <Select value={formData.enquiryType} onValueChange={handleSelectChange}>
              <SelectTrigger className="border-border">
                <SelectValue placeholder="Select an enquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Corporate AI Solutions">Corporate AI Solutions</SelectItem>
                <SelectItem value="Education Platform">Education Platform</SelectItem>
                <SelectItem value="Research Tools">Research Tools</SelectItem>
                <SelectItem value="Custom Development">Custom Development</SelectItem>
                <SelectItem value="Integration & Support">Integration & Support</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="font-semibold">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your requirements and how we can help..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="border-border resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 flex-1"
            >
              <Mail className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-foreground/60 text-center">
            Your enquiry will be sent to contact@koventures.co.uk
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
