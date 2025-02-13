<template>
  <div class="flex flex-col z-20 gap-2 py-10 items-baseline">
    <div class="flex gap-14 items-baseline">
      <h1 class="font-mono name-title">
        <a href="/">Daggiana Madrid</a>
      </h1>

      <!-- <a href="mailto:daggianama@gmail.com" class="text-main-blue email"
        >daggianama@gmail.com</a
      > -->
    </div>

    <div class="flex flex-wrap md:flex-nowrap my-12 items-center main-buttons">
      <button
        class="w-auto bg-white/20 text-center backdrop-blur-2xl border border-black/50 hover:bg-white/40"
      >
        <a
          href="https://github.com/daggianama"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </button>
      <button
        class="w-auto bg-white/20 text-center backdrop-blur-2xl border border-black/50 hover:bg-white/40"
      >
        <a href="/uxui" rel="noopener noreferrer">UX/UI</a>
      </button>
      <button
        class="w-auto bg-white/20 text-center backdrop-blur-2xl border border-black/50 hover:bg-white/40"
      >
        <a
          href="https://www.instagram.com/daggianama/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual work
        </a>
      </button>
      <div class="playground">
        <button
          @click="showPlayground"
          class="playground-btn w-auto bg-main-blue/60 text-white/90 text-center md:hover:bg-main-blue/80"
        >
          <a>PLAYGROUND</a>
        </button>
        <div
          v-if="showPlaygroundMsg"
          class="playground-content font-mono font-light text-main-blue items-start bg-white/90 border border-main-blue/30"
        >
          <a>Data visual</a>
          <a>3D dev</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Basehead.css';
export default {
  name: 'BaseHead',
  components: {},
  data() {
    return {
      showPlaygroundMsg: false,
    };
  },
  methods: {
    showPlayground() {
      this.showPlaygroundMsg = !this.showPlaygroundMsg;
    },
  },
};
</script>
