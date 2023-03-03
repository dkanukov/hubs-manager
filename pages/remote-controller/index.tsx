import {defineComponent, definePageMeta, ref, useRoute} from '#imports'
import styles from './styles.module.css'
import {tableData} from '~/store/table-data'
import {VIcon, VBtn, VSelect} from 'vuetify/components'
import {mdiArrowLeft} from '@mdi/js'
import {Ref} from 'vue'

export default defineComponent({
	setup() {
		definePageMeta({
			layout: 'empty'
		})
		// TODO: потом использовать для запроса в апи
		const id = useRoute().query.id

		const tableDataStore = tableData()
		const remoteController = ref(tableDataStore.remoteControllers.find((rc) => rc.id === id))
		const canvasRef: Ref<HTMLCanvasElement | null> = ref(null)

		console.log(remoteController.value)

		return {
			remoteController,
			canvasRef,
		}
	},

	mounted() {
		if (!this.canvasRef || !this.remoteController) {
			return
		}
		this.canvasRef.width=1400
		this.canvasRef.height = 1000
		const ctx = this.canvasRef.getContext('2d')
		if (!ctx) {
			return
		}
		ctx.fillStyle = 'black'

		let xMove = 0
		let yMove = 10
		for (const configKey in this.remoteController.config) {
			if (xMove === 11) {
				yMove += 80
				xMove = 0
			}
			ctx.fillRect(100 * xMove, yMove, 50, 50)
			xMove++
		}
	},

	render() {
		return (
			<div>
				<div class={styles.headerRow}>
					<VBtn to={'/'} variant={'plain'} icon={mdiArrowLeft}/>
					<h2>{this.remoteController?.name}</h2>
				</div>
				<div class={styles.configRow}>
					<p>Выбранный конфиг</p>
					<VSelect
						class={styles.configRow}
						density={'compact'}
						hideDetails={'auto'}
						items={['Default config']}
						modelValue={'Default config'}
						disabled
					/>
				</div>
				<canvas class={styles.scheme} ref={'canvasRef'}></canvas>
			</div>
		)
	}
})
