import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="logo">TS</div>

      <nav className={open ? "nav open" : "nav"}>
        <a>หน้าแรก</a>
        <a>ประเทศ</a>
        <a>แพ็กเกจท่องเที่ยว</a>
        <a>ติดต่อ</a>
        <a>เกี่ยวกับเรา</a>
      </nav>

      <input className="search" placeholder="ค้นหา..." />

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </header>
  )
}
