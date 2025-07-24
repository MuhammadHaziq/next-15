import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard description",
};

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="flex gap-4 py-4">
        <div className="w-1/2 p-4 border border-gray-300 rounded-md">{users}</div>
        <div className="w-1/2 p-4 border border-gray-300 rounded-md">{revenue}</div>
      </div>
      <div className="flex p-4 border border-gray-300 rounded-md">{notifications}</div>
    </div>
  );
}
