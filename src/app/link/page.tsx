import LinkCard from '~/components/link/link-card'
import { CONFIG } from '~/config'

export const metadata = {
  title: 'Friends Link',
}

export default function page() {
  return (
    <div className="mt-4 flex flex-row flex-wrap content-start gap-5 md:after:grow-[999]">
      {CONFIG.friend_link.map((info) => (
        <div key={info.name} className="flex-auto">
          <LinkCard {...info} />
        </div>
      ))}
    </div>
  )
}
