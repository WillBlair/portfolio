import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground">
            Last updated August 2025. Built with Next.js and Tailwind CSS.
          </div>

        </div>
      </div>
    </footer>
  )
}