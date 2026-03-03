import RecruitHeader from "@/components/recruit/recruit-header";
import Footer from "@/components/recruit/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | RecruitPalz",
  description: "View users.",
  robots: {
    index: false,
    follow: false,
  },
};

type UserRow = {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?: "Active" | "Invited" | "Disabled";
};

const users: UserRow[] = [
  { id: "u_001", name: "Alex Johnson", email: "alex@example.com", role: "Admin", status: "Active" },
  { id: "u_002", name: "Sam Lee", email: "sam@example.com", role: "Recruiter", status: "Invited" },
  { id: "u_003", name: "Taylor Kim", email: "taylor@example.com", role: "Hiring Manager", status: "Active" },
];

export default function UsersPage() {
  return (
    <>
      <RecruitHeader />
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground">Users</h1>
              <p className="text-muted-foreground mt-2">All users with access to RecruitPalz.</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border bg-background">
            <table className="w-full text-left">
              <thead className="bg-muted/30">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-sm font-medium text-foreground">Name</th>
                  <th className="px-4 py-3 text-sm font-medium text-foreground">Email</th>
                  <th className="px-4 py-3 text-sm font-medium text-foreground">Role</th>
                  <th className="px-4 py-3 text-sm font-medium text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-3 text-sm text-foreground">{u.name}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{u.email}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{u.role ?? "—"}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{u.status ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Note: This page currently uses a local sample dataset. Replace with your users API/service when ready.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}