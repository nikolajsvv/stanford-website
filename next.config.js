/** @type {import('next').NextConfig} */

module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.module.rules.push({
				test: /\.mp3$/,
				use: 'file-loader',
			});
		}

		return config;
	},
};
