import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Package2, Home, Package, Tags, BarChart3, FileText, Settings, X, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AdminSidebarProps {
  onClose?: () => void
  collapsed?: boolean
}

function AdminSidebar({ onClose, collapsed = false }: AdminSidebarProps) {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'แดชบอร์ด', href: '/admin/dashboard', icon: Home },
    { name: 'สินค้า', href: '/admin/products', icon: Package },
    { name: 'หมวดหมู่', href: '/admin/categories', icon: Tags },
    { name: 'สต็อก', href: '/admin/stock', icon: BarChart3 },
    { name: 'รายงาน', href: '/admin/reports', icon: FileText },
    { name: 'ตั้งค่า', href: '/admin/settings', icon: Settings },
  ]

  // ฟังก์ชันตรวจสอบว่าเมนูนั้นเป็น active หรือไม่
  const isActive = (href: string) => {
    return pathname === href
  }

  // ฟังก์ชันสำหรับออกจากระบบ
  const handleLogout = async () => {
    try {
      window.location.href = '/login'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="flex h-full flex-col bg-background/90 backdrop-blur-sm border-r border-border/30">
      {/* Header */}
              <div className={`flex h-16 items-center border-b border-border/30 ${collapsed ? 'justify-center px-2' : 'justify-between px-6'}`}>
        <div className="flex items-center gap-2">
          <Package2 className="h-8 w-8 text-blue-600 shrink-0" />
          {!collapsed && <span className="text-lg font-bold text-foreground">จัดการคลังสินค้า</span>}
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className={`flex-1 py-4 space-y-2 ${collapsed ? 'px-2' : 'px-4'}`}>
        {navigation.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 py-2 text-sm font-medium rounded-md transition-colors ${
                collapsed ? 'justify-center px-2' : 'px-3'
              } ${
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
              onClick={onClose}
              title={collapsed ? item.name : undefined}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
              <div className={`border-t border-border/30 ${collapsed ? 'p-2' : 'p-4'}`}>
                  <Button onClick={handleLogout} variant="ghost" className={`w-full gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive ${collapsed ? 'justify-center px-2' : 'justify-start'}`} title={collapsed ? 'ออกจากระบบ' : undefined}>
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && 'ออกจากระบบ'}
        </Button>
      </div>
    </div>
  )
}

export default AdminSidebar