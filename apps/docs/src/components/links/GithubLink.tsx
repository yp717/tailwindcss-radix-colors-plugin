import Link from 'next/link'

import { GithubIcon } from '../../icons'

const GithubLink = () => {
  return (
    <Link href="https://github.com/yp717/tailwindcss-radix-colors-plugin">
      <GithubIcon className="w-5 h-5 fill-gray-1200" />
    </Link>
  )
}

export default GithubLink
