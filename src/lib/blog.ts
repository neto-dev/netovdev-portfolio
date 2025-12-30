export async function getPosts() {
    const posts = import.meta.glob('/src/content/blog/*.md', { eager: true });

    const allPosts = Object.entries(posts).map(([path, post]: [string, any]) => {
        const slug = path.split('/').pop()?.replace('.md', '');
        return {
            ...post.metadata,
            slug,
            component: post.default
        };
    });

    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
