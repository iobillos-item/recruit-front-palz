import RecruitHeader from "@/components/recruit/recruit-header";
import Footer from "@/components/recruit/footer";

export default function Blog() {
  return (
    <>
      <RecruitHeader />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
          <div className="prose prose-lg">
            {/* Content coming soon */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
