document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  "About": "소개",
  "Research": "연구",
  "Projects": "프로젝트",
  "Writing": "글",
  "Academics": "학력",
  "Contact": "연락처",
  "Top": "맨 위",
  "Page sections": "페이지 섹션 바로가기",
  "QUANTUM × AI × EARTH OBSERVATION": "양자 컴퓨팅 × AI × 지구 관측",
  "Researcher & Engineer.": "연구자이자 엔지니어.",
  "Exploring practical intersections between quantum computing, artificial intelligence, optimisation, remote sensing and aerospace systems.": "양자 컴퓨팅, 인공지능, 최적화, 원격탐사, 항공우주 시스템이 만나는 실용적인 응용을 탐구합니다.",
  "GitHub ↗": "GitHub ↗",
  "LinkedIn ↗": "LinkedIn ↗",
  "01 — ABOUT": "01 — 소개",
  "From spatial data": "공간 데이터에서",
  "to quantum systems.": "양자 시스템까지.",
  "My background spans GIS and remote sensing, artificial intelligence and quantum computing. I am interested in using emerging computational technologies to solve real-world problems rather than treating quantum computing as an isolated technology.": "저는 GIS와 원격탐사, 인공지능, 양자 컴퓨팅을 아우르는 배경을 갖고 있습니다. 양자 컴퓨팅을 독립된 기술로만 다루기보다, 새로운 컴퓨팅 기술을 실제 문제 해결에 활용하는 데 관심이 있습니다.",
  "My current research direction sits at the intersection of": "현재 연구는 다음 분야의 접점에 있습니다:",
  "quantum optimisation, AI, Earth observation and aerospace": "양자 최적화, AI, 지구 관측, 항공우주",
  "02 — RESEARCH": "02 — 연구",
  "Areas of interest.": "관심 분야.",
  "Selected themes rather than a fixed boundary.": "관심 주제를 중심으로 구성했습니다.",
  "Quantum Computing": "양자 컴퓨팅",
  "Quantum optimisation, QUBO/Ising formulations, quantum software and practical NISQ-era applications.": "양자 최적화, QUBO/Ising 수식화, 양자 소프트웨어, NISQ 시대의 실용적 응용.",
  "AI & Optimisation": "AI 및 최적화",
  "Multi-agent AI, constrained optimisation, intelligent orchestration and AI-assisted decision systems.": "멀티 에이전트 AI, 제약 최적화, 지능형 오케스트레이션, AI 기반 의사결정 시스템.",
  "Earth Observation": "지구 관측",
  "Remote sensing, hyperspectral imaging and computational approaches for environmental and hazard monitoring.": "원격탐사, 초분광 영상, 환경 및 재난 모니터링을 위한 컴퓨팅 기법.",
  "Aerospace Systems": "항공우주 시스템",
  "Stratospheric platforms, payload design and sensing systems for disaster response and hazard monitoring.": "재난 대응과 위험 모니터링을 위한 성층권 플랫폼, 탑재체 설계 및 센싱 시스템.",
  "Deep Tech Education": "딥테크 교육",
  "Designing practical learning experiences, curricula and workshops in quantum computing, AI and machine learning for students, researchers and industry teams.": "학생, 연구자, 산업 팀을 대상으로 양자 컴퓨팅, AI, 머신러닝의 실용적인 학습 경험과 교육과정, 워크숍을 설계합니다.",
  "Quantum Readiness & Adoption": "양자 기술 도입 준비 및 적용",
  "Consulting to help organisations prepare for post-quantum cryptography (PQC) and plan quantum hardware integration.": "조직의 양자내성암호(PQC) 도입 준비와 양자 하드웨어 통합 계획을 지원하는 컨설팅.",
  "QUANTUM SYSTEMS": "양자 시스템",
  "Working with experimental hardware": "실험 장비와 함께",
  "03 — PROJECTS": "03 — 프로젝트",
  "Projects I've Been Involved With.": "참여한 프로젝트.",
  "EARTH OBSERVATION / AEROSPACE": "지구 관측 / 항공우주",
  "Hyperspectral Payload Design": "초분광 탑재체 설계",
  "Doctoral research direction focused on optimising hyperspectral payload design for stratospheric Earth Observation platforms.": "성층권 지구 관측 플랫폼을 위한 초분광 탑재체 설계 최적화 박사 연구.",
  "QUANTUM + AI / STARTUP": "양자 컴퓨팅 + AI / 스타트업",
  "A quantum-first AI platform exploring optimisation for visual intelligence, imagery/video workflows and agentic orchestration.": "시각 지능, 이미지·영상 처리, 에이전트 오케스트레이션의 최적화를 탐구하는 양자 우선 AI 플랫폼.",
  "Sample Work": "샘플 작업",
  "QUANTUM OPTIMISATION": "양자 최적화",
  "Multi-Agent Assignment Optimisation": "멀티 에이전트 할당 최적화",
  "Research into constrained multi-agent assignment using QUBO/Ising formulations and quantum optimisation approaches.": "QUBO/Ising 수식화와 양자 최적화 기법을 활용한 제약 멀티 에이전트 할당 연구.",
  "QUANTUM HARDWARE / EDUCATION": "양자 하드웨어 / 교육",
  "Preparing for Quantum Hardware": "양자 하드웨어 도입 준비",
  "A vendor-neutral framework and workshop helping organisations understand quantum hardware modalities, compare providers and prepare for practical adoption.": "조직이 양자 하드웨어 방식과 공급업체를 비교하고 실제 도입을 준비하도록 돕는 중립적인 평가 프레임워크와 워크숍.",
  "CYBERSECURITY / POST-QUANTUM": "사이버 보안 / 양자내성암호",
  "Post-Quantum Cryptography": "양자내성암호",
  "Exploring post-quantum cryptography and the transition toward quantum-resistant security for systems and organisations.": "시스템과 조직의 양자내성 보안 전환 및 양자내성암호를 탐구합니다.",
  "QUANTUM + AI / SMART GRID": "양자 컴퓨팅 + AI / 스마트 그리드",
  "Smart Grid": "스마트 그리드",
  "Exploring quantum-enabled grid expansion, spatial AI for distribution operations, and quantum-inspired technologies for smarter, more resilient power grids.": "양자 기술 기반 전력망 확장, 배전 운영을 위한 공간 AI, 더 스마트하고 회복력 높은 전력망을 위한 양자 영감 기술을 탐구합니다.",
  "MULTI-AGENT AI / LLM ORCHESTRATION": "멀티 에이전트 AI / LLM 오케스트레이션",
  "Agentic AI System": "에이전트형 AI 시스템",
  "A multi-agent orchestration system (using a mixture-of-agents approach) that connects different quantized frontier & open-source language models through a single API.": "여러 에이전트 접근법을 활용해 양자화된 최신 및 오픈소스 언어 모델을 단일 API로 연결하는 멀티 에이전트 오케스트레이션 시스템입니다.",
  "AIR FORCE / SMART GRID": "공군 / 스마트 그리드",
  "Air Force × Korea Electric Research Collaboration": "대한민국 공군 × 한국전력 연구 협력",
  "A joint R&D concept exploring how KEPCO's Grid-K platform could strengthen energy resilience at Republic of Korea Air Force bases through secure distribution management, microgrids and continuity for mission-critical loads.": "한국전력공사의 Grid-K 플랫폼을 바탕으로 보안 배전 관리, 마이크로그리드, 임무 핵심 부하의 전력 연속성을 통해 대한민국 공군 기지의 에너지 복원력을 높이는 공동 연구개발 구상입니다.",
  "04 — HACKATHON": "04 — 해커톤",
  "Ideas into": "아이디어를",
  "prototypes.": "프로토타입으로.",
  "CHRISTCHURCH, NEW ZEALAND": "뉴질랜드 크라이스트처치",
  "NZ AI Hackathon": "뉴질랜드 AI 해커톤",
  "ECHO AI Platform": "ECHO AI 플랫폼",
  "· Winner Team": "· 우승 팀",
  "Role: Team Lead": "역할: 팀 리드",
  "GLOBAL": "글로벌",
  "QUANTUM + AI CHALLENGE": "양자 컴퓨팅 + AI 챌린지",
  "Global Quantum + AI Challenge": "글로벌 양자 컴퓨팅 + AI 챌린지",
  "Proposal projects developed with colleagues at UPM, Spain.": "스페인 UPM 동료들과 함께 개발한 제안 프로젝트입니다.",
  "Certa / VW Group": "Certa / 폭스바겐 그룹",
  "CIQ Expand / E.ON": "CIQ Expand / E.ON",
  "Credit Card Fraud / HSBC": "신용카드 사기 탐지 / HSBC",
  "FluxTrain / Airbus": "FluxTrain / 에어버스",
  "QUASAR / Cleveland Clinic": "QUASAR / 클리블랜드 클리닉",
  "UC IGNITION CHALLENGE": "UC 이그니션 챌린지",
  "Quantum-Optimized Agentic AI Orchestration System": "양자 최적화 에이전트형 AI 오케스트레이션 시스템",
  "Round Finalist": "라운드 결선 진출",
  "05 — WRITING & COMMENTARY": "05 — 글과 논평",
  "Ideas at the": "새로운 연구의",
  "frontier.": "최전선에서.",
  "Selected writing on AI, quantum computing and emerging research.": "AI, 양자 컴퓨팅, 신흥 연구 분야에 관한 글을 소개합니다.",
  "WISER INSIDER": "WISER 인사이더",
  "SEPTEMBER 2026 · 2 MIN READ": "2026년 9월 · 2분 읽기",
  "Did AI crack the Navier–Stokes problem? And why the quantum industry should pay more attention.": "AI가 나비에–스토크스 문제를 풀었을까? 양자 업계가 주목해야 하는 이유",
  "A look at OpenAI's reported AI-assisted proof of a forced Navier–Stokes singularity, what remains unresolved, and why large-scale AI reasoning could matter for quantum research and quantum-classical computing.": "OpenAI가 발표한 외력이 있는 나비에–스토크스 특이점의 AI 보조 증명을 살펴보고, 아직 해결되지 않은 쟁점과 대규모 AI 추론이 양자 연구 및 양자-고전 컴퓨팅에 갖는 의미를 짚습니다.",
  "Read Article": "기사 읽기",
  "06 — ACADEMICS": "06 — 학력",
  "PH.D": "박사",
  "Applied Doctorate Research": "응용 박사 연구",
  "Hyperspectral payload optimisation for stratospheric Earth observation.": "성층권 지구 관측을 위한 초분광 탑재체 최적화.",
  "MASTER'S": "석사",
  "Master of Quantum Computing": "양자 컴퓨팅 석사",
  "Quantum optimisation, QUBO/Ising modelling and AI-assisted optimisation.": "양자 최적화, QUBO/Ising 모델링, AI 기반 최적화.",
  "BACHELOR'S": "학사",
  "Regional Development": "지역 개발학",
  "GIS, Remote Sensing and spatial analysis.": "GIS, 원격탐사 및 공간 분석.",
  "IN THE LAB": "연구실에서",
  "Research, people and place": "연구와 사람, 그리고 현장",
  "07 — CONTACT": "07 — 연락처",
  "Let's explore": "함께 살펴보겠습니다",
  "what's next.": "다음 가능성을.",
  "For research, collaboration or technology discussions.": "연구, 협업 또는 기술 관련 논의를 환영합니다.",
  "Curriculum Vitae ↗": "이력서 ↗",
  "Built with HTML / CSS / JS · Hosted on GitHub Pages": "HTML / CSS / JS로 제작 · GitHub Pages 호스팅",
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
  document.title = korean ? "엘리야 | 양자 컴퓨팅 × AI" : "Elijah | Quantum × AI";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = korean
    ? "엘리야 김 - 양자 컴퓨팅, AI, 지구 관측 및 항공우주 연구"
    : "Elijah — Quantum Computing, AI, Earth Observation and Aerospace Research";
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
    "샘플 작업: GridSense 배전 운영용 공간 AI 코파일럿",
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
    nav.style.background = "rgba(9,9,9,.97)";
    nav.style.borderBottom = "1px solid #282828";
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
