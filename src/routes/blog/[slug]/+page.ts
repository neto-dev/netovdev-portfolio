import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { slug: string } }) {
    try {
        const post = await import(`../../../content/blog/${params.slug}.md`);

        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`);
    }
}
