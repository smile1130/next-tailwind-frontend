import { Sidebar } from '@/components/Sidebar'

export function MainLayout({ children }) {
    return (
        <>
            <div className="flex flex-row max-md:flex-col">
                <Sidebar />
                <div className='bg-zinc-100 dark:bg-zinc-800 h-screen w-full pt-8 px-4'>
                    {children}
                </div>
            </div>
        </>
    )
}
