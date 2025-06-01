import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Cookie Policy - PulsePlay Hub",
  description: "Cookie Policy for PulsePlay Hub. Learn about the cookies we use and how to manage your preferences.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-lg text-gray-600">Last updated: March 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a
                  website. They are widely used to make websites work more efficiently and provide information to
                  website owners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use cookies for the following purposes:</p>
                <ul>
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyse how our website is used</li>
                  <li>To improve your browsing experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-l-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Essential Cookies</h3>
                    <Badge className="bg-green-100 text-green-800">Required</Badge>
                  </div>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually
                    set in response to actions you take, such as setting privacy preferences or filling in forms.
                  </p>
                </div>

                <div className="border-l-4 border-l-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                    <Badge className="bg-blue-100 text-blue-800">Optional</Badge>
                  </div>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This helps us improve our website's performance.
                  </p>
                </div>

                <div className="border-l-4 border-l-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Functional Cookies</h3>
                    <Badge className="bg-purple-100 text-purple-800">Optional</Badge>
                  </div>
                  <p className="text-gray-600">
                    These cookies enable enhanced functionality and personalisation. They may be set by us or by
                    third-party providers whose services we have added to our pages.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You can control and manage cookies in several ways:</p>
                <ul>
                  <li>
                    <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings
                    preferences
                  </li>
                  <li>
                    <strong>Cookie Banner:</strong> When you first visit our site, you can choose which types of cookies
                    to accept
                  </li>
                  <li>
                    <strong>Opt-out Links:</strong> Some third-party services provide direct opt-out mechanisms
                  </li>
                </ul>
                <p>Please note that disabling certain cookies may affect the functionality of our website.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Our website may contain content from third-party services such as:</p>
                <ul>
                  <li>Google Analytics (for website analytics)</li>
                  <li>Social media platforms (for sharing content)</li>
                  <li>Embedded videos or maps</li>
                </ul>
                <p>
                  These services may set their own cookies. We recommend reviewing their privacy policies for more
                  information about their cookie practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  updated policy on our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <ul>
                  <li>Email: info@pulseplayhub.com</li>
                  <li>Phone: +44 7924 195 426</li>
                  <li>Address: St Ann's Street 22, Manchester, M2 7LF, United Kingdom</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
