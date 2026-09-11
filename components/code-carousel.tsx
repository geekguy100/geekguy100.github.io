import type { LanguageFn } from "highlight.js"
import { CodeBlock } from "./code-block"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { cn } from "@/lib/utils"

export interface CodeCarouselProps {
  snippets: { text: string; language: LanguageFn; className?: string }[]
  className?: string
}
export function CodeCarousel({ className, snippets }: CodeCarouselProps) {
  return (
    <Carousel opts={{ watchDrag: false }}>
      <CarouselContent className={cn("max-h-256", className)}>
        {snippets.map(({ text, ...props }, i) => (
          <CarouselItem key={i}>
            <CodeBlock {...props}>{text}</CodeBlock>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious size="icon-lg" className={snippets.length === 1 ? "hidden" : ""} />
      <CarouselNext size="icon-lg" className={snippets.length === 1 ? "hidden" : ""} />
    </Carousel>
  )
}
