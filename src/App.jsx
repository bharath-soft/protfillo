import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Moon, Sun, X, Download, Sparkles, BriefcaseBusiness, GraduationCap, Award, Send, CheckCircle2, AlertCircle, MapPin, ChevronUp, Layers3, ShieldCheck, ChartNoAxesCombined } from 'lucide-react'
import { profile, skills, projects, experience } from './data/portfolio'

const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Achievements', 'Contact']
const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .55, ease: [.22, 1, .36, 1] } } }
const resumeFile = 'Bharath-T-Resume.pdf'

function ResumeDownload({ className, children }) {
  return <a className={className} href={profile.resume} download={resumeFile}>{children}</a>
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} variants={fade} initial={reduced ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: .14 }} transition={{ delay }}>{children}</motion.div>
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  useEffect(() => {
    const onScroll = () => {
      let current = 'Home'
      nav.forEach(n => { const el = document.getElementById(n.toLowerCase()); if (el && el.getBoundingClientRect().top <= 150) current = n })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = (n) => { document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className="header"><div className="nav-wrap">
    <button className="brand" onClick={() => go('Home')} aria-label="Go to home"><span className="brand-mark">B<span>.</span></span><span>BHARATH<span className="brand-muted">.DEV</span></span></button>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{nav.map(n => <button key={n} className={active === n ? 'nav-link active' : 'nav-link'} onClick={() => go(n)}>{n}</button>)}</nav>
    <div className="nav-actions"><button className="icon-btn theme-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button><ResumeDownload className="nav-resume"><Download size={15}/> Resume</ResumeDownload><button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div>
  </div></header>
}

function SectionTitle({ eyebrow, title, accent, description }) { return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title} <span className="gradient-text">{accent}</span></h2>{description && <p>{description}</p>}</div> }

function Hero() {
  const roles = ['Software Developer', 'Java Programmer', 'Full Stack Developer', 'AI Enthusiast', 'Problem Solver']
  const [role, setRole] = useState(0)
  useEffect(() => { const t = setInterval(() => setRole(v => (v + 1) % roles.length), 2300); return () => clearInterval(t) }, [])
  return <section id="home" className="hero section-shell">
    <motion.figure className="hero-portrait" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
      <img src="/assets/bharath.jpg" alt="Portrait of Bharath T" />
      <figcaption>Bharath T · Dindigul</figcaption>
    </motion.figure>
    <div className="hero-copy"><motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><span className="pulse-dot"/> Open to internships and entry-level roles</motion.div>
      <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>Hello, I'm</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>Bharath <span className="gradient-text">T.</span></motion.h1>
      <div className="role-line"><span className="role-prefix">&gt;</span><AnimatePresence mode="wait"><motion.span key={role} className="typed-role" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -9 }} transition={{ duration: .25 }}>{roles[role]}</motion.span></AnimatePresence><span className="caret"/></div>
      <p className="hero-description">A Computer Science and Engineering student who enjoys turning ideas into useful digital experiences — one thoughtful line of code at a time.</p>
      <div className="hero-ctas"><a className="btn btn-primary" href="#projects">See my work <ArrowUpRight size={17}/></a><ResumeDownload className="btn btn-secondary"><Download size={16}/> Download resume</ResumeDownload></div>
      <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a><span className="social-rule"/><span>Dindigul, Tamil Nadu</span></div>
    <motion.aside className="now-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>
      <p className="now-label">A few things about me</p>
      <ul>
        <li><span>Studying</span> B.E. Computer Science at R.V.S. College of Engineering, graduating 2027</li>
        <li><span>Based in</span> Dindigul, Tamil Nadu</li>
        <li><span>Working with</span> Java, JavaScript, and web interfaces</li>
        <li><span>Looking for</span> An internship where I can keep building</li>
      </ul>
      <ResumeDownload className="now-resume"><Download size={15}/> Download resume</ResumeDownload>
    </motion.aside>
    </div>
    <a className="scroll-cue" href="#about"><span>Scroll</span><ArrowDown size={15}/></a>
  </section>
}

function About() { return <section id="about" className="section-shell section-pad"><SectionTitle eyebrow="About" title="A little about" accent="me."/><div className="about-grid"><Reveal className="about-main"><p className="about-lead">I'm a Computer Science and Engineering student at <strong>R.V.S. College of Engineering</strong>, Dindigul, graduating in 2027.</p><p>I'm passionate about software development and enjoy exploring how technology can solve everyday problems. My learning journey spans programming, web development, software testing, networking, cybersecurity and emerging areas such as artificial intelligence.</p><p>I value hands-on practice, clear problem-solving and continuous improvement. Alongside technical learning, student leadership and event coordination have helped me build communication, collaboration and ownership.</p><div className="about-location"><MapPin size={16}/> Dindigul, Tamil Nadu, India <span/> <span className="mono">B.E. CSE · 2027</span></div></Reveal><Reveal className="about-side" delay={.12}><div className="quote-card"><Sparkles className="quote-icon"/><p>Curiosity turns questions into experiments. Consistency turns experiments into skills.</p><span>MY LEARNING PHILOSOPHY</span></div><div className="mini-stats"><div><strong>2027</strong><span>EXPECTED GRADUATION</span></div><div><strong>∞</strong><span>THINGS TO LEARN</span></div></div></Reveal></div></section> }

function Skills() { return <section id="skills" className="section-shell section-pad section-tint"><SectionTitle eyebrow="Skills" title="Tools of the" accent="trade." description="A growing toolkit built through coursework, guided training and hands-on projects."/><div className="skills-grid">{skills.map((s,i)=><Reveal key={s.group} delay={i*.04}><article className="skill-card"><div className="skill-card-head"><span className="skill-icon">{s.icon}</span><span className="skill-index">0{i+1}</span></div><h3>{s.group}</h3><div className="skill-tags">{s.items.map(item=><span key={item}>{item}</span>)}</div><div className="skill-bottom"><span className="skill-dashes"><i/><i/><i/><i/><i/></span><span>CONTINUOUSLY LEARNING</span></div></article></Reveal>)}</div><p className="skills-note"><span className="note-dot"/> Skill cards show areas of experience and learning, not self-assigned proficiency scores.</p></section> }

function ProjectVisual({ type }) { const Icon = type === 'finance' ? ChartNoAxesCombined : type === 'milk' ? Layers3 : type === 'expense' ? BriefcaseBusiness : ShieldCheck; return <div className={`project-visual visual-${type}`}><div className="visual-grid-lines"/><div className="visual-window"><div className="visual-window-bar"><i/><i/><i/><span>{type === 'milk' ? 'records.ui' : type === 'vehicle' ? 'maintenance.app' : `${type}.dashboard`}</span></div><div className="visual-window-content"><div className="mock-side"><b/><i/><i/><i/><i/></div><div className="mock-main"><div className="mock-heading"/><div className="mock-cards"><i/><i/><i/></div><div className="mock-chart"><span/><span/><span/><span/><span/><span/><span/></div><div className="mock-row"/><div className="mock-row short"/></div></div></div><div className="visual-icon"><Icon size={24}/></div></div> }

function Projects() {
  const [filter, setFilter] = useState('All'); const [selected, setSelected] = useState(null)
  const filters = ['All', 'Web', 'Exploration']
  const shown = useMemo(() => projects.filter(p => filter === 'All' || p.category === filter || p.status === filter), [filter])
  return <section id="projects" className="section-shell section-pad"><SectionTitle eyebrow="Projects" title="Things I've" accent="worked on." description="A selection of projects and concepts from my development journey. Open a card to see the available details."/><div className="project-toolbar"><span className="project-count">{String(shown.length).padStart(2,'0')} PROJECTS</span><div className="filter-pills" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'filter-active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="projects-grid">{shown.map((p,i)=><Reveal key={p.id} delay={i*.06}><article className="project-card"><button className="project-open" onClick={()=>setSelected(p)} aria-label={`View ${p.title} details`}><ProjectVisual type={p.visual}/><div className="project-info"><div className="project-meta"><span>{p.category}</span><span className="project-status">{p.status}</span></div><h3>{p.title}<ArrowUpRight size={17}/></h3><p>{p.description}</p><div className="project-tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div></div></button><div className="project-links"><button onClick={()=>setSelected(p)}>View details <ArrowRight size={14}/></button><span>{p.github ? <a href={p.github} target="_blank" rel="noreferrer">GitHub <Github size={13}/></a> : <span className="link-pending">Repository not supplied</span>}</span></div></article></Reveal>)}</div>
    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><motion.div className="project-modal" initial={{opacity:0,y:20,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12}} role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close details"><X/></button><ProjectVisual type={selected.visual}/><span className="eyebrow">{selected.status} / PROJECT NOTES</span><h3 id="modal-title">{selected.title}</h3><p>{selected.details}</p><div className="project-tags">{selected.stack.map(t=><span key={t}>{t}</span>)}</div><div className="modal-foot"><span className="link-pending">Public links not yet verified</span><button className="btn btn-secondary" onClick={()=>setSelected(null)}>Close</button></div></motion.div></motion.div>}</AnimatePresence>
  </section>
}

function Experience() { return <section id="experience" className="section-shell section-pad section-tint"><SectionTitle eyebrow="Experience" title="Experience &" accent="training." description="Internships and training experiences that have shaped my technical foundation."/><div className="timeline">{experience.map((e,i)=><Reveal key={`${e.company}-${i}`} className="timeline-item" delay={i*.07}><div className="timeline-marker"><span/></div><article className="timeline-card"><div className="timeline-top"><span className="timeline-type">{e.type}</span><span className="timeline-date">{e.date}</span></div><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.note}</p><div className="project-tags">{e.tags.map(t=><span key={t}>{t}</span>)}</div></article></Reveal>)}</div><p className="experience-note">Note: Internship and training entries above follow the details supplied for this portfolio. Please reconcile overlapping June 2026 dates and confirm all certificates before public launch.</p></section> }

function Education() { return <section id="education" className="section-shell section-pad"><SectionTitle eyebrow="Education" title="Education &" accent="credentials."/><div className="education-grid"><Reveal><article className="education-card"><div className="education-icon"><GraduationCap size={25}/></div><span className="eyebrow">EXPECTED GRADUATION · 2027</span><h3>Bachelor of Engineering</h3><h4>Computer Science and Engineering</h4><p>R.V.S. College of Engineering</p><div className="education-location"><MapPin size={14}/> Dindigul, Tamil Nadu</div><span className="education-line"/></article></Reveal><Reveal delay={.1}><article className="certificate-card"><div className="certificate-top"><Award size={24}/><span>CERTIFICATES</span></div><h3>Verified credentials</h3><p>Certificate previews will appear here once the original certificate files are added. This keeps the portfolio free of placeholder or fabricated credentials.</p><div className="certificate-empty"><div className="certificate-outline"><Award size={30}/><span>ADD YOUR CERTIFICATE PDF / IMAGE</span></div></div><span className="certificate-foot">NO UNVERIFIED CERTIFICATES DISPLAYED</span></article></Reveal></div></section> }

function Achievements() { return <section id="achievements" className="section-shell section-pad section-tint"><SectionTitle eyebrow="Outside class" title="Leadership &" accent="involvement." description="Learning to lead, collaborate and bring people together outside the classroom."/><div className="achievement-grid"><Reveal><article className="achievement-card featured-achievement"><div className="achievement-icon"><Award size={23}/></div><span className="eyebrow">STUDENT LEADERSHIP</span><h3>College Committee President</h3><p>Leadership experience involving student coordination, communication and supporting college activities.</p><div className="achievement-bottom"><span>OWNERSHIP</span><span>TEAMWORK</span><span>COMMUNICATION</span></div></article></Reveal><Reveal delay={.1}><article className="achievement-card"><div className="achievement-icon"><BriefcaseBusiness size={23}/></div><span className="eyebrow">EVENT MANAGEMENT</span><h3>10+ college events</h3><p>Event planning and coordination experience, including working with students and faculty to support successful programmes.</p><div className="achievement-number">10<span>+</span></div></article></Reveal><Reveal delay={.2}><article className="achievement-card"><div className="achievement-icon"><Layers3 size={23}/></div><span className="eyebrow">TEAM COORDINATION</span><h3>Turning plans into action</h3><p>Experience coordinating teams, managing responsibilities and keeping activities moving toward shared goals.</p><div className="achievement-bottom"><span>PLAN</span><ArrowRight size={14}/><span>COORDINATE</span><ArrowRight size={14}/><span>DELIVER</span></div></article></Reveal></div></section> }

function Resume() { return <section className="section-shell section-pad resume-section"><Reveal className="resume-panel"><div className="resume-copy"><span className="eyebrow">Resume</span><h2>The longer version<br/><span className="gradient-text">is a two-page PDF.</span></h2><p>Education, projects, training and the rest of the story, in one file you can keep.</p><ResumeDownload className="btn btn-primary"><Download size={16}/> Download resume</ResumeDownload><span className="resume-file-note">{resumeFile}</span></div><div className="resume-preview"><iframe className="resume-pdf" src={`${profile.resume}#toolbar=0&navpanes=0`} title="Resume PDF preview" loading="lazy"/></div></Reveal></section> }

function Contact() {
  const [form,setForm] = useState({name:'',email:'',subject:'',message:''}); const [state,setState] = useState('idle'); const [feedback,setFeedback] = useState('')
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = async e => {
    e.preventDefault(); setFeedback('')
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.subject.trim() || form.message.trim().length < 10) { setState('error'); setFeedback('Please complete every field and enter a valid email. Your message must be at least 10 characters.'); return }
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (!endpoint || endpoint.includes('your-form-id')) { setState('error'); setFeedback('The contact form is not connected yet. Add your Formspree endpoint to the .env file to enable delivery.'); return }
    setState('loading')
    try { const res = await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(form)}); const data = await res.json(); if (!res.ok) throw new Error(data?.errors?.[0]?.message || 'Message could not be sent. Please try again.'); setState('success'); setFeedback('Thanks! Your message has been sent successfully.'); setForm({name:'',email:'',subject:'',message:''}) }
    catch(err) { setState('error'); setFeedback(err.message || 'Something went wrong. Please try again later.') }
  }
  return <section id="contact" className="section-shell section-pad contact-section"><SectionTitle eyebrow="Contact" title="Have a good idea?" accent="Let's talk." description="Whether it's an opportunity, a collaboration or just a conversation about technology — my inbox is open."/><div className="contact-grid"><Reveal className="contact-info"><a className="contact-link-card" href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail/></span><span><small>EMAIL ME</small><strong>{profile.email}</strong></span><ArrowUpRight/></a><a className="contact-link-card" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin/></span><span><small>CONNECT ON LINKEDIN</small><strong>linkedin.com/in/bharath-t</strong></span><ArrowUpRight/></a><a className="contact-link-card" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github/></span><span><small>EXPLORE MY CODE</small><strong>github.com/BHARATH-eng-cs</strong></span><ArrowUpRight/></a><div className="contact-location"><MapPin size={16}/><span>{profile.location}</span></div></Reveal><Reveal delay={.1}><form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><label>YOUR NAME<input name="name" value={form.name} onChange={update} placeholder="Enter your name" autoComplete="name" required/></label><label>EMAIL ADDRESS<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" required/></label></div><label>SUBJECT<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" required/></label><label>MESSAGE<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about it..." rows="5" required/></label><div className="form-bottom"><span className="form-privacy">Your details are used only to respond to your message.</span><button className="btn btn-primary" type="submit" disabled={state==='loading'}>{state==='loading'?'Sending...':'Send message'} <Send size={15}/></button></div>{feedback && <div className={`form-feedback ${state}`} role="status">{state==='success'?<CheckCircle2 size={17}/>:<AlertCircle size={17}/>} {feedback}</div>}</form></Reveal></div></section>
}

function Footer() { const [show,setShow] = useState(false); useEffect(()=>{const f=()=>setShow(window.scrollY>500);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]); return <><footer className="footer"><div className="footer-inner"><a className="brand" href="#home"><span className="brand-mark">B<span>.</span></span><span>BHARATH<span className="brand-muted">.DEV</span></span></a><p>A portfolio for Bharath T, made in Dindigul.</p><div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Bharath T. All rights reserved.</span><span>MADE IN TAMIL NADU, INDIA <span className="footer-heart">✦</span></span></div></footer><AnimatePresence>{show&&<motion.button className="back-top" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ChevronUp/></motion.button>}</AnimatePresence></> }

export default function App() {
  const [theme,setTheme] = useState(()=>localStorage.getItem('bharath-theme') || 'dark')
  useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('bharath-theme',theme)},[theme])
  return <div className="app"><Header theme={theme} setTheme={setTheme}/><main><Hero/><About/><Skills/><Projects/><Experience/><Education/><Achievements/><Resume/><Contact/></main><Footer/></div>
}
