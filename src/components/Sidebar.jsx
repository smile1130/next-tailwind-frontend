import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { SideLink } from "./SideLink"
import Image from "next/image"
import userAvatar from "@/images/avatars/avatar-1.png"

export function Sidebar() {
    return (
        <>
            <div className="flex flex-col p-8 top-0 bg-zinc-100 dark:bg-zinc-700 w-[250px] sticky h-screen justify-between">
                <nav className="">
                    <Link href="/" aria-label="Home" className=''>
                        <span className='text-blue-600 font-extrabold text-4xl'>Brent<span className='text-slate-700 dark:text-slate-100'>.S</span></span>
                    </Link>
                    <div className="py-2 flex-col gap-2">
                        <SideLink href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            Companies
                        </SideLink>
                        <SideLink href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            Train AI
                        </SideLink>
                        <hr className="mb-2"></hr>
                        <SideLink href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                            </svg>
                            Research
                        </SideLink>
                    </div>
                </nav>
                <nav className="flex flex-col gap-4">
                    <div className="ms-1">
                        <ModeToggle />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            className="h-8 w-8 object-cover rounded-full"
                            src={userAvatar}
                            alt=""
                            width={56}
                            height={56}
                        />
                        <span className="text-slate-700 dark:text-slate-300">Brent.S</span>
                    </div>
                </nav>
            </div>
        </>
    )
}
