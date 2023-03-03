import {defineComponent, isReactive} from '#imports'
import {VTable, VIcon, VBtn} from 'vuetify/components'
import {mdiLink} from '@mdi/js'
import styles from './styles.module.css'
import {PropType, ref} from 'vue'
import {RemoteController} from '~/types/myApi'

export default defineComponent({
	props: {
		remoteControllers: {
			type: Array as PropType<RemoteController[]>,
			required: true,
		},
	},

	setup(props) {
		function handleLinkClick() {
			console.log('click')
		}

		return {
			handleLinkClick
		}
	},

	render() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment

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
							this.$props.remoteControllers.map((rc) => (
								<tr class={styles.tableRow}>
									<td class={styles.tableCell}>
										{rc.name}
										{/*@ts-expect-error TODO: починить онклик*/}
										<VBtn to={'/remote-controller'} onClick={this.handleLinkClick} class={styles.linkButton} variant={'plain'} icon={mdiLink} color={'primary'}/>
									</td>
									<td class={styles.tableCell}>
										Not yet
									</td>
									<td class={styles.tableCell}>
										Пульт
									</td>
									<td class={styles.tableCell}>
										{rc.description}
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
