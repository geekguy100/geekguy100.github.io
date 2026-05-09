import { SocialGrid } from "./social-grid"
import { NavigationBar } from "./nav-bar"
import { SiteLogo } from "./site-logo"

export function SiteHeader() {
  // Defaulting header height to what it is when the Image is fully loaded.
  return (
    <header className="site-section min-h-43.75 text-center sm:grid sm:grid-cols-3">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center sm:items-end">
        <SiteLogo />
      </div>
      {/* Name */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <h1>Kyle Grenier</h1>
          <h4>Immersive Technology and Game Developer</h4>
        </div>
        <NavigationBar />
      </div>
      {/* Socials */}
      <SocialGrid />
    </header>
  )
}
