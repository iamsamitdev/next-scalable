"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  RefreshCw,
  Download,
  Upload,
  CheckCircle,
  XCircle,
} from 'lucide-react'

function Stock() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [stockFilter, setStockFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Mock data for stock items
  const stockItems = [
    {
      id: 'SKU001',
      name: 'iPhone 15 Pro Max 256GB',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      price: 45900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU002',
      name: 'Samsung Galaxy S24 Ultra',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 8,
      minStock: 15,
      maxStock: 80,
      price: 42900,
      status: 'low_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Samsung Electronics'
    },
    {
      id: 'SKU003',
      name: 'MacBook Air M3 13"',
      category: 'คอมพิวเตอร์',
      currentStock: 0,
      minStock: 5,
      maxStock: 30,
      price: 39900,
      status: 'out_of_stock',
      lastUpdated: '2024-01-13',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU004',
      name: 'AirPods Pro 2nd Gen',
      category: 'อุปกรณ์เสริม',
      currentStock: 125,
      minStock: 20,
      maxStock: 150,
      price: 8900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU005',
      name: 'Dell XPS 13 Plus',
      category: 'คอมพิวเตอร์',
      currentStock: 12,
      minStock: 8,
      maxStock: 40,
      price: 52900,
      status: 'in_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Dell Technologies'
    },
    {
      id: 'SKU006',
      name: 'iPad Pro 12.9" M2',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 28,
      minStock: 10,
      maxStock: 60,
      price: 35900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU007',
      name: 'Sony WH-1000XM5',
      category: 'อุปกรณ์เสริม',
      currentStock: 3,
      minStock: 8,
      maxStock: 40,
      price: 12900,
      status: 'low_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Sony Thailand'
    },
    {
      id: 'SKU008',
      name: 'ASUS ROG Strix G15',
      category: 'คอมพิวเตอร์',
      currentStock: 0,
      minStock: 5,
      maxStock: 25,
      price: 45900,
      status: 'out_of_stock',
      lastUpdated: '2024-01-12',
      supplier: 'ASUS Thailand'
    },
    {
      id: 'SKU009',
      name: 'Apple Watch Series 9',
      category: 'อุปกรณ์เสริม',
      currentStock: 67,
      minStock: 15,
      maxStock: 80,
      price: 13900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Apple Thailand'
    },
    {
      id: 'SKU010',
      name: 'Microsoft Surface Pro 9',
      category: 'คอมพิวเตอร์',
      currentStock: 15,
      minStock: 8,
      maxStock: 35,
      price: 38900,
      status: 'in_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Microsoft Thailand'
    },
    {
      id: 'SKU011',
      name: 'Google Pixel 8 Pro',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 22,
      minStock: 10,
      maxStock: 50,
      price: 32900,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Google Store'
    },
    {
      id: 'SKU012',
      name: 'Logitech MX Master 3S',
      category: 'อุปกรณ์เสริม',
      currentStock: 4,
      minStock: 12,
      maxStock: 60,
      price: 3590,
      status: 'low_stock',
      lastUpdated: '2024-01-13',
      supplier: 'Logitech Thailand'
    },
    {
      id: 'SKU013',
      name: 'HP Spectre x360 14',
      category: 'คอมพิวเตอร์',
      currentStock: 0,
      minStock: 6,
      maxStock: 30,
      price: 42900,
      status: 'out_of_stock',
      lastUpdated: '2024-01-11',
      supplier: 'HP Thailand'
    },
    {
      id: 'SKU014',
      name: 'Nintendo Switch OLED',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 89,
      minStock: 20,
      maxStock: 100,
      price: 12500,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Nintendo Thailand'
    },
    {
      id: 'SKU015',
      name: 'Razer DeathAdder V3',
      category: 'อุปกรณ์เสริม',
      currentStock: 156,
      minStock: 30,
      maxStock: 200,
      price: 2290,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'Razer Store'
    },
    {
      id: 'SKU016',
      name: 'Lenovo ThinkPad X1 Carbon',
      category: 'คอมพิวเตอร์',
      currentStock: 7,
      minStock: 5,
      maxStock: 25,
      price: 48900,
      status: 'in_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Lenovo Thailand'
    },
    {
      id: 'SKU017',
      name: 'Xiaomi 13T Pro',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 2,
      minStock: 10,
      maxStock: 60,
      price: 19990,
      status: 'low_stock',
      lastUpdated: '2024-01-13',
      supplier: 'Xiaomi Thailand'
    },
    {
      id: 'SKU018',
      name: 'JBL Charge 5',
      category: 'อุปกรณ์เสริม',
      currentStock: 0,
      minStock: 15,
      maxStock: 80,
      price: 5990,
      status: 'out_of_stock',
      lastUpdated: '2024-01-10',
      supplier: 'JBL Thailand'
    },
    {
      id: 'SKU019',
      name: 'Acer Predator Helios 300',
      category: 'คอมพิวเตอร์',
      currentStock: 18,
      minStock: 8,
      maxStock: 40,
      price: 39900,
      status: 'in_stock',
      lastUpdated: '2024-01-14',
      supplier: 'Acer Thailand'
    },
    {
      id: 'SKU020',
      name: 'OnePlus 12',
      category: 'อิเล็กทรอนิกส์',
      currentStock: 34,
      minStock: 12,
      maxStock: 70,
      price: 28990,
      status: 'in_stock',
      lastUpdated: '2024-01-15',
      supplier: 'OnePlus Thailand'
    }
  ]

  // Mock data for stock overview
  const stockOverview = [
    {
      title: 'สินค้าทั้งหมด',
      value: stockItems.length.toString(),
      change: '+3',
      trend: 'up',
      icon: Package,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'สินค้าใกล้หมด',
      value: stockItems.filter(item => item.status === 'low_stock').length.toString(),
      change: '+1',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    {
      title: 'สินค้าหมด',
      value: stockItems.filter(item => item.status === 'out_of_stock').length.toString(),
      change: '-1',
      trend: 'down',
      icon: XCircle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30'
    },
    {
      title: 'มูลค่าสต็อก',
      value: '฿' + (stockItems.reduce((total, item) => total + (item.price * item.currentStock), 0) / 1000000).toFixed(1) + 'M',
      change: '+12.5%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
            <CheckCircle className="h-3 w-3" />
            มีสินค้า
          </span>
        )
      case 'low_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400">
            <AlertTriangle className="h-3 w-3" />
            ใกล้หมด
          </span>
        )
      case 'out_of_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">
            <XCircle className="h-3 w-3" />
            หมดสต็อก
          </span>
        )
      default:
        return null
    }
  }

  const getStockLevel = (current: number, max: number) => {
    const percentage = (current / max) * 100
    let color = 'bg-green-500'
    if (percentage < 20) color = 'bg-red-500'
    else if (percentage < 40) color = 'bg-orange-500'
    
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    )
  }

  // ฟังก์ชันกรองและค้นหาสินค้า
  const filteredStockItems = stockItems.filter(item => {
    // กรองตามคำค้นหา
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
    
    // กรองตามหมวดหมู่
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    
    // กรองตามสถานะสต็อก
    const matchesStockFilter = stockFilter === 'all' || item.status === stockFilter
    
    return matchesSearch && matchesCategory && matchesStockFilter
  })

  // คำนวณการแบ่งหน้า
  const totalPages = Math.ceil(filteredStockItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredStockItems.slice(startIndex, endIndex)

  // รีเซ็ตหน้าเมื่อกรองข้อมูลใหม่
  const handleFilterChange = () => {
    setCurrentPage(1)
  }

  // ฟังก์ชันเปลี่ยนหน้า
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">จัดการสต็อก</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">ติดตามและจัดการสินค้าคงคลัง</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 min-h-[44px]" aria-label="นำเข้าข้อมูลสินค้า">
            <Upload className="h-4 w-4" aria-hidden="true" />
            นำเข้า
          </Button>
          
          <Button variant="outline" className="gap-2 min-h-[44px]" aria-label="ส่งออกข้อมูลสินค้า">
            <Download className="h-4 w-4" aria-hidden="true" />
            ส่งออก
          </Button>
          
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 min-h-[44px]" aria-label="เพิ่มสินค้าใหม่">
            <Plus className="h-4 w-4" aria-hidden="true" />
            เพิ่มสินค้า
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stockOverview.map((item, index) => {
          const IconComponent = item.icon
          return (
            <Card key={index} className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{item.value}</p>
                    <div className="flex items-center mt-2">
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-700 dark:text-green-400 mr-1" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-700 dark:text-red-400 mr-1" aria-hidden="true" />
                      )}
                      <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    handleFilterChange()
                  }}
                  aria-label="ค้นหาสินค้าตามชื่อ รหัส หมวดหมู่ หรือผู้จำหน่าย"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 min-h-[44px]"
                />
              </div>
            </div>
            
            <select 
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value)
                handleFilterChange()
              }}
              aria-label="เลือกหมวดหมู่สินค้า"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[44px]"
            >
              <option value="all">ทุกหมวดหมู่</option>
              <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
              <option value="คอมพิวเตอร์">คอมพิวเตอร์</option>
              <option value="อุปกรณ์เสริม">อุปกรณ์เสริม</option>
            </select>
            
            <select 
              value={stockFilter}
              onChange={(e) => {
                setStockFilter(e.target.value)
                handleFilterChange()
              }}
              aria-label="เลือกสถานะสต็อก"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[44px]"
            >
              <option value="all">ทุกสถานะ</option>
              <option value="in_stock">มีสินค้า</option>
              <option value="low_stock">ใกล้หมด</option>
              <option value="out_of_stock">หมดสต็อก</option>
            </select>
            
            <Button variant="outline" className="gap-2 min-h-[44px]" aria-label="รีเฟรชข้อมูล">
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              รีเฟรช
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stock Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">รายการสินค้า</CardTitle>
              <CardDescription>จัดการสินค้าคงคลังทั้งหมด</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2 min-h-[44px]" aria-label="เปิดตัวกรองเพิ่มเติม">
              <Filter className="h-4 w-4" aria-hidden="true" />
              ตัวกรองเพิ่มเติม
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full" role="table" aria-label="ตารางรายการสินค้าคงคลัง">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">รหัสสินค้า</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">ชื่อสินค้า</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">หมวดหมู่</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">สต็อกปัจจุบัน</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">ระดับสต็อก</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">ราคา</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">สถานะ</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{item.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.supplier}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.currentStock}</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Min: {item.minStock} | Max: {item.maxStock}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-20">
                        {getStockLevel(item.currentStock, item.maxStock)}
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {Math.round((item.currentStock / item.maxStock) * 100)}%
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ฿{item.price.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 min-w-[44px] min-h-[44px]" aria-label={`ดูรายละเอียดสินค้า ${item.name}`}>
                          <Eye className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 min-w-[44px] min-h-[44px]" aria-label={`แก้ไขสินค้า ${item.name}`}>
                          <Edit className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 min-w-[44px] min-h-[44px]" aria-label={`ลบสินค้า ${item.name}`}>
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* No Results Message */}
          {filteredStockItems.length === 0 && (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" aria-hidden="true" />
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">ไม่พบสินค้าที่ค้นหา</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่</p>
            </div>
          )}
          
          {/* Pagination */}
          {filteredStockItems.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                แสดง {startIndex + 1}-{Math.min(endIndex, filteredStockItems.length)} จาก {filteredStockItems.length} รายการ
                {(searchTerm || selectedCategory !== 'all' || stockFilter !== 'all') && 
                  ` (กรองจาก ${stockItems.length} รายการทั้งหมด)`}
              </p>
              
              {totalPages > 1 && (
                <nav className="flex items-center gap-2" aria-label="การนำทางหน้า">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="gap-1 min-h-[44px]"
                    aria-label="ไปหน้าก่อนหน้า"
                  >
                    ก่อนหน้า
                  </Button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // แสดงหน้าแรก, หน้าสุดท้าย, หน้าปัจจุบัน และหน้าใกล้เคียง
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <Button
                            key={page}
                            variant="outline"
                            size="sm"
                            onClick={() => goToPage(page)}
                            className={`min-h-[44px] ${
                              page === currentPage
                                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700"
                                : ""
                            }`}
                            aria-label={`ไปหน้า ${page}`}
                            aria-current={page === currentPage ? "page" : undefined}
                          >
                            {page}
                          </Button>
                        )
                      } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return (
                          <span key={page} className="px-2 text-gray-500 dark:text-gray-500" aria-hidden="true">
                            ...
                          </span>
                        )
                      }
                      return null
                    })}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="gap-1 min-h-[44px]"
                    aria-label="ไปหน้าถัดไป"
                  >
                    ถัดไป
                  </Button>
                </nav>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Stock