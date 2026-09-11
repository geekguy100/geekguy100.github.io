"use client"
import { SectionTitle } from "@/components/section-title"
import Image, { type StaticImageData } from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { childFadeInVariants } from "@/lib/animation"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

type ContentItem = { caption?: string } & (
  | {
      contentType: "internal"
      src: string
      title: string
      mimeType: string
    }
  | {
      contentType: "external"
      src: `http${string}`
      title: string
    }
  | {
      contentType: "static-image"
      src: StaticImageData
      title: string
    }
)

export type ProjectGameplayProps = { content: ContentItem[]; title?: string }
export function ProjectGameplay({ content, title }: ProjectGameplayProps) {
  const [api, setApi] = useState<CarouselApi | undefined>()
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (!api) return
    function setState() {
      setPage(api!.selectedScrollSnap() + 1)
    }

    api.on("select", setState)
    return () => {
      api.off("select", setState)
    }
  }, [api])

  return (
    <article>
      <SectionTitle variants={childFadeInVariants}>{title ?? "Gameplay"}</SectionTitle>
      <motion.div className="mx-auto max-w-4xl max-lg:px-12" variants={childFadeInVariants}>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {content.map((t, i) => {
              return (
                <CarouselItem key={i}>
                  <div className="aspect-video">
                    {t.contentType === "external" ? (
                      <ExternalGameplay {...t} />
                    ) : (
                      <div className="relative size-full">
                        {t.contentType === "internal" && t.mimeType!.includes("video") ? (
                          <VideoItem item={t} />
                        ) : (
                          <ImgItem item={t} />
                        )}
                      </div>
                    )}
                  </div>
                  {t.caption && <p className="text-center text-sm italic">{t.caption}</p>}
                </CarouselItem>
              )
            })}
          </CarouselContent>
          {content.length > 1 && (
            <div className="max-sm:hidden">
              <CarouselPrevious size="icon-lg" />
              <CarouselNext size="icon-lg" />
            </div>
          )}
        </Carousel>
        {content.length > 1 && (
          <p className="text-center text-sm">
            [ {page} / {content.length} ]
          </p>
        )}
      </motion.div>
    </article>
  )
}

interface VideoProps {
  item: ContentItem & { contentType: "internal" }
}

function VideoItem({ item }: VideoProps) {
  const { mimeType, title, src } = item
  return (
    <video className="mx-auto" controls title={title}>
      <source src={src} type={mimeType} />
      <p>Your browser does not support video playback</p>
    </video>
  )
}

interface ImageProps {
  item: ContentItem & { contentType: "static-image" | "internal" }
}

function ImgItem({ item }: ImageProps) {
  const { title, src } = item
  return <Image className="mx-auto" src={src} title={title} fill alt="" />
}

function ExternalGameplay({ src, title }: ProjectGameplayProps["content"][number] & { contentType: "external" }) {
  return (
    <motion.iframe
      variants={childFadeInVariants}
      src={src}
      title={title}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="mx-auto size-full"
    />
  )
}
