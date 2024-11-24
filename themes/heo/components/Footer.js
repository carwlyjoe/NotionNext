import { useState } from 'react';
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
  // 添加状态控制下拉框的展开/收起
  const [expandedSection, setExpandedSection] = useState(null);

  // 处理下拉框点击
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // 渲染移动端下拉区块
  const MobileDropdown = ({ title, children }) => {
    const isExpanded = expandedSection === title;
    
    return (
      <div className='w-full md:hidden border-b border-gray-700'>
        <button 
          onClick={() => toggleSection(title)}
          className='w-full py-4 px-6 flex justify-between items-center text-left'
        >
          <h2 className='text-xl font-bold text-black dark:text-white'>{title}</h2>
          <i className={`fas fa-chevron-down transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        <div className={`px-6 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48 py-4' : 'max-h-0'}`}>
          {children}
        </div>
      </div>
    );
  };

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
        {/* 桌面端布局 */}
        <div className='hidden md:flex w-full min-h-[300px] flex-wrap justify-between px-6 py-8 gap-8'>
          {/* 作者信息区块 - 桌面端 */}
          <div className='w-1/3 text-left'>
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
          <div className='w-1/6 text-left'>
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

          {/* 我的社媒 */}
          <div className='w-1/6 text-left'>
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
          <div className='w-1/6 text-left'>
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

        {/* 移动端布局 */}
        <div className='md:hidden'>
          {/* 移动端下拉菜单 */}
          <MobileDropdown title="联系我">
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
          </MobileDropdown>

          <MobileDropdown title="我的社媒">
            <div className='space-y-2'>
              {friendLinks.map((link, index) => (
                <a key={index} href={link.url} className='block hover:text-blue-500'>
                  {link.name}
                </a>
              ))}
            </div>
          </MobileDropdown>

          <MobileDropdown title="支持">
            <div className='space-y-2'>
              {supportLinks.map((link, index) => (
                <a key={index} href={link.url} className='block hover:text-blue-500'>
                  {link.name}
                </a>
              ))}
            </div>
          </MobileDropdown>

          {/* 作者信息区块 - 移动端 */}
          <div className='w-full px-6 py-8 border-b border-gray-700'>
            <div className='flex items-center justify-center space-x-3'>
              <img 
                src='/favicon.ico'
                alt='作者头像'
                className='w-12 h-12 rounded-full object-cover'
              />
              <div className='flex flex-col items-center'>
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
