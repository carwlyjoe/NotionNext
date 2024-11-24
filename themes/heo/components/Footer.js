import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 页脚
 * @returns
 */
const Footer = () => {
  // 从配置中获取各个区块的链接数据
  const friendLinks = siteConfig('FRIEND_LINKS', [
    { name: '知乎', url: 'https://tinyurl.com/2cnu6jtx' },
    { name: 'B站', url: 'https://b23.tv/BCBtccP' },
    { name: '公众号', url: 'https://tinyurl.com/4488k474' },
  ]);

  const supportLinks = siteConfig('SUPPORT_LINKS', [
    { name: '咨询我', url: 'https://www.zhihu.com/consult/people/1418602787144404992' },
    { name: '为爱发电', url: 'https://tinyurl.com/5f6v8ecr' },
    { name: '加入社群', url: 'https://tinyurl.com/joinqqgroup'},
  ]);

  const contactLinks = siteConfig('CONTACT_LINKS', [
    { name: 'QQ交流', url: 'https://qm.qq.com/q/T5vrBpg5Ko', icon: 'fab fa-qq' },
    { name: '微信咨询', url: 'https://u.wechat.com/MEkHScdZnnzMZ_uUrRtF4f0?s=1', icon: 'fab fa-weixin' },
  ]);

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      <div className='max-w-7xl mx-auto'> 
        <div className='w-full flex flex-wrap justify-between px-6 py-8 gap-8'>
        <div className='w-full h-[300px] flex flex-wrap justify-between px-6 py-8 gap-8'> {/* 添加 h-[320px] */}

          {/* 作者信息区块 */}
          <div className='w-full md:w-1/3'>
            <div className='flex items-center space-x-3'>
              <img 
                src='/favicon.ico'
                alt='作者头像'
                className='w-12 h-12 rounded-full object-cover'
              />
              <div className='flex flex-col items-start'>
                <a 
                  href='https://www.aiexplorer.rest/about'
                  className='font-bold text-lg text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400'
                >
                  {siteConfig('AUTHOR_NAME', '文雅的疯狂')}
                </a>
                <div className='text-gray-500 dark:text-gray-400 text-sm'>
                  {siteConfig('DESCRIPTION')}
                </div>
              </div>
            </div>
          </div>

          {/* 联系我 */}
          <div className='w-full md:w-1/6 text-left'>
            <h2 className='text-xl font-bold mb-4 text-black dark:text-white'>联系我</h2>
            <div className='space-y-2'>
              <a href={`mailto:${siteConfig('CONTACT_EMAIL')}`} className='block hover:text-blue-500'>
                <i className='fas fa-envelope mr-2' />
                邮件联系
              </a>
              {contactLinks.map((link, index) => (
                <a key={index} href={link.url} className='block hover:text-blue-500'>
                  <i className={`${link.icon} mr-2`} />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* 友情链接 */}
          <div className='w-full md:w-1/6 text-left'> 
            <h2 className='text-xl font-bold mb-4 text-black dark:text-white'>我的社媒</h2>
            <div className='space-y-2'>
              {friendLinks.map((link, index) => (
                <a key={index} href={link.url} className='block hover:text-blue-500'>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* 支持 */}
          <div className='w-full md:w-1/6 text-left'> 
            <h2 className='text-xl font-bold mb-4 text-black dark:text-white'>支持</h2>
            <div className='space-y-2'>
              {supportLinks.map((link, index) => (
                <a key={index} href={link.url} className='block hover:text-blue-500'>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* 底部版权信息 */}
      <div className='w-full flex flex-col items-center justify-center px-6 py-4 border-t dark:border-gray-800'>
        <div className='flex items-center justify-center'>
          <CopyRightDate />
          {siteConfig('BEI_AN') && (
            <a href='https://beian.miit.gov.cn/' className='ml-2'>
              <i className='fas fa-shield-alt mr-1' />
              {siteConfig('BEI_AN')}
            </a>
          )}
        </div>
        <div className='flex items-center justify-center'>
          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye mr-1' />
            <span className='busuanzi_value_site_pv' />
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users mr-1' />
            <span className='busuanzi_value_site_uv' />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
