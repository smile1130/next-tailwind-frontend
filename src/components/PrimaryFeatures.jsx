import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotRegister from '@/images/screenshots/register.png'
import screenshotCompanies from '@/images/screenshots/companies.png'
import screenshotModels from '@/images/screenshots/models.png'
import screenshotResearch from '@/images/screenshots/research.png'
import screenshotRegister_dark from '@/images/screenshots/register_dark.png'
import screenshotCompanies_dark from '@/images/screenshots/companies_dark.png'
import screenshotModels_dark from '@/images/screenshots/models_dark.png'
import screenshotResearch_dark from '@/images/screenshots/research_dark.png'

const features = [
  {
    title: 'Register/Login',
    description:
      "Your sidekick will create a customized account plan for each prospect account based on key information.",
    image: screenshotRegister,
    image_dark: screenshotRegister_dark,
  },
  {
    title: 'Companies',
    description:
      "Your sidekick will create a customized account plan for each prospect account based on key information.",
    image: screenshotCompanies,
    image_dark: screenshotCompanies_dark,
  },
  {
    title: 'Train AI',
    description:
      "Your sidekick will create a customized account plan for each prospect account based on key information.",
    image: screenshotModels,
    image_dark: screenshotModels_dark,
  },
  {
    title: 'Research',
    description:
      'Your sidekick will create a customized account plan for each prospect account based on key information.',
    image: screenshotResearch,
    image_dark: screenshotResearch_dark,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(localStorage.getItem('isDarkMode'));
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32 bg-slate-100 dark:bg-zinc-900"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight dark:text-slate-300 text-slate-900 sm:text-4xl md:text-5xl">
            Everything you need to use this service.
          </h2>
          <p className="mt-6 text-lg tracking-tight dark:text-slate-300 text-slate-900">
            Well everything you need is very simple.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'lg:bg-slate-300 lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10 dark:bg-slate-800'
                          : 'dark:hover:bg-white/10 dark:lg:hover:bg-white/5 hover:bg-slate-200'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'dark:text-blue-600 dark:lg:text-white text-blue-900 font-bold lg:text-slate-700'
                              : 'dark:text-blue-100 dark:hover:text-white dark:lg:text-white text-slate-700 group-hover:font-bold'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-slate-900 dark:text-white'
                            : 'text-slate-400 dark:group-hover:text-slate-200 group-hover:text-slate-700'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base dark:text-white text-slate-700 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={!isDarkMode? feature.image : feature.image_dark}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
