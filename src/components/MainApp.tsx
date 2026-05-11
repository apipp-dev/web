import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, MessageCircle, Instagram, Video, ChevronDown, Send, ArrowRight, Zap, Camera, Monitor, Smartphone, Globe, Target, Clock, Trophy, Share2, Layers } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { Counter } from './Counter';
import { ColorComparison } from './ColorComparison';

export const MainApp = () => {
  const { lang, t, setLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 'stats', label: 'nav.stats' },
    { id: 'about', label: 'nav.about' },
    { id: 'tools', label: 'nav.tools' },
    { id: 'work', label: 'nav.works' },
    { id: 'workflow', label: 'nav.workflow' },
    { id: 'journey', label: 'nav.experience' },
    { id: 'pricing', label: 'nav.pricing' },
    { id: 'faq', label: 'nav.faq' },
  ];

  return (
    <div className="min-h-screen">
      {/* Liquid Background */}
      <div className="liquid-bg" aria-hidden="true" />

      {/* Dynamic Island */}
      <motion.div 
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[9980] hidden md:block bg-black/88 backdrop-blur-3xl saturate-200 border border-white/10 rounded-[3rem] px-5 py-2 shadow-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-2 font-black text-[10px] text-gray-400 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_var(--color-cyan)] animate-pulse" />
          Active · Ready to create
        </div>
      </motion.div>

      {/* Navigation Dock */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9970]">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-44 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-0.5"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-cyan hover:bg-cyan/10 transition-all"
                >
                  {t(item.label)}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-white/5 flex gap-2 justify-center pb-1">
                <button 
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest transition-all ${lang === 'id' ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'text-gray-500 hover:text-cyan'}`}
                >
                  ID
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest transition-all ${lang === 'en' ? 'bg-cyan/20 text-cyan border border-cyan/40' : 'text-gray-500 hover:text-cyan'}`}
                >
                  EN
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-black/85 backdrop-blur-3xl saturate-200 border border-white/15 rounded-[3rem] px-6 py-3 shadow-2xl flex items-center gap-6">
          <span className="text-[14px] font-black tracking-tighter uppercase whitespace-nowrap">AFIF<span className="text-violet-light">.</span></span>
          <button 
            onClick={toggleMenu}
            className="p-1 rounded-full text-gray-400 hover:text-cyan transition-all"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#contact" className="bg-violet hover:bg-violet-700 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-[0.1em] uppercase transition-all shadow-lg shadow-violet/30 whitespace-nowrap">
            {t('nav.cta')}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778100942/CIne_Test_V2_m64jqe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55 -z-10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_60%,rgba(124,58,237,0.15)_0%,transparent_65%)]" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-[10px] font-black text-cyan uppercase tracking-[.2em]">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_var(--color-cyan)] animate-pulse" />
            {t('hero.sub')}
          </div>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-[9rem] font-black mb-8 tracking-tighter leading-[.85] uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          EDIT. <span className="gradient-text shine-anim">ELEVATE.</span><br />REPEAT.
        </motion.h1>

        <motion.p 
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-14 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div 
          className="flex gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#work" className="bg-violet hover:bg-violet-700 text-white px-9 py-4 rounded-2xl font-black text-sm transition-all shadow-xl shadow-violet/20">
            {t('hero.btn_work')}
          </a>
          <a href="#contact" className="glass px-9 py-4 rounded-2xl font-black text-sm hover:bg-white/10 transition-all">
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
            <StatCard icon={<Video size={14} />} label="TikTok Views" target={53600} color="cyan" trend="+159.1% tren naik" />
            <StatCard icon={<Trophy size={14} />} label="TikTok Likes" target={5372} color="pink" trend="~10% like rate" />
            <StatCard icon={<Globe size={14} />} label="IG Reach" target={7252} color="violet" trend="61.9% Non-followers" />
            <StatCard icon={<Monitor size={14} />} label="IG Total Views" target={30783} color="orange" trend="Stories + Reels" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass p-7 rounded-3xl">
               <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black text-white uppercase tracking-widest">🏆 Top TikTok Videos</h3>
                <span className="text-[9px] font-black text-cyan px-2 py-1 rounded-full bg-cyan/10">@apippppokonya</span>
              </div>
              <div className="space-y-6">
                <ProgressBar label="#1 · #sunset #fyp" views={9660} percentage={100} likes="1,134" color="cyan" />
                <ProgressBar label="#2 · #aesthetic #photography #bandung" views={8691} percentage={90} likes="1,114" color="cyan" />
                <ProgressBar label="#3 · lupa up #fyp #sunset" views={6885} percentage={71} likes="468" color="violet" />
              </div>
            </div>
            <div className="glass p-7 rounded-3xl">
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
              <div className="space-y-3">
                <DistributionItem label="Stories" percentage="56.0%" color="bg-cyan" />
                <DistributionItem label="Reels" percentage="43.2%" color="bg-violet" />
                <DistributionItem label="Posts" percentage="0.8%" color="bg-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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

      {/* Collaborative Process Section */}
      <section id="workflow" className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[.35em] text-violet mb-4">{t('process.subtitle')}</p>
            <h2 className="text-3xl font-black uppercase tracking-tight">Our <span className="gradient-text shine-anim">Collaborative</span> Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessStep step="01" title={t('process.q1')} desc={t('process.a1')} icon={<Clock />} color="cyan" />
            <ProcessStep step="02" title={t('process.q2')} desc={t('process.a2')} icon={<Zap />} color="violet" />
            <ProcessStep step="03" title={t('process.q3')} desc={t('process.a3')} icon={<Layers />} color="cyan" />
            <ProcessStep step="04" title={t('process.q4')} desc={t('process.a4')} icon={<Send />} color="violet" />
          </div>
        </div>
      </section>

      {/* Project Workflow Section */}
      <section id="project-workflow" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-cyan mb-4">{t('workflow.subtitle')}</p>
          <h2 className="text-3xl font-black uppercase tracking-tight">Project <span className="gradient-text shine-anim">Workflow</span></h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-4">{t('workflow.desc')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {[1,2,3,4,5,6,7].map((i) => (
            <motion.div 
              key={i}
              className="glass p-6 rounded-2xl group hover:scale-[1.02] transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">{`0${i}`} {t(`workflow.step${i}`).split(' ').slice(1).join(' ')}</div>
              <p className="text-[10px] text-gray-400 leading-relaxed">{t(`workflow.desc${i}`)}</p>
            </motion.div>
          ))}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6">
         <div className="text-center mb-14">
          <p className="slabel text-cyan mb-4">{t('pricing.subtitle')}</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight">Our Rate <span className="gradient-text shine-anim">Card</span></h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-4">{t('pricing.desc')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-14 py-5 rounded-2xl font-black text-sm hover:bg-cyan hover:scale-105 transition-all duration-300 uppercase tracking-tight shadow-2xl shadow-white/10"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              {t('contact.btn')}
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

const StatCard = ({ icon, label, target, color, trend }: { icon: React.ReactNode, label: string, target: number, color: string, trend: string }) => (
  <div className="glass p-6 rounded-3xl relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-${color}/5 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
    <div className="flex items-center gap-2 mb-4">
      <div className={`p-2.5 rounded-xl bg-${color}/10 text-${color}`}>
        {icon}
      </div>
      <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.15em]">{label}</span>
    </div>
    <div className={`text-3xl md:text-4xl font-black text-${color}/90`}>
      <Counter target={target} />
    </div>
    <div className="flex items-center gap-2 mt-3">
      <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
        {trend}
      </span>
    </div>
  </div>
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

const PricingCard = ({ title, price, unit, description, featured, color }: { title: string, price: string, unit?: string, description: string, featured?: boolean, color: string }) => (
  <motion.div 
    className={`glass p-10 rounded-[2.5rem] flex flex-col h-full relative transition-all duration-500 ${featured ? 'border-violet/40 bg-violet/5 scale-105 shadow-2xl shadow-violet/10' : 'hover:scale-[1.02]'}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {featured && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-lg">
        Best Value
      </div>
    )}
    <h3 className={`text-base font-black uppercase mb-3 tracking-widest text-${color}`}>{title}</h3>
    <div className="flex items-baseline gap-1 mb-4">
      <div className="text-4xl font-black text-white">{price}</div>
      {unit && <span className="text-[11px] text-gray-600 font-bold uppercase tracking-widest">{unit}</span>}
    </div>
    <p className="text-[11px] text-gray-400 leading-relaxed mb-10 flex-grow" dangerouslySetInnerHTML={{ __html: description }} />
    <button className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${featured ? 'bg-violet hover:bg-violet-700 text-white shadow-xl shadow-violet/25' : 'glass hover:bg-white/10 text-white'}`}>
      Select Plan
    </button>
  </motion.div>
);

const ContactLink = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-3 p-6 glass rounded-2xl group transition-all"
    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
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
    className="glass p-8 rounded-[2rem] group hover:scale-[1.02] transition-all duration-500"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className={`p-4 rounded-xl w-fit mb-6 bg-${color}/10 text-${color} group-hover:rotate-12 transition-transform`}>
      {icon}
    </div>
    <h4 className="text-[10px] font-black text-gray-400 uppercase mb-3 tracking-[.2em]">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed italic">{desc}</p>
  </motion.div>
);

const WorkItem = ({ videoUrl, tag, title, desc, color }: { videoUrl: string, tag: string, title: string, desc: string, color: string }) => (
  <motion.div 
    className="glass p-6 rounded-[2.5rem] flex flex-col gap-6 group hover:scale-[1.01]"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className="aspect-[9/16] rounded-[1.8rem] overflow-hidden bg-black/20 relative">
      <video className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" muted loop playsInline autoPlay src={videoUrl} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="px-2">
      <span className={`text-[9px] font-black uppercase tracking-[.25em] text-${color}`}>{tag}</span>
      <h3 className="text-2xl font-black text-white mt-2 mb-3">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed font-light">{desc}</p>
    </div>
  </motion.div>
);

const ProcessStep = ({ step, title, desc, icon, color }: { step: string, title: string, desc: string, icon: React.ReactNode, color: string }) => (
  <motion.div 
    className="glass p-8 rounded-[2rem] hover:scale-[1.02] transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className={`p-3.5 rounded-xl w-fit mb-6 bg-${color}/10 text-${color}`}>
      {React.cloneElement(icon as React.ReactElement, { size: 18 })}
    </div>
    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">STEP {step}</p>
    <h4 className="text-base font-black text-white mb-3 tracking-tight">{title}</h4>
    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">{desc}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, role, descs, align }: { year: string, title: string, role: string, descs: string[], align: 'left' | 'right' }) => {
  const { t } = useTranslation();
  return (
    <motion.div 
      className={`relative w-full mb-10 md:mb-16 flex flex-col ${align === 'right' ? 'md:items-end md:pr-[50%] pr-4 md:text-right' : 'md:items-start md:pl-[50%] pl-4 md:text-left'} text-left`}
      initial={{ opacity: 0, x: align === 'right' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
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
