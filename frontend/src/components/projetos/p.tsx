"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel admin, gateway de pagamento, e sistema de inventário em tempo real. Performance otimizada com SSR e edge caching.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gestão de tarefas com colaboração em tempo real, drag-and-drop, e integrações com Slack e GitHub. Sistema de notificações push.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard de analytics com visualizações interativas, relatórios customizáveis e export de dados. Processamento de milhões de eventos diários.",
    image: "/projects/dashboard.jpg",
    technologies: ["Vue.js", "D3.js", "Python", "ClickHouse", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const otherProjects = [
  {
    title: "CLI Dev Tools",
    description: "Conjunto de ferramentas CLI para automação de tarefas de desenvolvimento.",
    technologies: ["Node.js", "Commander", "Chalk"],
    githubUrl: "#",
  },
  {
    title: "React Component Library",
    description: "Biblioteca de componentes React acessíveis e customizáveis.",
    technologies: ["React", "TypeScript", "Storybook"],
    githubUrl: "#",
    npmUrl: "#",
  },
  {
    title: "API Gateway",
    description: "Gateway de API com rate limiting, autenticação e logging centralizado.",
    technologies: ["Go", "Redis", "Docker"],
    githubUrl: "#",
  },
  {
    title: "VS Code Extension",
    description: "Extensão para VS Code com snippets e atalhos para React e TypeScript.",
    technologies: ["TypeScript", "VS Code API"],
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-primary text-sm mb-4">{"// projetos"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trabalhos <span className="text-primary">Selecionados</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Uma seleção de projetos que demonstram minha experiência em desenvolvimento 
            fullstack, desde a concepção até a entrega.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden rounded-xl border border-border ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20 font-mono">
                    {`0${index + 1}`}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-card rounded-full border border-border hover:border-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-card rounded-full border border-border hover:border-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={index % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                <span className="font-mono text-primary text-sm">Projeto em Destaque</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Outros Projetos</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary">
            <Github className="w-4 h-4 mr-2" />
            Ver mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
