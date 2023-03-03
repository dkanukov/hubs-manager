import {defineComponent, definePageMeta} from '#imports'
import {ControllerTable, ControllerTableFilters} from '#components'
import {tableData} from '../store/table-data'

export default defineComponent({
	async setup() {
		definePageMeta({
			layout: 'default'
		})
		const tableDataStore = tableData()
		await tableDataStore.fetchRemoteControllers()

		return {
			tableDataStore,
		}
	},
	render() {
		return (
			<div>
				<ControllerTableFilters
					whenFilterStateChange={this.tableDataStore.whenFilterStateChange}
					remoteControllers={this.tableDataStore.remoteControllers}
				/>
				<ControllerTable
					remoteControllers={this.tableDataStore.filteredRemoteControllers}
				/>
			</div>
		)
	}
})
