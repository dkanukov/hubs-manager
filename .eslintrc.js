module.exports = {
	'globals': {
		'__dirname': true
	},
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
	],
	'overrides': [],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': true,
		'tsconfigRootDir': __dirname,
	},
	'plugins': [
		'vue',
		'@typescript-eslint',
	],
	root: true,
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'@typescript-eslint/no-floating-promises': 'warn',
		'ident': 'off',
	}
}
