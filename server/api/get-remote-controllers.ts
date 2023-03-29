import {defineEventHandler} from 'h3'
import {RemoteController} from '~/types/myApi'
import {remoteControllers} from '~/server/mocks/remote-controllers'

export default defineEventHandler((): Promise<RemoteController[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(remoteControllers)
		}, 1000)
	})
})
