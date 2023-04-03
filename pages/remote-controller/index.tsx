import {defineComponent, definePageMeta, isReactive, ref, unref, useRoute} from '#imports'
import styles from './styles.module.css'
import {tableData} from '~/store/table-data'
import {VBtn, VSelect} from 'vuetify/components'
import {mdiArrowLeft} from '@mdi/js'
import {Ref} from 'vue'
import {fabric} from 'fabric'

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

		return {
			remoteController,
			canvasRef,
		}
	},

	mounted() {

		if (!this.canvasRef || !this.remoteController) {
			return
		}

		const canvas = new fabric.Canvas('c', {
			width: 1400,
			height: 1000
		})

		let xMove = 0
		let yMove = 10
		const group = new fabric.Group([], {
			width: 1080,
			height: 600,
			fill: 'gray',
			originX: 'left'
		})

		for (const configKey in this.remoteController.config) {
			if (xMove === 11) {
				yMove += 80
				xMove = 0
			}

			const rect = new fabric.Rect({
				fill: '#D9D9D9',
				selectable: true,
				left: 100 * xMove,
				top: yMove,
				width: 50,
				height: 50,
				hoverCursor: this.remoteController.config[configKey].button_name,

			})

			canvas.add(rect)
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
					<h3>Выбранный конфиг</h3>
					<VSelect
						class={styles.configRow}
						density={'compact'}
						hideDetails={'auto'}
						items={['Default config']}
						modelValue={'Default config'}
						disabled
					/>
				</div>
				<div class={styles.scheme}>
					<canvas id='c' ref={'canvasRef'}></canvas>
				</div>
			</div>
		)
	}
})
