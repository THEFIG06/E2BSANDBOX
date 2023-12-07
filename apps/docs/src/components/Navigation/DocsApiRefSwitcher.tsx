'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Book,
} from 'lucide-react'

function DocsApiRefSwitcher() {
  const pathname = usePathname()
  console.log('PATHNAME', pathname)
  // TODO: We'll start handling routes differently soon (everything is prefixed with /docs at the moment)
  const isApiRefActive = pathname.startsWith('/docs/reference');

  return (
    <div className="
        w-[var(--sidebar-nav-width)]
        lg:px-6
        lg:py-4
        flex
        items-center
        gap-4
        fixed
        backdrop-blur
        bg-red-500/0.2
        z-10
        lg:border-b
        lg:border-white/7.5
      ">
      <Link
        href="/"
        className="group"
      >
        <div className="flex items-center gap-1">
          <Book
            className={clsx(
              !isApiRefActive ? 'text-brand-300' : 'text-zinc-400',
              'group-hover:text-brand-300',
              'transition-all',
            )}
            size={16}
          />
          <span
            className={clsx(
              !isApiRefActive ? 'text-brand-300' : 'text-zinc-400',
              'group-hover:text-brand-300',
              'font-medium',
              'transition-all',
            )}>
            Documentation
          </span>
        </div>
      </Link>

      <Link
        className="group"
        href="/reference"
      >
        <div className="flex items-center gap-1.5">
          <div className={clsx(
            isApiRefActive ? 'bg-brand-700' : 'bg-zinc-700',
            'group-hover:bg-brand-700',
            'flex',
            'items-center',
            'justify-center',
            'transition-all',
            'rounded',
            'py-[0.5px]',
            'px-1.5',
          )}>
            <span className="font-bold font-mono text-white-100 text-[11px] relative top-px">API</span>
          </div>
          <span className={clsx(
            isApiRefActive ? 'text-brand-300' : 'text-zinc-400',
            'group-hover:text-brand-300',
            'transition-all',
            'font-medium',
          )}>
            Reference
          </span>
        </div>
      </Link>
    </div>
  )
}

export default DocsApiRefSwitcher