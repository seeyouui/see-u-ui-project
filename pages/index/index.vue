<template>
	<view class="container">
		<see-text type="primary" text="SeeYouUI 项目模板"></see-text>
		<view class="content">
			<image class="logo" src="/static/uni-app-logo.png"></image>
			<image class="logo" src="/static/see-u-ui-logo.png"></image>
		</view>
		<!-- 
			试着写一个button：
			<see-button type="primary" title="一个按钮" isRipple />
		-->
	</view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
	padding: 24px;
	text-align: center;
	box-sizing: border-box;
	.content {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 24px;
		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 24px;
		}
	}
}
</style>
