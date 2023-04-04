import {defineStore} from 'pinia'
import {RemoteController} from '../types/myApi'
import {Ref, ref, computed, unref} from 'vue'

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
		const res = await fetch('http://172.18.191.24:8081/getControllers')
		const data: RemoteController[] = await res.json()
		remoteControllers.value = data
		// console.log(remoteControllers.value)
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
