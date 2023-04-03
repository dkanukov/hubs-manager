import {RemoteController} from '~/types/myApi'

export const remoteControllers: RemoteController[] = [
	{
		'id': 'pos',
		'name': 'pos',
		'description': 'string',
		'config': {
			'0x7:0x4': {
				'button_name': '0x7:0x4',
				'button_readable': 'O',
				'action': {
					'camera_ip': '172.18.191.52',
					'camera_port': 8999,
					'rtsp_main': 'rtsp://172.18.191.52:554/1/h264major',
					'action': 'camera'
				}
			},
			'0x7:0x5': {
				'button_name': '0x7:0x5',
				'button_readable': 'O1',
				'action': {
					'camera_ip': '172.18.191.52',
					'camera_port': 8999,
					'rtsp_main': 'rtsp://172.18.191.52:554/1/h264major',
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x6': {
				'button_name': '0x7:0x6',
				'button_readable': 'O2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x7': {
				'button_name': '0x7:0x7',
				'button_readable': 'O3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x8': {
				'button_name': '0x7:0x8',
				'button_readable': 'O4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x9': {
				'button_name': '0x7:0x9',
				'button_readable': 'O5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'               ': {
				'button_name': '               ',
				'button_readable': 'O6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0xb': {
				'button_name': '0x7:0xb',
				'button_readable': 'O7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0xc': {
				'button_name': '0x7:0xc',
				'button_readable': 'O8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0xd': {
				'button_name': '0x7:0xd',
				'button_readable': 'O9',
				'action': {
					'preset_token': 9,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0xe': {
				'button_name': '0x7:0xe',
				'button_readable': 'O10',
				'action': {
					'preset_token': 10,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0xf': {
				'button_name': '0x7:0xf',
				'button_readable': 'O11',
				'action': {
					'preset_token': 11,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x10': {
				'button_name': '0x7:0x10',
				'button_readable': 'O12',
				'action': {
					'preset_token': 12,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x11': {
				'button_name': '0x7:0x11',
				'button_readable': 'N',
				'action': {
					'camera_ip': '172.18.191.53',
					'camera_port': 80,
					'rtsp_main': 'rtsp://172.18.191.53:554/Streaming/Channels/1',
					'action': 'camera'
				}
			},
			'0x7:0x12': {
				'button_name': '0x7:0x12',
				'button_readable': 'N1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x13': {
				'button_name': '0x7:0x13',
				'button_readable': 'N2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x14': {
				'button_name': '0x7:0x14',
				'button_readable': 'N3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x15': {
				'button_name': '0x7:0x15',
				'button_readable': 'N4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x16': {
				'button_name': '0x7:0x16',
				'button_readable': 'N5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x17': {
				'button_name': '0x7:0x17',
				'button_readable': 'N6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x18': {
				'button_name': '0x7:0x18',
				'button_readable': 'N7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x19': {
				'button_name': '0x7:0x19',
				'button_readable': 'N8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x1a': {
				'button_name': '0x7:0x1a',
				'button_readable': 'N9',
				'action': {
					'preset_token': 9,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x1b': {
				'button_name': '0x7:0x1b',
				'button_readable': 'N10',
				'action': {
					'preset_token': 10,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x1c': {
				'button_name': '0x7:0x1c',
				'button_readable': 'N11',
				'action': {
					'preset_token': 11,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x1d': {
				'button_name': '0x7:0x1d',
				'button_readable': 'N12',
				'action': {
					'preset_token': 12,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x1e': {
				'button_name': '0x7:0x1e',
				'button_readable': 'M',
				'action': {
					'camera_ip': '172.18.191.54',
					'camera_port': 80,
					'rtsp_main': 'rtsp://172.18.191.54:554/Streaming/Channels/1',
					'action': 'camera'
				}
			},
			'0x7:0x1f': {
				'button_name': '0x7:0x1f',
				'button_readable': 'M1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x20': {
				'button_name': '0x7:0x20',
				'button_readable': 'M2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x21': {
				'button_name': '0x7:0x21',
				'button_readable': 'M3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x22': {
				'button_name': '0x7:0x22',
				'button_readable': 'M4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x23': {
				'button_name': '0x7:0x23',
				'button_readable': 'M5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x24': {
				'button_name': '0x7:0x24',
				'button_readable': 'M6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x25': {
				'button_name': '0x7:0x25',
				'button_readable': 'M7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x26': {
				'button_name': '0x7:0x26',
				'button_readable': 'M8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x27': {
				'button_name': '0x7:0x27',
				'button_readable': 'M9',
				'action': {
					'preset_token': 9,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x2f': {
				'button_name': '0x7:0x2f',
				'button_readable': 'M10',
				'action': {
					'preset_token': 10,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x30': {
				'button_name': '0x7:0x30',
				'button_readable': 'M11',
				'action': {
					'preset_token': 11,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x31': {
				'button_name': '0x7:0x31',
				'button_readable': 'M12',
				'action': {
					'preset_token': 12,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x33': {
				'button_name': '0x7:0x33',
				'button_readable': 'P',
				'action': {
					'camera_ip': '172.18.191.55',
					'camera_port': 80,
					'rtsp_main': 'rtsp://172.18.191.55:554/Streaming/Channels/1',
					'action': 'camera'
				}
			},
			'0x7:0x34': {
				'button_name': '0x7:0x34',
				'button_readable': 'P1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x35': {
				'button_name': '0x7:0x35',
				'button_readable': 'P2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x36': {
				'button_name': '0x7:0x36',
				'button_readable': 'P3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x37': {
				'button_name': '0x7:0x37',
				'button_readable': 'P4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x38': {
				'button_name': '0x7:0x38',
				'button_readable': 'P5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x3a': {
				'button_name': '0x7:0x3a',
				'button_readable': 'P6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x3b': {
				'button_name': '0x7:0x3b',
				'button_readable': 'P7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x3c': {
				'button_name': '0x7:0x3c',
				'button_readable': 'P8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x3d': {
				'button_name': '0x7:0x3d',
				'button_readable': 'P9',
				'action': {
					'preset_token': 9,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x3e': {
				'button_name': '0x7:0x3e',
				'button_readable': 'P10',
				'action': {
					'preset_token': 10,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x3f': {
				'button_name': '0x7:0x3f',
				'button_readable': 'P11',
				'action': {
					'preset_token': 11,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x41': {
				'button_name': '0x7:0x41',
				'button_readable': 'L',
				'action': {
					'camera_ip': '172.18.191.192',
					'camera_port': 2000,
					'rtsp_main': 'rtsp://172.18.191.192:554/live/av0',
					'action': 'camera'
				}
			},
			'0x7:0x42': {
				'button_name': '0x7:0x42',
				'button_readable': 'L1',
				'action': {
					'camera_ip': '172.18.191.193',
					'camera_port': 2000,
					'rtsp_main': 'rtsp://172.18.191.193:554/live/av0',
					'action': 'camera'
				}
			},
			'0x7:0x43': {
				'button_name': '0x7:0x43',
				'button_readable': 'L2',
				'action': {
					'camera_ip': '172.18.191.194',
					'camera_port': 80,
					'rtsp_main': 'rtsp://172.18.191.195:554/stream/main',
					'action': 'camera'
				}
			},
			'0x7:0x44': {
				'button_name': '0x7:0x44',
				'button_readable': 'L3',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x7:0x45': {
				'button_name': '0x7:0x45',
				'button_readable': 'L4',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x70:0x4': {
				'button_name': '0x70:0x4',
				'button_readable': 'L5',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
		}
	},
	{
		'id': 'pts-midi',
		'name': 'pts-midi',
		'description': 'string',
		'config': {
			'32': {
				'button_name': '32',
				'button_readable': 'Rec',
				'action': {
					'focus': 'manual-',
					'action': 'obs_record'
				}
			},
			'33': {
				'button_name': '33',
				'button_readable': 'STR',
				'action': {
					'focus': 'manual+',
					'action': 'obs_stream'
				}
			},
			'67': {
				'button_name': '67',
				'button_readable': '1 PGM',
				'action': {
					'obs_scene_num': 1,
					'action': 'obs_set_program_scene'
				}
			},
			'68': {
				'button_name': '68',
				'button_readable': '2 PGM',
				'action': {
					'obs_scene_num': 2,
					'action': 'obs_set_program_scene'
				}
			},
			'69': {
				'button_name': '69',
				'button_readable': '3 PGM',
				'action': {
					'obs_scene_num': 3,
					'action': 'obs_set_program_scene'
				}
			},
			'70': {
				'button_name': '70',
				'button_readable': '4 PGM',
				'action': {
					'obs_scene_num': 4,
					'action': 'obs_set_program_scene'
				}
			},
			'71': {
				'button_name': '71',
				'button_readable': '5 PGM',
				'action': {
					'obs_scene_num': 5,
					'action': 'obs_set_program_scene'
				}
			},
			'72': {
				'button_name': '72',
				'button_readable': '6 PGM',
				'action': {
					'obs_scene_num': 6,
					'action': 'obs_set_program_scene'
				}
			},
			'73': {
				'button_name': '73',
				'button_readable': '7 PGM',
				'action': {
					'obs_scene_num': 7,
					'action': 'obs_set_program_scene'
				}
			},
			'74': {
				'button_name': '74',
				'button_readable': '8 PGM',
				'action': {
					'obs_scene_num': 8,
					'action': 'obs_set_program_scene'
				}
			},
			'80': {
				'button_name': '80',
				'button_readable': '1 PVW',
				'action': {
					'obs_scene_num': 1,
					'action': 'obs_set_preview_scene'
				}
			},
			'81': {
				'button_name': '81',
				'button_readable': '2 PVW',
				'action': {
					'obs_scene_num': 2,
					'action': 'obs_set_preview_scene'
				}
			},
			'82': {
				'button_name': '82',
				'button_readable': '3 PVW',
				'action': {
					'obs_scene_num': 3,
					'action': 'obs_set_preview_scene'
				}
			},
			'83': {
				'button_name': '83',
				'button_readable': '4 PVW',
				'action': {
					'obs_scene_num': 4,
					'action': 'obs_set_preview_scene'
				}
			},
			'84': {
				'button_name': '84',
				'button_readable': '5 PVW',
				'action': {
					'obs_scene_num': 5,
					'action': 'obs_set_preview_scene'
				}
			},
			'85': {
				'button_name': '85',
				'button_readable': '6 PVW',
				'action': {
					'obs_scene_num': 6,
					'action': 'obs_set_preview_scene'
				}
			},
			'86': {
				'button_name': '86',
				'button_readable': '7 PVW',
				'action': {
					'obs_scene_num': 7,
					'action': 'obs_set_preview_scene'
				}
			},
			'87': {
				'button_name': '87',
				'button_readable': '8 PVW',
				'action': {
					'obs_scene_num': 8,
					'action': 'obs_set_preview_scene'
				}
			},
			'98': {
				'button_name': '98',
				'button_readable': 'TAKE',
				'action': {
					'obs_transition_name': 'Fade',
					'obs_transition_duration': 250,
					'action': 'obs_set_transition_type'
				}
			},
			'99': {
				'button_name': '99',
				'button_readable': 'F1',
				'action': {
					'camera_ip': '192.168.1.12',
					'camera_port': 2000,
					'rtsp_main': 'rtsp://192.168.1.13:554/stream1',
					'action': 'camera'
				}
			},
			'100': {
				'button_name': '100',
				'button_readable': 'F3',
				'action': {
					'camera_ip': '172.18.191.192',
					'camera_port': 2000,
					'rtsp_main': 'rtsp://172.18.191.192:554/live/av0',
					'action': 'camera'
				}
			},
			'101': {
				'button_name': '101',
				'button_readable': 'F2',
				'action': {
					'camera_ip': '192.168.1.13',
					'camera_port': 81,
					'rtsp_main': 'rtsp://192.168.1.14:554/stream1',
					'action': 'camera'
				}
			},
			'102': {
				'button_name': '102',
				'button_readable': 'F4',
				'action': {
					'camera_ip': '172.18.191.193',
					'camera_port': 2000,
					'rtsp_main': 'rtsp://172.18.191.193:554/live/av0',
					'action': 'camera'
				}
			}
		}
	},
	{
		'id': '12buttons',
		'name': '12buttons',
		'description': 'string',
		'config': {
			'0x1:0x5': {
				'button_name': '0x1:0x5',
				'button_readable': '1',
				'action': {
					'camera_ip': '172.18.191.52',
					'camera_port': 8999,
					'rtsp_main': 'rtsp://172.18.191.52:554/1/h264major',
					'action': 'camera'
				}
			},
			'0x1:0x3': {
				'button_name': '0x1:0x3',
				'button_readable': '2',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x23': {
				'button_name': '0x1:0x23',
				'button_readable': '3',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x25': {
				'button_name': '0x1:0x25',
				'button_readable': '4',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x7': {
				'button_name': '0x1:0x7',
				'button_readable': '5',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x11': {
				'button_name': '0x1:0x11',
				'button_readable': '6',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x33': {
				'button_name': '0x1:0x33',
				'button_readable': '7',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x6': {
				'button_name': '0x1:0x6',
				'button_readable': '8',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x37': {
				'button_name': '0x1:0x37',
				'button_readable': '9',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x53': {
				'button_name': '0x1:0x53',
				'button_readable': '10',
				'action': {
					'preset_token': 9,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x36': {
				'button_name': '0x1:0x36',
				'button_readable': '11',
				'action': {
					'preset_token': 10,
					'action': 'goto_preset_for_camera'
				}
			},
			'0x1:0x17': {
				'button_name': '0x1:0x17',
				'button_readable': '12',
				'action': {
					'preset_token': 11,
					'action': 'goto_preset_for_camera'
				}
			}
		}
	},
	{
		'id': 'akaii',
		'name': 'akai',
		'description': 'akai midi',
		'config': {
			'31': {
				'button_name': '31',
				'button_readable': 'Auto_F',
				'action': {
					'focus': 'auto',
					'action': 'focus'
				}
			},
			'34': {
				'button_name': '34',
				'button_readable': 'Z_out',
				'action': {
					'zoom': 'zoom-',
					'action': 'zoom'
				}
			},
			'35': {
				'button_name': '35',
				'button_readable': 'Z_in',
				'action': {
					'zoom': 'zoom+',
					'action': 'zoom'
				}
			},
			'48': {
				'button_name': '48',
				'button_readable': 'Stinger_1',
				'action': {
					'obs_transition_name': 'Stinger 1',
					'obs_transition_duration': 4290,
					'action': 'obs_transition'
				}
			},
			'49': {
				'button_name': '49',
				'button_readable': 'Stinger_2',
				'action': {
					'obs_transition_name': 'Stinger 2',
					'obs_transition_duration': 2020,
					'action': 'obs_transition'
				}
			},
			'50': {
				'button_name': '50',
				'button_readable': 'METRONOME',
				'action': {
					'obs_transition_name': 'Fade',
					'obs_transition_duration': 350,
					'action': 'obs_transition'
				}
			},
			'54': {
				'button_name': '54',
				'button_readable': '1_1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'55': {
				'button_name': '55',
				'button_readable': '1_2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'56': {
				'button_name': '56',
				'button_readable': '1_3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'57': {
				'button_name': '57',
				'button_readable': '1_4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'58': {
				'button_name': '58',
				'button_readable': '1_5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'59': {
				'button_name': '59',
				'button_readable': '1_6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'60': {
				'button_name': '60',
				'button_readable': '1_7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'61': {
				'button_name': '61',
				'button_readable': '1_8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'70': {
				'button_name': '70',
				'button_readable': '2_1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'71': {
				'button_name': '71',
				'button_readable': '2_2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'72': {
				'button_name': '72',
				'button_readable': '2_3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'73': {
				'button_name': '73',
				'button_readable': '2_4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'74': {
				'button_name': '74',
				'button_readable': '2_5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'75': {
				'button_name': '75',
				'button_readable': '2_6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'76': {
				'button_name': '76',
				'button_readable': '2_7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'77': {
				'button_name': '77',
				'button_readable': '2_8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'86': {
				'button_name': '86',
				'button_readable': '3_1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'87': {
				'button_name': '87',
				'button_readable': '3_2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'88': {
				'button_name': '88',
				'button_readable': '3_3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'89': {
				'button_name': '89',
				'button_readable': '3_4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'90': {
				'button_name': '90',
				'button_readable': '3_5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'91': {
				'button_name': '91',
				'button_readable': '3_6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'92': {
				'button_name': '92',
				'button_readable': '3_7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'93': {
				'button_name': '93',
				'button_readable': '3_8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'94': {
				'button_name': '94',
				'button_readable': '3_9',
				'action': {
					'obs_scene_num': 1,
					'action': 'obs_set_program_scene'
				}
			},
			'95': {
				'button_name': '95',
				'button_readable': '3_10',
				'action': {
					'obs_scene_num': 2,
					'action': 'obs_set_program_scene'
				}
			},
			'96': {
				'button_name': '96',
				'button_readable': '3_11',
				'action': {
					'obs_scene_num': 3,
					'action': 'obs_set_program_scene'
				}
			},
			'97': {
				'button_name': '97',
				'button_readable': '3_12',
				'action': {
					'obs_scene_num': 4,
					'action': 'obs_set_program_scene'
				}
			},
			'98': {
				'button_name': '98',
				'button_readable': '3_13',
				'action': {
					'obs_scene_num': 5,
					'action': 'obs_set_program_scene'
				}
			},
			'99': {
				'button_name': '99',
				'button_readable': '3_14',
				'action': {
					'obs_scene_num': 6,
					'action': 'obs_set_program_scene'
				}
			},
			'100': {
				'button_name': '100',
				'button_readable': '3_15',
				'action': {
					'obs_scene_num': 7,
					'action': 'obs_set_program_scene'
				}
			},
			'101': {
				'button_name': '101',
				'button_readable': '3_16',
				'action': {
					'obs_scene_num': 8,
					'action': 'obs_set_program_scene'
				}
			},
			'102': {
				'button_name': '102',
				'button_readable': '4_1',
				'action': {
					'preset_token': 1,
					'action': 'goto_preset_for_camera'
				}
			},
			'103': {
				'button_name': '103',
				'button_readable': '4_2',
				'action': {
					'preset_token': 2,
					'action': 'goto_preset_for_camera'
				}
			},
			'104': {
				'button_name': '104',
				'button_readable': '4_3',
				'action': {
					'preset_token': 3,
					'action': 'goto_preset_for_camera'
				}
			},
			'105': {
				'button_name': '105',
				'button_readable': '4_4',
				'action': {
					'preset_token': 4,
					'action': 'goto_preset_for_camera'
				}
			},
			'106': {
				'button_name': '106',
				'button_readable': '4_5',
				'action': {
					'preset_token': 5,
					'action': 'goto_preset_for_camera'
				}
			},
			'107': {
				'button_name': '107',
				'button_readable': '4_6',
				'action': {
					'preset_token': 6,
					'action': 'goto_preset_for_camera'
				}
			},
			'108': {
				'button_name': '108',
				'button_readable': '4_7',
				'action': {
					'preset_token': 7,
					'action': 'goto_preset_for_camera'
				}
			},
			'109': {
				'button_name': '109',
				'button_readable': '4_8',
				'action': {
					'preset_token': 8,
					'action': 'goto_preset_for_camera'
				}
			},
			'110': {
				'button_name': '110',
				'button_readable': '4_9',
				'action': {
					'obs_scene_num': 1,
					'action': 'obs_set_preview_scene'
				}
			},
			'111': {
				'button_name': '111',
				'button_readable': '4_10',
				'action': {
					'obs_scene_num': 2,
					'action': 'obs_set_preview_scene'
				}
			},
			'112': {
				'button_name': '112',
				'button_readable': '4_11',
				'action': {
					'obs_scene_num': 3,
					'action': 'obs_set_preview_scene'
				}
			},
			'113': {
				'button_name': '113',
				'button_readable': '4_12',
				'action': {
					'obs_scene_num': 4,
					'action': 'obs_set_preview_scene'
				}
			},
			'114': {
				'button_name': '114',
				'button_readable': '4_13',
				'action': {
					'obs_scene_num': 5,
					'action': 'obs_set_preview_scene'
				}
			},
			'115': {
				'button_name': '115',
				'button_readable': '4_14',
				'action': {
					'obs_scene_num': 6,
					'action': 'obs_set_preview_scene'
				}
			},
			'116': {
				'button_name': '116',
				'button_readable': '4_15',
				'action': {
					'obs_scene_num': 7,
					'action': 'obs_set_preview_scene'
				}
			},
			'117': {
				'button_name': '117',
				'button_readable': '4_16',
				'action': {
					'obs_scene_num': 8,
					'action': 'obs_set_preview_scene'
				}
			}
		}
	},
	{
		'id': 'string',
		'name': 'string',
		'description': 'string',
		'config': {
			'31': {
				'button_name': '31',
				'button_readable': 'Auto_F',
				'action': {
					'focus': 'auto',
					'action': 'focus'
				}
			}
		}
	}
]
