<template>
  <div class="flex min-h-screen flex-col items-start">
    <div
      class="flex flex-col gap-1 z-9 text-gray-800 items-start justify-between"
    >
      <div
        class="description text-4xl flex font-light flex-col gap-6 py-1 text-gray-600 w-10/12 mb-2"
      >
        <p>
          Developer and artist based in Barcelona with a diverse background in
          creative topics: visual arts, 3d printing, video-art, research and
          design.
        </p>
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
        class="mt-4 font-mono text-decoration-line: underline text-main-blue text-md md:w-full"
      >
        <button @click="toggleLinks" class="p-0">
          <a class="text-main-blue/80 hover:text-main-blue">My reading links</a>
        </button>
      </div>
    </div>
    <links v-if="showLinks" />
    <playground v-if="showPlaygroundMsg" />
  </div>
</template>

<script>
import links from '@/components/links.vue';
import playground from '@/components/playground.vue';

export default {
  name: 'app',
  components: {
    links,
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
