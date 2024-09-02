<template>
	<div
		class="flex flex-col z-20 gap-2 py-12 items-baseline"
	>
		<div class="flex gap-14 items-baseline">
			<h1 class="font-mono name-title">
				<a href="/">Daggiana Madrid</a>
			</h1>

			<a
				href="mailto:daggianama@gmail.com"
				class="text-main-blue email"
				>daggianama@gmail.com</a
			>
		</div>

		<div
			class="flex flex-wrap md:flex-nowrap my-12 items-center main-buttons"
		>
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
				<a
					href="/uxui"
					rel="noopener noreferrer"
					>UX/UI</a
				>
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
			<button
				@click="showPlayground"
				class="w-auto bg-main-blue/40 text-white/90 text-center md:hover:bg-main-blue/80"
			>
				<a>PLAYGROUND</a>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "BaseHead",
	components: {},
	data() {
		return {
			showPlaygroundMsg: false,
			presentation: [
				"Developer and artist based in Barcelona with a diverse background in creative topics: visual arts, 3d printing, video-art, research and design.",
			],
		}
	},
	methods: {
		showPlayground() {
			this.showLinks = false
			this.showPlaygroundMsg = !this.showPlaygroundMsg
		},
	},
}
</script>

<style lang="scss" scoped></style>
