import {defineComponent, definePageMeta} from '#imports'
import {ControllerTableFilters} from '#components'

export default defineComponent({
	setup() {
		definePageMeta({
			layout: 'default'
		})

		return () => (
			<div>
				<ControllerTableFilters/>
			</div>
		)
	},
})
