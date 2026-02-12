# 🌐 Next.js Business Website Template

เทมเพลตเว็บไซต์ธุรกิจที่ทันสมัย สร้างด้วย Next.js 16, TypeScript และ Tailwind CSS พร้อมระบบ Navigation Menu แบบ Dropdown และหน้าบริการครบครัน

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ คุณสมบัติหลัก

### 🎯 หน้าเว็บไซต์หลัก
- **หน้าแรก** - Landing Page พร้อม Hero Section และ Call-to-Action
- **เกี่ยวกับเรา** - ข้อมูลบริษัทและทีมงาน
- **ติดต่อเรา** - ฟอร์มติดต่อและข้อมูลการติดต่อ
- **นโยบายความเป็นส่วนตัว** - Privacy Policy
- **เงื่อนไขการใช้งาน** - Terms of Service
- **นโยบายคุกกี้** - Cookie Policy

### 🛠️ ระบบบริการ (Services)
- **บริการหลัก** - หน้าแสดงบริการทั้งหมด
- **ออกแบบเว็บไซต์** - Web Development Services
  - Modern Technology Stack
  - Responsive Design
  - Performance Optimization
  - Security & SEO
- **ออกแบบกราฟฟิก** - Graphic Design Services
  - Logo Design & Brand Identity
  - Print & Digital Design
  - Illustration & Social Media
- **การตลาดดิจิทัล** - Digital Marketing Services
  - SEO & SEM
  - Social Media Marketing
  - Email Marketing & Analytics

### 🔐 ระบบ Authentication
- **หน้าเข้าสู่ระบบ** - รองรับ Social Login
- **หน้าสมัครสมาชิก** - ฟอร์มครบถ้วนพร้อม Validation
- **ระบบบทบาทผู้ใช้** - ผู้ใช้ทั่วไป และ ผู้ดูแลระบบ

### 📊 ระบบ Admin Dashboard
- **หน้าแดชบอร์ด** - ภาพรวมข้อมูลสำคัญ
- **จัดการสต็อก** - ติดตามสินค้าคงคลัง
- **รายงาน** - สถิติและรายงานต่างๆ
- **การตั้งค่า** - จัดการระบบ
- **โปรไฟล์** - จัดการข้อมูลส่วนตัว

### 🎨 UI/UX Features
- **Navigation Menu** - Dropdown Menu พร้อม Sub-menu
- **Dark/Light Mode** - สลับธีมได้ตามต้องการ
- **Responsive Design** - รองรับทุกขนาดหน้าจอ
- **Font Optimization** - รองรับฟอนต์ไทย (Anuphan) และอังกฤษ (Inter)
- **Accessibility** - ปฏิบัติตามมาตรฐาน WCAG
- **Modern UI** - ดีไซน์สวยงามและใช้งานง่าย
- **Smooth Animations** - เอฟเฟกต์การเคลื่อนไหวที่ลื่นไหล

## 🛠️ เทคโนโลยีที่ใช้

### Frontend Framework
- **Next.js 16** - React Framework พร้อม App Router
- **TypeScript** - Type Safety และ Developer Experience
- **React Hook Form** - จัดการฟอร์มอย่างมีประสิทธิภาพ

### Styling & UI
- **Tailwind CSS** - Utility-first CSS Framework
- **Shadcn/ui** - Component Library ที่ทันสมัย
- **Lucide React** - Icon Library ที่สวยงาม
- **Google Fonts** - Anuphan (ไทย) และ Inter (อังกฤษ)

### Navigation & Components
- **Radix UI** - Navigation Menu Components
- **React Context** - จัดการ Theme State
- **SweetAlert2** - Alert และ Modal ที่สวยงาม

## 📁 โครงสร้างโปรเจ็กต์

```
next-scalable/
├── 📁 src/
│   ├── 📁 app/                          # App Router (Next.js 16)
│   │   ├── 📁 (admin)/                  # Admin Route Group
│   │   │   └── 📁 admin/
│   │   │       ├── 📁 dashboard/        # หน้าแดชบอร์ด
│   │   │       ├── 📁 stock/           # จัดการสต็อก
│   │   │       ├── 📁 reports/         # รายงาน
│   │   │       ├── 📁 settings/        # การตั้งค่า
│   │   │       ├── 📁 profile/         # โปรไฟล์
│   │   │       └── layout.tsx          # Admin Layout
│   │   ├── 📁 (auth)/                  # Auth Route Group
│   │   │   ├── 📁 login/               # หน้าเข้าสู่ระบบ
│   │   │   ├── 📁 register/            # หน้าสมัครสมาชิก
│   │   │   └── layout.tsx              # Auth Layout
│   │   ├── 📁 (front)/                 # Frontend Route Group
│   │   │   ├── 📁 about/               # เกี่ยวกับเรา
│   │   │   ├── 📁 contact/             # ติดต่อเรา
│   │   │   ├── 📁 home/                # หน้าแรก
│   │   │   ├── 📁 service/             # บริการ
│   │   │   │   ├── 📁 webdev/          # ออกแบบเว็บไซต์
│   │   │   │   ├── 📁 graphic/         # ออกแบบกราฟฟิก
│   │   │   │   ├── 📁 marketing/       # การตลาดดิจิทัล
│   │   │   │   ├── page.tsx            # หน้าบริการหลัก
│   │   │   │   └── service.tsx         # Service Component
│   │   │   ├── 📁 privacy-policy/      # นโยบายความเป็นส่วนตัว
│   │   │   ├── 📁 terms-of-service/    # เงื่อนไขการใช้งาน
│   │   │   ├── 📁 cookie-policy/       # นโยบายคุกกี้
│   │   │   ├── layout.tsx              # Frontend Layout
│   │   │   └── page.tsx                # หน้าแรก
│   │   ├── globals.css                 # Global Styles
│   │   ├── layout.tsx                  # Root Layout
│   │   ├── favicon.ico                 # Favicon
│   │   └── not-found.tsx               # หน้า 404
│   ├── 📁 components/                   # React Components
│   │   ├── 📁 ui/                      # Shadcn/ui Components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── navigation-menu.tsx     # Navigation Menu
│   │   │   └── theme-toggle.tsx        # Theme Toggle
│   │   ├── 📁 front/                   # Frontend Components
│   │   │   ├── Navbar.tsx              # Navigation Bar พร้อม Dropdown
│   │   │   └── Footer.tsx              # Footer Component
│   │   ├── 📁 admin/                   # Admin Components
│   │   │   └── Header.tsx              # Header Component
│   │   │   └── Sidebar.tsx             # Sidebar Component
│   ├── 📁 contexts/                    # React Contexts
│   │   └── ThemeContext.tsx            # Theme Management
│   ├── 📁 types/                       # TypeScript Types
│   │   ├── auth.ts                     # Authentication Types
│   │   └── index.ts                    # Common Types
│   └── 📁 lib/                         # Utilities
│       └── utils.ts                    # Helper Functions
├── 📁 public/                          # Static Assets
│   ├── 📁 images/
│   └── favicon.ico
├── 📄 package.json                     # Dependencies
├── 📄 tailwind.config.ts              # Tailwind Configuration
├── 📄 tsconfig.json                   # TypeScript Configuration
├── 📄 next.config.ts                  # Next.js Configuration
└── 📄 README.md                       # คู่มือนี้
```

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดระบบ
- Node.js 20.9 หรือใหม่กว่า
- npm หรือ yarn
- Git

### 1. Clone Repository
```bash
git clone https://github.com/iamsamitdev/next-scalable.git
cd next-scalable
```

### 2. ติดตั้ง Dependencies
```bash
npm install
# หรือ
yarn install
```

### 3. รันโปรเจ็กต์
```bash
npm run dev
# หรือ
yarn dev
```

### 4. เปิดเบราว์เซอร์
เข้าไปที่ [http://localhost:3000](http://localhost:3000)

## 📋 Scripts ที่มีให้ใช้งาน

```bash
# Development
npm run dev          # รันโปรเจ็กต์ในโหมด development
npm run build        # Build โปรเจ็กต์สำหรับ production
npm run start        # รันโปรเจ็กต์ที่ build แล้ว
npm run lint         # ตรวจสอบ code ด้วย ESLint
```

## 🎯 หน้าเว็บไซต์และเส้นทาง

### หน้าหลัก (Frontend)
- `/` - หน้าแรก
- `/about` - เกี่ยวกับเรา
- `/contact` - ติดต่อเรา
- `/service` - บริการหลัก
- `/service/webdev` - ออกแบบเว็บไซต์
- `/service/graphic` - ออกแบบกราฟฟิก
- `/service/marketing` - การตลาดดิจิทัล
- `/privacy-policy` - นโยบายความเป็นส่วนตัว
- `/terms-of-service` - เงื่อนไขการใช้งาน
- `/cookie-policy` - นโยบายคุกกี้

### หน้า Authentication
- `/login` - เข้าสู่ระบบ
- `/register` - สมัครสมาชิก

### หน้า Admin
- `/admin/dashboard` - แดชบอร์ด
- `/admin/stock` - จัดการสต็อก
- `/admin/reports` - รายงาน
- `/admin/settings` - การตั้งค่า
- `/admin/profile` - โปรไฟล์

## 🎨 ระบบ Navigation Menu

### Desktop Navigation
- **Dropdown Menu** - เมนูแบบเลื่อนลงสำหรับบริการ
- **Hover Effects** - เอฟเฟกต์เมื่อเลื่อนเมาส์
- **Icons Integration** - ไอคอนสำหรับแต่ละบริการ
- **Responsive Design** - ปรับตัวตามขนาดหน้าจอ

### Mobile Navigation
- **Hamburger Menu** - เมนูแบบ 3 ขีด
- **Collapsible Dropdown** - เมนูย่อยที่สามารถขยายได้
- **Touch Friendly** - เหมาะสำหรับการสัมผัส

### Service Menu Items
1. **บริการหลัก** - ภาพรวมบริการทั้งหมด
2. **ออกแบบเว็บไซต์** - Web Development
3. **ออกแบบกราฟฟิก** - Graphic Design
4. **การตลาดดิจิทัล** - Digital Marketing

## 🔧 การปรับแต่งฟอนต์

### ฟอนต์ที่ใช้
- **Anuphan** - ฟอนต์ไทยจาก Google Fonts
- **Inter** - ฟอนต์อังกฤษจาก Google Fonts

### การตั้งค่าฟอนต์
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@100;200;300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Font Stack */
--font-display: "Inter", "Anuphan", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Optimization
- **Font Display Swap** - ป้องกันการกะพริบของข้อความ
- **Preconnect Links** - โหลดฟอนต์เร็วขึ้น
- **Font Smoothing** - ปรับปรุงการแสดงผลบน macOS

## 🎨 การใช้งาน Dark Mode

ระบบรองรับการสลับธีมอัตโนมัติตาม:
1. **System Preference** - ตามการตั้งค่าของระบบปฏิบัติการ
2. **Manual Toggle** - สลับด้วยปุ่มใน Header
3. **Local Storage** - จดจำการตั้งค่าของผู้ใช้

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px    /* Tablet */
md: 768px    /* Desktop Small */
lg: 1024px   /* Desktop Medium */
xl: 1280px   /* Desktop Large */
2xl: 1536px  /* Desktop Extra Large */
```

## ♿ Accessibility Features

- **ARIA Labels** - ป้ายกำกับสำหรับ Screen Readers
- **Keyboard Navigation** - รองรับการใช้งานด้วยคีย์บอร์ด
- **Touch Targets** - ขนาดปุ่มเหมาะสมสำหรับการสัมผัส (44px+)
- **Color Contrast** - สีที่มี contrast ratio ตามมาตรฐาน WCAG
- **Focus Indicators** - แสดงตำแหน่งโฟกัสอย่างชัดเจน

## 🔧 การปรับแต่ง

### เปลี่ยนสีธีม
แก้ไขไฟล์ `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### เพิ่ม Component ใหม่
```bash
# ใช้ Shadcn/ui CLI
npx shadcn-ui@latest add [component-name]
```

### เพิ่มบริการใหม่
1. สร้างโฟลเดอร์ใหม่ใน `src/app/(front)/service/`
2. เพิ่ม `page.tsx` และ component file
3. อัพเดท `serviceItems` ใน `Navbar.tsx`
4. เพิ่มไอคอนและข้อมูลบริการ

## 📊 Features ที่วางแผนไว้

- [ ] **ระบบ Authentication จริง** - JWT, OAuth
- [ ] **Database Integration** - PostgreSQL, Prisma
- [ ] **API Routes** - RESTful API
- [ ] **CMS Integration** - Headless CMS
- [ ] **Blog System** - บทความและข่าวสาร
- [ ] **Portfolio Gallery** - แสดงผลงาน
- [ ] **Contact Form Backend** - ส่งอีเมลจริง
- [ ] **Multi-language** - i18n Support
- [ ] **PWA Support** - Progressive Web App
- [ ] **Analytics Integration** - Google Analytics

## 🐛 การรายงานปัญหา

หากพบปัญหาหรือต้องการเสนอแนะ:
1. เปิด Issue ใน GitHub Repository
2. อธิบายปัญหาอย่างละเอียด
3. แนบ Screenshot หากจำเป็น
4. ระบุ Browser และ OS ที่ใช้

## 🤝 การมีส่วนร่วม

เรายินดีรับการมีส่วนร่วมจากทุกคน:
1. Fork Repository
2. สร้าง Feature Branch
3. Commit การเปลี่ยนแปลง
4. Push ไปยัง Branch
5. เปิด Pull Request

## 📄 License

โปรเจ็กต์นี้อยู่ภายใต้ [MIT License](LICENSE)

## 👨‍💻 ผู้พัฒนา

- **ชื่อ:** Samit Koyom
- **Email:** samitkoyom@gmail.com
- **GitHub:** [@iamsamitdev](https://github.com/iamsamitdev)

## 🙏 ขอบคุณ

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component Library
- [Radix UI](https://www.radix-ui.com/) - Navigation Components
- [Lucide](https://lucide.dev/) - Icon Library
- [Google Fonts](https://fonts.google.com/) - Web Fonts

---

<div align="center">
  <p>สร้างด้วย ❤️ โดยใช้ Next.js และ Tailwind CSS</p>
  <p>© 2026 Next.js Business Template. All rights reserved.</p>
</div>
