<template>
	<div id='m-header' class="m-header">
		<div class="m-header__logo"></div>
		<div class="m-header__text">Meowsic</div>
	</div>
</template>

<script>
	export default {
		name: 'm-header'
	}
</script>

<style lang="stylus" scoped>
	@import "~common/stylus/variable"
	@import "~common/stylus/mixin";

	.m-header
		display: flex
		flex-flow: row nowrap
		justify-content: center
		align-items: center
		position: absolute
		top: 0
		right: 0
		left: 0
		height: 44px
		color: $color-theme
		font-size: $font-size-theme
		text-align: center
		&__logo
			margin-right: 10px
			width: 32px
			height: 32px
			bg-image("logo")
			background-size: contain
			background-position 0 -2px
		&__text
			line-height: 32px

</style>