import RecruitHeader from "@/components/recruit/recruit-header";
import Footer from "@/components/recruit/footer";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Reset Password | RecruitPalz",
  description: "Reset your RecruitPalz account password securely.",
};

export default function ResetPassword() {
  return (
    <>
      <RecruitHeader />
      <div className="min-h-screen bg-background">
        <div className="max-w-md mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Reset Password</h1>
          <p className="text-muted-foreground mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                placeholder="example@item.com"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Send Reset Link
            </Button>

            <div className="text-center">
              <a href="/" className="text-sm text-primary hover:underline">
                Back to Home
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
