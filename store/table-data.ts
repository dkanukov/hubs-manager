import {defineStore} from 'pinia'
import {RemoteController} from '../types/myApi'
import {Ref, ref, computed, unref} from 'vue'
import getRemoteControllers from '../server/api/get-remote-controllers'

export const tableData = defineStore('tableData', () =>{
	const remoteControllers: Ref<RemoteController[]> = ref([])
	const filtersState = ref({
		id: ''
	})
	const filteredRemoteControllers = computed((): RemoteController[] => {
		if (!filtersState.value.id) {
			return remoteControllers.value
		}
		return remoteControllers.value.filter((rc) => rc.id === filtersState.value.id)
	})

	async function fetchRemoteControllers() {
		// TODO: fix later переписать в запрос из стора
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-expect-error
		remoteControllers.value = await getRemoteControllers()
	}

	function whenFilterStateChange(newValue: {id: string}) {
		filtersState.value.id = newValue.id
	}



	return {
		remoteControllers,
		fetchRemoteControllers,
		whenFilterStateChange,
		filteredRemoteControllers,
	}
})
