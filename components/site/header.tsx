"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/site-data";
import { WhaleWordmark } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#06101a]/80 backdrop-blur-xl">
      <div className="site-container flex h-18 items-center justify-between">
        <a href="#top" aria-label="Whale 홈으로 이동">
          <WhaleWordmark compact />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#project"
          className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/8 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/12 md:inline-flex"
        >
          What we&apos;re building
        </a>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/[0.07] bg-[#06101a] px-5 py-5 md:hidden" aria-label="모바일 메뉴">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-white/[0.06] py-3.5 text-base text-slate-300 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

