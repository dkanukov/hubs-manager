import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/_styles.scss'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineNuxtPlugin(nuxtApp => {
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi
			}
		}
	})

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
	nuxtApp.vueApp.use(vuetify)
})
