import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from 'src/data/site';

export const GET: APIRoute = async () => {
  let posts: any[] = [];
  try {
    posts = await getCollection('blog');
  } catch {
    posts = [];
  }

  const publishedPosts = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  const items = publishedPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <link>${siteConfig.siteUrl}/blog/${post.id}/</link>
      <guid isPermaLink="true">${siteConfig.siteUrl}/blog/${post.id}/</guid>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.businessName} - London Moving Advice &amp; Guides</title>
    <description>Expert removals guidance, packing tips, and property relocation insights from Cricklewood, North West London.</description>
    <link>${siteConfig.siteUrl}/</link>
    <atom:link href="${siteConfig.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
