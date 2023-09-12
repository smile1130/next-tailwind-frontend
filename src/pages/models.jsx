import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { MainLayout } from '@/components/MainLayout'

export default function Models() {
    return (
        <>
            <Head>
                <title>Train AI - Brent.S</title>
            </Head>
            <MainLayout>
                <div className='p-6 w-full h-fit rounded-lg bg-white dark:bg-zinc-900 dark:text-slate-100'>
                    <div>Train AI Page is coming soon</div>
                </div>
            </MainLayout>
        </>
    )
}
