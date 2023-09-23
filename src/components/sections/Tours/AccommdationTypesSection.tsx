import { SanityAccommodationSection } from '@/sanity/types'

import AccomodationCard from '@/components/molecule/AccomodationCard'

export default function AccommdationTypesSection({ data }: { data: SanityAccommodationSection }) {
  return (
    <div className="flex flex-col py-7 max-w-[1280px] w-[90%] mx-auto relative gap-10">
      <div>
        <div>
          <h2 className="text-black font-bold text-2xl text-c">{data?.title?.en}</h2>
          <hr className=" w-28 my-2 text-yellow bg-yellow  rounded-full border-2" />
        </div>
        <div>
          <p className="text-gray text-lg">{data.subtitle?.en}</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {data?.accommodation_types?.map((item, index) => (
          <AccomodationCard data={item} key={index} />
        ))}
      </div>
    </div>
  )
}
