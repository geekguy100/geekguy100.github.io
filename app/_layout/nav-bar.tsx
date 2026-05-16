import { ButtonGroup } from "@/components/ui/button-group"
import { NavigationButton } from "../../components/nav-button"
import { MotionNav } from "@/components/motion-primitives"
import { childFadeInVariants } from "@/lib/animation"

const routes = [
  { href: "/", children: "Home" },
  { href: "/#projects", children: "Projects" },
]

export function NavigationBar() {
  return (
    <MotionNav variants={childFadeInVariants} className="mb-2 sm:m-0">
      <ButtonGroup>
        {routes.map((t) => (
          <NavigationButton key={t.href} {...t} />
        ))}
      </ButtonGroup>
    </MotionNav>
  )
}
