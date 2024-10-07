import fs from 'fs'
import BLOG from '@/blog.config'

export async function generateSitemapXml({ allPages }) {
  const urls = [{
    loc: `${BLOG.LINK}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily'
  }, {
    loc: `${BLOG.LINK}/archive`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily'
  }, {
    loc: `${BLOG.LINK}/category`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily'
  }, {
    loc: `${BLOG.LINK}/tag`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily'
  }]

  // 循环页面生成
  allPages?.forEach(post => {
    const slugWithoutLeadingSlash = post?.slug?.startsWith('/') ? post?.slug?.slice(1) : post.slug
    const rewrittenSlug = rewriteUrl(slugWithoutLeadingSlash);  // 对slug进行重写
    urls.push({
      loc: `${BLOG.LINK}/${rewrittenSlug}`,
      lastmod: new Date(post?.publishDay).toISOString().split('T')[0],
      changefreq: 'daily'
    })
  })

  const xml = createSitemapXml(urls)
  try {
    fs.writeFileSync('sitemap.xml', xml)
    // fs.writeFileSync('./public/sitemap.xml', xml)
  } catch (error) {
    console.warn('无法写入文件', error)
  }
}

/**
 * 生成站点地图
 * @param {*} urls
 * @returns
 */
function createSitemapXml(urls) {
  let urlsXml = ''
  urls.forEach(u => {
    urlsXml += `<url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    </url>
    `
  })

  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urlsXml}
    </urlset>
    `
}

/**
 * 重写URL，将查询参数替换为路径参数
 * @param {string} slug
 * @returns {string}
 */
function rewriteUrl(slug) {
  // 假设你的 URL 原本是 '/order/create?plan_id=123&product_type=0&remark=test'
  // 现在将其重写为 '/order/create/123/0/test'
  
  // 检查是否有查询参数，如果有就进行替换
  const url = new URL(`${BLOG.LINK}/${slug}`, 'https://dummybase.com');
  if (url.searchParams.has('plan_id')) {
    const planId = url.searchParams.get('plan_id');
    const productType = url.searchParams.get('product_type');
    const remark = url.searchParams.get('remark');
    
    // 重写 URL，移除查询参数
    return `order/create/${planId}/${productType}/${remark}`;
  }
  
  // 如果没有查询参数，保持原始 slug
  return slug;
}
