import {defineComponent} from '#imports'
import styles from './styles.module.css'

export default defineComponent({
	setup() {
		return () => (
			<div>
				<h1 class={styles.headerTitle}>Хаб пультов МИЭМ</h1>
			</div>
		)
	}
})
