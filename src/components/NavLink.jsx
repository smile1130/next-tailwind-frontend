import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700"
    >
      {children}
    </Link>
  )
}
