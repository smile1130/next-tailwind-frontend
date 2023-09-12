import Link from 'next/link'
import { useRouter } from 'next/router';

export function SideLink({ href, children }) {
    const router = useRouter();
    return (
        <div>
            <Link
                href={href}
                className={`flex flex-row  gap-2 rounded-lg py-1 px-2 mb-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 ${(href == router.asPath) ? "active" : ""}`}
            >
                {children}
            </Link>
        </div>
    )
}
