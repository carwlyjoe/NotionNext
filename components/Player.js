import { siteConfig } from '@/lib/config';
import { loadExternalResource } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

/**
 * 音乐播放器组件
 * @returns JSX
 */
const Player = () => {
  const [player, setPlayer] = useState();
  const [isPlaying, setIsPlaying] = useState(false); // 添加新的状态
  const ref = useRef(null);

  const lrcType = JSON.parse(siteConfig('MUSIC_PLAYER_LRC_TYPE'));
  const playerVisible = JSON.parse(siteConfig('MUSIC_PLAYER_VISIBLE'));
  const autoPlay = JSON.parse(siteConfig('MUSIC_PLAYER_AUTO_PLAY'));
  const meting = JSON.parse(siteConfig('MUSIC_PLAYER_METING'));
  const order = siteConfig('MUSIC_PLAYER_ORDER');
  const audio = siteConfig('MUSIC_PLAYER_AUDIO_LIST');

  const musicPlayerEnable = siteConfig('MUSIC_PLAYER');
  const musicPlayerCDN = siteConfig('MUSIC_PLAYER_CDN_URL');
  const musicMetingEnable = siteConfig('MUSIC_PLAYER_METING');
  const musicMetingCDNUrl = siteConfig(
    'MUSIC_PLAYER_METING_CDN_URL',
    'https://cdnjs.cloudflare.com/ajax/libs/meting/2.0.1/Meting.min.js'
  );

  /**
   * 初始化音乐播放器
   */
  const initMusicPlayer = async () => {
    if (!musicPlayerEnable) return;
  
    try {
      // 加载 APlayer JS 资源
      await loadExternalResource(musicPlayerCDN, 'js');
    } catch (error) {
      console.error('音乐组件加载失败', error);
    }
  
    if (musicMetingEnable) {
      await loadExternalResource(musicMetingCDNUrl, 'js');
    }
  
    if (!meting && window.APlayer) {
      // 添加全局样式
      const style = document.createElement('style');
      style.textContent = `
        .aplayer-lrc-current {
          color: #4CAF50 !important;
          font-weight: bold !important;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) !important;
          font-size: 25px !important;
        }
      `;
      document.head.appendChild(style);
  
      const newPlayer = new window.APlayer({
        container: ref.current,
        fixed: true,
        lrcType: lrcType,
        autoplay: autoPlay,
        order: order,
        audio: audio,
      });
  
      // 监听播放状态变化
      newPlayer.on('play', () => {
        setIsPlaying(true);
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        if (lrcContents) {
          lrcContents.style.visibility = 'visible';
          lrcContents.style.opacity = '1';
        }
      });
  
      newPlayer.on('pause', () => {
        setIsPlaying(false);
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        if (lrcContents) {
          lrcContents.style.visibility = 'hidden';
          lrcContents.style.opacity = '0';
        }
      });
  
      // 设置初始歌词样式，只在加载时执行一次
      newPlayer.on('loadeddata', () => {
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        if (lrcContents) {
          // 基础样式设置
          lrcContents.style.fontSize = '30px';
          lrcContents.style.color = 'rgb(255, 215, 0)';
          lrcContents.style.textAlign = 'center';
          lrcContents.style.lineHeight = '1.8';
          lrcContents.style.maxHeight = '400px';
          lrcContents.style.overflowY = 'auto';
          lrcContents.style.padding = '10px';
          
          // 动画和显示控制
          lrcContents.style.transition = 'opacity 0.3s ease-in-out';
          lrcContents.style.visibility = isPlaying ? 'visible' : 'hidden';
          lrcContents.style.opacity = isPlaying ? '1' : '0';
        }
      });
  
      // 只监听滚动高度更新
      newPlayer.on('timeupdate', () => {
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        if (lrcContents) {
          lrcContents.style.maxHeight = `${lrcContents.scrollHeight}px`;
        }
      });
  
      setPlayer(newPlayer);
    }
  };
  
  

  useEffect(() => {
    initMusicPlayer();
    return () => setPlayer(undefined);
  }, []);

  return (
    <div className={playerVisible ? 'visible' : 'invisible'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css"
      />
      {meting ? (
        <meting-js
          fixed="true"
          type="playlist"
          preload="auto"
          lrc-type={siteConfig('MUSIC_PLAYER_METING_LRC_TYPE')}
          api={siteConfig(
            'MUSIC_PLAYER_METING_API',
            'https://api.i-meto.com/meting/api'
          )}
          autoplay={autoPlay}
          order={siteConfig('MUSIC_PLAYER_ORDER')}
          server={siteConfig('MUSIC_PLAYER_METING_SERVER')}
          id={siteConfig('MUSIC_PLAYER_METING_ID')}
        />
      ) : (
        <div ref={ref} data-player={player} />
      )}
    </div>
  );
};

export default Player;
