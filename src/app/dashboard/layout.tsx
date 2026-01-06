import DashboardNavbar from "@/src/features/dashboard/ui/DashboardNavbar";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex flex-col gap-5">
      <DashboardNavbar />
      {children}
    </main>
  );
};

export default DashboardLayout;
