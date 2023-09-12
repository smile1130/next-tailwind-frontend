import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { MainLayout } from '@/components/MainLayout'

export default function Companies() {
    return (
        <>
            <Head>
                <title>Companies - Brent.S</title>
            </Head>
            <MainLayout>
                <div className='p-6 w-full h-fit rounded-lg bg-white dark:bg-zinc-900 dark:text-slate-100'>
                    <div>Companies Page is coming</div>
                </div>
            </MainLayout>
        </>
    )
}
