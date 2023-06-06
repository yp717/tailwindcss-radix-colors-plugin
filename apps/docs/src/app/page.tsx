import Link from 'next/link'
import MiniPalettePreview from '../components/palette/MiniPalettePreview'

const Page = () => {
  return (
    <div>
      <div className="absolute top-0 left-0" />
      <div className="relative flex flex-col items-center w-full h-full gap-4 text-center">
        <p className="my-4 mt-20 font-bold text-gray-1200 text-7xl md:text-8xl lg:text-9xl">
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-crimsonDark-1000 to-amberDark-900">
            Elevate
          </span>{' '}
          <br /> your styling
        </p>
        <p className="text-xl text-gray-1000">
          A powerfully simple npm package to seamlessly integrate{' '}
          <Link href="https://www.radix-ui.com/colors">Radix UI</Link>&apos;s{' '}
          dynamic palette with{' '}
          <Link href="https://tailwindcss.com/">TailwindCSS</Link>. Streamline
          your workflow with this flexible package, with full radix support and
          dark mode out of the box.
        </p>
        <Link
          href="/get-started"
          className="px-6 py-2 mb-20 no-underline border-4 rounded-lg text-grayLight-1200 border-grayLight-1000 bg-slateLight-100 w-min whitespace-nowrap"
        >
          Get Started
        </Link>

        <MiniPalettePreview />
      </div>
    </div>
  )
}

export default Page
