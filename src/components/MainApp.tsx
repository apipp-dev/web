import React from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Menu, X, Mail, MessageCircle, Instagram, Video, ChevronDown, Send, ArrowRight, Zap, Camera, Monitor, Smartphone, Globe, Target, Clock, Trophy, Share2, Layers, Sun, BarChart2, Users, LineChart, Calendar, PieChart, Heart, MessageSquare, ExternalLink } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { Counter } from './Counter';
import { ColorComparison } from './ColorComparison';
import { dailyStats, tiktokVideos, followerHistory, followerActivity, genderDistribution, territoriesDistribution, instagramInsights } from '../data/tiktokData';

const urlCoastalViews = new URL('../assets/images/1.jpg', import.meta.url).href;
const urlArtGalleryVlog = new URL('../assets/images/2.png', import.meta.url).href;
const urlMarketMerdeka = new URL('../assets/images/3.png', import.meta.url).href;
const urlMoodReset = new URL('../assets/images/4.png', import.meta.url).href;
const urlMilkyWaySky = new URL('../assets/images/5.png', import.meta.url).href;

const igThumbnails = [
  urlCoastalViews,
  urlArtGalleryVlog,
  urlMarketMerdeka,
  urlMoodReset,
  urlMilkyWaySky
];

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

  // Root states - isolated from local stats dashboard transitions to avoid heavy updates

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
            <ProcessStep step="01" title={t('process.q1')} desc={t('process.a1')} icon={<Clock />} color="cyan" index={0} />
            <ProcessStep step="02" title={t('process.q2')} desc={t('process.a2')} icon={<Zap />} color="violet" index={1} />
            <ProcessStep step="03" title={t('process.q3')} desc={t('process.a3')} icon={<Layers />} color="cyan" index={2} />
            <ProcessStep step="04" title={t('process.q4')} desc={t('process.a4')} icon={<Send />} color="violet" index={3} />
          </div>
        </div>
      </section>
 
       {/* Project Workflow Section */}
       <section id="project-workflow" className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
         <div className="text-center mb-16">
           <p className="text-[10px] font-black uppercase tracking-[.35em] text-cyan mb-4">{t('workflow.subtitle')}</p>
           <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Project <span className="gradient-text shine-anim">Workflow</span></h2>
           <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto mt-4 mb-6">{t('workflow.desc')}</p>
           <SwipeIndicator />
         </div>
         
         <div className="relative">
           {/* Connecting Line across steps on large screens */}
           <div className="hidden xl:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-cyan/30 via-violet/35 to-cyan/15 z-0" />
           
           <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 pt-4 px-4 -mx-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar relative z-10">
             {[1,2,3,4,5,6,7].map((i) => {
               const cleanStepTitle = t(`workflow.step${i}`).replace(/^\d+\s+/, "");
               const isEven = i % 2 === 0;
               const isLast = i === 7;
               return (
                 <motion.div 
                   key={i}
                   className={`glass card-3d-kinetic p-6 rounded-[2rem] group shrink-0 w-[240px] md:w-auto snap-center border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                     isLast 
                       ? 'lg:col-span-2 bg-gradient-to-br from-cyan/10 via-violet/5 to-transparent border-cyan/45 shadow-[0_15px_30px_rgba(0,242,254,0.06)] hover:border-cyan/60' 
                       : 'border-white/5 hover:border-cyan/35'
                   }`}
                   initial={{ opacity: 0, y: 35, scale: 0.95 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   viewport={{ once: true, margin: '-40px' }}
                   transition={{ 
                     delay: i * 0.05, 
                     type: 'spring', 
                     stiffness: 90, 
                     damping: 15 
                   }}
                 >
                   {/* Background Gradient Orbs */}
                   <div className={`absolute -right-8 -top-8 w-20 h-20 rounded-full blur-[30px] opacity-[0.04] group-hover:opacity-[0.15] transition-opacity pointer-events-none ${
                     isLast ? 'bg-cyan/40 scale-150' : isEven ? 'bg-violet' : 'bg-cyan'
                   }`} />
                   
                   <div>
                     {/* Step Icon & Number Indicator row */}
                     <div className="flex items-center justify-between mb-6">
                       <span className="font-mono text-xs font-black px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 group-hover:text-cyan group-hover:border-cyan/20 transition-all">
                         0{i}
                       </span>
                       <div className={`p-2.5 rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                         isLast
                           ? 'bg-cyan/20 border-cyan/45 text-cyan shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                           : isEven
                             ? 'bg-violet/10 border-violet/20 text-violet shadow-[0_0_10px_rgba(124,58,237,0.1)]'
                             : 'bg-cyan/10 border-cyan/20 text-cyan shadow-[0_0_10px_rgba(0,242,254,0.1)]'
                       }`}>
                         {i === 1 && <MessageSquare size={15} />}
                         {i === 2 && <Target size={15} />}
                         {i === 3 && <Layers size={15} />}
                         {i === 4 && <Video size={15} />}
                         {i === 5 && <Monitor size={15} />}
                         {i === 6 && <Zap size={15} />}
                         {i === 7 && <Send size={15} />}
                       </div>
                     </div>
                     
                     {/* Label Title */}
                     <h3 className={`font-black tracking-tight mb-2 uppercase transition-colors text-white ${
                       isLast ? 'text-lg group-hover:text-cyan' : 'text-sm group-hover:text-cyan'
                     }`}>
                       {cleanStepTitle}
                     </h3>
                   </div>
                   
                   {/* Detail Paragraph */}
                   <p className={`text-gray-400 leading-relaxed font-light mt-2 group-hover:text-gray-300 transition-colors ${
                     isLast ? 'text-xs max-w-md' : 'text-[11px]'
                   }`}>
                     {t(`workflow.desc${i}`)}
                   </p>

                   {/* Step 7 Special Completion Label */}
                   {isLast && (
                     <div className="mt-4 pt-3 border-t border-cyan/15 flex items-center justify-between text-[10px] text-cyan font-black tracking-wider uppercase font-mono">
                       <span>Milestone Completed</span>
                       <div className="flex items-center gap-1 bg-cyan/15 px-2 py-0.5 rounded-full border border-cyan/25">
                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                         <span>Ready</span>
                       </div>
                     </div>
                   )}
                 </motion.div>
               );
             })}
           </div>
         </div>
       </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 border-b border-white/5 overflow-hidden">
        <StatsDashboard />
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

const ProgressBar = ({ label, views, percentage, likes, color }: { label: string, views: number, percentage: number, likes: string, color: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div className="space-y-2" ref={ref}>
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
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const DistributionItem = ({ label, percentage, color }: { label: string, percentage: string, color: string }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-[11px] text-gray-400 font-medium">{label}</span>
    </div>
    <span className="text-[11px] font-black text-white">{percentage}</span>
  </div>
);

const SparklineCounter = ({ to, isPercentage = false, duration = 1500 }: { to: number; isPercentage?: boolean; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let startTimestamp: number | null = null;
    let animFrame: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * to);
      if (progress < 1) {
        animFrame = window.requestAnimationFrame(step);
      }
    };
    animFrame = window.requestAnimationFrame(step);
    return () => {
      if (animFrame) window.cancelAnimationFrame(animFrame);
    };
  }, [to, duration]);

  if (isPercentage) {
    return <span>{count.toFixed(1)}%</span>;
  }
  return <span>{Math.round(count).toLocaleString()}</span>;
};

const SparklineTrend = ({ data, platform, metricId }: { data: number[]; platform: 'tiktok' | 'instagram'; metricId: string }) => {
  const width = 120;
  const height = 45;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 8) - 4;
    return { x, y };
  });
  
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const closedPath = `${linePath} L ${width.toFixed(1)} ${height.toFixed(1)} L 0 ${height.toFixed(1)} Z`;
  
  const gradIdStroke = `sparkline-stroke-${platform}-${metricId}`;
  const gradIdFill = `sparkline-fill-${platform}-${metricId}`;
  
  const isTiktok = platform === 'tiktok';
  const strokeColorStart = isTiktok ? '#00f2fe' : '#ff3070';
  const strokeColorEnd = isTiktok ? '#ff3070' : '#f97316';
  
  const fillColorStart = isTiktok ? 'rgba(0, 242, 254, 0.22)' : 'rgba(255, 48, 112, 0.22)';
  const fillColorEnd = 'rgba(0,0,0,0)';
  
  const glowShadowColor = isTiktok ? 'rgba(0, 242, 254, 0.35)' : 'rgba(255, 48, 112, 0.35)';

  return (
    <div className="relative shrink-0 w-[120px] h-[50px] self-center">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible" style={{ filter: `drop-shadow(0px 2px 5px ${glowShadowColor})` }}>
        <defs>
          <linearGradient id={gradIdStroke} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={strokeColorStart} />
            <stop offset="100%" stopColor={strokeColorEnd} />
          </linearGradient>
          <linearGradient id={gradIdFill} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fillColorStart} />
            <stop offset="100%" stopColor={fillColorEnd} />
          </linearGradient>
        </defs>
        
        <motion.path
          d={closedPath}
          fill={`url(#${gradIdFill})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        <motion.path
          d={linePath}
          fill="none"
          stroke={`url(#${gradIdStroke})`}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        />
        
        {points.length > 0 && (
          <motion.circle
            cx={points[points.length - 1].x}
            cy={points[points.length - 1].y}
            r={3}
            fill={strokeColorEnd}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          />
        )}
      </svg>
    </div>
  );
};

interface SparklineStatCardProps {
  title: string;
  value: number;
  isPercentage?: boolean;
  growthBadge: React.ReactNode;
  icon: React.ReactNode;
  hoverBorderClass: string;
  trendData: number[];
  platform: 'tiktok' | 'instagram';
  metricId: string;
}

const SparklineStatCard = ({ 
  title, 
  value, 
  isPercentage = false, 
  growthBadge, 
  icon: IconComponent, 
  hoverBorderClass, 
  trendData, 
  platform, 
  metricId 
}: SparklineStatCardProps) => {
  return (
    <div className={`glass p-3.5 sm:p-5 rounded-[1.5rem] sm:rounded-[2.2rem] border border-white/5 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3 relative overflow-hidden group ${hoverBorderClass} transition-all duration-300`}>
      <div className="absolute -top-1 right-2 p-3 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all pointer-events-none select-none text-white">
        {IconComponent}
      </div>
      
      <div className="flex flex-col justify-between z-10 flex-1 min-w-0">
        <div>
          <span className="text-[8px] sm:text-[9.5px] font-black uppercase tracking-widest text-slate-400 block truncate font-mono">
            {title}
          </span>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white mt-1.5 tracking-tight flex items-baseline">
            <SparklineCounter to={value} isPercentage={isPercentage} />
          </h3>
        </div>
        
        <motion.div 
          className="mt-2.5"
          initial={{ opacity: 0, scale: 0.85, y: 7 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 180, damping: 14 }}
        >
          {growthBadge}
        </motion.div>
      </div>
      
      <div className="z-10 shrink-0 self-start xl:self-center mt-1 xl:mt-0 flex items-center justify-start xl:justify-end">
        <SparklineTrend data={trendData} platform={platform} metricId={metricId} />
      </div>
    </div>
  );
};

const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4c2 0 4.5 1 4.5 3.5" />
  </svg>
);

const InstagramOptionEmbed = ({ permalink }: { permalink: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="background:#0b0c10; border:0; border-radius:16px; margin: 0 auto; max-width:540px; min-width:320px; width:100%; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
          <div style="padding:40px; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height: 380px;">
            <div style="background: rgba(255,255,255,0.05); border-radius: 50%; height: 48px; width: 48px; margin-bottom: 20px;" class="animate-bounce"></div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 4px; height: 16px; width: 180px; margin-bottom: 12px;" class="animate-pulse"></div>
            <div style="background: rgba(255,255,255,0.03); border-radius: 4px; height: 12px; width: 120px; margin-bottom: 24px;" class="animate-pulse"></div>
            <span style="color: rgba(255,255,255,0.4); font-family: sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Memuat Postingan Instagram...</span>
          </div>
        </blockquote>
      `;

      if ((window as any).instgrm) {
        try {
          (window as any).instgrm.Embeds.process();
        } catch (err) {
          console.error(err);
        }
      } else {
        script.onload = () => {
          try {
            (window as any).instgrm?.Embeds?.process();
          } catch (err) {
            console.error(err);
          }
        };
      }
    }
  }, [permalink]);

  return (
    <div ref={containerRef} className="w-full flex justify-center py-2 transition-all duration-300" />
  );
};

const InstagramCardEmbed = ({ permalink }: { permalink: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="background:#0b0c10; border:0; border-radius:12px; margin: 0 auto; width:100%;">
          <div style="padding:12px; display:flex; flex-direction:column; align-items:center;">
            <a href="${permalink}" target="_blank" style="background:#000000; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;">
              <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; padding-top: 10px;">
                <div style="background-color: #ff3070; border-radius: 50%; height: 20px; width: 20px; margin-right: 6px; opacity: 0.8;"></div>
                <span style="color:#ffffff; font-family:sans-serif; font-size:11px; font-weight:600;">View Live Post</span>
              </div>
            </a>
          </div>
        </blockquote>
      `;

      if ((window as any).instgrm) {
        try {
          (window as any).instgrm.Embeds.process();
        } catch (err) {
          console.error(err);
        }
      } else {
        const handleLoad = () => {
          try {
            (window as any).instgrm?.Embeds?.process();
          } catch (err) {
            console.error(err);
          }
        };
        script.addEventListener('load', handleLoad);
        return () => {
          script.removeEventListener('load', handleLoad);
        };
      }
    }
  }, [permalink]);

  return (
    <div className="relative w-full h-[220px] overflow-hidden rounded-xl mb-4 shrink-0 bg-black/60 border border-white/5">
      {/* Aspect Ratio limited pointer-masked container */}
      <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden pointer-events-none select-none">
        <div ref={containerRef} className="w-full absolute top-0 left-0" />
      </div>

      {/* Transparent overlay mapping clicks to post in new tab */}
      <a 
        href={permalink}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 bg-black/0 z-10 cursor-pointer"
        title="Open Live Post"
      />
    </div>
  );
};

const StatsDashboard = () => {
  const { lang, t } = useTranslation();
  const [activePlatform, setActivePlatform] = React.useState<'tiktok' | 'instagram'>('tiktok');
  const [activeTab, setActiveTab] = React.useState<'stats' | null>(null);
  const [activeStatsSubTab, setActiveStatsSubTab] = React.useState<'overview' | 'trends' | 'videos' | 'charts' | 'audience'>('overview');
  const [igViewMode, setIgViewMode] = React.useState<'grid' | 'live'>('grid');
  const [selectedPostIndex, setSelectedPostIndex] = React.useState<number>(0);
  const [showTiktokStats, setShowTiktokStats] = React.useState(false);
  const [showInstagramStats, setShowInstagramStats] = React.useState(false);
  
  // Chart and interaction states
  const [hoveredPoint, setHoveredPoint] = React.useState<{ date: string; views: number; likes: number } | null>(null);
  const [activeVideoSearch, setActiveVideoSearch] = React.useState('');
  const [timeRange, setTimeRange] = React.useState<7 | 15 | 30>(30);
  const [viralSliderVal, setViralSliderVal] = React.useState<number>(1.0);
  
  // Sorting state for videos list
  const [sortField, setSortField] = React.useState<'views' | 'likes' | 'postTime'>('views');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');

  // Audience Demographics Hover Tooltip States
  const [hoveredTerritory, setHoveredTerritory] = React.useState<number | null>(null);
  const [hoveredGender, setHoveredGender] = React.useState<number | null>(null);
  const [hoveredInstaView, setHoveredInstaView] = React.useState<number | null>(null);
  const [hoveredInstaInteract, setHoveredInstaInteract] = React.useState<number | null>(null);

  // Audience Context descriptive texts
  const getTerritoryContext = (name: string, isId: boolean) => {
    switch (name) {
      case 'Indonesia (ID)':
        return isId 
          ? 'Kawasan demografi inti. Berkontribusi pada mayoritas share video, komentar, dan kunjungan profil.'
          : 'Core demographic region. Accounts for the majority of viral video shares, comments, and profile visits.';
      case 'Malaysia (MY)':
        return isId
          ? 'Jangkauan sekunder regional yang kuat dengan kecocokan bahasa dan kesamaan estetika sunset.'
          : 'Strong regional secondary reach with matching language and cultural sunset aesthetic affinity.';
      case 'Amerika Serikat (US)':
        return isId
          ? 'Daya beli tinggi dan apresiasi estetika visual internasional untuk konten perjalanan.'
          : 'High purchasing power and international visual aesthetic appreciation for travel content.';
      case 'Australia (AU)':
        return isId
          ? 'Cakupan belahan bumi selatan. Berinteraksi aktif dengan klip drone berkualitas tinggi.'
          : 'Broad southern hemisphere coverage. Interacts heavily with high-quality drone clips.';
      case 'Kamboja (KH)':
        return isId
          ? 'Basis penonton Asia Tenggara yang berkembang dengan retensi dan frekuensi follow yang meningkat.'
          : 'Emerging southeast asian viewer base with increasing retention and follow frequency.';
      case 'Others':
      default:
        return isId
          ? 'Audiens global yang beragam tersebar di 30+ negara menikmati vlog perjalanan estetis.'
          : 'Diverse global audience scattered across 30+ countries enjoying aesthetic travel logs.';
    }
  };

  const getGenderContext = (name: string, isId: boolean) => {
    switch (name) {
      case 'Male':
        return isId
          ? 'Mendominasi basis penonton, sangat tertarik pada konten otomotif, sinematik drone, dan teknologi.'
          : 'Dominating content consumer, showing strong preferences in drone cinematics, automotive, and outdoor tech.';
      case 'Female':
        return isId
          ? 'Segmen audiens yang merespons secara mendalam terhadap estetika warna pastel, vlog santai, dan gaya hidup.'
          : 'Highly engaged segment responding deeply to travel aesthetic color palettes, cozy lifestyle vlogs, and styling.';
      default:
        return isId
          ? 'Segmen kreatif yang mengapresiasi transisi musik dan detail teknis editing video.'
          : 'Creative segment highly appreciative of intricate custom music transitions and technical visual polishing.';
    }
  };
  
  // Real stats calculated/aggregated from provided datasets
  // TikTok: Followers is 627 (Updated from 489 to live!)
  const tiktokFollowers = 627;
  const tiktokFollowerDiff = 138;
  const totalViewsTopVideos = tiktokVideos.reduce((acc, v) => acc + v.views, 0);
  const totalLikesTopVideos = 14200; // Directly from TikTok screenshot (14.2K Likes)
  const averageEngagementRate = "12.4%"; 

  // Format date range: "22 Mei - 12 Juni & Maret"
  const dateRangeString = lang === 'id' ? 'Mei 2025 - Maret 2026' : 'May 2025 - March 2026';

  // Toggle state to switch between Views chart and Profile Views chart
  const [chartMetric, setChartMetric] = React.useState<'views' | 'likes'>('views');

  // Filter videos based on input string
  const filteredVideos = tiktokVideos.filter(video => 
    video.title.toLowerCase().includes(activeVideoSearch.toLowerCase())
  );

  // Helper to parse postTime (e.g. "14 Jan", "30 Apr", "2 Jun", "29 Sep", "9 Jun")
  const parsePostTime = (postTimeStr: string): number => {
    const parts = postTimeStr.trim().split(/\s+/);
    if (parts.length < 2) return 0;
    const day = parseInt(parts[0], 10) || 1;
    const monthStr = parts[1].toLowerCase().substring(0, 3);
    const months: Record<string, number> = {
      jan: 0, feb: 1, mar: 2, apr: 3, mei: 4, may: 4, jun: 5, jul: 6, agu: 7, aug: 7, sep: 8, okt: 9, oct: 9, nov: 10, des: 11, dec: 11
    };
    const month = months[monthStr] !== undefined ? months[monthStr] : 0;
    return month * 100 + day;
  };

  const sortedVideos = React.useMemo(() => {
    return [...filteredVideos].sort((a, b) => {
      let aVal = 0;
      let bVal = 0;
      if (sortField === 'views') {
        aVal = a.views;
        bVal = b.views;
      } else if (sortField === 'likes') {
        aVal = a.likes;
        bVal = b.likes;
      } else {
        aVal = parsePostTime(a.postTime);
        bVal = parsePostTime(b.postTime);
      }
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }, [filteredVideos, sortField, sortDirection]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-[10px] font-black uppercase tracking-widest text-cyan bg-cyan/10 border border-cyan/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {lang === 'id' ? 'KONSISTENSI & PORTFOLIO REAL DATA' : 'REAL DATASET PORTFOLIO'}
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          Social Media <span className="gradient-text shine-anim">Analytics</span>
        </h2>
        <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto mt-3">
          {lang === 'id' 
            ? 'Transparansi performa organik channel creator @apippppokonya (TikTok) & @_afif16 (Instagram) berdasarkan data analitik asli Anda.' 
            : 'Organic performance transparency for creator channel @apippppokonya (TikTok) & @_afif16 (Instagram) using authentic metrics.'}
        </p>
      </div>

      {/* Platform Switcher Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 w-full px-2">
        {/* TikTok Card */}
        <div
          onClick={() => { setActivePlatform('tiktok'); }}
          className={`group relative overflow-hidden flex flex-col rounded-[2.2rem] p-6 transition-all duration-500 border backdrop-blur-md cursor-pointer ${
            activePlatform === 'tiktok'
              ? 'bg-white/[0.08] border-[#00f2fe]/40 shadow-[0_0_30px_rgba(0,242,254,0.06)] scale-[1.01]'
              : 'bg-white/[0.02] text-gray-400 border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]'
          }`}
        >
          {/* Accent light highlight */}
          <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-[#00f2fe]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl border transition-all duration-300 ${
                activePlatform === 'tiktok' 
                  ? 'bg-[#00f2fe]/10 text-[#00f2fe] border-[#00f2fe]/20 shadow-[0_0_15px_rgba(0,242,254,0.15)]' 
                  : 'bg-white/5 text-gray-400 border-transparent group-hover:bg-white/10 group-hover:text-white'
              }`}>
                <TikTokIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-500 tracking-wider uppercase font-mono">TIKTOK CREATOR</span>
                <span className="text-base font-bold text-white tracking-tight leading-none whitespace-nowrap">@apippppokonya</span>
              </div>
            </div>

            {/* Minimalist interactive button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePlatform('tiktok');
                setShowTiktokStats(!showTiktokStats);
                setActiveTab('stats');
              }}
              className="text-slate-400 hover:text-[#00f2fe] text-xs font-bold transition-all px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-[#00f2fe]/30 hover:bg-white/10 select-none cursor-pointer"
            >
              {showTiktokStats 
                ? (lang === 'id' ? 'Sembunyikan' : 'Hide') 
                : (lang === 'id' ? 'Lihat Statistik' : 'View Stats')}
            </button>
          </div>

          <AnimatePresence>
            {showTiktokStats && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-white/5 pt-5 w-full"
              >
                <div className="flex items-center justify-between gap-6 w-full">
                  {/* Left block for metrics */}
                  <div className="space-y-1">
                    <span className="text-3xl font-black text-white tracking-tight leading-none block">
                      627
                    </span>
                    <div className="pt-1.5 flex flex-col">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 font-mono">
                        {lang === 'id' ? 'TOTAL FOLLOWER' : 'TOTAL FOLLOWERS'}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 mt-0.5 block">
                        +138 {lang === 'id' ? 'perolehan baru' : 'new followers'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right block for sparkline */}
                  <div className="shrink-0">
                    <SparklineTrend 
                      data={followerHistory.map(item => item.followers)} 
                      platform="tiktok" 
                      metricId="selector-tiktok" 
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Instagram Card */}
        <div
          onClick={() => { setActivePlatform('instagram'); }}
          className={`group relative overflow-hidden flex flex-col rounded-[2.2rem] p-6 transition-all duration-500 border backdrop-blur-md cursor-pointer ${
            activePlatform === 'instagram'
              ? 'bg-white/[0.08] border-[#ff3070]/40 shadow-[0_0_30px_rgba(255,48,112,0.06)] scale-[1.01]'
              : 'bg-white/[0.02] text-gray-400 border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]'
          }`}
        >
          {/* Accent light highlight */}
          <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-[#ff3070]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl border transition-all duration-300 ${
                activePlatform === 'instagram' 
                  ? 'bg-[#ff3070]/10 text-[#ff3070] border-[#ff3070]/20 shadow-[0_0_15px_rgba(255,48,112,0.15)]' 
                  : 'bg-white/5 text-gray-400 border-transparent group-hover:bg-white/10 group-hover:text-white'
              }`}>
                <Instagram className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-500 tracking-wider uppercase font-mono">INSTAGRAM CHANNEL</span>
                <span className="text-base font-bold text-white tracking-tight leading-none whitespace-nowrap">@_afif16</span>
              </div>
            </div>

            {/* Minimalist interactive button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePlatform('instagram');
                setShowInstagramStats(!showInstagramStats);
                setActiveTab('stats');
              }}
              className="text-slate-400 hover:text-[#ff3070] text-xs font-bold transition-all px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-[#ff3070]/30 hover:bg-white/10 select-none cursor-pointer"
            >
              {showInstagramStats 
                ? (lang === 'id' ? 'Sembunyikan' : 'Hide') 
                : (lang === 'id' ? 'Lihat Statistik' : 'View Stats')}
            </button>
          </div>

          <AnimatePresence>
            {showInstagramStats && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-white/5 pt-5 w-full"
              >
                <div className="flex items-center justify-between gap-6 w-full">
                  {/* Left block for metrics */}
                  <div className="space-y-1">
                    <span className="text-3xl font-black text-white tracking-tight leading-none block">
                      {instagramInsights.followers.total}
                    </span>
                    <div className="pt-1.5 flex flex-col">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#94a3b8] font-mono">
                        {lang === 'id' ? 'TOTAL FOLLOWER' : 'TOTAL FOLLOWERS'}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 mt-0.5 block">
                        +28 {lang === 'id' ? 'perolehan baru' : 'new followers'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right block for sparkline */}
                  <div className="shrink-0">
                    <SparklineTrend 
                      data={[180, 192, 190, 202, 210, 205, 218]} 
                      platform="instagram" 
                      metricId="selector-instagram" 
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern High-Contrast Minimal Tab Bar */}
      <div className="flex justify-center gap-2 mb-10 pb-4 border-b border-white/5">
        <button
          onClick={() => setActiveTab(prev => prev === 'stats' ? null : 'stats')}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest transition-all duration-500 border hover:scale-[1.03] active:scale-[0.97] cursor-pointer ${
            activeTab === 'stats'
              ? activePlatform === 'tiktok'
                ? 'bg-[#00f2fe] border-[#00f2fe]/40 text-black shadow-[0_0_20px_rgba(0,242,254,0.35)]'
                : 'bg-[#ff3070] border-[#ff3070]/40 text-black shadow-[0_0_20px_rgba(255,48,112,0.35)]'
              : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <BarChart2 className={`w-4 h-4 ${activeTab === 'stats' ? 'animate-pulse' : 'animate-bounce'}`} />
          <span>{activeTab === 'stats' ? (lang === 'id' ? 'Sembunyikan Analitik' : 'Hide Analytics') : (lang === 'id' ? 'Tampilkan Analitik' : 'Show Analytics')}</span>
        </button>
      </div>

      {/* Tab Contents */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activePlatform}-${activeTab}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="min-h-[460px]"
        >
          {activeTab === 'stats' && (
            <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth gap-1 md:gap-2 mb-8 pb-3 border-b border-white/5 px-2">
              {[
                { id: 'overview', label: lang === 'id' ? 'Ringkasan' : 'Overview', icon: <BarChart2 size={13} /> },
                { id: 'trends', label: lang === 'id' ? 'Analisis Tren' : 'Trends', icon: <Zap size={13} /> },
                { id: 'charts', label: lang === 'id' ? 'Grafik Harian' : 'Charts', icon: <LineChart size={13} /> },
                { id: 'videos', label: activePlatform === 'tiktok' ? (lang === 'id' ? 'Performa Video' : 'Videos') : (lang === 'id' ? 'Konten Utama' : 'Posts'), icon: <Video size={13} /> },
                { id: 'audience', label: lang === 'id' ? 'Demografis' : 'Audience', icon: <Users size={13} /> }
              ].map((subTab) => {
                const isSelected = activeStatsSubTab === subTab.id;
                return (
                  <button
                    key={subTab.id}
                    onClick={() => setActiveStatsSubTab(subTab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 relative select-none cursor-pointer border ${
                      isSelected
                        ? activePlatform === 'tiktok'
                          ? 'bg-[#00f2fe]/10 border-[#00f2fe]/40 text-[#00f2fe] shadow-[0_0_15px_rgba(0,242,254,0.1)] font-extrabold'
                          : 'bg-[#ff3070]/10 border-[#ff3070]/40 text-[#ff3070] shadow-[0_0_15px_rgba(255,48,112,0.1)] font-extrabold'
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {subTab.icon}
                    <span>{subTab.label}</span>
                    {isSelected && (
                      <motion.span
                        layoutId="activeSubTabIndicator"
                        className={`absolute inset-0 rounded-full border-2 ${
                          activePlatform === 'tiktok' ? 'border-[#00f2fe]' : 'border-[#ff3070]'
                        } pointer-events-none`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* TAB 1: OVERVIEW SUMMARY */}
          {activeTab === 'stats' && activeStatsSubTab === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics Grid */}
              {activePlatform === 'tiktok' ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  <SparklineStatCard
                    title={lang === 'id' ? 'Total Follower' : 'Total Followers'}
                    value={tiktokFollowers}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        +{tiktokFollowerDiff} {lang === 'id' ? 'perolehan baru' : 'recent growth'}
                      </div>
                    }
                    icon={<Users size={32} />}
                    hoverBorderClass="hover:border-emerald-500/30 hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)]"
                    trendData={[410, 445, 490, 525, 580, 627]}
                    platform="tiktok"
                    metricId="followers"
                  />

                  <SparklineStatCard
                    title={lang === 'id' ? 'Total Penayangan Konten' : 'Featured Content Views'}
                    value={totalViewsTopVideos}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-cyan font-bold bg-cyan/15 px-2.5 py-0.5 rounded-full w-max font-mono border border-cyan/25">
                        11 {lang === 'id' ? 'Koleksi Video' : 'Featured Videos'}
                      </div>
                    }
                    icon={<Video size={32} />}
                    hoverBorderClass="hover:border-violet/30 hover:shadow-[0_15px_30px_rgba(124,58,237,0.06)]"
                    trendData={[22000, 31000, 39500, 48000, 55000, 61540]}
                    platform="tiktok"
                    metricId="views"
                  />

                  <SparklineStatCard
                    title={lang === 'id' ? 'Total Likes' : 'Total Likes'}
                    value={totalLikesTopVideos}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-pink-400 font-bold bg-pink-500/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        {Math.round(totalLikesTopVideos / tiktokVideos.length).toLocaleString()} Avg / Video
                      </div>
                    }
                    icon={<Trophy size={32} />}
                    hoverBorderClass="hover:border-pink-500/30 hover:shadow-[0_15px_30px_rgba(236,72,153,0.06)]"
                    trendData={[7800, 9200, 10500, 11800, 13100, 14200]}
                    platform="tiktok"
                    metricId="likes"
                  />

                  <SparklineStatCard
                    title={lang === 'id' ? 'Rasio Like-ke-View' : 'Like-to-View Ratio'}
                    value={12.4}
                    isPercentage={true}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-orange-400 font-bold bg-orange-500/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        {lang === 'id' ? 'Sangat Interaktif' : 'Highly Engaging'}
                      </div>
                    }
                    icon={<Zap size={32} />}
                    hoverBorderClass="hover:border-orange-500/30 hover:shadow-[0_15px_30px_rgba(249,115,22,0.06)]"
                    trendData={[9.5, 10.2, 11.1, 11.6, 12.0, 12.4]}
                    platform="tiktok"
                    metricId="engagement"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  <SparklineStatCard
                    title={lang === 'id' ? 'Total Follower IG' : 'Total IG Followers'}
                    value={instagramInsights.followers.total}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-[#ff3070] font-bold bg-[#ff3070]/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        Organic Audience
                      </div>
                    }
                    icon={<Users size={32} />}
                    hoverBorderClass="hover:border-[#ff3070]/30 hover:shadow-[0_15px_30px_rgba(255,48,112,0.06)]"
                    trendData={[110, 135, 155, 175, 198, 218]}
                    platform="instagram"
                    metricId="followers"
                  />

                  <SparklineStatCard
                    title={lang === 'id' ? 'Total Penayangan' : 'Total Engagement Views'}
                    value={instagramInsights.views.total}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-orange-400 font-bold bg-orange-500/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        {instagramInsights.views.accountsReached.toLocaleString()} Reached
                      </div>
                    }
                    icon={<Video size={32} />}
                    hoverBorderClass="hover:border-orange-500/30 hover:shadow-[0_15px_30px_rgba(249,115,22,0.06)]"
                    trendData={[12000, 15500, 19000, 23500, 27500, 31000]}
                    platform="instagram"
                    metricId="views"
                  />

                  <SparklineStatCard
                    title={lang === 'id' ? 'Interaksi Akun' : 'Account Interactions'}
                    value={instagramInsights.interactions.total}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-pink-400 font-bold bg-pink-500/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        {instagramInsights.interactions.accountsEngaged} Engaged
                      </div>
                    }
                    icon={<Heart size={32} />}
                    hoverBorderClass="hover:border-pink-550/30 hover:shadow-[0_15px_30px_rgba(236,72,153,0.06)]"
                    trendData={[380, 520, 690, 810, 960, 1100]}
                    platform="instagram"
                    metricId="interactions"
                  />

                  <SparklineStatCard
                    title={lang === 'id' ? 'Aktivitas Profil' : 'Profile Activity'}
                    value={instagramInsights.profile.activity}
                    growthBadge={
                      <div className="flex items-center gap-1.5 text-[10px] text-cyan font-bold bg-cyan/10 px-2.5 py-0.5 rounded-full w-max font-mono">
                        {instagramInsights.profile.visits} Visits
                      </div>
                    }
                    icon={<ExternalLink size={32} />}
                    hoverBorderClass="hover:border-cyan/30 hover:shadow-[0_15px_30px_rgba(6,182,212,0.06)]"
                    trendData={[45, 65, 82, 102, 125, 145]}
                    platform="instagram"
                    metricId="profile"
                  />
                </div>
              )}

              {/* Two Column Highlight Box */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="glass p-8 rounded-[2.5rem] border border-white/5 lg:col-span-2 flex flex-col justify-between">
                  {activePlatform === 'tiktok' ? (
                    <div>
                      <div className="inline-flex items-center gap-2 text-violet text-[10px] font-black uppercase tracking-widest mb-3">
                        <Camera size={12} />
                        {lang === 'id' ? 'STRATEGI CONTENT CINEMATIC' : 'CINEMATIC CONTENT STRATEGY'}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 leading-snug">
                        {lang === 'id' 
                          ? 'Memanfaatkan "Golden Sunset Hour" & Grading Estetis' 
                          : 'Capitalizing on "Golden Sunset Hour" & Cinematic Aesthetic Color'}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-6">
                        {lang === 'id'
                          ? 'Mayoritas video dengan penayangan tertinggi merupakan seri visual sunset, travel, dan drone cinematography. Dengan memadukan gradasi warna teal-and-orange yang berani serta pemilihan soundtrack yang emosional, video berhasil masuk rekomendasi (FYP) organik dengan retensi penonton yang konsisten.'
                          : 'The majority of high-performing videos feature sunsets, travel logs, and drone cinematography. By combining bold teal-and-orange grades with emotional ambient music, videos naturally trigger organic algorithmic push (FYP) with solid audience retention rates.'}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="inline-flex items-center gap-2 text-[#ff3070] text-[10px] font-black uppercase tracking-widest mb-3">
                        <Instagram size={12} />
                        {lang === 'id' ? 'HASIL KINERJA JANGKAUAN ORGANIK' : 'ORGANIC REACH EFFICIENCY'}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 leading-snug">
                        {lang === 'id' 
                          ? 'Dominasi Reels & Stories dengan Jangkauan Non-Follower Tinggi' 
                          : 'High-Velocity Engagement Driven by Reels & Active Stories'}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-6">
                        {lang === 'id'
                          ? 'Instagram Anda mencatat 31,065 total penayangan dengan jangkauan non-follower yang luar biasa tinggi (61.6%). Dari segi interaksi, konten video pendek (Reels) menguasai 52.2% diikuti oleh feed post premium (42.4%), melahirkan jembatan konversi audiens ke aktivitas kunjungan profil (513 visits) serta pengetukan link bio luar.'
                          : 'Your Instagram showcases a tremendous 31,065 total plays with an incredibly high non-follower reaches index of 61.6%. When looking at interactions, short-form Reels drives 52.2% of performance closely backed by premium Posts (42.4%), funneling organic users directly to clear profile visits (513) and key website link clicks.'}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#00f2fe]/20 border border-[#00f2fe]/40 flex items-center justify-center text-[10px] text-[#00f2fe] font-black">ID</div>
                      <div className="w-8 h-8 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center text-[10px] text-violet font-black">MY</div>
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-[10px] text-pink-400 font-black">US</div>
                    </div>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">
                      {lang === 'id' ? 'Terdistribusi secara global melampaui batas regional' : 'Audiences distributed globally across major territories'}
                    </p>
                  </div>
                </div>

                <div className="glass p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">
                      🎯 {lang === 'id' ? 'Strategi Akun Anda' : 'Your Account Strategy'}
                    </h4>
                    <ul className="space-y-4">
                      {[
                        { num: "61.6%", desc: lang === 'id' ? 'Penayangan dari non-follower (Sangat Viral)' : 'Views from non-followers (High Virality Index)' },
                        { num: "513", desc: lang === 'id' ? 'Tingkat kunjungan profil organik ke link bio' : 'Organic profile visits triggering bio actions' },
                        { num: "14.2K", desc: lang === 'id' ? 'Total tanda suka apresiasi dari penonton' : 'Consolidated likes across shortform creations' }
                      ].map((item, index) => (
                        <li key={index} className="flex gap-4 items-start">
                          <span className={`text-black px-2 py-0.5 rounded text-[10px] font-black ${activePlatform === 'tiktok' ? 'bg-[#00f2fe]' : 'bg-[#ff3070]'}`}>{item.num}</span>
                          <span className="text-gray-400 text-xs leading-normal">{item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <a
                      href={activePlatform === 'tiktok' ? "https://www.tiktok.com/@apippppokonya" : "https://www.instagram.com/_afif16"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-[10px] font-black px-4 py-2 bg-white/5 border border-white/10 hover:border-cyan/50 rounded-full transition-all uppercase tracking-widest w-full justify-center ${activePlatform === 'tiktok' ? 'text-[#00f2fe]' : 'text-[#ff3070]'}`}
                    >
                      <ExternalLink size={12} />
                      {activePlatform === 'tiktok' 
                        ? (lang === 'id' ? 'Kunjungi Akun TikTok' : 'Explore TikTok Account')
                        : (lang === 'id' ? 'Kunjungi Akun Instagram' : 'Explore Instagram Profile')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: SMART INSTANT TREND INTELLIGENCE */}
          {activeTab === 'stats' && activeStatsSubTab === 'trends' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass p-7 rounded-[2.5rem] border border-white/5 space-y-6 mb-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    {lang === 'id' ? '📈 Tren & Analisis Velositas Organik' : '📈 Trend Analysis & Analytical Velocity'}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    {lang === 'id' ? 'Pemetaan komparatif pertumbuhan dan sinyal viralitas algoritma' : 'Comparative mapping of channel growth rate and algorithmic virality'}
                  </p>
                </div>
                <div className="text-[10px] font-mono font-bold bg-[#00f2fe]/10 text-cyan border border-cyan/20 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                  {lang === 'id' ? 'DIOTOMATISASI REAL-TIME' : 'REAL-TIME ANALYTICS'}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left: Trend Indicators Group */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  {activePlatform === 'tiktok' ? (
                    <>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#00f2fe]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">FYP VIRALITY</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">+22.4%</span>
                          <span className="text-[10px] font-bold text-emerald-400">▲</span>
                        </div>
                        <span className="text-[9px] text-emerald-400/80 font-bold mt-1 block">{lang === 'id' ? 'Kecepatan FYP Naik' : 'FYP Velocity Acceleration'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#00f2fe]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">ENGAGEMENT</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">12.4%</span>
                          <span className="text-[10px] font-bold text-emerald-400">▲</span>
                        </div>
                        <span className="text-[9px] text-[#00f2fe]/80 font-bold mt-1 block">{lang === 'id' ? 'Sangat Interaktif' : 'Highly Engaging Rate'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#00f2fe]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">RETENTION</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">91.8%</span>
                          <span className="text-[10px] font-bold text-emerald-400">★</span>
                        </div>
                        <span className="text-[9px] text-violet font-bold mt-1 block">{lang === 'id' ? 'Retensi Sangat Kuat' : 'Core Retention Force'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#00f2fe]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">GROWTH RATE</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">+138</span>
                          <span className="text-[10px] font-bold text-emerald-400">▲</span>
                        </div>
                        <span className="text-[9px] text-emerald-400/80 font-bold mt-1 block">{lang === 'id' ? 'Pengikut Baru' : 'New organic fans'}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#ff3070]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">REACH CONVERSION</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">61.6%</span>
                          <span className="text-[10px] font-bold text-emerald-400">▲</span>
                        </div>
                        <span className="text-[9px] text-emerald-400/80 font-bold mt-1 block">{lang === 'id' ? 'Basis Non-pengikut' : 'Non-follower reach speed'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#ff3070]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">PROFILE VISITS</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">513</span>
                          <span className="text-[10px] font-bold text-emerald-400">▲</span>
                        </div>
                        <span className="text-[9px] text-pink-400 font-bold mt-1 block">{lang === 'id' ? 'Kunjungan Aktif' : 'Active click-backs'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#ff3070]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">INTERACTIONS</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">+12.6%</span>
                          <span className="text-[10px] font-bold text-emerald-400">▲</span>
                        </div>
                        <span className="text-[9px] text-violet font-bold mt-1 block">{lang === 'id' ? 'Interaksi Naik' : 'Interaction curve gain'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-[#ff3070]/20 hover:bg-white/[0.04] transition-all duration-300">
                        <span className="text-[9px] font-black tracking-widest text-[#94a3b8] uppercase font-mono">ORGANIC INDEX</span>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">94.2%</span>
                          <span className="text-[10px] font-bold text-pink-500">★</span>
                        </div>
                        <span className="text-[9px] text-pink-400 font-bold mt-1 block">{lang === 'id' ? 'Aliran Murni' : 'Pure organic traffic'}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Right: Analytical Text Report */}
                <div className="lg:col-span-7 bg-white/[0.015] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase font-mono tracking-wider text-slate-500">
                      {lang === 'id' ? 'KESIMPULAN METRICS & REKOMENDASI AUDIENS' : 'METRIC CONCLUSION & AUDIENCE INSIGHT'}
                    </div>
                    {activePlatform === 'tiktok' ? (
                      <div className="space-y-3.5 text-xs text-gray-400 leading-relaxed">
                        <p>
                          🔥 <strong className="text-white">{lang === 'id' ? 'Akselerasi FYP Eksponensial:' : 'Exponential FYP Acceleration:'}</strong> {lang === 'id' ? 'Rasio suka-ke-tayang sebesar ' : 'An outstanding like-to-view ratio of '}<strong className="text-[#00f2fe]">12.4%</strong> {lang === 'id' ? 'menaruh konten Anda jauh melampaui rata-rata industri (' : 'registers your creation far above the industry baseline ('}<strong className="text-gray-300">3-5%</strong>). {lang === 'id' ? 'Ini menunjukkan ketajaman estetika sunset cinematic yang sangat digemari audiens.' : 'This highlights the intense aesthetic appeal of your sunset cinematic style.'}
                        </p>
                        <p>
                          📍 <strong className="text-white">{lang === 'id' ? 'Penyebaran Regional Sempurna:' : 'Perfect Regional Reach:'}</strong> {lang === 'id' ? 'Aktivitas penonton menumpuk secara organik di kawasan Asia Tenggara (' : 'Organic traffic heavily accumulates around Southeast Asian territories ('}<strong className="text-gray-300">ID, MY</strong>). {lang === 'id' ? 'Algoritma menyebarkan konten di area serumpun karena bahasa dan keindahan alam yang saling terhubung.' : 'The algorithm boosts views regional-wide due to highly shared sunset aesthetics and cultural overlap.'}
                        </p>
                        <p>
                          ⏰ <strong className="text-white">{lang === 'id' ? 'Waktu Posting Optimal:' : 'Optimal Deployment Window:'}</strong> {lang === 'id' ? 'Menargetkan slot rilis jam ' : 'Target release slots between '}<strong className="text-white">18:00 - 20:00 WIB</strong> {lang === 'id' ? 'di hari Rabu-Jumat memicu peningkatan jangkauan instan hingga ' : 'on Wed-Fri trigger a massive '}<strong className="text-emerald-400">2.3x lipat</strong> {lang === 'id' ? 'pada jam pertama karena audiens sudah aktif beristirahat.' : 'viewership multiplier within the first golden hour.'}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3.5 text-xs text-gray-400 leading-relaxed">
                        <p>
                          📸 <strong className="text-white">{lang === 'id' ? 'Trafik Alami dari Explore:' : 'Algorithmic Explore Traffic:'}</strong> {lang === 'id' ? 'Jangkauan luar biasa tinggi (' : 'High non-subscriber distribution ('}<strong className="text-[#ff3070]">61.6% non-followers</strong>) {lang === 'id' ? 'membuktikan algoritma Reels sangat merekomendasikan video transisi Anda ke feed pemirsa global.' : 'validates that the Instagram Reels algorithm consistently pitches your travel transitions.'}
                        </p>
                        <p>
                          📈 <strong className="text-white">{lang === 'id' ? 'Konversi Kunjungan Profil:' : 'Bio Conversion Ratio:'}</strong> {lang === 'id' ? 'Sebanyak ' : 'A stellar '}<strong className="text-white">513 Profile Visits</strong> {lang === 'id' ? 'dipicu langsung dari visual Reels. Ini melahirkan jembatan konversi yang kuat menuju klik link bio.' : 'index indicates that your viewers find your visual high-end content sufficiently compelling to seek your portfolio.'}
                        </p>
                        <p>
                          ⚡ <strong className="text-white">{lang === 'id' ? 'Dominasi Reels:' : 'Reels Interactive Dominance:'}</strong> {lang === 'id' ? 'Video reels menyumbang kontribusi interaksi tertinggi (' : 'Reels command '}<strong className="text-[#ff3070]">52.2%</strong>) {lang === 'id' ? 'dari total interaksi, menandaskan fokus visual Anda sebaiknya tetap konsisten pada reels.' : 'of total interaction weight. Focus your upcoming creative blocks specifically on reels.'}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>{lang === 'id' ? 'Kepercayaan Data: Tinggi (100% Asli)' : 'Data Integrity: Certified (100% Authentic)'}</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE INDEX
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: DETAILED CONTENT WITH REAL METRICS */}
          {activeTab === 'stats' && activeStatsSubTab === 'videos' && (
            <div className="space-y-4">
              {activePlatform === 'tiktok' ? (
                <div className="glass p-7 rounded-[2.5rem] border border-white/5">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-base font-black text-white uppercase tracking-wider">
                        {lang === 'id' ? '🎬 Riwayat Konten Akun @apippppokonya' : '🎬 Account Content Performance History'}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">
                        {lang === 'id' ? 'Kelola dan sortir data berdasarkan kata kunci judul' : 'Filter and inspect performance metrics of specific uploads'}
                      </p>
                    </div>
                    {/* Search Bar Input */}
                    <input
                      type="text"
                      placeholder={lang === 'id' ? 'Cari judul video...' : 'Search video title...'}
                      value={activeVideoSearch}
                      onChange={(e) => setActiveVideoSearch(e.target.value)}
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan/40 w-full md:w-64"
                    />
                  </div>

                  {/* Responsive Scroll Table (Desktop Only) */}
                  <div className="overflow-x-auto hidden md:block">
                    <table className="w-full text-left border-collapse min-w-[650px] select-none">
                      <thead>
                        <tr className="border-b border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-black">
                          <th 
                            className="py-4 px-3 w-[40%] cursor-pointer hover:text-white transition-colors"
                            onClick={() => {
                              if (sortField === 'postTime') {
                                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                              } else {
                                setSortField('postTime');
                                setSortDirection('desc');
                              }
                            }}
                          >
                            <div className="flex items-center gap-1.5">
                              <span>{lang === 'id' ? 'Judul & Tanggal Unggah' : 'Video Title & Date'}</span>
                              {sortField === 'postTime' && (
                                <span className="text-[#00f2fe] font-mono text-[8px]">{sortDirection === 'asc' ? '▲' : '▼'}</span>
                              )}
                            </div>
                          </th>
                          <th 
                            className="py-4 px-3 text-right cursor-pointer hover:text-white transition-colors"
                            onClick={() => {
                              if (sortField === 'views') {
                                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                              } else {
                                setSortField('views');
                                setSortDirection('desc');
                              }
                            }}
                          >
                            <div className="flex items-center gap-1.5 justify-end">
                              <span>{lang === 'id' ? 'Ditonton' : 'Views'}</span>
                              {sortField === 'views' && (
                                <span className="text-[#00f2fe] font-mono text-[8px]">{sortDirection === 'asc' ? '▲' : '▼'}</span>
                              )}
                            </div>
                          </th>
                          <th 
                            className="py-4 px-3 text-right cursor-pointer hover:text-white transition-colors"
                            onClick={() => {
                              if (sortField === 'likes') {
                                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                              } else {
                                setSortField('likes');
                                setSortDirection('desc');
                              }
                            }}
                          >
                            <div className="flex items-center gap-1.5 justify-end">
                              <span>Likes</span>
                              {sortField === 'likes' && (
                                <span className="text-[#00f2fe] font-mono text-[8px]">{sortDirection === 'asc' ? '▲' : '▼'}</span>
                              )}
                            </div>
                          </th>
                          <th className="py-4 px-3 text-right">{lang === 'id' ? 'Bagikan' : 'Shares'}</th>
                          <th className="py-4 px-3 text-right">Comments</th>
                          <th className="py-4 px-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {sortedVideos.length > 0 ? (
                          sortedVideos.map((video, idx) => {
                            const isViral = video.views >= 8000;
                            const isHot = video.views >= 5000 && video.views < 8000;
                            return (
                              <tr key={idx} className="hover:bg-white/[0.015] transition-all group text-xs text-gray-300">
                                <td className="py-4 px-3">
                                  <div className="flex items-center gap-1.5">
                                    {isViral && (
                                      <span className="shrink-0 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                                        🔥 VIRAL
                                      </span>
                                    )}
                                    {isHot && (
                                      <span className="shrink-0 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-cyan/15 text-cyan border border-cyan/25">
                                        📈 HOT
                                      </span>
                                    )}
                                    {!isViral && !isHot && (
                                      <span className="shrink-0 px-2 py-0.5 rounded text-[8px] font-medium uppercase tracking-widest bg-white/[0.03] text-gray-500 border border-white/5">
                                        🚀 REACH
                                      </span>
                                    )}
                                    <div className="font-semibold text-white max-w-sm truncate whitespace-nowrap group-hover:text-cyan transition-colors ml-1">
                                      {video.title || <span className="text-gray-600 italic">{lang === 'id' ? '(Tanpa caption)' : '(No caption)'}</span>}
                                    </div>
                                  </div>
                                  <span className="text-[9px] text-gray-500 font-bold block mt-1.5 pl-[72px]">{lang === 'id' ? 'Diunggah' : 'Posted'}: {video.postTime}</span>
                                </td>
                                <td className="py-4 px-3 text-right font-bold text-cyan">{video.views.toLocaleString()}</td>
                                <td className="py-4 px-3 text-right text-pink-400 font-semibold">{video.likes.toLocaleString()}</td>
                                <td className="py-4 px-3 text-right text-gray-400">{video.shares}</td>
                                <td className="py-4 px-3 text-right text-gray-400">{video.comments}</td>
                                <td className="py-4 px-3 text-right">
                                  <a
                                    href={video.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 border border-[#00f2fe]/20 rounded-lg text-[9px] font-black text-[#00f2fe] uppercase tracking-wider transition-all"
                                  >
                                    <ExternalLink size={10} />
                                    Watch
                                  </a>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={6} className="py-12 text-center text-gray-500 text-xs">
                              {lang === 'id' ? 'Tidak ada video yang ditemukan' : 'No video matched your query'}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Elegant Mobile Cards Grid List (Visible on Mobile only, hidden on Desktop) */}
                  <div className="md:hidden space-y-3">
                    {sortedVideos.length > 0 ? (
                      sortedVideos.map((video, idx) => {
                        const isViral = video.views >= 8000;
                        const isHot = video.views >= 5000 && video.views < 8000;
                        return (
                          <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-3xl flex flex-col gap-3 relative overflow-hidden">
                            <div className="flex items-center justify-between gap-2.5">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {isViral && (
                                  <span className="shrink-0 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                                    🔥 VIRAL
                                  </span>
                                )}
                                {isHot && (
                                  <span className="shrink-0 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-cyan/15 text-cyan border border-cyan/25">
                                    📈 HOT
                                  </span>
                                )}
                                {!isViral && !isHot && (
                                  <span className="shrink-0 px-2 py-0.5 rounded text-[8px] font-medium uppercase tracking-widest bg-white/[0.03] text-gray-500 border border-white/5">
                                    🚀 REACH
                                  </span>
                                )}
                              </div>
                              <span className="text-[9px] text-gray-500 font-bold">{video.postTime}</span>
                            </div>
                            <div className="font-semibold text-white text-xs line-clamp-2 leading-relaxed">
                              {video.title || <span className="text-gray-600 italic">{lang === 'id' ? '(Tanpa caption)' : '(No caption)'}</span>}
                            </div>
                            <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-white/5 text-center">
                              <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-wider font-bold">{lang === 'id' ? 'Ditonton' : 'Views'}</p>
                                <p className="text-[10px] font-black text-[#00f2fe] mt-0.5">{video.views.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-wider font-bold">Likes</p>
                                <p className="text-[10px] font-black text-pink-400 mt-0.5">{video.likes.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-wider font-bold">{lang === 'id' ? 'Bagikan' : 'Shares'}</p>
                                <p className="text-[10px] font-bold text-white mt-0.5">{video.shares}</p>
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-500 uppercase tracking-wider font-bold">Comments</p>
                                <p className="text-[10px] font-bold text-white mt-0.5">{video.comments}</p>
                              </div>
                            </div>
                            <div className="pt-1.5 flex justify-end">
                              <a
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 border border-[#00f2fe]/20 rounded-xl text-[9px] font-bold text-[#00f2fe] uppercase tracking-wider transition-all select-none cursor-pointer"
                              >
                                <span>Watch Video</span>
                                <ExternalLink size={10} />
                              </a>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-10 text-xs text-gray-500 font-bold uppercase tracking-widest bg-white/[0.01] rounded-2xl border border-dashed border-white/5">
                        {lang === 'id' ? 'Tidak ada video yang ditemukan' : 'No video matches search query'}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="glass p-7 rounded-[2.5rem] border border-white/5">
                    <div className="mb-6 border-b border-white/5 pb-5">
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>🎯</span>
                        {lang === 'id' ? 'Konten Performa Teratas' : 'Top Performing Media'}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">
                        {lang === 'id' ? 'Grafik analitik & screenshot performa penayangan media Instagram tertinggi.' : 'Insight stats of your top performing photos on your Instagram feed.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
                      {instagramInsights.topContent.map((post, idx) => (
                        <div
                          key={idx}
                          id={`ig-top-post-${idx}`}
                          className="relative bg-[#0b0c10]/50 border border-white/5 rounded-3xl p-5 overflow-hidden group hover:border-[#ff3070]/40 hover:bg-[#12141c]/60 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            {/* Top row with Rank and Type */}
                            <div className="flex items-center justify-between mb-4">
                              <span className="px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-black font-mono text-gray-400 group-hover:text-[#ff3070] transition-colors">
                                RANK #{idx + 1}
                              </span>
                              <span className={`text-[9px] font-extrabold tracking-widest uppercase font-mono px-2 py-0.5 rounded-full ${
                                post.type === 'Carousel'
                                  ? 'bg-gradient-to-r from-pink-500/10 to-rose-500/10 text-pink-400 border border-pink-500/20'
                                  : 'bg-cyan/10 text-cyan border border-cyan/20'
                              }`}>
                                {post.type}
                              </span>
                            </div>

                            {/* Scenic Photo Thumbnail with Hover Zoom */}
                            <a
                              href={post.link}
                              target="_blank"
                              rel="noreferrer"
                              className="relative block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-tr from-black/80 to-white/5 border border-white/5 mb-4 group-hover:scale-[1.02] transition-all duration-300"
                            >
                              <img
                                src={igThumbnails[idx]}
                                alt={post.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-30 group-hover:opacity-0 transition-opacity duration-300" />
                              <div className="absolute inset-0 bg-[#ff3070]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/80 border border-white/10 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                                <ExternalLink size={10} />
                              </div>
                            </a>

                            {/* Title & Date */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-500 font-extrabold tracking-widest uppercase font-mono">{post.date}</span>
                                <a
                                  href={post.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-gray-500 hover:text-[#ff3070] transition-colors p-0.5"
                                  title={lang === 'id' ? 'Buka Postingan Asli' : 'Open Live Post'}
                                >
                                  <ExternalLink size={11} />
                                </a>
                              </div>
                              <a
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] text-gray-300 font-semibold line-clamp-2 hover:text-[#ff3070] transition-colors leading-tight min-h-[2rem] block"
                                title={post.title}
                              >
                                {post.title}
                              </a>
                            </div>

                            {/* Views Count */}
                            <div className="mt-3 bg-white/5 rounded-xl p-2.5 border border-white/5 group-hover:border-[#ff3070]/20 transition-all">
                              <div className="text-sm font-mono font-black text-[#ff3070] tracking-tight">{post.viewsLabel}</div>
                              <span className="text-[10px] text-gray-400 font-bold block mt-0.5">{lang === 'id' ? 'Penayangan' : 'Views'}</span>
                            </div>
                          </div>

                          {/* Sub-grid of detailed metrics exactly from Instagram screenshots */}
                          <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-y-2 gap-x-1">
                            <div className="flex items-center gap-1.5 text-gray-400" title="Likes">
                              <Heart size={10} className="text-rose-500 fill-rose-500/20" />
                              <span className="text-[10px] font-mono font-bold text-gray-300">{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400" title="Comments">
                              <MessageCircle size={10} className="text-cyan fill-cyan/20" />
                              <span className="text-[10px] font-mono font-bold text-gray-300">{post.comments}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400" title="Shares">
                              <Send size={10} className="text-emerald-500" />
                              <span className="text-[10px] font-mono font-bold text-gray-300">{post.shares}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-300" title="Saves">
                              <span className="text-[10px]">💾</span>
                              <span className="text-[10px] font-mono font-bold text-emerald-400">{post.saves}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Breakdown split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
                        📸 {lang === 'id' ? 'Penayangan menurut Jenis Konten' : 'Views by Content Type'}
                      </h4>
                      <div className="space-y-4">
                        {[
                          { type: lang === 'id' ? 'Stories (Cerita)' : 'Stories', color: 'bg-gradient-to-r from-pink-500 to-rose-500', val: instagramInsights.views.contentType.stories },
                          { type: 'Reels (Video Pendek)', val: instagramInsights.views.contentType.reels, color: 'bg-cyan' },
                          { type: 'Posts (Umpan/Feed)', val: instagramInsights.views.contentType.posts, color: 'bg-white/20' }
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold">
                              <span className="text-gray-300">{item.type}</span>
                              <span className="text-white font-black">{item.val}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                              <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass p-6 rounded-[2rem] border border-white/5">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
                        ❤️ {lang === 'id' ? 'Interaksi menurut Jenis Konten' : 'Interactions by Content Type'}
                      </h4>
                      <div className="space-y-4">
                        {[
                          { type: 'Reels', color: 'bg-cyan', val: instagramInsights.interactions.contentType.reels },
                          { type: 'Posts Feed', color: 'bg-[#ff3070]', val: instagramInsights.interactions.contentType.posts },
                          { type: 'Stories', color: 'bg-white/20', val: instagramInsights.interactions.contentType.stories }
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold">
                              <span className="text-gray-300">{item.type}</span>
                              <span className="text-white font-black">{item.val}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                              <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: INTERACTIONS & VIEWS TREND LINE GRAPH */}
          {activeTab === 'stats' && activeStatsSubTab === 'charts' && (
            <div className="space-y-6">
              {activePlatform === 'tiktok' ? (
                <div className="glass p-5 sm:p-7 rounded-[2rem] border border-white/5 space-y-6">
                  {/* Title & Control Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-5">
                    <div>
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>📈</span>
                        {chartMetric === 'views' 
                          ? (lang === 'id' ? 'Tren Grafik Penayangan Harian' : 'Daily Viewership Trend') 
                          : (lang === 'id' ? 'Grafik Jumlah Likes Harian' : 'Daily Likes Trend')}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">
                        {lang === 'id' 
                          ? 'Geser kursor atau sentuh layar di area bagan untuk pelacakan dinamis cepat' 
                          : 'Slide or hover anywhere across the chart canvas for ultra-fast, smooth timeline metrics'}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5 items-center">
                      {/* Sub-Time Range Selector */}
                      <div className="flex gap-1 bg-white/[0.02] border border-white/5 p-1 rounded-xl">
                        {([7, 15, 30] as const).map((days) => (
                          <button
                            key={days}
                            onClick={() => {
                              setTimeRange(days);
                              setHoveredPoint(null);
                            }}
                            className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                              timeRange === days 
                                ? 'bg-white/10 text-white font-extrabold shadow' 
                                : 'text-gray-500 hover:text-white'
                            }`}
                          >
                            {days} {lang === 'id' ? 'Hari' : 'Days'}
                          </button>
                        ))}
                      </div>

                      {/* Main Metric Toggle */}
                      <div className="flex gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-xl">
                        <button
                          onClick={() => {
                            setChartMetric('views');
                            setHoveredPoint(null);
                          }}
                          className={`px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                            chartMetric === 'views' ? 'bg-[#00f2fe] text-black shadow' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {lang === 'id' ? 'Views Video' : 'Video Views'}
                        </button>
                        <button
                          onClick={() => {
                            setChartMetric('likes');
                            setHoveredPoint(null);
                          }}
                          className={`px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                            chartMetric === 'likes' ? 'bg-[#ff3070] text-white shadow' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Likes
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart Frame */}
                  {(() => {
                    const slicedStats = dailyStats.slice(-timeRange);
                    const actualCount = slicedStats.length;
                    
                    // We generate 3 projected days at the end of display
                    const lastActualPoint = slicedStats[actualCount - 1];
                    const projDay1 = {
                      ...lastActualPoint,
                      date: lang === 'id' ? 'Proyeksi T+1' : 'Projected T+1',
                      views: Math.round(lastActualPoint.views * viralSliderVal),
                      likes: Math.round(lastActualPoint.likes * (1 + (viralSliderVal - 1) * 0.75))
                    };
                    const projDay2 = {
                      ...lastActualPoint,
                      date: lang === 'id' ? 'Proyeksi T+2' : 'Projected T+2',
                      views: Math.round(lastActualPoint.views * Math.pow(viralSliderVal, 1.4)),
                      likes: Math.round(lastActualPoint.likes * Math.pow(1 + (viralSliderVal - 1) * 0.75, 1.4))
                    };
                    const projDay3 = {
                      ...lastActualPoint,
                      date: lang === 'id' ? 'Proyeksi T+3' : 'Projected T+3',
                      views: Math.round(lastActualPoint.views * Math.pow(viralSliderVal, 1.8)),
                      likes: Math.round(lastActualPoint.likes * Math.pow(1 + (viralSliderVal - 1) * 0.75, 1.8))
                    };

                    const combined = [...slicedStats, projDay1, projDay2, projDay3];
                    const totalPoints = combined.length;

                    const maxVal = chartMetric === 'views'
                      ? Math.max(...combined.map((s) => s.views)) * 1.05
                      : Math.max(...combined.map((s) => s.likes)) * 1.05;

                    const stepX = 1000 / (totalPoints - 1);
                    const pointsCoords = combined.map((stat, i) => {
                      const val = chartMetric === 'views' ? stat.views : stat.likes;
                      const x = i * stepX;
                      const y = 200 - ((val / maxVal) * 150 + 25);
                      const isProjected = i >= actualCount;
                      return { x, y, stat, isProjected, index: i };
                    });

                    // Build line coordinates strings
                    const actualCoords = pointsCoords.slice(0, actualCount);
                    const projectedCoords = pointsCoords.slice(actualCount - 1);

                    const actualLinePath = actualCoords.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
                    const actualAreaPath = `${actualLinePath} L ${(actualCoords[actualCoords.length - 1].x).toFixed(1)} 200 L 0 200 Z`;

                    const projectedLinePath = projectedCoords.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
                    const projectedAreaPath = `${projectedLinePath} L 1000 200 L ${(projectedCoords[0].x).toFixed(1)} 200 Z`;

                    const hoveredDataPoint = hoveredPoint
                      ? pointsCoords.find(p => p.stat.date === hoveredPoint.date)
                      : null;

                    return (
                      <div className="space-y-6">
                        {/* CHART BODY CONTAINER with interactive full vertical zones */}
                        <div className="relative w-full h-64 sm:h-80 bg-black/35 rounded-2xl sm:rounded-[2rem] border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                          {/* Inner Chart */}
                          <div className="flex-grow w-full flex items-end relative">
                            {/* Native Grid background lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                              <line x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                              <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                              <line x1="0" y1="150" x2="1000" y2="150" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                              
                              <defs>
                                <linearGradient id="gradient-actual-v" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#7c3aded" stopOpacity="0.0" />
                                </linearGradient>
                                <linearGradient id="gradient-actual-l" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#ff3070" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#7c3aded" stopOpacity="0.0" />
                                </linearGradient>
                                <linearGradient id="gradient-proj-v" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
                                  <stop offset="100%" stopColor="#000" stopOpacity="0.0" />
                                </linearGradient>
                                <linearGradient id="gradient-proj-l" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
                                  <stop offset="100%" stopColor="#000" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>

                              {/* 1. ACTUAL AREA FILL AND COMPILING LINE */}
                              <motion.path
                                d={actualAreaPath}
                                fill={`url(#gradient-actual-${chartMetric === 'views' ? 'v' : 'l'})`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                              />
                              <motion.path
                                d={actualLinePath}
                                fill="none"
                                stroke={chartMetric === 'views' ? '#00f2fe' : '#ff3070'}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                              />

                              {/* 2. FUTURE COMPILING PROJECTION */}
                              <motion.path
                                d={projectedAreaPath}
                                fill={`url(#gradient-proj-${chartMetric === 'views' ? 'v' : 'l'})`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                              />
                              <motion.path
                                d={projectedLinePath}
                                fill="none"
                                stroke={chartMetric === 'views' ? '#22d3ee' : '#ec4899'}
                                strokeWidth="2.5"
                                strokeDasharray="5 5"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                              />

                              {/* Dynamic Vertical Tracking Crosshair Line */}
                              {hoveredDataPoint && (
                                <line
                                  x1={hoveredDataPoint.x}
                                  y1={0}
                                  x2={hoveredDataPoint.x}
                                  y2={200}
                                  stroke={hoveredDataPoint.isProjected ? '#ffffff' : (chartMetric === 'views' ? '#00f2fe' : '#ff3070')}
                                  strokeOpacity={hoveredDataPoint.isProjected ? 0.35 : 0.65}
                                  strokeDasharray="4 4"
                                  strokeWidth={1.5}
                                  className="transition-all duration-100"
                                />
                              )}

                              {/* Active Snapping Pulsing circle */}
                              {hoveredDataPoint && (
                                <g>
                                  <circle
                                    cx={hoveredDataPoint.x}
                                    cy={hoveredDataPoint.y}
                                    r={8}
                                    fill={hoveredDataPoint.isProjected ? '#10b981' : (chartMetric === 'views' ? '#00f2fe' : '#ff3070')}
                                    fillOpacity={0.25}
                                    className="animate-ping"
                                  />
                                  <circle
                                    cx={hoveredDataPoint.x}
                                    cy={hoveredDataPoint.y}
                                    r={4.5}
                                    fill={hoveredDataPoint.isProjected ? '#10b981' : (chartMetric === 'views' ? '#00f2fe' : '#ff3070')}
                                    stroke="white"
                                    strokeWidth="1.5"
                                  />
                                </g>
                              )}
                            </svg>

                            {/* Transparent full-height interactive hover zone columns */}
                            <div className="absolute inset-0 w-full h-full flex z-10 select-none">
                              {pointsCoords.map((p, idx) => (
                                <div
                                  key={idx}
                                  onMouseEnter={() => setHoveredPoint({ date: p.stat.date, views: p.stat.views, likes: p.stat.likes })}
                                  onMouseMove={() => setHoveredPoint({ date: p.stat.date, views: p.stat.views, likes: p.stat.likes })}
                                  onTouchStart={() => setHoveredPoint({ date: p.stat.date, views: p.stat.views, likes: p.stat.likes })}
                                  className="flex-1 h-full cursor-pointer border-r border-white/0 hover:bg-white/[0.025] transition-colors"
                                />
                              ))}
                            </div>

                            {/* Chart Tooltip Overlay */}
                            <AnimatePresence>
                              {hoveredPoint && (
                                <motion.div 
                                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  className="absolute top-4 right-4 bg-[#090a0f]/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 z-20 text-xs shadow-xl pointer-events-none select-none min-w-[140px]"
                                >
                                  <div className="flex items-center gap-1.5 justify-between">
                                    <p className="font-extrabold text-slate-400 uppercase tracking-widest text-[8px] font-mono">
                                      {hoveredPoint.date}
                                    </p>
                                    {hoveredDataPoint?.isProjected && (
                                      <span className="bg-emerald-500/10 text-emerald-400 text-[7.5px] font-black px-1.5 py-0.5 rounded-md font-mono border border-emerald-500/20 uppercase tracking-wider">
                                        Proj
                                      </span>
                                    )}
                                  </div>
                                  <div className="mt-2 space-y-1">
                                    <div className="flex justify-between items-baseline gap-4">
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wide">{lang === 'id' ? 'Views' : 'Views'}</span>
                                      <span className="font-black text-cyan font-mono text-sm">
                                        {hoveredPoint.views.toLocaleString()}
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-4">
                                      <span className="text-[10px] text-gray-500 uppercase tracking-wide">Likes</span>
                                      <span className="font-black text-pink-400 font-mono text-xs">
                                        {hoveredPoint.likes.toLocaleString()}
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* X-Axis labels */}
                          <div className="flex justify-between text-[8px] sm:text-[9.5px] font-black text-gray-400 uppercase tracking-widest pt-2 border-t border-white/5 select-none overflow-x-hidden">
                            {slicedStats.filter((_, idx) => {
                              if (timeRange === 7) return true;
                              if (timeRange === 15) return idx % 2 === 0;
                              return idx % 4 === 0;
                            }).map((stat, i) => (
                              <span key={i} className="truncate max-w-[40px] sm:max-w-none">{stat.date}</span>
                            ))}
                            {/* Projections labels explicitly split */}
                            <span className="text-emerald-400 font-bold tracking-normal italic flex items-center gap-1">
                              🔮 Proyeksi
                            </span>
                          </div>
                        </div>

                        {/* HIGHLY INTERACTIVE SCENARIO SIMULATOR BAR */}
                        <div className="bg-gradient-to-r from-cyan/5 to-pink-500/[0.03] border border-white/5 rounded-3xl p-5 sm:p-6 space-y-4">
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <h4 className="text-[11px] font-black uppercase tracking-wider text-emerald-400 font-mono">
                                  {lang === 'id' ? 'SIMULATOR POTENSI KONTEN VIRAL' : 'VIRALITY COMPOUND SIMULATOR'}
                                </h4>
                              </div>
                              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                                {lang === 'id' 
                                  ? 'Geser tuas penguat untuk meramalkan tren grafik di atas jika konten Anda viral' 
                                  : 'Adjust the algorithm multiplier boost to immediately simulate virality curves inside the dotted segment'}
                              </p>
                            </div>
                            <span className="bg-emerald-500/10 text-emerald-450 text-xs font-black px-3.5 py-1.5 rounded-2xl w-max border border-emerald-500/20 font-mono self-start sm:self-center">
                              Boost: {viralSliderVal.toFixed(1)}x
                            </span>
                          </div>

                          <div className="flex items-center gap-4 pt-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 font-mono">
                              Organic
                            </span>
                            <input
                              type="range"
                              min="1.0"
                              max="3.0"
                              step="0.1"
                              value={viralSliderVal}
                              onChange={(e) => {
                                setViralSliderVal(parseFloat(e.target.value));
                                setHoveredPoint(null);
                              }}
                              className="flex-grow accent-emerald-400 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-450 font-mono">
                              3.0x Viral
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Additional context about view distribution peaks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                      <h4 className="text-xs font-black text-cyan uppercase tracking-widest mb-2">🔥 Peak Milestone: June 3 - 4</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {lang === 'id'
                          ? 'Traffic harian meledak mencapai 4,035 penonton (3 Juni) dan 2,765 penonton (4 Juni), dipicu dari reaksi viral video sunset di TikTok.'
                          : 'Daily organic video traffic exploded to over 4,035 views on June 3rd followed by 2,765 on June 4th, ignited by viral sunset algorithm trigger.'}
                      </p>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                      <h4 className="text-xs font-black text-pink-400 uppercase tracking-widest mb-2">🎯 Engagement Spike: June 12</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {lang === 'id'
                          ? 'Merupakan puncak penayangan tertinggi berikutnya dengan total performa 4,916 Views & 612 Likes. Hal ini menunjukkan tren retensi follower lama yang kuat.'
                          : 'Marked the next major milestone with 4,916 Views & 612 Likes in a single day. This illustrates high-density compounding reach.'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass p-6 rounded-[2rem] border border-white/5">
                  <div className="mb-6">
                    <h3 className="text-base font-black text-white uppercase tracking-wider">
                      🕒 {lang === 'id' ? 'Jam-jam Paling Aktif Follower (Instagram)' : 'Instagram Follower Most Active Times'}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {lang === 'id' ? 'Histogram grafik distribusi pembagian jam aktivitas aktif follower Anda (Sesuai statistik real 218 follower)' : 'Detailed distribution of your 218 followers activity times directly mapped from layout data'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {instagramInsights.followers.activeTimes.map((item, idx) => {
                      const maxActive = Math.max(...instagramInsights.followers.activeTimes.map(a => a.activeCount));
                      const percent = (item.activeCount / maxActive) * 100;
                      const isPeak = item.time === '3am' || item.time === '6am' || item.time === '12am';
                      return (
                        <div key={idx} className="flex items-center gap-4 text-xs">
                          <span className="w-10 font-bold text-gray-400 text-right uppercase tracking-wider">{item.time}</span>
                          <div className="flex-grow h-7 bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden flex items-center px-1 relative">
                            <motion.div
                              className={`h-5 rounded-md transition-all ${
                                isPeak 
                                  ? 'bg-gradient-to-r from-[#ff3070] to-[#ff8040] shadow-md' 
                                  : 'bg-white/10'
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${percent}%` }}
                              transition={{ duration: 1, delay: idx * 0.05 }}
                            />
                            <span className="absolute left-14 text-[10px] font-black text-white">{item.activeCount} active followers</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: AUDIENCE DEMOGRAPHICS */}
          {activeTab === 'stats' && activeStatsSubTab === 'audience' && (
            <div className="space-y-6">
              {activePlatform === 'tiktok' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Gender Split Card */}
                  <div className="glass p-7 rounded-[2.5rem] border border-white/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6">
                        👫 {lang === 'id' ? 'Distribusi Demografi Gender' : 'Audience Gender Split'}
                      </h3>
                      
                      {/* Visual Radial Ring Split representation */}
                      <div className="flex justify-center my-6">
                        <div className="relative w-36 h-36 flex items-center justify-center">
                          <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="4.5" />
                            {/* Male segment: 70% */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-cyan" strokeWidth="4.5" strokeDasharray="70 100" strokeLinecap="round" />
                            {/* Female segment: 29% offsetted */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-violet" strokeWidth="4.5" strokeDasharray="29 100" strokeDashoffset="-70" strokeLinecap="round" />
                            {/* Other segment: 1.0% offsetted */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/20" strokeWidth="4.5" strokeDasharray="1 100" strokeDashoffset="-99" strokeLinecap="round" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xl font-black text-white">70%</div>
                            <div className="text-[8px] text-gray-500 font-black uppercase tracking-wider">{lang === 'id' ? 'Laki-Laki' : 'Male segment'}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 border-t border-white/5 pt-6">
                      {genderDistribution.map((gender, index) => (
                        <div
                          key={index}
                          className="relative space-y-1 cursor-pointer group select-none"
                          onMouseEnter={() => setHoveredGender(index)}
                          onMouseLeave={() => setHoveredGender(null)}
                        >
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${gender.name === 'Male' ? 'bg-cyan' : gender.name === 'Female' ? 'bg-violet' : 'bg-white/20'}`} />
                              <span className="text-gray-300 font-bold group-hover:text-white transition-colors">
                                {gender.name === 'Male' ? (lang === 'id' ? 'Laki-Laki' : 'Male') : gender.name === 'Female' ? (lang === 'id' ? 'Perempuan' : 'Female') : (lang === 'id' ? 'Lainnya' : 'Other')}
                              </span>
                            </div>
                            <span className="font-black text-white">{gender.percentage}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${gender.name === 'Male' ? 'bg-cyan' : gender.name === 'Female' ? 'bg-violet' : 'bg-white/20'}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${gender.value * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>

                          <AnimatePresence>
                            {hoveredGender === index && (
                              <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="absolute bottom-full mb-2 left-0 right-0 z-20 p-3 bg-neutral-950/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-md pointer-events-none"
                              >
                                <div className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                  {getGenderContext(gender.name, lang === 'id')}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Territory split Card */}
                  <div className="glass p-7 rounded-[2.5rem] border border-white/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6">
                        🌍 {lang === 'id' ? 'Negara Asal / Teritori Penonton' : 'Top Target Territories & Audience Origin'}
                      </h3>
                      
                      <div className="space-y-4">
                        {territoriesDistribution.map((t, idx) => (
                          <div
                            key={idx}
                            className="relative space-y-1 cursor-pointer group select-none"
                            onMouseEnter={() => setHoveredTerritory(idx)}
                            onMouseLeave={() => setHoveredTerritory(null)}
                          >
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px] group-hover:text-white transition-colors">{t.name}</span>
                              <span className="font-black text-cyan">{t.percentage}</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${idx === 0 ? 'bg-cyan' : idx === 1 ? 'bg-violet' : 'bg-white/20'}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${t.value * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                              />
                            </div>

                            <AnimatePresence>
                              {hoveredTerritory === idx && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                  transition={{ duration: 0.15 }}
                                  className="absolute bottom-full mb-2 left-0 right-0 z-20 p-3 bg-neutral-950/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-md pointer-events-none"
                                >
                                  <div className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                    {getTerritoryContext(t.name, lang === 'id')}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[10px] text-gray-500 font-bold border-t border-white/5 pt-6 mt-6 leading-relaxed">
                      * {lang === 'id' 
                        ? 'ID (Indonesia) mendominasi distribusi organik utama (68.2%), disusul oleh Malaysia, Amerika Serikat, Australia, Kamboja, dan sisanya 30.1% menyebar global.' 
                        : 'ID (Indonesia) dominates organic distribution channels with index of 68.2%, followed by Malaysia, USA, Australia, and Cambodia.'}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Views split: Followers vs Non */}
                  <div className="glass p-7 rounded-[2.5rem] border border-white/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6">
                        👥 {lang === 'id' ? 'Pembagian Jenis Penonton (Views)' : 'Viewers Spread (Views Share)'}
                      </h3>
                      
                      <div className="flex justify-center my-6">
                        <div className="relative w-36 h-36 flex items-center justify-center">
                          <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="4.5" />
                            {/* Non Followers: 61.6% */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-[#ff3070]" strokeWidth="4.5" strokeDasharray="61.6 100" strokeLinecap="round" />
                            {/* Followers: 38.4% offsetted */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/30" strokeWidth="4.5" strokeDasharray="38.4 100" strokeDashoffset="-61.6" strokeLinecap="round" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xl font-black text-white">61.6%</div>
                            <div className="text-[8px] text-gray-500 font-black uppercase tracking-wider">{lang === 'id' ? 'Bukan Pengikut' : 'Non-Followers'}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-white/5">
                      {/* Non-followers row */}
                      <div
                        className="relative space-y-1 cursor-pointer group select-none"
                        onMouseEnter={() => setHoveredInstaView(0)}
                        onMouseLeave={() => setHoveredInstaView(null)}
                      >
                        <div className="flex justify-between items-center text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff3070]" />
                            <span className="font-bold group-hover:text-white transition-colors">
                              {lang === 'id' ? 'Bukan Pengikut (Non-followers)' : 'Non-followers'}
                            </span>
                          </div>
                          <span className="font-semibold text-white">61.6%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-[#ff3070]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "61.6%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <AnimatePresence>
                          {hoveredInstaView === 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full mb-2 left-0 right-0 z-20 p-3 bg-neutral-950/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-md pointer-events-none"
                            >
                              <div className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                {lang === 'id'
                                  ? 'Menunjukkan tingkat penemuan konten yang sangat tinggi oleh pengguna baru melalui tab Instagram Reels dan Explore secara organik.'
                                  : 'Indicates extremely high content discoverability among new users via organic Instagram Reels and Explore feeds.'}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Followers row */}
                      <div
                        className="relative space-y-1 cursor-pointer group select-none"
                        onMouseEnter={() => setHoveredInstaView(1)}
                        onMouseLeave={() => setHoveredInstaView(null)}
                      >
                        <div className="flex justify-between items-center text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white/30" />
                            <span className="font-bold group-hover:text-white transition-colors">
                              {lang === 'id' ? 'Pengikut (Followers)' : 'Followers'}
                            </span>
                          </div>
                          <span className="font-semibold text-white">38.4%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-white/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: "38.4%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <AnimatePresence>
                          {hoveredInstaView === 1 && (
                            <motion.div
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full mb-2 left-0 right-0 z-20 p-3 bg-neutral-950/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-md pointer-events-none"
                            >
                              <div className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                {lang === 'id'
                                  ? 'Menunjukkan jangkauan pemirsa setia yang stabil dan kunjungan profil yang berulang dari followers Anda.'
                                  : 'Shows strong recurring view baseline from your followers on direct feed and story deliveries.'}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Interactions split: Followers vs Non */}
                  <div className="glass p-7 rounded-[2.5rem] border border-white/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6">
                        💬 {lang === 'id' ? 'Pembagian Interaksi (Interactions Share)' : 'Interactions Spread (Engagement)'}
                      </h3>
                      
                      <div className="flex justify-center my-6">
                        <div className="relative w-36 h-36 flex items-center justify-center">
                          <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="4.5" />
                            {/* Non Followers: 57.5% */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-orange-500" strokeWidth="4.5" strokeDasharray="57.5 100" strokeLinecap="round" />
                            {/* Followers: 42.5% offsetted */}
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/30" strokeWidth="4.5" strokeDasharray="42.5 100" strokeDashoffset="-57.5" strokeLinecap="round" />
                          </svg>
                          <div className="text-center">
                            <div className="text-xl font-black text-white">57.5%</div>
                            <div className="text-[8px] text-gray-500 font-black uppercase tracking-wider">{lang === 'id' ? 'Bukan Pengikut' : 'Non-Followers'}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-white/5">
                      {/* Non-followers row */}
                      <div
                        className="relative space-y-1 cursor-pointer group select-none"
                        onMouseEnter={() => setHoveredInstaInteract(0)}
                        onMouseLeave={() => setHoveredInstaInteract(null)}
                      >
                        <div className="flex justify-between items-center text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500" />
                            <span className="font-bold group-hover:text-white transition-colors">
                              {lang === 'id' ? 'Bukan Pengikut (Non-followers)' : 'Non-followers'}
                            </span>
                          </div>
                          <span className="font-semibold text-white">57.5%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-orange-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "57.5%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <AnimatePresence>
                          {hoveredInstaInteract === 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full mb-2 left-0 right-0 z-20 p-3 bg-neutral-950/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-md pointer-events-none"
                            >
                              <div className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                {lang === 'id'
                                  ? 'Menunjukkan tingginya kontribusi non-pengikut yang menyukai atau membagikan video setelah viral di Explore.'
                                  : 'Highlights strong conversion rate where non-followers like, comment, or share your clips after discoverability.'}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Followers row */}
                      <div
                        className="relative space-y-1 cursor-pointer group select-none"
                        onMouseEnter={() => setHoveredInstaInteract(1)}
                        onMouseLeave={() => setHoveredInstaInteract(null)}
                      >
                        <div className="flex justify-between items-center text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white/30" />
                            <span className="font-bold group-hover:text-white transition-colors">
                              {lang === 'id' ? 'Pengikut (Followers)' : 'Followers'}
                            </span>
                          </div>
                          <span className="font-semibold text-white">42.5%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-white/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: "42.5%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <AnimatePresence>
                          {hoveredInstaInteract === 1 && (
                            <motion.div
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full mb-2 left-0 right-0 z-20 p-3 bg-neutral-950/95 border border-white/10 rounded-xl shadow-xl backdrop-blur-md pointer-events-none"
                            >
                              <div className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                {lang === 'id'
                                  ? 'Interaksi mendalam yang sangat stabil dari basis pengikut setia Anda yang selalu aktif terlibat.'
                                  : 'Exceptional deep engagement from followers who consistently check and interact with your latest updates.'}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

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

const ProcessStep = ({ step, title, desc, icon, color, index }: { step: string, title: string, desc: string, icon: React.ReactNode, color: string, index: number }) => {
  const isCyan = color === 'cyan';
  
  return (
    <motion.div 
      className={`glass card-3d-kinetic p-8 rounded-[2.5rem] group shrink-0 w-[260px] md:w-auto snap-center border overflow-hidden relative ${
        isCyan ? 'border-cyan/5 hover:border-cyan/35 hover:shadow-[0_0_40px_rgba(0,242,254,0.06)]' : 'border-violet/5 hover:border-violet/35 hover:shadow-[0_0_40px_rgba(124,58,237,0.06)]'
      }`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Absolute giant watermarked number backdrop */}
      <div className={`absolute -bottom-6 -right-6 text-[110px] font-black pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.1] group-hover:scale-105 transition-all duration-500 ${
        isCyan ? 'text-cyan' : 'text-violet'
      } font-mono tracking-tighter leading-none`}>
        {step}
      </div>

      {/* Radiant glow spots */}
      <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
        isCyan ? 'bg-cyan' : 'bg-violet'
      }`} />

      {/* Styled Icon wrapper */}
      <div className={`p-4 rounded-2xl w-fit mb-8 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
        isCyan 
          ? 'bg-cyan/10 text-cyan border border-cyan/20 shadow-[0_0_20px_rgba(0,242,254,0.05)]' 
          : 'bg-violet/10 text-violet border border-violet/20 shadow-[0_0_20px_rgba(124,58,237,0.05)]'
      }`}>
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>

      {/* Metadata */}
      <p className={`text-[10px] font-black uppercase tracking-[0.25em] mb-2 font-mono ${
        isCyan ? 'text-cyan/60 group-hover:text-cyan' : 'text-violet-light/60 group-hover:text-violet-light'
      } transition-colors`}>
        SOP STAGE {step}
      </p>

      {/* Title */}
      <h4 className="text-lg font-black text-white mb-3.5 tracking-tight group-hover:text-cyan transition-colors">
        {title}
      </h4>

      {/* Description */}
      <p className="text-xs text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
};

const getRoleTags = (roleKey: string) => {
  switch (roleKey) {
    case 'journey.role1':
      return ['UI/UX', 'Figma', 'Next.js', 'Generative AI', 'Deploy'];
    case 'journey.role2':
      return ['DaVinci Resolve', 'CapCut Pro', 'Video Editing', 'Reels', 'Social Strategy'];
    case 'journey.role3':
      return ['Wedding Videos', 'Travel Logs', 'Drone Shots', 'Corporate Content'];
    case 'journey.role4':
      return ['Aceh Documentary', 'Premiere Pro', 'Post-Production', 'Culture Film'];
    default:
      return [];
  }
};

const TimelineItem = ({ year, title, role, descs, align }: { year: string, title: string, role: string, descs: string[], align: 'left' | 'right' }) => {
  const { t } = useTranslation();
  const tags = getRoleTags(role);
  const isCurrent = year.includes('Sekarang') || year.includes('Present');

  return (
    <motion.div 
      className={`relative w-full mb-12 md:mb-16 flex flex-col pl-10 pr-4 ${
        align === 'right' 
          ? 'md:items-end md:pl-0 md:pr-[52%]' 
          : 'md:items-start md:pr-0 md:pl-[52%]'
      } text-left`}
      initial={{ opacity: 0, x: align === 'right' ? -50 : 50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Central Connector Node with Active Radar Glow */}
      <div className={`absolute top-6 w-4 h-4 rounded-full border-4 border-black z-10 transition-all duration-300 hover:scale-150 ${
        isCurrent 
          ? 'bg-[#00f2fe] shadow-[0_0_20px_rgba(0,242,254,1)]' 
          : 'bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]'
        } md:left-1/2 md:-translate-x-1/2 left-[8px]`}
      >
        {isCurrent && (
          <span className="absolute inset-0 rounded-full bg-[#00f2fe]/50 animate-ping" style={{ transform: 'scale(1.8)' }} />
        )}
      </div>
      
      {/* Obsidian Card Container */}
      <div className="glass p-8 rounded-[2.5rem] w-full border border-white/5 hover:border-cyan/30 hover:shadow-[0_15px_45px_rgba(0,242,254,0.06)] hover:-translate-y-1 transition-all duration-300 max-w-xl relative overflow-hidden group">
        {/* Subtle internal glowing backdrop */}
        <div className={`absolute -inset-px bg-gradient-to-br ${isCurrent ? 'from-cyan/5 to-transparent' : 'from-violet/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        
        {/* Date / Duration Indicator wrapper */}
        <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
          isCurrent ? 'bg-cyan/15 text-cyan border border-cyan/25' : 'bg-white/5 text-gray-400 border border-white/5'
        }`}>
          {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />}
          {year}
        </div>
        
        <h3 className="font-extrabold text-white text-xl tracking-tight mb-1 group-hover:text-cyan transition-colors">{title}</h3>
        <p className="text-[11px] font-semibold text-violet-light uppercase tracking-wider mb-4 italic">{t(role)}</p>
        
        {/* Key Achievements/Bullet Points - Left-aligned for premium typography flow */}
        <ul className="space-y-3 mb-5 text-left">
          {descs.map((d, i) => (
            <li key={i} className="text-[11px] text-gray-400 flex gap-2.5 items-start justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 shrink-0 shadow-[0_0_6px_#7c3aed]" />
              <span className="leading-relaxed font-light text-left">{t(d)}</span>
            </li>
          ))}
        </ul>

        {/* Dynamic Skill/Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 justify-start">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[9px] font-bold text-gray-400 bg-white/[0.03] border border-white/5 rounded-md px-2 py-0.5 tracking-wider uppercase group-hover:border-cyan/10 group-hover:text-gray-300 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
