
import Image from 'next/image'
import builder from '@/public/images/builder-desktop.webp'

export default function Themes() {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="container mx-auto flex flex-col items-start gap-16 px-4 text-white lg:flex-row lg:px-8">
        <div className="flex-auto">
          <h3 className="mb-4 text-sm">THEMES LIBRARY</h3>
          <h2 className="text-5xl font-semibold">我们的主题库</h2>
        </div>
        <div className="shrink">
          <p className="mb-4 tracking-widest">以完全精确和易于理解的界面编辑和设计您的网站。<br />唤起你内心的设计师。</p>
          <a href="#" className="flex flex-row items-center text-lg">
            浏览主题库&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center p-8 md:p-16 lg:p-32">
        <Image src={builder} alt="主题生成器" placeholder="blur" />
      </div>
    </section>
  )
}