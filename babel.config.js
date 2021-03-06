// eslint-disable-next-line no-undef
module.exports = function (api) {
	api.cache(true)

	const presets = [
		[
			'@babel/preset-env',
			{
				targets: {
					esmodules: true,
				},
			},
		],
		'@babel/preset-typescript',
		'@babel/preset-react',
	]

	return {
		presets,
	}
}
