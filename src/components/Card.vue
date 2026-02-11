<template>
  <div class="card">
    <img class="w-full" :src="image.href" :alt="image.alt" />
    <div class="card-content">
      <div class="card-text-wrapper">
        <div class="card-title font-semibold text-5xl mb-10">
          {{ title }}
        </div>
        <p class="card-description text-gray-700 text-4xl">
          {{ description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-1">
        <p
          v-for="tag in tags"
          class="tag inline-block bg-gray-200 rounded-full py-4 px-5 text-4xl text-gray-700 mr-2 mb-2"
        >
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: {
    image: {
      type: Object,
      required: true,
      default: {
        href: '',
        alt: '',
      },
    },
    title: {
      type: String,
      required: true,
      max: 40,
    },
    description: {
      type: String,
      required: true,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      max: 200,
    },
    tags: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {},
  watch: {},
  data() {},
  methods: {},
};
</script>
