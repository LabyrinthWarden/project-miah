export async function load({ locals }) {
	const posts = await locals.pb.collection('posts').getList(1, 10, {
		sort: '-created'
	});

	return { posts };
}
