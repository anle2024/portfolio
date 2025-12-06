import React from 'react'
import ExperienceCard from './components/ExperienceCard'
import ProjectCard from './components/ProjectCard'
import SkillGroup from './components/SkillGroup'
import EducationCard from './components/EducationCard'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App(): JSX.Element {
  return (
    <div className="app">
      <header className="top-nav" id="top">
        <div className="nav-left" onClick={() => scrollTo('top')}>
          <div className="name">An Le</div>
          <div className="title">Software Engineer</div>
        </div>
        <nav className="nav-right">
          <a onClick={() => scrollTo('about')}>About</a>
          <a onClick={() => scrollTo('experience')}>Experience</a>
          <a onClick={() => scrollTo('projects')}>Projects</a>
          <a onClick={() => scrollTo('skills')}>Skills</a>
          <a onClick={() => scrollTo('education')}>Education</a>
          <a onClick={() => scrollTo('contact')}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-top">
              <div className="hero-text">
                <h1>An Le</h1>
                <p className="lead">SWE @ Amazon | 2× Amazon Intern | Backend & Distributed Systems | Fullstack</p>

                <div className="hero-actions">
                  <button className="btn primary" onClick={() => scrollTo('projects')}>See Projects</button>
                  <a className="btn ghost" href="https://github.com/anle2024" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="btn ghost" href="https://www.linkedin.com/in/anle0901/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>

              <div className="hero-photo">
                <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="An Le smiling on a carousel" />
              </div>
            </div>

          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="card">
            <p>Software engineer focused on backend and infrastructure development, building event-driven microservices, distributed workflow automation, and fault-tolerant pipelines that support 100K+ MAUs and 1.6M employees across 5K+ sites.</p>

            <div className="stack-list">
              <div className="stack-row">
                <span className="stack-label">Languages:</span>
                <span className="stack-value">Python, Java, Kotlin, C/C++, TypeScript/JavaScript, SQL, Go, Shell/Bash</span>
              </div>
              <div className="stack-row">
                <span className="stack-label">Frameworks:</span>
                <span className="stack-value">Spring Boot, .NET, Node.js/Express, React, Kafka, gRPC, GraphQL, FastAPI, Django/Flask, Ktor</span>
              </div>
              <div className="stack-row">
                <span className="stack-label">Databases:</span>
                <span className="stack-value">DynamoDB, PostgreSQL, MongoDB, Redis, MySQL</span>
              </div>
              <div className="stack-row">
                <span className="stack-label">Cloud / Infra:</span>
                <span className="stack-value">AWS, GCP, Azure, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, GitLab)</span>
              </div>
              <div className="stack-row">
                <span className="stack-label">Distributed Systems:</span>
                <span className="stack-value">Event-driven services, fault tolerance, horizontal scaling, concurrency, high-throughput pipelines</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="timeline">
            <ExperienceCard
              role="Software Engineer"
              company="Amazon"
              location="United States"
              period="Dec 2023 — Present"
              highlight={true}
              bullets={[
                'Built and operated event-driven microservices, distributed workflows, and fault-tolerant pipelines supporting 100K+ MAUs, 1.6M employees, and 5,000+ sites across AWS.',
              ]}
            />

            <ExperienceCard
              role="Software Engineer Intern"
              company="Amazon"
              location="United States"
              period="Summer 2023"
              bullets={[
                'Delivered Slack notification pipelines for 2,000+ internal channels and optimized DynamoDB + GraphQL paths to serve 20,000+ daily incident queries with lower latency (Lambda, API Gateway, DynamoDB, GraphQL).',
              ]}
            />

            <ExperienceCard
              role="Software Engineer Intern"
              company="Amazon"
              location="United States"
              period="Summer 2022"
              bullets={[
                'Implemented large-scale data-cleanup workflows that removed 100,000+ invalid records weekly, improving downstream ML training data quality (Kotlin, AWS).',
              ]}
            />
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid projects-grid">
            <ProjectCard
              name="Distributed Key-Value Store"
              description="Built a fault-tolerant distributed key-value store with versioned writes, distributed locking, and retry-safe semantics handling 1,000+ concurrent client operations under simulated network failures."
              tech={["Python", "Sockets", "Concurrent workers", "Versioned storage", "Fault-tolerance algorithms"]}
              link="https://github.com/anle2024/distributed-key-value-store"
            />

            <ProjectCard
              name="Distributed MapReduce Framework"
              description="Implemented a MapReduce framework with automatic task reassignment and worker crash recovery, processing multi-file datasets in parallel across 3–10 workers with 100% job completion under failure injection."
              tech={["Python", "RPC (TCP)", "Coordinator/Worker", "Parallel processing", "Fault-tolerant scheduling"]}
              link="https://github.com/anle2024/Distributed-Map-Reduce-Application"
            />

            <ProjectCard
              name="Pickleball Tracker API"
              description="Developed a FastAPI backend for tracking pickleball games and scores, achieving 100% test coverage, automated CI/CD, and stable API performance across 200+ simulated match records."
              tech={["Python", "FastAPI", "SQLAlchemy", "SQLite", "Docker", "GitHub Actions", "Pytest"]}
              link="https://github.com/anle2024/pickleball-tracker-app"
            />
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid skills-grid">
            <SkillGroup title="Languages" skills={["Python", "Java", "Kotlin", "C", "C++", "TypeScript", "Go", "SQL"]} />
            <SkillGroup title="Frameworks" skills={["Spring Boot", "Node.js", "React", "GraphQL", "Kafka", "gRPC"]} />
            <SkillGroup title="Databases" skills={["DynamoDB", "PostgreSQL", "MongoDB", "Redis"]} />
            <SkillGroup title="Cloud & Infra" skills={["AWS", "Docker", "Kubernetes", "CI/CD"]} />
            <SkillGroup title="Distributed Systems" skills={["Event-driven services", "Fault tolerance", "Scaling", "Streaming", "ML infra"]} />
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-list">
            <EducationCard
              school="DePauw University"
              degree="B.A. in Computer Science and Mathematics"
              period="2020 — 2023"
            />

            <EducationCard
              school="Harvard University"
              degree="Summer School Coursework in Computer Science"
              period="Summer 2022"
            />
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card contact-card">
            <p className="intro">Happy to chat!</p>

            <div className="contact-list">
              <div className="contact-row">
                <span className="label">Email:</span>
                <a href="mailto:anmle.work@gmail.com">anmle.work@gmail.com</a>
              </div>

              <div className="contact-row">
                <span className="label">GitHub:</span>
                <a href="https://github.com/anle2024" target="_blank" rel="noreferrer">github.com/anle2024</a>
              </div>

              <div className="contact-row">
                <span className="label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/anle0901/" target="_blank" rel="noreferrer">linkedin.com/in/anle0901</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} An Le — Built with React + Vite</div>
      </footer>
    </div>
  )
}
