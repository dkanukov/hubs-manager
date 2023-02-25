import {defineNuxtConfig} from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['vuetify/lib/styles/main.sass',  '@mdi/font/css/materialdesignicons.min.css', '~/layouts/global.css'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
	typescript: {
		strict: true,
		typeCheck: true,
	},
	modules: [
		[
			'@pinia/nuxt',
		],
	],
	components: [
		{
			path: '~/components',
			extensions: ['.tsx'],
			pathPrefix: false,
		}
	],
	ssr: false,
})
