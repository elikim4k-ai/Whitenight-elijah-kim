document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  "About": "소개",
  "Research": "전문 분야",
  "Projects": "프로젝트",
  "Hackathon": "해커톤",
  "Writing": "글",
  "Education": "학력",
  "Contact": "연락처",
  "Top": "맨 위",
  "Page sections": "페이지 섹션 바로가기",
  "AGENTIC AI × QUANTUM × GRID": "에이전틱 AI × 양자 × 그리드",
  "Agentic AI & Quantum Solution Architect.": "에이전틱 AI 및 양자 솔루션 아키텍트.",
  "Designing AI agents, agentic workflows and quantum solutions for data science, machine learning, Optimization, Cybersecurity and Grid systems, informed by GIS and Remote Sensing.": "GIS와 원격탐사를 바탕으로 데이터 과학, 머신러닝, 최적화, 사이버보안, 그리드 시스템을 위한 AI 에이전트, 에이전틱 워크플로 및 양자 솔루션을 설계합니다.",
  "GitHub ↗": "GitHub ↗",
  "LinkedIn ↗": "LinkedIn ↗",
  "01 — ABOUT": "01 — 소개",
  "GIS & Remote Sensing": "GIS 및 원격탐사",
  "GIS & Remote Sensing meet Agentic AI.": "GIS 및 원격탐사와 에이전틱 AI의 결합.",
  "My work brings GIS and Remote Sensing together with AI, Data Science and Machine Learning. I design AI Agents and Agentic Workflows that turn complex data into useful decisions.": "GIS 및 원격탐사를 AI, 데이터 과학, 머신러닝과 결합합니다. 복잡한 데이터를 유용한 의사결정으로 바꾸는 AI 에이전트와 에이전틱 워크플로를 설계합니다.",
  "My focus spans": "주요 분야는",
  "Optimization, Cybersecurity, Agentic AI, Quantum and Grid": "최적화, 사이버보안, 에이전틱 AI, 양자, 그리드",
  "with GIS and Remote Sensing informing how I approach real-world data and systems.": "이며 GIS와 원격탐사를 실제 데이터와 시스템에 적용합니다.",
  "02 — RESEARCH": "02 — 전문 분야",
  "Areas of interest.": "전문 분야.",
  "AI systems, data, optimization and secure infrastructure.": "AI 시스템, 데이터, 최적화 및 보안 인프라.",
  "AI Agents & Agentic AI": "AI 에이전트 및 에이전틱 AI",
  "Data Science & Machine Learning": "데이터 과학 및 머신러닝",
  "Optimization & Quantum": "최적화 및 양자",
  "Cybersecurity & Grid": "사이버보안 및 그리드",
  "QUANTUM SYSTEMS": "양자 시스템",
  "AI, Optimization & Grid": "AI, 최적화 및 그리드",
  "03 — PROJECTS": "03 — 프로젝트",
  "Projects I've Been Involved With.": "프로젝트",
  "QUANTUM + AI / STARTUP": "양자 + AI / 스타트업",
  "An AI platform combining AI Agents, Agentic AI and Quantum Optimization for data-driven workflows.": "데이터 기반 워크플로를 위한 AI 에이전트, 에이전틱 AI, 양자 최적화를 결합한 AI 플랫폼.",
  "Sample Work": "프로젝트 보기",
  "QUANTUM OPTIMIZATION": "양자 최적화",
  "AI Agent Assignment Optimization": "AI 에이전트 할당 최적화",
  "AI Agents solve constrained assignment problems using Optimization, QUBO/Ising formulations and Quantum approaches.": "AI 에이전트가 최적화, QUBO/Ising 수식화, 양자 접근법으로 제약 할당 문제를 풉니다.",
  "QUANTUM / AI WORKFLOWS": "양자 / AI 워크플로",
  "Preparing for Quantum Hardware": "양자 시스템 준비",
  "A practical guide to Quantum systems, their Optimization capabilities and integration with AI workflows.": "양자 시스템과 최적화 기능, AI 워크플로 통합을 위한 실용 안내입니다.",
  "CYBERSECURITY / POST-QUANTUM": "사이버보안 / 양자",
  "Post-Quantum Cryptography": "양자내성암호",
  "Cybersecurity research on post-quantum cryptography and quantum-resistant systems.": "양자내성암호와 양자내성 시스템에 관한 사이버보안 연구입니다.",
  "QUANTUM + AI / SMART GRID": "양자 + AI / 그리드",
  "Smart Grid": "스마트 그리드",
  "Applying AI, GIS, Remote Sensing and Quantum Optimization to Grid expansion and distribution operations.": "AI, GIS, 원격탐사, 양자 최적화를 그리드 확장과 배전 운영에 적용합니다.",
  "MULTI-AGENT AI / LLM ORCHESTRATION": "멀티 에이전트 AI / 에이전틱 워크플로",
  "Agentic AI System": "에이전틱 AI 시스템",
  "An Agentic Workflow connecting AI Agents and language models through a unified interface.": "AI 에이전트와 언어 모델을 통합 인터페이스로 연결하는 에이전틱 워크플로입니다.",
  "CYBERSECURITY / GRID": "사이버보안 / 그리드",
  "Secure Grid Systems": "안전한 그리드 시스템",
  "A Grid security concept using secure distribution management, microgrids and resilient operations.": "보안 배전 관리, 마이크로그리드, 회복력 있는 운영을 활용하는 그리드 보안 구상입니다.",
  "04 — HACKATHON": "04 — 해커톤",
  "Ideas into": "아이디어를",
  "prototypes.": "프로토타입으로.",
  "CHRISTCHURCH, NEW ZEALAND": "뉴질랜드 크라이스트처치",
  "NZ AI Hackathon": "NZ AI 해커톤",
  "ECHO AI Platform": "ECHO AI 플랫폼",
  "· Winner Team": "· 우승 팀",
  "Role: Team Lead": "역할: 팀 리드",
  "GLOBAL": "글로벌",
  "QUANTUM + AI CHALLENGE": "양자 + AI 챌린지",
  "Global Quantum + AI Challenge": "글로벌 양자 + AI 챌린지",
  "Proposal projects developed with colleagues at UPM, Spain.": "스페인 UPM 동료들과 개발한 제안 프로젝트입니다.",
  "Certa / VW Group": "Certa / 폭스바겐 그룹",
  "CIQ Expand / E.ON": "CIQ Expand / E.ON",
  "Credit Card Fraud / HSBC": "신용카드 사기 / HSBC",
  "FluxTrain / Airbus": "FluxTrain / Airbus",
  "QUASAR / Cleveland Clinic": "QUASAR / 클리블랜드 클리닉",
  "UC IGNITION CHALLENGE": "UC 이그니션 챌린지",
  "Quantum-Optimized Agentic AI Orchestration System": "양자 최적화 에이전틱 AI 오케스트레이션 시스템",
  "Round Finalist": "결선 진출",
  "Project proposal": "프로젝트 제안서",
  "05 — WRITING & COMMENTARY": "05 — 글과 논평",
  "Ideas at the": "아이디어의",
  "frontier.": "최전선.",
  "Selected writing on AI, quantum computing and emerging research.": "AI, 양자 컴퓨팅 및 신기술 연구에 대한 글을 소개합니다.",
  "WISER INSIDER": "WISER 인사이더",
  "SEPTEMBER 2026 · 2 MIN READ": "2026년 9월 · 2분 읽기",
  "Did AI crack the Navier–Stokes problem? And why the quantum industry should pay more attention.": "AI가 나비에–스토크스 문제를 풀었을까? 양자 업계가 주목해야 하는 이유",
  "A look at OpenAI's reported AI-assisted proof of a forced Navier–Stokes singularity, what remains unresolved, and why large-scale AI reasoning could matter for quantum research and quantum-classical computing.": "OpenAI의 AI 지원 나비에–스토크스 특이점 증명 보도를 살펴보고, 아직 해결되지 않은 쟁점과 대규모 AI 추론이 양자 연구 및 양자-고전 컴퓨팅에 중요한 이유를 다룹니다.",
  "Read Article": "기사 읽기",
  "06 — EDUCATION": "06 — 학력",
  "MASTER'S": "석사",
  "Quantum Computing": "양자 컴퓨팅",
  "Quantum, Optimization, AI Agents and Machine Learning.": "양자, 최적화, AI 에이전트, 머신러닝.",
  "BACHELOR'S": "학사",
  "GIS, Remote Sensing, Data Science and Machine Learning.": "GIS, 원격탐사, 데이터 과학, 머신러닝.",
  "IN THE LAB": "프로젝트 현장",
  "GIS, Remote Sensing &": "GIS, 원격탐사 및 AI",
  "07 — CONTACT": "07 — 연락처",
  "Let's explore": "함께 설계해요",
  "what's next.": "다음 솔루션을.",
  "For AI Agents, Agentic AI, Quantum, Optimization, Cybersecurity, Grid, GIS and Remote Sensing.": "AI 에이전트, 에이전틱 AI, 양자, 최적화, 사이버보안, 그리드, GIS, 원격탐사 관련 문의를 환영합니다.",
  "Curriculum Vitae ↗": "이력서 ↗",
  "Built with HTML / CSS / JS · Hosted on GitHub Pages": "HTML / CSS / JS 제작 · GitHub Pages 호스팅",
  "CV ↗": "이력서 ↗",
  "Portfolio ↑": "포트폴리오 ↑"
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, ko]) => [ko, en]));
const languageButtons = [...document.querySelectorAll(".language-toggle [data-language]")];
const sectionRail = document.querySelector(".section-rail");
const normalise = value => value.replace(/\s+/g, " ").trim();

function setLanguage(language) {
  const korean = language === "ko";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest("script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    const original = node.nodeValue;
    const key = normalise(original);
    if (!key) return;
    const translated = korean ? translations[key] : reverseTranslations[key];
    if (translated === undefined) return;
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });

  document.documentElement.lang = korean ? "ko" : "en";
  document.title = korean ? "엘리야 Agentic AI 및 Quantum Solution Architect" : "Elijah Agentic AI & Quantum Solution Architect";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = korean
    ? "엘리야 — Agentic AI 및 Quantum Solution Architect, GIS 및 Remote Sensing"
    : "Elijah — Agentic AI & Quantum Solution Architect, GIS and Remote Sensing";
  languageButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
  document.querySelector(".language-toggle")?.setAttribute("aria-label", korean ? "언어 선택" : "Choose language");
  const menuButton = document.querySelector(".menu");
  if (menuButton) menuButton.setAttribute("aria-label", korean ? "메뉴 열기" : "Open menu");
  if (sectionRail) {
    sectionRail.setAttribute("aria-label", korean ? "페이지 섹션 바로가기" : "Page sections");
    sectionRail.querySelectorAll("a").forEach(link => {
      const label = link.querySelector(".rail-label")?.textContent || "";
      link.setAttribute("aria-label", label);
    });
  }
  document.querySelectorAll("img").forEach(img => {
    if (korean) {
      img.dataset.originalAlt ||= img.alt;
      if (img.src.includes("lab-quantum")) img.alt = "엘리야가 연구실에서 양자 컴퓨팅 장비와 작업하는 모습";
      else if (img.src.includes("lab-portrait")) img.alt = "연구실에 있는 엘리야";
      else if (img.src.includes("profile")) img.alt = "양자 컴퓨팅과 AI 연구자 엘리야";
    } else if (img.dataset.originalAlt) img.alt = img.dataset.originalAlt;
  });
  const koreanSampleLabels = [
    "샘플 작업: CIQ-Expand 양자 기술 기반 전력망 확장",
    "샘플 작업: GridSense 그리드 운영 AI 코파일럿",
    "샘플 작업: 스마트 그리드를 위한 양자 영감 기술"
  ];
  document.querySelectorAll(".sample-work[aria-label]").forEach((link, index) => {
    link.dataset.originalLabel ||= link.getAttribute("aria-label");
    link.setAttribute("aria-label", korean ? koreanSampleLabels[index] : link.dataset.originalLabel);
  });
  try { localStorage.setItem("elijah-site-language", language); } catch {}
}

languageButtons.forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.language)));
let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("elijah-site-language") || "en"; } catch {}
if (savedLanguage === "ko") setLanguage("ko");

const colorLens = document.querySelector(".color-lens");
if (colorLens && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let frame;
  let targetX = 0;
  let targetY = 0;
  let lensX = 0;
  let lensY = 0;
  let hasPointerPosition = false;
  const followPointer = () => {
    lensX += (targetX - lensX) * 0.07;
    lensY += (targetY - lensY) * 0.07;
    colorLens.style.left = `${lensX}px`;
    colorLens.style.top = `${lensY}px`;
    if (Math.abs(targetX - lensX) > 0.4 || Math.abs(targetY - lensY) > 0.4) {
      frame = requestAnimationFrame(followPointer);
    } else frame = null;
  };
  window.addEventListener("pointermove", event => {
    targetX = event.clientX;
    targetY = event.clientY;
    if (!hasPointerPosition) {
      lensX = targetX;
      lensY = targetY;
      colorLens.style.left = `${lensX}px`;
      colorLens.style.top = `${lensY}px`;
      hasPointerPosition = true;
    }
    document.body.classList.add("cursor-active");
    if (!frame) frame = requestAnimationFrame(followPointer);
  }, { passive: true });
  window.addEventListener("pointerleave", () => document.body.classList.remove("cursor-active"));
  document.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("pointerenter", () => document.body.classList.add("cursor-link"));
    item.addEventListener("pointerleave", () => document.body.classList.remove("cursor-link"));
  });
}

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  menu.setAttribute("aria-expanded", String(!open));
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 5vw";
    nav.style.flexDirection = "column";
    nav.style.background = "rgba(152,152,152,.98)";
    nav.style.borderBottom = "1px solid #7f7f7f";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) {
      nav.style.display = "";
      menu?.setAttribute("aria-expanded", "false");
    }
  });
});

const sampleWorkScrollKey = "elijah-sample-work-scroll";
document.querySelectorAll("a.sample-work").forEach(link => {
  link.addEventListener("click", () => {
    if (link.target === "_blank") return;
    try {
      sessionStorage.setItem(sampleWorkScrollKey, JSON.stringify({
        y: window.scrollY,
        page: `${location.pathname}${location.search}`
      }));
    } catch {}
  });
});

window.addEventListener("pageshow", () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(sampleWorkScrollKey) || "null");
    sessionStorage.removeItem(sampleWorkScrollKey);
    if (saved?.page === `${location.pathname}${location.search}` && Number.isFinite(saved.y)) {
      window.scrollTo({ top: saved.y, left: 0, behavior: "instant" });
    }
  } catch {}
});

const railLinks = [...document.querySelectorAll(".section-rail a")];
const railSections = [document.querySelector(".hero"), ...document.querySelectorAll("main > section[id]")].filter(Boolean);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.id || "top";
    railLinks.forEach(link => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-28% 0px -28% 0px", threshold: [0, .15, .35, .6] });
  railSections.forEach(section => observer.observe(section));
}
