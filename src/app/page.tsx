import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start  py-20">
      <div className="flex flex-col z-10  max-w-8xl mx-32 items-start justify-between ">
        <div className="flex gap-12 items-baseline mb-12 font-mono ">
          <h1 className='text-xl'>Daggiana Madrid</h1>
          <a className="text-sky-600/60 hover:text-gray-700 text-sm" href="mailto:daggianama@gmail.com">daggianama@gmail.com</a>
        </div>
        <div className="flex flex-col gap-3 text-gray-500 text-sm mb-20 max-w-xl">
          <p>I'm a Developer with a diverse background in creative topics: painting, visual arts, research and design. <br></br><br></br>Around 10 years old, I learned about coding with <a className="text-sky-600/60 " href='https://el.media.mit.edu/logo-foundation/what_is_logo/logo_primer.html' target="_blank"
              rel="noopener noreferrer">Logo language</a>, which led me to my fascination for problem-solving and building by experimenting with computer programs.</p>
          <p> I'm interested in Human-computer Interaction, Web interaction, Data visualization, Data science and Computational ethics.</p>
        </div>
        <div className="flex flex-col  text-sm gap-3">
          <a href="https://daggianamadrid.com" target="_blank" rel="noopener noreferrer"
            className="w-36 justify-center border-white  backdrop-blur-2xl    lg:rounded-xl lg:border lg:p-3 hover:bg-white" >UX/UI projects</a>
            <a
              className="w-36 justify-center border-white  backdrop-blur-2xl  lg:rounded-xl lg:border lg:p-3 hover:bg-white"
              href="https://github.com/daggianama"
              target="_blank"
              rel="noopener noreferrer"
            >
            Github
          </a>
          <a
              className="w-36 justify-center border-white  backdrop-blur-2xl  lg:rounded-xl lg:border lg:p-3 hover:bg-white"
              href="https://www.instagram.com/daggianama/"
              target="_blank"
              rel="noopener noreferrer"
            >
            Visual Art
            </a>
          </div>
      </div>

      <div className="flex absolute bottom-2 right-80 before:h-[280px] before:w-[400px] before:-translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[400px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-orange-100 after:blur-2xl after:content-['']  before:lg:h-[300px]">
        
        
      </div>
{/* 
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
