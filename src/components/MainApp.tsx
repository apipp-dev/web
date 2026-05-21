import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, MessageCircle, Instagram, Video, ChevronDown, Send, ArrowRight, Zap, Camera, Monitor, Smartphone, Globe, Target, Clock, Trophy, Share2, Layers, Sun } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { Counter } from './Counter';
import { ColorComparison } from './ColorComparison';

export const MainApp = () => {
  const { lang, t, setLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);
  const [isIslandHovered, setIsIslandHovered] = React.useState(false);
  const [isSolarActive, setIsSolarActive] = React.useState(false);

  const heroVideoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  // Live Performance Dashboard States
  const [tiktokViewsVal, setTiktokViewsVal] = React.useState(53600);
  const [tiktokLikesVal, setTiktokLikesVal] = React.useState(5372);
  const [igReachVal, setIgReachVal] = React.useState(7252);
  const [igTotalViewsVal, setIgTotalViewsVal] = React.useState(30783);

  const [topVid1, setTopVid1] = React.useState(9660);
  const [topVid2, setTopVid2] = React.useState(8691);
  const [topVid3, setTopVid3] = React.useState(6885);

  const [flashCard, setFlashCard] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const logTemplates = [
      { text: 'Seseorang follow TikTok @apippppokonya dari Jakarta', increment: { target: 'tiktokViews', amount: 1 }, type: 'info', tag: 'FOLLOWER' },
      { text: 'Video #1 (#sunset) mendapat penonton baru', increment: { target: 'topVid1', amount: 14 }, type: 'increase', tag: '+14 views' },
      { text: 'Seseorang menyukai video #aesthetic di TikTok', increment: { target: 'tiktokLikes', amount: 2 }, type: 'increase', tag: '+2 likes' },
      { text: 'Video #1 (#sunset) dibagikan ke platform lain', increment: { target: 'tiktokViews', amount: 5 }, type: 'share', tag: '+5 views' },
      { text: 'Views Instagram Story meningkat dari Bandung', increment: { target: 'igTotalViews', amount: 4 }, type: 'increase', tag: '+4 views' },
      { text: 'Views Instagram Story meningkat dari Surabaya', increment: { target: 'igTotalViews', amount: 3 }, type: 'increase', tag: '+3 views' },
      { text: 'Reach organik baru di Instagram Reels', increment: { target: 'igReach', amount: 6 }, type: 'increase', tag: '+6 reach' },
      { text: 'Video lupa up mendapat penayangan baru', increment: { target: 'topVid3', amount: 8 }, type: 'increase', tag: '+8 views' },
      { text: 'Video #photography mendapat penayangan baru', increment: { target: 'topVid2', amount: 11 }, type: 'increase', tag: '+11 views' },
    ];

    const interval = setInterval(() => {
      const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      
      const now = new Date();
      const timeString = now.toTimeString().split(' ')[0];

      const { target, amount } = template.increment;
      
      setFlashCard(prev => ({ ...prev, [target]: true }));
      setTimeout(() => {
        setFlashCard(prev => ({ ...prev, [target]: false }));
      }, 1000);

      if (target === 'tiktokViews') {
        setTiktokViewsVal(v => v + amount);
      } else if (target === 'tiktokLikes') {
        setTiktokLikesVal(v => v + amount);
      } else if (target === 'igReach') {
        setIgReachVal(v => v + amount);
      } else if (target === 'igTotalViews') {
        setIgTotalViewsVal(v => v + amount);
      } else if (target === 'topVid1') {
        setTopVid1(v => v + amount);
        setTiktokViewsVal(v => v + amount);
      } else if (target === 'topVid2') {
        setTopVid2(v => v + amount);
        setTiktokViewsVal(v => v + amount);
      } else if (target === 'topVid3') {
        setTopVid3(v => v + amount);
        setTiktokViewsVal(v => v + amount);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 'home', label: 'nav.home' },
    { id: 'about', label: 'nav.about' },
    { id: 'tools', label: 'nav.tools' },
    { id: 'work', label: 'nav.works' },
    { id: 'journey', label: 'nav.experience' },
    { id: 'workflow', label: 'nav.workflow' },
    { id: 'stats', label: 'nav.stats' },
    { id: 'pricing', label: 'nav.pricing' },
    { id: 'faq', label: 'nav.faq' },
  ];

  return (
    <div className="min-h-screen">
      {/* Liquid Background */}
      <div className="liquid-bg" aria-hidden="true" />

      {/* Ambient solar overlay */}
      {isSolarActive && (
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,254,0.12),transparent_70%)] pointer-events-none z-[9999] transition-all duration-700 animate-pulse" />
      )}

      {/* Dynamic Island matching IOS-style active widget */}
      <motion.div 
        className="fixed top-4 left-1/2 z-[9980] flex items-center justify-between bg-black/92 backdrop-blur-3xl saturate-200 border border-white/10 shadow-2xl cursor-pointer md:cursor-default text-left overflow-hidden"
        initial={{ x: '-50%', y: -100, opacity: 0 }}
        animate={{ 
          x: '-50%', 
          y: 0, 
          opacity: 1,
          width: isIslandHovered ? 340 : 220,
          height: isIslandHovered ? 48 : 36,
          borderRadius: isIslandHovered ? '20px' : '30px',
          borderColor: isIslandHovered ? 'rgba(0,242,254,0.35)' : 'rgba(255,255,255,0.1)',
        }}
        onMouseEnter={() => setIsIslandHovered(true)}
        onMouseLeave={() => setIsIslandHovered(false)}
        onClick={() => {
          if (window.innerWidth < 768) {
            setIsIslandHovered(!isIslandHovered);
          }
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 25
        }}
        layout
      >
        <div className="flex items-center justify-between w-full h-full px-5">
          {!isIslandHovered ? (
            <div className="flex items-center justify-center w-full gap-2 font-sans">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan/70 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan shadow-[0_0_8px_rgba(0,242,254,0.6)]"></span>
              </span>
              <span className="text-[11px] font-bold text-gray-200 tracking-wide whitespace-nowrap">
                Active <span className="text-gray-500 mx-1">-</span> Ready to create
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)] animate-pulse" />
                  <div className="absolute w-3.5 h-3.5 rounded-full border border-cyan/30 animate-ping" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <span className="font-black text-[10px] text-gray-500 uppercase tracking-widest leading-none">Active</span>
                  <motion.span 
                    className="font-bold text-[8px] text-gray-400 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Ready to create
                  </motion.span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col text-right justify-center">
                  <span className="font-black text-[9px] text-cyan uppercase tracking-widest whitespace-nowrap leading-none">
                    {t('hero.sub')}
                  </span>
                  <motion.span 
                    className="font-bold text-[8px] text-violet-light mt-1 uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    MUHAMMAD AFIF
                  </motion.span>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Navigation Dock */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9970]">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-52 bg-[#020205]/95 backdrop-blur-3xl border border-white/10 rounded-[1.8rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
              initial={{ opacity: 0, y: 15, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-[11px] font-black text-[#a1a1a5] uppercase tracking-[0.1em] hover:text-cyan hover:bg-cyan/5 rounded-xl transition-colors text-left"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, type: 'spring', stiffness: 300 }}
                  >
                    {t(item.label)}
                  </motion.a>
                ))}
              </div>
              
              {/* Separator line */}
              <div className="h-[1px] bg-white/10 my-3 w-full" />

              {/* Language switcher & theme indicator at the bottom */}
              <div className="flex items-center justify-between px-3 pb-0.5">
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setLanguage('id')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all hover:scale-105 active:scale-95 ${lang === 'id' ? 'border border-[#00f2fe]/45 bg-[#00f2fe]/10 text-cyan shadow-[0_0_8px_rgba(0,242,254,0.15)]' : 'text-gray-500 hover:text-cyan'}`}
                  >
                    ID
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all hover:scale-105 active:scale-95 ${lang === 'en' ? 'border border-[#00f2fe]/45 bg-[#00f2fe]/10 text-cyan shadow-[0_0_8px_rgba(0,242,254,0.15)]' : 'text-gray-500 hover:text-cyan'}`}
                  >
                    EN
                  </button>
                </div>
                
                {/* Vertical separator */}
                <span className="text-white/10 font-light text-xs mx-1">|</span>

                {/* Sun icon */}
                <button 
                  onClick={() => setIsSolarActive(!isSolarActive)}
                  className={`p-2 rounded-full transition-all duration-300 ${isSolarActive ? 'text-cyan bg-cyan/10 scale-110 rotate-45' : 'text-gray-500 hover:text-white'}`}
                  aria-label="Toggle ambient rays"
                >
                  <Sun size={14} className="stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-black/85 backdrop-blur-3xl saturate-200 border border-white/15 rounded-[3rem] px-6 py-3 shadow-2xl flex items-center gap-6">
          <motion.a 
            href="#home"
            className="text-[14px] font-black tracking-tighter uppercase whitespace-nowrap flex items-center gap-0.5 cursor-pointer leading-none hover:text-white transition-colors"
            whileHover="hover"
          >
            <span>AFIF</span>
            <motion.span 
              className="text-violet-light font-black"
              variants={{
                hover: { 
                  scale: [1, 1.4, 1],
                  rotate: [0, 15, -15, 0],
                  transition: { duration: 0.4, ease: "easeInOut" }
                }
              }}
            >
              .
            </motion.span>
          </motion.a>

          {/* Morphing Hamburger / X Icon */}
          <button 
            onClick={toggleMenu}
            className="relative w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-cyan hover:bg-white/5 transition-all outline-none"
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-5 flex flex-col justify-center items-center">
              <motion.span 
                className="absolute w-5 h-[2px] bg-current rounded-full"
                animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              />
              <motion.span 
                className="absolute w-5 h-[2px] bg-current rounded-full"
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span 
                className="absolute w-5 h-[2px] bg-current rounded-full"
                animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              />
            </div>
          </button>

          <motion.a 
            href="#contact" 
            className="btn-3d-violet px-5 py-2.5 rounded-full text-[10px] whitespace-nowrap leading-none inline-block"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            {t('nav.cta')}
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <video ref={heroVideoRef} className="absolute inset-0 w-full h-full object-cover -z-10" loop muted playsInline>
          <source src="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778100942/CIne_Test_V2_m64jqe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55 -z-10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_60%,rgba(124,58,237,0.15)_0%,transparent_65%)]" />

        <motion.h1 
          className="text-6xl md:text-[9rem] font-black mb-8 tracking-tighter leading-[.85] uppercase"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          EDIT. <span className="gradient-text shine-anim">ELEVATE.</span><br />REPEAT.
        </motion.h1>

        <motion.p 
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-14 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div 
          className="flex gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <a href="#work" className="btn-3d-violet px-9 py-4 rounded-2xl font-black text-sm transition-all">
            {t('hero.btn_work')}
          </a>
          <a href="#contact" className="btn-3d-glass px-9 py-4 rounded-2xl font-black text-sm transition-all">
            {t('hero.btn_talk')}
          </a>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
          <span className="text-[8px] font-black uppercase tracking-[.25em] text-gray-500">Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 border-y border-white/5 bg-black/40 overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap text-sm font-black uppercase tracking-[.4em] text-gray-700">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>{t('trust.agencies')}</span>
              <span className="text-violet-500/35">•</span>
              <span>{t('trust.wedding')}</span>
              <span className="text-violet-500/35">•</span>
              <span>{t('trust.documentary')}</span>
              <span className="text-violet-500/35">•</span>
              <span>{t('trust.brands')}</span>
              <span className="text-violet-500/35">•</span>
              <span>{t('trust.creative')}</span>
              <span className="text-violet-500/35">•</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-black uppercase tracking-[.35em] text-violet mb-4">{t('about.subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight italic">
              Merging Tech with <span className="gradient-text shine-anim">Soul.</span>
            </h2>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              {t('about.desc1')}
            </p>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed italic">
              {t('about.desc2')}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Storytelling', 'Color Grading', 'AI Prompting', 'Canva Expert', 'Web Development', 'DaVinci Resolve'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 rounded-full glass border border-violet/20 text-violet-light text-[10px] font-bold hover:bg-violet/10 hover:border-violet/40 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass p-8 rounded-[2rem] flex flex-col gap-6"
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutMetric icon={<Camera />} title={t('about.role1_title')} desc={t('about.role1_desc')} color="cyan" />
            <AboutMetric icon={<Monitor />} title={t('about.role2_title')} desc={t('about.role2_desc')} color="violet" />
            <AboutMetric icon={<Smartphone />} title={t('about.role3_title')} desc={t('about.role3_desc')} color="orange" />
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-violet mb-4">{t('tools.subtitle')}</p>
          <h2 className="text-3xl font-black uppercase tracking-tight">Tools & <span className="gradient-text shine-anim">Creative Logic</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ToolCard 
            icon={<Video size={20} />} 
            title={t('tools.cat1_title')} 
            desc={t('tools.cat1_desc')} 
            color="cyan" 
          />
          <ToolCard 
            icon={<Globe size={20} />} 
            title={t('tools.cat2_title')} 
            desc={t('tools.cat2_desc')} 
            color="violet" 
          />
          <ToolCard 
            icon={<Zap size={20} />} 
            title={t('tools.cat3_title')} 
            desc={t('tools.cat3_desc')} 
            color="orange" 
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-cyan mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Selected <span className="gradient-text shine-anim">Works</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <WorkItem 
            videoUrl="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778043163/maharani_hmioqh.mp4"
            tag="CAPCUT · 4K COLOR GRADING"
            title="Maharani Cinematic"
            desc="Menyusun footage menjadi cerita yang informatif dan emosional untuk perjalanan spiritual umroh."
            color="cyan"
          />
          <WorkItem 
            videoUrl="https://res.cloudinary.com/de2tlhnd6/video/upload/v1778518799/NIGHT_REVISED_fmtpty.mov"
            tag="NIGHT CINEMATIC · LOW LIGHT"
            title="Night Aesthetics"
            desc="Teknik color grading redup premium untuk menangkap nuansa misterius dan dramatis atmosfer malam hari."
            color="cyan"
          />
          <WorkItem 
            videoUrl="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778043739/Salma_Aulia_NOWM_1_rvv8se.mp4"
            tag="INSTAGRAM REELS"
            title="Salma Aulia"
            desc="High-retention edit untuk Instagram Reels dengan transisi dinamis dan color pop yang vibrant."
            color="pink"
          />
          <WorkItem 
            videoUrl="https://res.cloudinary.com/de2tlhnd6/video/upload/v1778234070/yuki_wep47c.mp4"
            tag="CINEMATIC TRAVEL EDIT"
            title="Yuki Tour"
            desc="Cinematic travel highlights dengan color grading hangat dan pacing yang halus."
            color="orange"
          />
          <WorkItem 
            videoUrl="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778051234/26_Feb_-_Cinematic_Miwaa_WM_de0s2x.mp4"
            tag="VIRAL REELS · SHORT FORM"
            title="Cinematic Miwaa"
            desc="Konten pendek dengan transisi smooth dan tone cinematic untuk Reels & TikTok."
            color="violet"
          />
        </div>
      </section>

      {/* Color Grading Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">Proses <span className="gradient-text">Color Grading</span></h2>
            <p className="text-gray-500 text-sm">{t('work.before')} & {t('work.after')}</p>
          </motion.div>
          <ColorComparison />
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section id="journey" className="py-32 bg-gradient-to-b from-transparent via-violet/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-center mb-20 italic">
            Professional <span className="gradient-text shine-anim">Journey</span>
          </h2>
          <div className="relative border-l-2 border-dashed border-white/10 ml-4 md:ml-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-cyan md:before:to-transparent">
            <TimelineItem 
              year="2026 – Sekarang"
              title="AI-Powered Branding Project"
              role="journey.role1"
              descs={['journey.desc1_1', 'journey.desc1_2', 'journey.desc1_3']}
              align="right"
            />
            <TimelineItem 
              year="Jan 2026 – Mei 2026"
              title="UMROHMOMENT"
              role="journey.role2"
              descs={['journey.desc2_1', 'journey.desc2_2', 'journey.desc2_3']}
              align="left"
            />
            <TimelineItem 
              year="2024 – Sekarang"
              title="Self-Employed"
              role="journey.role3"
              descs={['journey.desc3_1', 'journey.desc3_2', 'journey.desc3_3']}
              align="right"
            />
            <TimelineItem 
              year="2022 – 2024"
              title="Aceh Documentary"
              role="journey.role4"
              descs={['journey.desc4_1', 'journey.desc4_2', 'journey.desc4_3']}
              align="left"
            />
          </div>
        </div>
      </section>

      {/* Collaborative Process Section */}
      <section id="workflow" className="py-32 border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[.35em] text-violet mb-4">{t('process.subtitle')}</p>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Our <span className="gradient-text shine-anim">Collaborative</span> Process</h2>
            <SwipeIndicator />
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-6 pt-2 px-4 -mx-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar">
            <ProcessStep step="01" title={t('process.q1')} desc={t('process.a1')} icon={<Clock />} color="cyan" />
            <ProcessStep step="02" title={t('process.q2')} desc={t('process.a2')} icon={<Zap />} color="violet" />
            <ProcessStep step="03" title={t('process.q3')} desc={t('process.a3')} icon={<Layers />} color="cyan" />
            <ProcessStep step="04" title={t('process.q4')} desc={t('process.a4')} icon={<Send />} color="violet" />
          </div>
        </div>
      </section>
 
       {/* Project Workflow Section */}
       <section id="project-workflow" className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
         <div className="text-center mb-16">
           <p className="text-[10px] font-black uppercase tracking-[.35em] text-cyan mb-4">{t('workflow.subtitle')}</p>
           <h2 className="text-3xl font-black uppercase tracking-tight">Project <span className="gradient-text shine-anim">Workflow</span></h2>
           <p className="text-gray-400 text-sm max-w-xl mx-auto mt-4 mb-6">{t('workflow.desc')}</p>
           <SwipeIndicator />
         </div>
         <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 pb-6 pt-2 px-4 -mx-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar">
           {[1,2,3,4,5,6,7].map((i) => (
             <motion.div 
               key={i}
               className="glass card-3d-kinetic p-6 rounded-2xl group shrink-0 w-[220px] md:w-auto snap-center"
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.08, type: 'spring', stiffness: 100 }}
             >
               <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">{`0${i}`} {t(`workflow.step${i}`).split(' ').slice(1).join(' ')}</div>
               <p className="text-[10px] text-gray-400 leading-relaxed">{t(`workflow.desc${i}`)}</p>
             </motion.div>
           ))}
         </div>
       </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-[10px] font-black uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/20">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Live Analytics · Mei 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Content <span className="gradient-text shine-anim">Performance</span> Dashboard</h2>
            <p className="text-gray-500 text-sm mt-3">TikTok @apippppokonya & Instagram @_afif16</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard 
              icon={<Video size={14} />} 
              label="TikTok Views" 
              target={tiktokViewsVal} 
              color="cyan" 
              trend="+159.1% tren naik" 
              flash={flashCard.tiktokViews || flashCard.topVid1 || flashCard.topVid2 || flashCard.topVid3} 
            />
            <StatCard 
              icon={<Trophy size={14} />} 
              label="TikTok Likes" 
              target={tiktokLikesVal} 
              color="pink" 
              trend="~10% like rate" 
              flash={flashCard.tiktokLikes} 
            />
            <StatCard 
              icon={<Globe size={14} />} 
              label="IG Reach" 
              target={igReachVal} 
              color="violet" 
              trend="61.9% Non-followers" 
              flash={flashCard.igReach} 
            />
            <StatCard 
              icon={<Monitor size={14} />} 
              label="IG Total Views" 
              target={igTotalViewsVal} 
              color="orange" 
              trend="Stories + Reels" 
              flash={flashCard.igTotalViews} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass p-7 rounded-3xl">
               <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black text-white uppercase tracking-widest">🏆 Top TikTok Videos</h3>
                <span className="text-[9px] font-black text-cyan px-2 py-1 rounded-full bg-cyan/10">@apippppokonya</span>
              </div>
              <div className="space-y-6">
                <ProgressBar label="#1 · #sunset #fyp" views={topVid1} percentage={Math.min(100, Math.floor((topVid1 / 10000) * 100))} likes="1,134" color="cyan" />
                <ProgressBar label="#2 · #aesthetic #photography #bandung" views={topVid2} percentage={Math.min(100, Math.floor((topVid2 / 10000) * 100))} likes="1,114" color="cyan" />
                <ProgressBar label="#3 · lupa up #fyp #sunset" views={topVid3} percentage={Math.min(100, Math.floor((topVid3 / 10000) * 100))} likes="468" color="violet" />
              </div>
            </div>
            <div className="glass p-7 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">📊 IG Distribution</h3>
                  <span className="text-[9px] font-black text-violet-light px-2 py-1 rounded-full bg-violet/10">@_afif16</span>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="4" />
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-cyan" strokeWidth="4" strokeDasharray="56 100" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-violet" strokeWidth="4" strokeDasharray="43 100" strokeDashoffset="-56" strokeLinecap="round" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-black text-white">100%</div>
                      <div className="text-[9px] text-gray-500 uppercase">Content</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <DistributionItem label="Stories" percentage="56.0%" color="bg-cyan" />
                <DistributionItem label="Reels" percentage="43.2%" color="bg-violet" />
                <DistributionItem label="Posts" percentage="0.8%" color="bg-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6 overflow-hidden">
         <div className="text-center mb-14">
          <p className="slabel text-cyan mb-4">{t('pricing.subtitle')}</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight">Our Rate <span className="gradient-text shine-anim">Card</span></h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-4 mb-6">{t('pricing.desc')}</p>
          <SwipeIndicator />
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 pt-4 px-4 -mx-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar">
          <PricingCard 
            title="Short-Form" 
            price="Rp 350rb" 
            unit="/video" 
            description={t('pricing.short.desc')} 
            color="cyan"
          />
          <PricingCard 
            title="Cinematic Story" 
            price="Rp 1.5jt" 
            unit="/project" 
            description={t('pricing.cine.desc')} 
            featured 
            color="violet"
          />
          <PricingCard 
            title="Full Brand" 
            price="Custom" 
            description={t('pricing.full.desc')} 
            color="orange"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="slabel text-cyan mb-4">{t('faq.subtitle')}</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-transparent border-none outline-none group"
              >
                <span className="font-bold text-sm text-white group-hover:text-cyan transition-colors">{t(`faq.q${i}`)}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === i ? 'rotate-180 text-cyan' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaqIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-8 text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                      {t(`faq.a${i}`)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 md:p-20 text-center relative overflow-hidden rounded-[3rem] border-violet/20 bg-violet/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter relative z-10 leading-tight">
              READY TO<br /><span className="gradient-text shine-anim">SCALE?</span>
            </h2>
            <p className="text-gray-400 text-sm mb-12 relative z-10">{t('contact.subtitle')}</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 relative z-10">
              <ContactLink icon={<Mail />} label="Email" href="mailto:afifm192@gmail.com" />
              <ContactLink icon={<MessageCircle />} label="WhatsApp" href="https://wa.me/6282350241418" />
              <ContactLink icon={<Instagram />} label="Instagram" href="https://instagram.com/_afif16" />
              <ContactLink icon={<Video />} label="TikTok" href="https://www.tiktok.com/@apippppokonya" />
            </div>

            <motion.a 
              href="mailto:afifm192@gmail.com"
              className="relative z-10 inline-flex items-center gap-3 btn-3d-white px-14 py-5 rounded-2xl text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} className="stroke-[2.5]" />
              <span>{t('contact.btn')}</span>
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5 bg-black/40">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-700">
          © 2026 MUHAMMAD AFIF · DESIGNED FOR IMPACT
        </p>
      </footer>
    </div>
  );
};

const StatCard = ({ icon, label, target, color, trend, flash }: { icon: React.ReactNode, label: string, target: number, color: string, trend: string, flash?: boolean }) => (
  <motion.div 
    className={`glass card-3d-kinetic p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 ${
      flash ? 'border-emerald-500/40 bg-emerald-500/[0.02] shadow-[0_0_25px_rgba(16,185,129,0.15)] -translate-y-1' : ''
    }`}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-${color}/5 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className={`p-2.5 rounded-xl bg-${color}/10 text-${color} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.15em]">{label}</span>
      </div>
      
      {/* Live Flashing Dot */}
      <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest flex items-center gap-1.5 transition-colors duration-300 ${
        flash ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-[#00f2fe]/10 text-cyan/80 border border-[#00f2fe]/10'
      }`}>
        <span className={`w-1 h-1 rounded-full ${flash ? 'bg-emerald-400 animate-ping' : 'bg-cyan animate-pulse'}`} />
        {flash ? 'UPDATING' : 'LIVE'}
      </span>
    </div>
    <div className={`text-3xl md:text-4xl font-black text-${color}/90 group-hover:text-white transition-colors duration-300 ${flash ? 'text-white' : ''}`}>
      <Counter target={target} />
    </div>
    <div className="flex items-center gap-2 mt-3">
      <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-all">
        {trend}
      </span>
    </div>
  </motion.div>
);

const ProgressBar = ({ label, views, percentage, likes, color }: { label: string, views: number, percentage: number, likes: string, color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-xs">
      <div className="flex items-center gap-3">
        <span className="text-white font-bold">{label}</span>
        <span className="text-[9px] text-gray-600 uppercase tracking-widest">{likes} likes</span>
      </div>
      <span className="font-black text-cyan">{views.toLocaleString()}</span>
    </div>
    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
      <motion.div 
        className={`h-full rounded-full bg-gradient-to-r from-cyan to-violet`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </div>
  </div>
);

const DistributionItem = ({ label, percentage, color }: { label: string, percentage: string, color: string }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-[11px] text-gray-400 font-medium">{label}</span>
    </div>
    <span className="text-[11px] font-black text-white">{percentage}</span>
  </div>
);

const PricingCard = ({ title, price, unit, description, featured, color }: { title: string, price: string, unit?: string, description: string, featured?: boolean, color: string }) => {
  const { t } = useTranslation();
  
  const getWhatsAppHref = () => {
    const baseUrl = "https://wa.me/6282350241418";
    let message = `Halo Afif, saya tertarik dengan paket ${title}.`;
    if (title === "Full Brand") {
      message = "Halo Afif, saya tertarik untuk kerja sama paket Full Brand.";
    }
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.div 
      className={`glass card-3d-kinetic p-10 rounded-[2.5rem] flex flex-col h-full relative shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center ${featured ? 'border-violet/45 bg-violet/5 scale-100 md:scale-105 shadow-[0_15px_40px_rgba(124,58,237,0.15)] md:hover:scale-[1.07]' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-lg z-10">
          Best Value
        </div>
      )}
      <h3 className={`text-base font-black uppercase mb-3 tracking-widest text-${color}`}>{title}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <div className="text-4xl font-black text-white">{price}</div>
        {unit && <span className="text-[11px] text-gray-600 font-bold uppercase tracking-widest">{unit}</span>}
      </div>
      <p className="text-[11px] text-gray-400 leading-relaxed mb-10 flex-grow" dangerouslySetInnerHTML={{ __html: description }} />
      <a 
        href={getWhatsAppHref()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-center ${featured ? 'btn-3d-violet text-white hover:text-white' : 'btn-3d-glass text-cyan hover:text-cyan'}`}
      >
        {t('pricing.select')}
      </a>
    </motion.div>
  );
};

const ContactLink = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-3 p-6 glass card-3d-kinetic rounded-2xl group"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-gray-400 group-hover:text-cyan transition-colors">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
  </motion.a>
);

const AboutMetric = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => (
  <div className="flex items-start gap-5 p-4 rounded-2xl group hover:bg-white/[0.03] transition-all">
    <div className={`p-3.5 rounded-xl bg-${color}/10 text-${color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
    </div>
    <div>
      <h4 className="font-black text-sm text-white mb-1 uppercase tracking-tight">{title}</h4>
      <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ToolCard = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => (
  <motion.div 
    className="glass card-3d-kinetic p-8 rounded-[2rem] group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className={`p-4 rounded-xl w-fit mb-6 bg-${color}/10 text-${color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.02)]`}>
      {icon}
    </div>
    <h4 className="text-[10px] font-black text-white uppercase mb-3 tracking-[.2em] group-hover:text-cyan transition-colors duration-300">{title}</h4>
    <p className="text-xs text-gray-400 leading-relaxed italic group-hover:text-gray-300 transition-colors duration-300">{desc}</p>
  </motion.div>
);

const WorkItem = ({ videoUrl, tag, title, desc, color }: { videoUrl: string, tag: string, title: string, desc: string, color: string }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05, rootMargin: '150px' }
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <motion.div 
      className="glass card-3d-kinetic p-6 rounded-[2.5rem] flex flex-col gap-6 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="aspect-[9/16] rounded-[1.8rem] overflow-hidden bg-black/20 relative shadow-2xl">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700" 
          muted 
          loop 
          playsInline 
          src={videoUrl} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      <div className="px-2">
        <span className={`text-[9px] font-black uppercase tracking-[.25em] text-${color}`}>{tag}</span>
        <h3 className="text-2xl font-black text-white mt-2 mb-3 group-hover:text-cyan transition-colors duration-300">{title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">{desc}</p>
      </div>
    </motion.div>
  );
};

const SwipeIndicator = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`md:hidden flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan bg-cyan/5 border border-cyan/10 py-1.5 px-4 rounded-full w-fit mx-auto mb-4 ${className}`}>
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan/60 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan animate-[pulse_1.5s_infinite]"></span>
      </span>
      <span className="opacity-80">Swipe / Geser</span>
      <motion.div
        animate={{ x: [-3, 3, -3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center shrink-0"
      >
        <svg className="w-3.5 h-3.5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.div>
    </div>
  );
};

const ProcessStep = ({ step, title, desc, icon, color }: { step: string, title: string, desc: string, icon: React.ReactNode, color: string }) => (
  <motion.div 
    className="glass card-3d-kinetic p-8 rounded-[2rem] group shrink-0 w-[240px] md:w-auto snap-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className={`p-3.5 rounded-xl w-fit mb-6 bg-${color}/10 text-${color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
      {React.cloneElement(icon as React.ReactElement, { size: 18 })}
    </div>
    <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 group-hover:text-cyan/80 transition-colors">STEP {step}</p>
    <h4 className="text-base font-black text-white mb-3 tracking-tight group-hover:text-white transition-colors">{title}</h4>
    <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">{desc}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, role, descs, align }: { year: string, title: string, role: string, descs: string[], align: 'left' | 'right' }) => {
  const { t } = useTranslation();
  return (
    <motion.div 
      className={`relative w-full mb-10 md:mb-16 flex flex-col ${align === 'right' ? 'md:items-end md:pr-[50%] pr-4 md:text-right' : 'md:items-start md:pl-[50%] pl-4 md:text-left'} text-left`}
      initial={{ opacity: 0, x: align === 'right' ? -40 : 40, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`absolute top-6 w-3 h-3 bg-cyan rounded-full border-4 border-bg shadow-[0_0_15px_rgba(0,242,254,0.6)] z-10 transition-transform hover:scale-150 ${align === 'right' ? 'md:left-1/2 md:-translate-x-1/2 left-[-1.15rem]' : 'md:left-1/2 md:-translate-x-1/2 left-[-1.15rem]'}`} />
      
      <div className="glass p-8 rounded-[2rem] w-full hover:border-cyan/30 transition-all max-w-md">
        <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-cyan">{year}</p>
        <h3 className="font-black text-white text-lg mb-1">{title}</h3>
        <p className="text-[10px] font-bold text-violet-light uppercase tracking-wider mb-4 italic">{t(role)}</p>
        <ul className={`space-y-2 ${align === 'right' ? 'md:text-right' : 'text-left'}`}>
          {descs.map((d, i) => (
            <li key={i} className="text-[10px] text-gray-500 flex gap-2 items-start md:justify-end">
              {align === 'left' && <ArrowRight size={10} className="mt-0.5 text-violet shrink-0" />}
              <span>{t(d)}</span>
              {align === 'right' && <ArrowRight size={10} className="mt-0.5 text-violet shrink-0 rotate-180 hidden md:block" />}
              {align === 'right' && <ArrowRight size={10} className="mt-0.5 text-violet shrink-0 md:hidden" />}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
