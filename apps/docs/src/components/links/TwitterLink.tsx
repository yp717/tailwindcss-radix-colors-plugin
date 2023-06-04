import Link from 'next/link'

import { TwitterIcon } from '../../icons'

const TwitterLink = () => {
  return (
    <Link href="https://twitter.com/yannispanagis">
      <TwitterIcon className="w-5 h-5 fill-gray-1200" />
    </Link>
  )
}

export default TwitterLink
