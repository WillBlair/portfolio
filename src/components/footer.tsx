import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-6">
        <div className="flex flex-col items-center gap-4">
          <Separator className="w-full max-w-md" />
          <div className="text-xs text-center text-muted-foreground">
            Last updated December 2025.
          </div>
        </div>
      </div>
    </footer>
  )
}