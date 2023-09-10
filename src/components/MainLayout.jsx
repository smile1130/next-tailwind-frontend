import { Sidebar } from '@/components/Sidebar'

export function MainLayout({ children }) {
    return (
        <>
            <div className="flex flex-rowl dark:bg-zinc-900">
                <Sidebar />
                {children}
            </div>
        </>
    )
}
