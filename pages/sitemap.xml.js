// pages/sitemap.xml.js
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { extractLangId, extractLangPrefix } from '@/lib/utils/pageId'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async ctx => {
  let fields = []
  const siteIds = BLOG.NOTION_PAGE_ID.split(',')
  for (let index = 0; index < siteIds.length; index++) {
    const siteId = siteIds[index]
    const id = extractLangId(siteId)
    const locale = extractLangPrefix(siteId)
    // 第一个id站点默认语言
    const siteData = await getGlobalData({
      pageId: id,
      from: 'sitemap.xml'
    })
    // 修改这行，使用 BLOG.LINK 作为默认值
    const link = siteConfig('LINK', BLOG.LINK, siteData.NOTION_CONFIG)
    // 确保 link 有值
    if (!link) {
      console.warn('Warning: LINK is not configured in blog.config.js')
      continue
    }
    const localeFields = generateLocalesSitemap(link, siteData.allPages, locale)
    fields = fields.concat(localeFields)
  }

  // 缓存
  ctx.res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=59'
  )
  return getServerSideSitemap(ctx, fields)
}

function generateLocalesSitemap(link, allPages, locale) {
  // 确保 link 末尾没有斜杠
  const baseURL = link?.endsWith('/') ? link.slice(0, -1) : link
  
  // 确保 locale 正确处理
  let localePrefix = ''
  if (locale && locale.length > 0) {
    localePrefix = locale.startsWith('/') ? locale : `/${locale}`
  }
  
  const postFields =
    allPages
      ?.filter(p => p.status === BLOG.NOTION_PROPERTY_NAME.status_publish)
      ?.map(post => {
        const slugWithoutLeadingSlash = post?.slug.startsWith('/')
          ? post?.slug?.slice(1)
          : post.slug
        return {
          loc: `${baseURL}${localePrefix}/${slugWithoutLeadingSlash}`,
          lastmod: new Date(post?.publishDay).toISOString().split('T')[0],
          changefreq: 'daily',
          priority: '0.7'
        }
      }) ?? []

  return postFields
}

export default () => {}
