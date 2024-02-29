import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const name = data.get('username');
		const password = data.get('password');

		const resp = await fetch('https://7e71-154-80-33-134.ngrok-free.app/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				name
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		console.log(await resp.json());
	},

	login: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		const resp = await fetch('https://7e71-154-80-33-134.ngrok-free.app/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		console.log(await resp.json());
	}
};
