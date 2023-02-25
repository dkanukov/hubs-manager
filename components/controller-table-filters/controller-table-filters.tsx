import {defineComponent} from '#imports'
import styles from './styles.module.css'

export default defineComponent({
	setup() {
		return () => (
			<v-row align='center' justify='space-between'>
				<v-col cols={10}>
					<v-row >
						<v-col cols={2}>
							<v-autocomplete
								class={styles.controllerNameFilter}
								variant='outlined'
								density='compact'
								label={'Выберите пульт'}
								hide-details
								clearable
							/>
						</v-col>
						<v-col cols={2}>
							<v-autocomplete
								class={styles.controllerStatus}
								variant='outlined'
								density='compact'
								label={'Статус'}
								hide-details
								clearable
							/>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols={1}>
					<v-btn>
                        123
					</v-btn>
				</v-col>
			</v-row>
		)
	}
})
