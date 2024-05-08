'use client'
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link legacyBehavior href="/">
        <a className="navlink">Trang Chủ</a>
      </Link>
      <div className='dropdown'>
                <button className='dropbtn' onClick={() => setIsOpen(!isOpen)}>Báo cáo</button>
                {isOpen && (
                    <div className='dropdownContent'>
                        <Link legacyBehavior href="/report/borrower-loan"><a className='navlink'>Khách hàng vay</a></Link>
                        <Link legacyBehavior href="/service2"><a className='navlink'>Báo cáo 2</a></Link>
                        <Link legacyBehavior href="/service3"><a className='navlink'>Báo cáo 3 3</a></Link>
                    </div>
                )}
            </div>
    </nav>
  );
}

export default Navbar;
