const Hero = () => {
    return <section className="bg-cream py-16 lg:py-24">
        <div
          className="mx-auto flex max-w-6xl flex-col px-5 lg:flex-row lg:items-center lg:gap-16"
        >
          <div className="lg:flex-1">
            <p
              className="text-sm font-semibold uppercase tracking-wide text-chop-dark"
            >
              Now delivering in Serrekunda, Bakau and Brusubi
            </p>
            <h1
              className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl"
            >
              Dinner is one tap away.
            </h1>
            <p className="mt-5 max-w-prose text-lg">
              Benachin, domoda, afra, yassa. Order from forty kitchens across
              the Kombos, pay on delivery or by mobile money, and watch your
              rider all the way to the gate.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#get-the-app"
                className="inline-flex rounded-lg bg-chop px-5 py-2.5 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
                >Get the app</a
              >
              <a
                href="#popular"
                className="group inline-flex items-center font-semibold text-chop-dark"
                >See what's popular
                <span
                  className="ml-1 inline-block transition duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                  >→</span
                ></a
              >
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:flex-1">
            <img
              src="/assets/phone.svg"
              alt="Chop Chop app showing nearby kitchens and a 28 minute delivery estimate"
              className="mx-auto w-56 lg:w-72"
            />
            <div
              className="absolute bottom-8 left-0 rounded-lg bg-surface px-5 py-4 lg:left-8"
            >
              <p className="text-2xl font-semibold tracking-tight text-ink">
                28 min
              </p>
              <p className="text-sm text-ink-3">avg to your doorway</p>
            </div>
          </div>
        </div>
      </section>
}

export default Hero