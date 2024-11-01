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
      const newPlayer = new window.APlayer({
        container: ref.current,
        fixed: true,
        lrcType: lrcType,
        autoplay: autoPlay,
        order: order,
        audio: audio,
      });

  // 添加切换歌曲事件监听
  newPlayer.on('listswitch', () => {
    // 如果播放器正在播放，确保歌词显示
    if (!newPlayer.paused) {
      setIsPlaying(true);
      const lrcContents = document.querySelector('.aplayer-lrc-contents');
      if (lrcContents) {
        lrcContents.style.visibility = 'visible';
        lrcContents.style.opacity = '1';
      }
    }
  });
        // 添加错误处理
  newPlayer.on('error', (e) => {
    console.log('播放器错误:', e);
    // 阻止自动播放下一首
    newPlayer.pause();
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

      // 设置初始歌词样式和滚动条
      newPlayer.on('loadeddata', () => {
        const audio = newPlayer.audio;
        if (audio) {
          audio.onerror = (e) => {
            console.log('音频加载错误:', e);
            newPlayer.pause();
          };
        }
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        if (lrcContents) {
          lrcContents.style.fontSize = '30px'; // 设置字体大小
          lrcContents.style.color = 'rgb(255, 215, 0)'; // 设置字体颜色
          lrcContents.style.textAlign = 'center'; // 居中对齐
          lrcContents.style.lineHeight = '1.8'; // 设置行高，避免文字重叠
          lrcContents.style.maxHeight = '400px'; // 限制最大高度，避免溢出
          lrcContents.style.overflowY = 'auto'; // 启用滚动条，防止内容溢出
          lrcContents.style.padding = '10px'; // 添加内边距，避免遮挡
        // 不要使用 display: none，改用 visibility 和 opacity
        lrcContents.style.visibility = isPlaying ? 'visible' : 'hidden';
        lrcContents.style.opacity = isPlaying ? '1' : '0';

      // 根据播放状态设置可见性
      if (!newPlayer.paused) {
        lrcContents.style.visibility = 'visible';
        lrcContents.style.opacity = '1';
      } else {
        lrcContents.style.visibility = 'hidden';
        lrcContents.style.opacity = '0';
      }
    }
      });
      
  
      // 监听时间更新事件，确保高亮歌词样式生效
      newPlayer.on('timeupdate', () => {
        const currentLrc = document.querySelector('.aplayer-lrc-current');
        if (currentLrc) {
          currentLrc.style.color = '#4CAF50'; // 高亮绿色
          currentLrc.style.fontWeight = 'bold'; // 加粗
          currentLrc.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)'; // 添加阴影
          currentLrc.style.fontSize = '25px'; // 调整字体大小
        }
  
        // 确保歌词容器自适应高度
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        if (lrcContents) {
          lrcContents.style.maxHeight = `${lrcContents.scrollHeight}px`;        }
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
