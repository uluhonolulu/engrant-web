import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-bold text-neutral-700 mb-4">Page not found</h1>
          <p className="text-neutral-700 mb-8">
            Sorry, we could not find what you were looking for.
          </p>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            Go home
          </Link>
        </div>
      </main>
      <Footer tagline="AI-powered grant matching for nonprofits" />
    </div>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <title>Page Not Found | Engrant</title>
    <meta
      name="description"
      content="The page you requested could not be found on Engrant."
    />
    <meta name="robots" content="noindex" />
  </>
)
