import { Sidebar } from '@/components/Sidebar'

export function MainLayout({ children }) {
    return (
        <>
            <div className="flex flex-row max-sm:flex-col">
                <Sidebar />
                <div className='bg-white dark:bg-zinc-900'>
                    {children}
                </div>
            </div>
        </>
    )
}
