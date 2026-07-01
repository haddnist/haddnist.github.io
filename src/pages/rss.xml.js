import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const blog = (await getCollection('blog')).map((post) => ({
		...post.data,
		link: `/blog/${post.id}/`,
	}));
	const diary = (await getCollection('diary')).map((entry) => ({
		...entry.data,
		link: `/diary/${entry.id}/`,
	}));

	const items = [...blog, ...diary].sort(
		(a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
