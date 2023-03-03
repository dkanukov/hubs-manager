import {defineComponent, isReactive} from '#imports'
import {VTable} from 'vuetify/components'
import styles from './styles.module.css'
import {PropType} from 'vue'
import {RemoteController} from '~/types/myApi'

export default defineComponent({
	props: {
		remoteControllers: {
			type: Array as PropType<RemoteController[]>,
			required: true,
		}
	},

	setup(props) {
		return {
			rc: props.remoteControllers
		}
	},

	render() {
		return (
			<div>
				<VTable>
					<thead>
						<th class={styles.tableHeaderCell}>
							Название
						</th>
						<th class={styles.tableHeaderCell}>
							Состояние
						</th>
						<th class={styles.tableHeaderCell}>
							Тип
						</th>
						<th class={styles.tableHeaderCell}>
							Описание
						</th>
					</thead>
					<tbody>
						{
							this.rc.map((rc) => (
								<tr>
									<td class={styles.tableCell}>
										{rc.name}
									</td>
									<td class={styles.tableCell}>
										Not yet
									</td>
									<td class={styles.tableCell}>
										{rc.description}
									</td>
									<td class={styles.tableCell}>
										Пульт
									</td>
								</tr>
							))
						}
					</tbody>
				</VTable>
			</div>
		)
	}
})
