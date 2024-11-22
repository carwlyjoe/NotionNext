import { siteConfig } from '@/lib/config';
import { loadExternalResource } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

/**
 * 音乐播放器组件
 * @returns JSX
 */
const Player = () => {
  const [player, setPlayer] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

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

      // 设置初始歌词样式 - 只保留错误处理
      newPlayer.on('loadeddata', () => {
        const audio = newPlayer.audio;
        if (audio) {
          audio.onerror = (e) => {
            console.log('音频加载错误:', e);
            newPlayer.pause();
          };
        }
        // 初始状态设置为隐藏
        const lrcContents = document.querySelector('.aplayer-lrc-contents');
        // if (lrcContents) {
        //   lrcContents.style.visibility = 'hidden';
        //   lrcContents.style.opacity = '0';
        // }
      });

      // 移除 timeupdate 事件中的样式设置，因为已经在 play 事件中设置了
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
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .aplayer-lrc-contents {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.3s, opacity 0.3s;
      }
    `;
    document.head.appendChild(styleElement);
    initMusicPlayer();
    return () => {
      setPlayer(undefined);
      document.head.removeChild(styleElement);
    };
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