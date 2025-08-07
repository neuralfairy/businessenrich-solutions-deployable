import { Link } from "react-router-dom"

const navigation = {
  solutions: [
    { name: "Messaging Strategy", href: "/features" },
    { name: "Brand Communication", href: "/features" },
    { name: "Conversion Optimization", href: "/features" },
    { name: "B2B Sales Tools", href: "/features" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "https://salescentri.com/company/careers" },
    { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
    { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
    { name: "Documentation", href: "https://salescentri.com/docs/user-guide" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "https://salescentri.com/trust/security-privacy" },
    { name: "Compliance", href: "https://salescentri.com/trust/compliance-certifications" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-3xl font-display font-bold">
                Businessenrich
              </span>
              <p className="mt-4 text-sm leading-6 text-secondary-foreground/80">
                Crafting high-converting messaging strategies for sales teams and agencies. 
                Transform your communication into revenue-driving results.
              </p>
            </div>
            <div className="flex space-x-6">
              {/* Social media icons can be added here */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('http') ? (
                        <a href={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('http') ? (
                        <a href={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('http') ? (
                        <a href={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-secondary-foreground">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-secondary-foreground/20 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-secondary-foreground/60">
              &copy; 2024 Businessenrich Solutions. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <a 
                href="https://salescentri.com?utm_source=businessenrich.com&utm_medium=footer&utm_campaign=partner_network" 
                className="text-xs leading-5 text-secondary-foreground/60 hover:text-secondary-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}