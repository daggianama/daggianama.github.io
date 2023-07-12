<template>
  <div class=" ">
    <main class="flex min-h-screen max-w-md pt-8 flex-col items-start py-8 md:max-w-2xl md:ml-28 md:pt-20" >
      
      <div class="flex flex-col gap-1 md:gap-2 z-10  text-gray-800 px-6 w-sm  items-start justify-between ">
        <div class="flex flex-wrap md:flex md:gap-6 items-baseline   ">
          <h1 class="text-2xl font-mono ">Daggiana Madrid</h1>
          <a class="text-main-blue text-sm" href="mailto:daggianama@gmail.com">daggianama@gmail.com</a>
        </div>
        <div class="flex font-light flex-col gap-3 py-2  text-gray-600 text-sm mb-2 ">
          <p>Developer and artist based in Barcelona with a diverse background in creative topics: visual arts, 3d printing, video-art, research and design.
            </p>
            <p>Around 10 years old, I learned about coding with <a className="text-main-blue/90 " href="https://el.media.mit.edu/logo-foundation/what_is_logo/logo_primer.html" target="_blank"
              rel="noopener noreferrer">Logo language</a>, which led me to my fascination for problem-solving and building by experimenting with computer programs.</p>
          <p> Some of my interests are Creative development, Human-computer Interaction, Information technology, Computational ethics, among others topics related humans and technology.</p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap  ml-0 text-sm md:w-full items-center gap-2 mt-6">
          <a
              class="md:w-auto w-1/2 bg-white/20 text-center   backdrop-blur-2xl border border-black/50   p-1 md:p-2 md:px-4 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
              href="https://github.com/daggianama"
              target="_blank"
              rel="noopener noreferrer"
            >
           Github
          </a>
          <a href="https://daggianamadrid.com" target="_blank" rel="noopener noreferrer"
          class="md:w-auto w-1/2 bg-white/20 text-center  backdrop-blur-2xl  border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
           >UX/UI</a>
          <a
          class=" w-1/2 md:w-auto bg-white/20 text-center  backdrop-blur-2xl  border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-white/40 md:hover:border md:hover:border-white/60"
              href="https://www.instagram.com/daggianama/"
              target="_blank"
              rel="noopener noreferrer"
            >
            Visual work
          </a>
          <button 
            @click="showPlayground"
            class="w-1/2 md:w-auto bg-main-blue/40 border border-white  text-white/90 text-center p-1 md:p-2 md:hover:border md:hover:bg-main-blue/80 md:hover:border-white/0"
            
          >
           PLAYGROUND

          </button>
        </div>
        <div class="mt-4 text-sm font-mono text-main-blue text-md md:w-full">
          <button  @click="toggleLinks" >
            <span class="text-main-blue/80 hover:text-main-blue">My reading links</span>
          </button>
        
        </div>
      </div>

      <!-- {/* <div className="flex z-8 absolute bottom-2 right-80 before:h-[280px] before:w-[400px] before:-translate-x-1/3 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-xl after:absolute after:-z-20 after:h-[200px] after:w-[400px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-orange-100 after:blur-2xl  before:lg:h-[300px]">
        
        
      </div> */}
{/* 
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        
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
        
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */} -->
      <links v-if="showLinks"/>
      <playground v-if="showPlaygroundMsg"/>
    </main>
    
    <p5 />
  </div>
</template>



<script >

import p5 from './components/p5.vue';
import links from './components/links.vue';
import playground from './components/playground.vue';


export default {
  name: "app",
  components: {
    links,
    p5,
    playground,
  },
  data() {
    return {
      showLinks: false,
      showPlaygroundMsg: false,


    };
  },
  methods: {
    toggleLinks() {
      this.showLinks = !this.showLinks;
      this.showPlaygroundMsg = false;
    },
    showPlayground() {
      this.showLinks = false;
      this.showPlaygroundMsg = !this.showPlaygroundMsg;

    },
   
  },
};
</script>


<style lang="scss" scoped></style>