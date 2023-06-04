import Link from 'next/link'
import * as React from 'react'

const Page = () => {
  return (
    <div className="h-full flex flex-col gap-4 text-center items-center h-full w-full">
      <p className="text-gray-1200 font-bold text-3xl md:text-5xl lg:text-9xl my-4 mt-20">
        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-1200 to-pink-1200">
          Elevate
        </span>{' '}
        <br /> your styling
      </p>
      <p className="text-xl text-gray-1000">
        A powerfully simple npm package to seamlessly integrate Radix&apos;s
        dynamic palette with TailwindCSS. Streamline your workflow with this
        flexible package, with full radix support and dark mode out of the box.
      </p>
      <Link
        href="/get-started"
        className="rounded-lg border-4 text-grayLight-1200 border-grayLight-1000 bg-slateLight-100 w-min whitespace-nowrap px-6 py-2 z-50 no-underline"
      >
        Get Started
      </Link>
    </div>
  )
}

export default Page
