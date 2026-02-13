"use client"

import AdminSidebar from "@/components/admin/Sidebar"
import AdminHeader from "@/components/admin/Header"
import { useUIStore } from "@/stores/useUIStore"
import { useEffect, useState } from "react"

export default function AdminLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sidebarOpen, setSidebarOpen, sidebarCollapsed, toggleSidebarCollapsed } = useUIStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ก่อน hydrate เสร็จ ใช้ค่า default (expanded) เพื่อไม่ให้ sidebar บัง content
  const collapsed = mounted ? sidebarCollapsed : false

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col">
          <AdminSidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ${collapsed ? 'lg:w-16' : 'lg:w-64'}`}>
        <AdminSidebar collapsed={collapsed} />
      </div>

      {/* Main content */}
      <div className={`transition-all duration-300 ${collapsed ? 'lg:pl-16' : 'lg:pl-64'}`}>
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} onCollapseToggle={toggleSidebarCollapsed} collapsed={collapsed} />
        <main>{children}</main>
      </div>
    </div>
  );
} 