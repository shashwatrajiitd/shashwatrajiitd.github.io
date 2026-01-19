'use client'

import { useState } from 'react'

const CODE_CONTENT = `class ShashwatRaj:
    """
    Autonomous GenAI Systems Engineer & Multi-Agent Orchestrator
    Turning business constraints into scalable, production-grade AI magic.
    Currently running live at Purplle.com — Mumbai, IN
    """

    def __init__(self):
        self.handle          = "Shaz"                     # or Shashwat Raj
        self.role            = "Software Developer"
        self.email           = "shashwatrajiitd@gmail.com"
        self.github          = "shashwatrajiitd"
        self.portfolio       = "shashwatrajiitd.github.io"

        self.education = {
            "degree": "B.Tech Mathematics & Computing",
            "institute": "IIT Delhi",
            "period": "Oct 2021 – May 2025",
            "cgpa": "7.0 / 10"
        }

        self.current_stack = {
            "core":          ["Python", "SQL", "C/C++", "TypeScript"],
            "cloud":         ["AWS", "GCP"],
            "genai_ml":      [
                "LLMs / VLMs", "Stable Diffusion", "LoRA Fine-Tuning",
                "Google Gemini", "OpenAI", "RAG", "Agentic Systems"
            ],
            "ops_infra":     ["MLOps", "Microservices", "Docker", "Kafka", "Git"],
            "paradigms":     ["OOP", "API Design", "Distributed Systems"]
        }

    @property
    def current_mission(self) -> str:
        """Primary thread – GenAI Creative Automation Platform @ Purplle"""
        return (
            "Architect & deploy autonomous multi-agent swarm:\\n"
            "• Ideation Agents       → campaign concepts & directions\\n"
            "• Generation Agents     → high-fidelity statics via LLM/VLM + diffusion\\n"
            "• Moderation Agents     → vision-based brand compliance & ranking\\n"
            "Scaling to 11+ app surfaces • building Creative Generation Service\\n"
            "Roadmap: personalization, PDP automation, Master Content Bank (MCB)"
        )

    def previous_threads(self) -> list:
        """Notable commits / internships"""
        return [
            {
                "repo": "Samsung R&D – Ads Revenue Platform",
                "duration": "May – Jul 2024",
                "summary": (
                    "Real-time forecasting + anomaly detection pipeline\\n"
                    "Hybrid classical regression + PyTorch transformer time-series\\n"
                    "Residual-based anomaly flagging on Kafka streams\\n"
                    "Boosted observability under high-throughput loads"
                )
            }
        ]

    @property
    def unlocked_achievements(self) -> list[str]:
        return [
            "JEE Advanced & Mains 2021 – 99.89 percentile",
            "NTSE Scholar 2019 – National Talent Search",
            "Samsung SWC – Advanced Software Competency (1st attempt)",
            "Regional Mathematical Olympiad – Merit Certificate ×2"
        ]

    def greet(self) -> str:
        return (
            f"Hey fellow dev! I'm {self.handle}, a {self.role} from IIT Delhi.\\n"
            f"Currently orchestrating multi-agent GenAI pipelines in production.\\n"
            f"Stack: {', '.join(self.current_stack['genai_ml'][:6])} + MLOps & microservices.\\n"
            f"Previously debugged revenue anomalies with PyTorch transformers @ Samsung R&D.\\n"
            f"Always down to fork repos, review PRs, or pair on scalable AI infra."
        )


# Render introduction when the module is "run"
if __name__ == "__main__":
    me = ShashwatRaj()
    print(me.greet())`

const TERMINAL_OUTPUT = `Hey fellow dev! I'm Shaz, a Software Developer from IIT Delhi.
Currently orchestrating multi-agent GenAI pipelines in production.
Stack: LLMs / VLMs, Stable Diffusion, LoRA Fine-Tuning, Google Gemini, OpenAI, RAG + MLOps & microservices.
Previously debugged revenue anomalies with PyTorch transformers @ Samsung R&D.
Always down to fork repos, review PRs, or pair on scalable AI infra.`

export function CodeEditor() {
  const [expanded, setExpanded] = useState(false)
  const [running, setRunning] = useState(false)
  const [terminalVisible, setTerminalVisible] = useState(false)
  const [terminalContent, setTerminalContent] = useState('')

  const handleRun = () => {
    if (running) return
    setRunning(true)
    setTerminalVisible(true)
    setTerminalContent('')

    // Animate terminal output
    const lines = TERMINAL_OUTPUT.split('\n')
    let currentLine = 0

    const addLine = () => {
      if (currentLine < lines.length) {
        setTerminalContent((prev) => prev + (prev ? '\n' : '') + lines[currentLine])
        currentLine++
        setTimeout(addLine, 150)
      } else {
        setRunning(false)
      }
    }

    addLine()
  }

  const handleKill = () => {
    setRunning(false)
    setTerminalVisible(false)
    setTerminalContent('')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_CONTENT).then(() => {
      // TODO: Show toast notification
    })
  }

  return (
    <>
      <div className={`code-editor ${expanded ? 'expanded' : ''}`}>
        <div className="code-editor-header">
          <span className="code-editor-title">Python</span>
          <div className="code-editor-controls">
            {running && (
              <button
                className="code-control-btn kill-btn"
                onClick={handleKill}
                title="Kill / Stop Execution"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
            <button
              className="code-control-btn expand-btn"
              onClick={() => setExpanded(!expanded)}
              title={expanded ? 'Collapse' : 'Expand'}
            >
              <i className={expanded ? 'fas fa-compress' : 'fas fa-bars'}></i>
            </button>
            {!running && (
              <button
                className="code-control-btn play-btn"
                onClick={handleRun}
                title="Run Code"
              >
                <i className="fas fa-play"></i>
              </button>
            )}
            <button
              className="code-control-btn copy-btn"
              onClick={handleCopy}
              title="Copy Code"
            >
              <i className="far fa-copy"></i>
              <span className="copy-text">Copy</span>
            </button>
          </div>
        </div>
        <div className="code-content-wrapper">
          <pre className="code-content">
            <code className="language-python">{CODE_CONTENT}</code>
          </pre>
        </div>
      </div>
      {terminalVisible && (
        <div className="terminal-output">
          <div className="terminal-header">
            <span className="terminal-title">Terminal</span>
            <span className={`terminal-status ${running ? 'running' : ''}`}>
              {running ? 'Running...' : 'Completed'}
            </span>
          </div>
          <div className="terminal-content">
            {terminalContent.split('\n').map((line, i) => (
              <div key={i} className="terminal-line">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
