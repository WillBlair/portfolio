"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { toast } from "sonner"

export function CopyEmailButton() {
  const handleEmailCopy = async () => {
    console.log("--- Diagnosing 'Get in Touch' button ---");
    console.log("1. Click handler fired successfully.");

    if (!navigator.clipboard) {
      console.error("2. Diagnosis: navigator.clipboard is not available. This feature requires a secure context (HTTPS or localhost).");
      toast.error("Clipboard Not Available", {
        description: "Please use a secure connection (HTTPS).",
        duration: 5000,
      });
      console.log("--- End Diagnosis ---");
      return;
    }

    console.log("2. Diagnosis: navigator.clipboard is available.");

    try {
      await navigator.clipboard.writeText("willblair47@gmail.com");
      console.log("3. Diagnosis: Successfully wrote to clipboard.");
      toast.success("Email copied to clipboard!", {
        description: "willblair47@gmail.com",
        duration: 3000,
      });
    } catch (err) {
      console.error("3. Diagnosis: Error writing to clipboard. See details below.");
      console.error(err);
      toast.error("Failed to Copy Email", {
        description: "Could not write to clipboard. See console for details.",
        duration: 5000,
      });
    }
    console.log("--- End Diagnosis ---");
  }

  return (
    <Button
      size="lg"
      className="w-full sm:w-auto"
      onClick={handleEmailCopy}
    >
      <Mail className="mr-2 h-4 w-4" />
      Get in touch
    </Button>
  )
}