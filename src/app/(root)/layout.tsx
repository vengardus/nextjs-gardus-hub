import type { Metadata } from "next";
import { AppConstants } from "@/constants/app.constants";
import Navbar  from "@/components/layout/navbar/navbar.client";
// import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: `${AppConstants.APP_NAME}`,
  description: "Generated by vengardus",
};

export default function RootLayout(
  {
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {
  console.log("Rendering ROOT Layout")
  return (
    <div className="">
      <Navbar />
      <div className="layout-children-with-navbar py-2 px-3">{children}</div>
      {/* <Toaster closeButton richColors  /> */}

    </div>
  );
}
