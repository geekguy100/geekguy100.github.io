import { SocialGrid } from "./social-grid"
import { SiteLogo } from "./site-logo"
import { NameAndNavbar } from "./name-and-navbar"

export function SiteHeader() {
  // Defaulting header height to what it is when the Image is fully loaded.
  return (
    <header className="site-section min-h-43.75 text-center sm:grid sm:grid-cols-3">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center sm:items-end">
        <SiteLogo />
      </div>
      {/* Name and Navigation */}
      <NameAndNavbar />
      {/* Socials */}
      <SocialGrid />
    </header>
  )
}
