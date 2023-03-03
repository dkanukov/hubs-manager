import {defineComponent, isReactive, ref, watch} from '#imports'
import {VAutocomplete, VBtn} from 'vuetify/components'
import styles from './styles.module.css'
import {PropType, Ref} from 'vue'
import {RemoteController} from '~/types/myApi'
import {ca} from 'vuetify/locale';

export default defineComponent({
	props: {
		remoteControllers: {
			type: Array as PropType<RemoteController[]>,
			required: true
		},
		whenFilterStateChange: {
			type: Function as PropType<(newValue: {id: string}) => void>,
			required: true
		}
	},

	setup(props) {
		const name = ref({
			name: '',
			id: ''
		})
		const remoteControllersNames: Ref<{ name: string, id: string }[]> = ref(props.remoteControllers.map((rc) => {
			return {
				name: rc.name,
				id: rc.id
			}
		}))

		function handleNameInputChange(value: {name: string, id: string}) {
			name.value = value
			props.whenFilterStateChange({id: value.id})
		}

		return {
			name,
			remoteControllersNames,
			handleNameInputChange,
		}
	},

	render () {
		return (
			<div class={styles.filtersRow}>
				<div class={styles.filterRowGroup}>
					<VAutocomplete
						class={styles.remoteControllerInput}
						label={'Название пульта'}
						variant={'outlined'}
						density={'compact'}
						returnObject
						modelValue={this.name}
						onUpdate:modelValue={this.handleNameInputChange}
						items={this.remoteControllersNames}
						itemTitle={'name'}
						itemValue={'id'}
					/>

					{/*<VAutocomplete*/}
					{/*	class={styles.remoteControllerInput}*/}
					{/*	label={'Состояние'}*/}
					{/*	variant={'outlined'}*/}
					{/*	density={'compact'}*/}
					{/*	modelValue={this.status ?? ''}*/}
					{/*/>*/}
					{/*<VAutocomplete*/}
					{/*	class={styles.remoteControllerInput}*/}
					{/*	label={'Тип'}*/}
					{/*	variant={'outlined'}*/}
					{/*	density={'compact'}*/}
					{/*	modelValue={this.type ?? ''}*/}
					{/*/>*/}
				</div>

				<VBtn
					variant='outlined'
					color='primary'
					disabled
				>
					Добавить
				</VBtn>
			</div>
		)
	}
})
