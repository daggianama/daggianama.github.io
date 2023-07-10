<template>
  <div class=" ">
    <p5 />
     
    <main class="flex min-h-screen pt-12 flex-col items-start py-10lg:max-w-lg md:py-20" >
      
      <div class="flex flex-col z-10 px-6 w-sm md:max-w-8xl md:mx-32 items-start justify-between ">
        <div class="flex mb-6  md:flex-row md:gap-12 items-baseline md:mb-12  ">
          <h1 class="text-2xl font-mono  ">Daggiana Madrid</h1>
          <a class="text-sky-600/60 text-sm" href="mailto:daggianama@gmail.com">daggianama@gmail.com</a>
        </div>
        <div class="flex flex-col gap-3 text-gray-700 text-sm mb-20 max-w-xl">
          <p>Developer and artist based in Barcelona with a diverse background in creative topics: visual arts, 3d printing, video-art, research and design.
            </p>
            <p>Around 10 years old, I learned about coding with <a className="text-sky-600/60 " href="https://el.media.mit.edu/logo-foundation/what_is_logo/logo_primer.html" target="_blank"
              rel="noopener noreferrer">Logo language</a>, which led me to my fascination for problem-solving and building by experimenting with computer programs.</p>
          <p> I&apos;m interested in Human-computer Interaction, Data visualization, Data science and Computational ethics.</p>
        </div>
        <div class="flex flex-col w-full ml-0 text-sm gap-3 ">
        <a
              class="w-28 bg-white/20 text-center   backdrop-blur-2xl border border-black/70   p-1 md:p-2 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
              href="https://github.com/daggianama"
              target="_blank"
              rel="noopener noreferrer"
            >
           Code
          </a>
          <a href="https://daggianamadrid.com" target="_blank" rel="noopener noreferrer"
          class="w-28 bg-white/20 text-center  backdrop-blur-2xl  border border-black/70 p-1 md:p-2 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
           >UX/UI</a>
          <a
          class="w-28 bg-white/20 text-center  backdrop-blur-2xl  border border-black/70 p-1 md:p-2 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
              href="https://www.instagram.com/daggianama/"
              target="_blank"
              rel="noopener noreferrer"
            >
            Visual
          </a>
          <a
            className="w-28 mt-3 shadow-lg border-sky-600/60 shadow-main-blue/40  text-sky-600 text-center opacity-60 border  md:p-2 md:hover:border md:hover:border-sky-600 md:hover:bg-main-blue/20"
            href="https://www"
            target="_blank"
            rel="noopener noreferrer"
          >
           PLAYGROUND

          </a>
        </div>
      
        
      </div>

      <!-- {/* <div className="flex z-8 absolute bottom-2 right-80 before:h-[280px] before:w-[400px] before:-translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-xl after:absolute after:-z-20 after:h-[200px] after:w-[400px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-orange-100 after:blur-2xl  before:lg:h-[300px]">
        
        
      </div> */}
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
      </div> */} -->
    </main>
  </div>
</template>
<!-- if isAdmin is true, render admin component 
      v-else user view will be shown  -->
      <!-- in admin @create is the scream of the child and capture ir on addproject -->



<script >

import { RouterLink } from "vue-router";
import p5 from './components/p5.vue';



export default {
  name: "app",
  components: {

    p5,
  },
  data() {
    return {
    }
  },
};
</script>


<style lang="scss" scoped></style>