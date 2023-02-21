import {NuxtPage, LayoutHeader} from '#components'
import {defineComponent} from '#imports'
import styles from './default.module.css'

export default defineComponent({
	setup() {
		return () => (
			<div class={styles.container}>
				<LayoutHeader/>
				<NuxtPage/>
			</div>
		)
	}
})
