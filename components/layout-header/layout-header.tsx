import {defineComponent} from '#imports'
import styles from './styles.module.css'

export default defineComponent({
	setup() {
		return () => (
			<div class={styles.header}>
				<h1>Хаб пультов МИЭМ</h1>
			</div>
		)
	}
})
