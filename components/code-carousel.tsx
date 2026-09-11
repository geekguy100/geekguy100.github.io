import { cn } from "@/lib/utils"
import { CodeBlock, type CodeBlockProps } from "./code-block"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export interface CodeCarouselProps {
  snippets: ({ text: string } & Omit<CodeBlockProps, "children" | "variants">)[]
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
