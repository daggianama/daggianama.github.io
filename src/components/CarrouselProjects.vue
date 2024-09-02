<template>
	<div class="carrousel z-20 flex flex-col gap-24 h-full  pb-12 ">
		<Card
			:image="{
				href: '/img/Frame-Toyota.png',
				alt: 'Toyota prototype project',
			}"
			title="TCEU - E-Cargo Bike Service"
			description="As cities move towards low emissions zones, Toyota is exploring new mobility solutions.
TCEU is helping Toyota to explore possibilities of shared Cargo bikes which will help to
build more sustainable cities."
        	:tags="['UI Design', 'UX Research', 'B2C', 'Mobile']"
		/>
		<Card
			:image="{
				href: '/img/Frame-Alight.png',
				alt: 'Toyota prototype project',
			}"
			title="Alight - Deciding on streaming content"
			description="Solution for finding content in an easy way while reducing exposition to huge amounts of irrelevant content."
        	:tags="['UI Design', 'UX Research', 'B2C', 'Mobile', 'Streaming content']"
		/>
		<Card
			:image="{
				href: '/img/Frame-goTogether.png',
				alt: 'GoTogether prototype project',
			}"
			title="GoTogether - Sharing meaningful time with friends"
			description="Help and allow people to gather easily in one app all their favorite events and share them with their social circles."
        	:tags="['UI Design', 'UX Research', 'B2C', 'Mobile']"
		/>
		
	</div>
</template>

<script>
import Card from "./Card.vue"
export default {
	name: "CarrouselProjects",
	components: {
		Card,
	},
	data() {},
	methods: {},
	created() {
		console.log("CarrouselProjects creado")
	},
	mounted() {
		console.log("CarrouselProjects montado")
	},
}
</script>
