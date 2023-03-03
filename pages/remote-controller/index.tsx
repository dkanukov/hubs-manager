import {defineComponent, definePageMeta} from '#imports'
import styles from './styles.module.css'

export default defineComponent({
	setup() {
		definePageMeta({
			layout: 'empty'
		})
	},

	render() {
		return (
			<div>
				123
			</div>
		)
	}
})
