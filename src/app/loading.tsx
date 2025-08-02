export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-8 w-full max-w-5xl mx-auto px-4">
        {/* Hero skeleton */}
        <div className="text-center space-y-4">
          <div className="h-16 bg-muted rounded-lg mx-auto max-w-md"></div>
          <div className="h-6 bg-muted rounded mx-auto max-w-lg"></div>
          <div className="h-12 bg-muted rounded mx-auto max-w-xs"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-32 bg-muted rounded-lg"></div>
          <div className="h-32 bg-muted rounded-lg"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-40 bg-muted rounded-lg"></div>
          <div className="h-40 bg-muted rounded-lg"></div>
          <div className="h-40 bg-muted rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}