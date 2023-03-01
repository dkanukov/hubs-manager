import {defineComponent, definePageMeta} from '#imports'
import {ControllerTable, ControllerTableFilters} from '#components'

export default defineComponent({
	setup() {
		definePageMeta({
			layout: 'default'
		})

		return () => (
			<div>
				<ControllerTableFilters/>
				<ControllerTable/>
			</div>
		)
	},
})
