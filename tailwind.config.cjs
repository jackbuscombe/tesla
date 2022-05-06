module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'model-s': "url('./static/model-s.jpg')",
				'model-3': "url('./static/model-3.jpg')",
				'model-x': "url('./static/model-x.jpg')",
				'model-y': "url('./static/model-y.jpg')",
				'solar-panel': "url('./static/solar-panel.jpg')",
				accessories: "url('./static/accessories.jpg')"
			}
		}
	},
	plugins: []
};
