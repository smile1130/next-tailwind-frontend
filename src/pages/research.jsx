import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { MainLayout } from '@/components/MainLayout'


export default function Research() {
    return (
        <>
            <Head>
                <title>Rsearch - Brent.S</title>
            </Head>
            <MainLayout>
                <div className='p-6 w-full h-fit rounded-lg bg-white dark:bg-zinc-900 dark:text-slate-100'>
                    <p className='text-[24px] font-bold mb-4 dark:text-white'>Ask anything</p>
                    <input type="text" className='w-full rounded-md border-gray-300 dark:bg-zinc-900' placeholder='What are the latest opportunities in the AI market?' />
                    <hr className='my-6' />
                    <div className='flex flex-row justify-between'>
                        <button className='flex flex-row items-center gap-1 border-solid border-1 dark:text-slate-100 dark:hover:bg-zinc-700 border-slate-300 rounded-md px-[12px] py-[7px] hover:bg-gray-100' title="Control exactly what sources the agent use for search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                            Sources
                        </button>
                        <button className='flex flex-row items-center gap-1 bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:hover:bg-slate-300 text-white dark:text-slate-900 rounded-md px-[12px] py-[7px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            Submit
                        </button>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
