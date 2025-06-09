import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const page = await import('/src/content/pages/contact.md');

		return {
			content: page.default,
			meta: page.metadata
		};
	} catch (e) {
		error(404, `Could not find About Page`);
	}
}
