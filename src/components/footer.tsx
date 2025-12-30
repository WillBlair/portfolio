import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto pt-6 pb-24">
        <div className="flex flex-col items-center gap-4">
          <Separator className="w-full max-w-md" />
          <div className="text-sm text-center text-muted-foreground">
            Last updated December 2025.
          </div>
        </div>
      </div>
    </footer>
  )
}