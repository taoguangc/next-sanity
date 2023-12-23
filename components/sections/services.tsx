export default function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row lg:px-8">
        <div className="flex-1">
          <h3 className="mb-4 text-base font-medium text-black/60">Services</h3>
          <h2 className="text-5xl font-semibold">我们的服务</h2>
        </div>
        <div className="mt-10 flex flex-1 flex-row">
          <h2 className="mr-4 text-5xl font-bold">01</h2>
          <div>
            <h2 className="py-4 text-2xl font-bold">Wordpress Builder</h2>
            <ul className="leading-loose">
              <li>Elementor</li>
              <li>Bricks</li>
              <li>GreenShift</li>
              <li>oxygen</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-1 flex-row">
          <h2 className="mr-4 text-5xl font-bold">02</h2>
          <div>
            <h2 className="py-4 text-2xl font-bold">Jamstack</h2>
            <ul className="leading-loose">
              <li>Next.js</li>
              <li>Nuxt.js</li>
              <li>Astro</li>
              <li>Hugo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}