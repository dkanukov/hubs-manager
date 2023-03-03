import {NuxtPage, LayoutHeader} from '#components'
import {defineComponent} from '#imports'
import styles from './default.module.css'

export default defineComponent({
	render() {
		return (
			<div class={styles.container}>
				<NuxtPage/>
			</div>
		)
	}
})
