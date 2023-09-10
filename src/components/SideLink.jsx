import Link from 'next/link'

export function SideLink({ href, children }) {
    return (
        <div>
            <Link
                href={href}
                className="flex flex-row  gap-2 inline-block rounded-lg py-1 px-2 mb-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
            >
                {children}
            </Link>
        </div>
    )
}
