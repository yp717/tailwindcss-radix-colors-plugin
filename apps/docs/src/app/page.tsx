import Link from 'next/link'
import MiniPalettePreview from '../components/palette/MiniPalettePreview'

const Page = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 z-0" />
      <div className="relative h-full flex flex-col gap-4 text-center items-center h-full w-full z-10">
        <p className="text-gray-1200 font-bold text-3xl md:text-5xl lg:text-9xl my-4 mt-20">
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
          className="rounded-lg border-4 text-grayLight-1200 border-grayLight-1000 bg-slateLight-100 w-min whitespace-nowrap px-6 py-2 z-50 no-underline mb-20"
        >
          Get Started
        </Link>

        <MiniPalettePreview />
      </div>
    </div>
  )
}

export default Page
