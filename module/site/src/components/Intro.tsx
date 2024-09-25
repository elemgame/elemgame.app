import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function FeedIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.51762 6.77491L15.3459 0H13.9648L8.90409 5.88256L4.86212 0H0.200195L6.31244 8.89547L0.200195 16H1.58139L6.92562 9.78782L11.1942 16H15.8562L9.51728 6.77491H9.51762ZM7.62588 8.97384L7.00658 8.08805L2.07905 1.03974H4.20049L8.17706 6.72795L8.79636 7.61374L13.9654 15.0075H11.844L7.62588 8.97418V8.97384Z" />
    </svg>
  )
}

function Telegram(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 50 50" aria-hidden="true" fill="currentColor" {...props}>
            <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375
	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219
	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966
	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693
	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351
	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"/>
        </svg>
    )
}

function Medium(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 50 50" aria-hidden="true" fill="currentColor" {...props}>
            <circle cx="15" cy="25" r="13"/>
            <path d="M35.5,13c-3.59,0-6.5,5.373-6.5,12c0,1.243,0.102,2.441,0.292,3.568c0.253,1.503,0.662,2.879,1.192,4.065
	c0.265,0.593,0.56,1.138,0.881,1.627c0.642,0.978,1.388,1.733,2.202,2.201C34.178,36.811,34.827,37,35.5,37s1.322-0.189,1.933-0.539
	c0.814-0.468,1.56-1.223,2.202-2.201c0.321-0.489,0.616-1.034,0.881-1.627c0.53-1.185,0.939-2.562,1.192-4.065
	C41.898,27.441,42,26.243,42,25C42,18.373,39.09,13,35.5,13z"/>
            <path d="M45.5,14c-0.259,0-0.509,0.173-0.743,0.495c-0.157,0.214-0.307,0.494-0.448,0.833c-0.071,0.169-0.14,0.353-0.206,0.551
	c-0.133,0.395-0.257,0.846-0.37,1.343c-0.226,0.995-0.409,2.181-0.536,3.497c-0.063,0.658-0.112,1.349-0.146,2.065
	C43.017,23.499,43,24.241,43,25s0.017,1.501,0.051,2.217c0.033,0.716,0.082,1.407,0.146,2.065c0.127,1.316,0.31,2.501,0.536,3.497
	c0.113,0.498,0.237,0.948,0.37,1.343c0.066,0.198,0.135,0.382,0.206,0.551c0.142,0.339,0.292,0.619,0.448,0.833
	C44.991,35.827,45.241,36,45.5,36c1.381,0,2.5-4.925,2.5-11S46.881,14,45.5,14z"/>
        </svg>
    )
}

export function Intro() {
    return (
        <>
            <div>
                <Link href="/">
                    <Logo className="inline-block h-8 w-auto"/>
                </Link>
            </div>
            <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
                Fight on the field of battle{' '}
                <span className="text-sky-300">in a game with elements of strategy and luck</span>
            </h1>
            {/*<p className="mt-4 text-sm/6 text-gray-300">
        Commit is a lightweight Git client you can open from anywhere any time
        you’re ready to commit your work with a single keyboard shortcut. It’s
        fast, beautiful, and completely unnecessary.
      </p>*/}
            <SignUpForm/>
            <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                {/*<IconLink href="#" icon={BookIcon} className="flex-none">
          Documentation
        </IconLink>*/}
            </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      <IconLink href="https://t.me/elemgame" icon={Telegram} title="Telegram"></IconLink>
      <IconLink href="https://twitter.com/elemgame" icon={XIcon} title="Twitter aka X"></IconLink>
      <IconLink href="https://medium.com/@elemgame" icon={Medium} title="Medium"></IconLink>
      <IconLink href="https://github.com/elemgame" icon={GitHubIcon} title="Github"></IconLink>
    </p>
  )
}
