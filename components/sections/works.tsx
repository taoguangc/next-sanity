import Image from 'next/image'
import work01 from '@/public/images/work01.jpg'
import work02 from '@/public/images/work02.jpg'
import work03 from '@/public/images/work03.jpg'
import work04 from '@/public/images/work04.jpg'
import work05 from '@/public/images/work05.jpg'
import work06 from '@/public/images/work06.jpg'

export default function Works() {
  return (
    <section className="worksWrapper overflow-hidden py-24">
      <div className="works flex w-[300vw] flex-row flex-nowrap justify-start gap-16 px-16 lg:px-24">
        <div className="w-1/2">
          <Image src={work01} alt="work01" className="mb-8" />
          <div className="flex flex-row justify-between">
            <div>
              <h5>WEB DESIGN</h5>
              <h4 className="text-2xl font-semibold">Color Intergration</h4>
            </div>
            <h6 className="text-xl font-semibold">2023</h6>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={work02} alt="work02" className="mb-8" />
          <div className="flex flex-row justify-between">
            <div>
              <h5>WEB DESIGN</h5>
              <h4 className="text-2xl font-semibold">Color Intergration</h4>
            </div>
            <h6 className="text-xl font-semibold">2023</h6>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={work03} alt="work03" className="mb-8" />
          <div className="flex flex-row justify-between">
            <div>
              <h5>WEB DESIGN</h5>
              <h4 className="text-2xl font-semibold">Color Intergration</h4>
            </div>
            <h6 className="text-xl font-semibold">2023</h6>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={work04} alt="work04" className="mb-8" />
          <div className="flex flex-row justify-between">
            <div>
              <h5>WEB DESIGN</h5>
              <h4 className="text-2xl font-semibold">Color Intergration</h4>
            </div>
            <h6 className="text-xl font-semibold">2023</h6>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={work05} alt="work05" className="mb-8" />
          <div className="flex flex-row justify-between">
            <div>
              <h5>WEB DESIGN</h5>
              <h4 className="text-2xl font-semibold">Color Intergration</h4>
            </div>
            <h6 className="text-xl font-semibold">2023</h6>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={work06} alt="work06" className="mb-8" />
          <div className="flex flex-row justify-between">
            <div>
              <h5>WEB DESIGN</h5>
              <h4 className="text-2xl font-semibold">Color Intergration</h4>
            </div>
            <h6 className="text-xl font-semibold">2023</h6>
          </div>
        </div>
      </div>
    </section>
  )
}
