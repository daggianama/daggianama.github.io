<template>
  <div
    class="flex min-h-screen max-w-md pt-8 flex-col items-start py-8 md:max-w-2xl md:ml-28 md:pt-20"
  >
    <div
      class="flex flex-col gap-1 md:gap-2 z-10 text-gray-800 px-6 w-sm items-start justify-between"
    >
      <div class="flex flex-wrap gap-1 md:flex md:gap-6 items-baseline">
        <h1 class="text-2xl font-mono">Daggiana Madrid</h1>
        <a class="text-main-blue text-sm" href="mailto:daggianama@gmail.com"
          >daggianama@gmail.com</a
        >
      </div>
      <div
        class="flex font-light flex-col gap-2 py-2 max-w-lg text-gray-600 text-sm mb-2"
      >
        <p></p>
        <p>
          Around 10 years old, I learned about coding with
          <a
            className="text-main-blue/90 "
            href="https://el.media.mit.edu/logo-foundation/what_is_logo/logo_primer.html"
            target="_blank"
            rel="noopener noreferrer"
            >Logo language</a
          >, which led me to my fascination for problem-solving and building by
          experimenting with computer programs.
        </p>
        <p>
          Some of my interests are Creative development, Human-computer
          Interaction, Data science, Computational ethics, among others topics
          related humans and technology.
        </p>
      </div>
      <div
        class="flex flex-wrap md:flex-nowrap mt-2 ml-0 text-sm md:w-full items-center gap-2 md:mt-10"
      >
        <a
          class="md:w-auto w-1/2 bg-white/20 text-center backdrop-blur-2xl border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-gray-200"
          href="https://github.com/daggianama"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <button>
          <a
            href="/uxui"
            rel="noopener noreferrer"
            class="md:w-auto w-1/2 bg-white/20 text-center backdrop-blur-2xl border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-gray-200"
            >UX/UI</a
          >
        </button>
        <button>
          <a
            class="w-1/2 md:w-auto bg-white/20 text-center backdrop-blur-2xl border border-black/50 p-1 md:p-2 md:px-4 md:hover:bg-gray-200"
            href="https://www.instagram.com/daggianama/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual work
          </a>
        </button>
        <button
          @click="showPlayground"
          class="w-1/2 md:w-auto bg-main-blue/40 border border-white text-white/90 text-center p-1 md:p-2 md:hover:border md:hover:bg-main-blue/80 md:hover:border-white/0"
        >
          PLAYGROUND
        </button>
      </div>
      <div
        class="mt-4 text-sm font-mono text-decoration-line: underline text-main-blue text-md md:w-full"
      >
        <button @click="toggleLinks">
          <span class="text-main-blue/80 hover:text-main-blue"
            >My reading links</span
          >
        </button>
      </div>
    </div>
    <links v-if="showLinks" />
    <playground v-if="showPlaygroundMsg" />
  </div>
</template>

<script>
import links from "./components/links.vue"
import playground from "./components/playground.vue"

export default {
  name: "app",
  components: {
    links,
    playground,
  },
  data() {
    return {
      showLinks: false,
      showPlaygroundMsg: false,
      presentation: [
        "Developer and artist based in Barcelona with a diverse background in creative topics: visual arts, 3d printing, video-art, research and design.",
      ],
    }
  },
  methods: {
    toggleLinks() {
      this.showLinks = !this.showLinks
      this.showPlaygroundMsg = false
    },
    showPlayground() {
      this.showLinks = false
      this.showPlaygroundMsg = !this.showPlaygroundMsg
    },
  },
}
</script>

<style lang="scss" scoped></style>
