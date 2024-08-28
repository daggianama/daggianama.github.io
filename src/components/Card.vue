<template>
		<div class="card shadow-xl">
			<img
				class="w-full"
				:src="image.href"
				:alt="image.alt"
			/>
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">
					{{  title }}
				</div>
				<p class="text-gray-700 text-base">
					{{ description }}
				</p>
			</div>
			<div class="px-6 pt-4 pb-2">
				<span
                v-for="tag in tags"
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					> {{ tag }}</span
				>
			
			</div>
		</div>
</template>

<script>
export default {
    name: "Card",
    components: {},
    props: {
        image: {
            type: Object,
            required: true,
            default: {
                href: "",
                alt: "",
            }
        },
        title: {
            type: String,
            required: true,
            max: 40,
        },
        description: {
            type: String,
            required: true,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    data() {
        
    },
    methods: {
    },
}
</script>
