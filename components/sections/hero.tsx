
import Image from 'next/image'
import AnimatedText from '@/components/sections/animated-text'
import hero from '@/public/images/14.jpg'

export default function Hero() {
  return (
    <>
      <section className="bg-repeat">
        <div className="container mx-auto flex flex-col px-4 pt-24 md:pt-32 lg:flex-row lg:px-8">
          <div className="w-full lg:w-3/4">
            <AnimatedText />
          </div>
          <div className="hidden md:w-1/4 lg:block">
            <div className="relative h-48 w-48 overflow-hidden text-3xl uppercase">
              <svg viewBox="0 0 200 200" className="animate-[spin_20s_linear_infinite]">
                <defs>
                  <path
                    d="M100,37c34.8,0,63,28.2,63,63s-28.2,63-63,63s-63-28.2-63-63S65.2,37,100,37z"
                    id="textcircle"
                  ></path>
                </defs>
                <text>
                  <textPath xlinkHref="#textcircle" fill="#8f8f8f" className="text-xs tracking-[.4em]">
                    creative design - creative design -
                  </textPath>
                </text>
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg
                  className="h-12 w-12"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg: grid gap-8 md:grid-cols-[1fr_4fr_4fr_1fr] lg:grid-cols-[1fr_4fr_6fr_1fr]">
        <div></div>
        <div>
          <p className="mr-8 leading-relaxed text-neutral-500 md:mr-0">
            我们是数字时代的设计和技术合作伙伴。我们通过开发尖端数字产品执行智能的服务，帮助企业进行创新并保持与客户的高度相关性。我们卓越的数字产品、服务和品牌传播解决方案，从创意到产品，通过时尚的
            UX/UI 设计前端和后端开发，为创新型初创企业和成熟企业创造成功的数字服务。
          </p>
        </div>
        <div className="col-span-2 md:h-72 lg:h-[480px]">
          <Image src={hero} width={960} alt="Hero" placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover object-center" priority />
        </div>
      </section>
    </>
  )
}