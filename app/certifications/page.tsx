import { ArticleWithIntro } from "@/components/section-with-intro"
import ProductOwnerBadge from "./_images/product-owner-badge.png"
import ScrumMasterBadge from "./_images/scrum-master-badge.png"
import UnrealCertificate from "./_images/unreal-certificate.jpg"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import { MotionDiv } from "@/components/motion-primitives"
import { reducedChildScaleInVariants } from "@/lib/animation"
import type { ReactNode } from "react"

interface CertificationData {
  caption: string
  href?: string
  image: StaticImageData
  additionalContent?: ReactNode
  type: "badge" | "certificate"
}

const certifications: CertificationData[] = [
  {
    caption: "Certified Scrum Product Owner",
    image: ProductOwnerBadge,
    href: "https://bcert.me/sjmvugibx",
    type: "badge",
  },
  {
    caption: "Certified Scrum Master",
    image: ScrumMasterBadge,
    href: "https://bcert.me/shxgptrxw",
    type: "badge",
  },
  {
    caption: "Unreal Engine 5 C++ Developer Course",
    image: UnrealCertificate,
    type: "certificate",
    href: "https://www.udemy.com/course/unrealcourse/",
  },
]

export default function CertificationsPage() {
  return (
    <ArticleWithIntro title="Certifications" id="certifications">
      <div className="space-y-8">
        <Content type="badge" />
        <Content type="certificate" />
      </div>
    </ArticleWithIntro>
  )
}

function Content({ type }: { type: CertificationData["type"] }) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {certifications
        .filter((t) => t.type === type)
        .map((t, i) => {
          const child = type === "badge" ? <Badge data={t} /> : <Certificate data={t} />
          return (
            <MotionDiv key={i} variants={reducedChildScaleInVariants} className="w-fit max-w-lg text-center">
              {child}
              {t.additionalContent}
            </MotionDiv>
          )
        })}
    </div>
  )
}

function Certificate({ data }: { data: CertificationData }) {
  const img = <Image sizes="512px" className="mx-auto size-full" src={data.image} alt={data.caption} />
  return (
    <>
      <div className="relative">
        {data.href ? (
          <Link target="_blank" href={data.href}>
            {img}
          </Link>
        ) : (
          img
        )}
      </div>
      <p className="italic">{data.caption}</p>
    </>
  )
}

function Badge({ data }: { data: CertificationData }) {
  const img = <Image sizes="256px" className="mx-auto" src={data.image} alt={data.caption} />
  return (
    <>
      <div className="relative size-64">
        {data.href ? (
          <Link target="_blank" href={data.href}>
            {img}
          </Link>
        ) : (
          img
        )}
      </div>
      <p className="italic">{data.caption}</p>
    </>
  )
}
