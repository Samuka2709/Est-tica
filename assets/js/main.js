/* ==========================================================
   Seiva Estética Avançada · interações
   Para adaptar a outra clínica, comece por este CONFIG.
   ========================================================== */
const CONFIG = {
  whatsapp: "5511900000000",           // DDI + DDD + número, só dígitos
  fuso: "America/Sao_Paulo",
  // dia da semana (0 = domingo) -> [abre, fecha] em horas; null = fechado
  horario: { 0: null, 1: [9, 20], 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [9, 14] },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const linkWhats = (texto) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
const fmtData = (d, op = { day: "2-digit", month: "2-digit" }) => d.toLocaleDateString("pt-BR", op);
const DIA = 864e5;

/* ---------- agendador ---------- */
(function agenda() {
  const form = $("[data-agenda]");
  if (!form) return;
  const previa = $("[data-previa]", form);
  const montar = () => {
    const f = new FormData(form);
    const nome = (f.get("nome") || "").toString().trim();
    const interesse = (f.get("interesse") || "").toString().toLowerCase();
    const periodo = f.get("periodo");
    let t = "Olá! Vim pelo site e quero agendar uma avaliação.";
    if (interesse) t += ` Interesse: ${interesse}.`;
    if (periodo) t += ` Melhor período: ${periodo}.`;
    if (nome) t += ` Meu nome é ${nome}.`;
    return t;
  };
  const atualizar = () => { previa.textContent = montar(); };
  form.addEventListener("input", atualizar);
  form.addEventListener("change", atualizar);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.open(linkWhats(montar()), "_blank", "noopener");
  });
  atualizar();
})();

/* ---------- aberto agora ---------- */
(function status() {
  const curto = $("[data-status]");
  const textoCurto = $("[data-status-texto]");
  const longo = $("[data-status-longo]");
  const agoraSP = () => {
    const p = new Intl.DateTimeFormat("en-US", { timeZone: CONFIG.fuso, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
    const g = (t) => p.find((x) => x.type === t).value;
    const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { dia: dias[g("weekday")], h: +g("hour") + +g("minute") / 60 };
  };
  const nomes = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const calcular = () => {
    const { dia, h } = agoraSP();
    const hoje = CONFIG.horario[dia];
    if (hoje && h >= hoje[0] && h < hoje[1]) return { aberto: true, texto: `Aberto agora · até ${hoje[1]}h` };
    if (hoje && h < hoje[0]) return { aberto: false, texto: `Fechado · abre hoje às ${hoje[0]}h` };
    for (let i = 1; i <= 7; i++) {
      const d = (dia + i) % 7;
      const hr = CONFIG.horario[d];
      if (hr) return { aberto: false, texto: `Fechado · abre ${i === 1 ? "amanhã" : nomes[d]} às ${hr[0]}h` };
    }
    return { aberto: false, texto: "Fechado" };
  };
  const pintar = () => {
    const s = calcular();
    if (curto) { curto.classList.toggle("is-aberto", s.aberto); textoCurto.textContent = s.texto; }
    if (longo) longo.textContent = s.aberto ? `${s.texto}.` : `${s.texto}. Pode mandar mensagem, respondemos quando abrir.`;
  };
  pintar();
  setInterval(pintar, 60000);
})();

/* ---------- menu (telas menores) ---------- */
(function menu() {
  const botao = $("[data-menu-botao]");
  const nav = $("[data-menu]");
  if (!botao || !nav) return;
  const fechar = () => { nav.classList.remove("is-aberto"); botao.setAttribute("aria-expanded", "false"); };
  botao.addEventListener("click", () => {
    const abrir = !nav.classList.contains("is-aberto");
    nav.classList.toggle("is-aberto", abrir);
    botao.setAttribute("aria-expanded", String(abrir));
    if (abrir) nav.querySelector("a")?.focus();
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) fechar(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-aberto")) { fechar(); botao.focus(); } });
  window.matchMedia("(min-width: 1181px)").addEventListener("change", fechar);
})();

/* ---------- comparador ---------- */
(function comparar() {
  const opcoes = $("[data-comparar-opcoes]");
  const tabela = $("[data-comparar-tabela]");
  if (!opcoes || !tabela) return;
  const ATRIB = [
    ["serve", "Para que serve"],
    ["sessoes", "Sessões"],
    ["rotina", "Volta à rotina"],
    ["aparece", "Quando aparece"],
    ["dura", "Quanto dura"],
    ["reverte", "Dá para desfazer?"],
  ];
  const T = {
    toxina: { nome: "Toxina botulínica", serve: "Linhas de expressão da testa, entre as sobrancelhas e dos olhos", sessoes: "1, com retorno em 15 dias", rotina: "No mesmo dia", aparece: "Em 3 a 5 dias; completo em ~15", dura: "4 a 6 meses", reverte: "Não; o efeito passa sozinho" },
    preench: { nome: "Preenchimento", serve: "Volume e contorno: lábios, olheiras, malar, mandíbula", sessoes: "1, com retorno em 15 dias", rotina: "No mesmo dia; inchaço leve por 2 a 7 dias", aparece: "Na hora; assenta em ~15 dias", dura: "9 meses a 2 anos, conforme a área", reverte: "Sim, com enzima específica" },
    bio: { nome: "Bioestimulador", serve: "Firmeza e qualidade da pele, sem mudar traços", sessoes: "1 a 3, com intervalo de 30 a 60 dias", rotina: "No mesmo dia", aparece: "Gradual, de 30 a 90 dias", dura: "18 meses ou mais", reverte: "Não" },
    micro: { nome: "Microagulhamento", serve: "Poros, textura e marcas de acne", sessoes: "3 a 6, a cada 30 dias", rotina: "1 a 3 dias de vermelhidão", aparece: "Progressivo, após 30 dias", dura: "Duradouro, com manutenção", reverte: "Não se aplica" },
    peeling: { nome: "Peeling químico", serve: "Manchas, viço e uniformidade", sessoes: "3 a 6", rotina: "Descamação de 3 a 7 dias", aparece: "Após a descamação", dura: "Meses, com protetor solar diário", reverte: "Não se aplica" },
    crio: { nome: "Criolipólise", serve: "Gordura localizada (não é para emagrecer)", sessoes: "1 a 3 por área", rotina: "No mesmo dia", aparece: "De 30 a 90 dias", dura: "Duradouro, com peso estável", reverte: "Não" },
    laser: { nome: "Depilação a laser", serve: "Redução duradoura dos pelos", sessoes: "6 a 8, em média", rotina: "No mesmo dia; evitar sol", aparece: "A cada sessão, progressivo", dura: "Duradouro, com manutenção eventual", reverte: "Não se aplica" },
  };
  const MAX = 3;
  let escolhidos = ["toxina", "preench", "bio"];

  opcoes.insertAdjacentHTML("beforeend", Object.entries(T).map(([k, v]) =>
    `<label class="chip"><input type="checkbox" value="${k}" ${escolhidos.includes(k) ? "checked" : ""}><span>${v.nome}</span></label>`).join(""));

  const desenhar = () => {
    const sel = escolhidos.map((k) => T[k]);
    tabela.style.setProperty("--n", Math.max(sel.length, 1));
    if (!sel.length) { tabela.innerHTML = `<p class="tabela__vazio">Escolha pelo menos um tratamento acima.</p>`; }
    else {
      const cab = `<div class="tabela__linha tabela__linha--cabeca" role="row"><span role="columnheader"><span class="sr-only">Característica</span></span>${sel.map((t) => `<span role="columnheader">${t.nome}</span>`).join("")}</div>`;
      const linhas = ATRIB.map(([k, rot]) =>
        `<div class="tabela__linha" role="row"><span role="rowheader">${rot}</span>${sel.map((t) => `<span role="cell"><b>${t.nome}</b><span${t[k].startsWith("Sim") ? ' class="tabela__sim"' : ""}>${t[k]}</span></span>`).join("")}</div>`).join("");
      tabela.innerHTML = cab + linhas;
    }
    $$("input", opcoes).forEach((i) => { i.disabled = !i.checked && escolhidos.length >= MAX; });
  };
  opcoes.addEventListener("change", (e) => {
    const i = e.target;
    if (i.checked) escolhidos.push(i.value); else escolhidos = escolhidos.filter((k) => k !== i.value);
    desenhar();
  });
  desenhar();
})();

/* ---------- calendário do laser ---------- */
(function laser() {
  const form = $("[data-laser]");
  if (!form) return;
  const campoData = $("[data-laser-data]");
  const frase = $("[data-laser-frase]");
  const trilha = $("[data-laser-trilha]");
  const rotulo = $("[data-laser-rotulo]");
  const datas = $("[data-laser-datas]");
  const dica = $("[data-laser-dica]");
  const cta = $("[data-laser-cta]");

  const INTERVALO = { rosto: 30, axilas: 45, virilha: 45, pernas: 60, corpo: 45 };
  const NOME_AREA = { rosto: "rosto", axilas: "axilas", virilha: "virilha", pernas: "pernas", corpo: "corpo inteiro" };
  const SESSOES = 7;          // média de 6 a 8
  const FOLGA = 14;           // última sessão pelo menos 14 dias antes da data

  const hoje = new Date(); hoje.setHours(12, 0, 0, 0);
  const pascoa = (y) => { // algoritmo de Meeus/Jones/Butcher
    const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
      f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
      i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
      mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(y, mes - 1, dia, 12);
  };
  // datas prontas a menos de 45 dias não ajudam ninguém: pula para a próxima ocorrência
  const proximo = (fn) => { for (let y = hoje.getFullYear(); y < hoje.getFullYear() + 3; y++) { const d = fn(y); if (d - hoje > 45 * DIA) return d; } };
  const ALVOS = {
    verao: { nome: "o verão", data: (y) => new Date(y, 11, 21, 12) },
    carnaval: { nome: "o Carnaval", data: (y) => new Date(pascoa(y).getTime() - 47 * DIA) },
    reveillon: { nome: "o Réveillon", data: (y) => new Date(y, 11, 31, 12) },
  };
  const contrai = (s) => s.replace(/^o /, "ao ").replace(/^a /, "à ");

  const padrao = new Date(hoje.getTime() + 182 * DIA);
  form.data.value = padrao.toISOString().slice(0, 10);
  form.data.min = new Date(hoje.getTime() + DIA).toISOString().slice(0, 10);

  // o cronograma mostrado é sempre o mesmo que a frase descreve
  const plano = (alvo, area) => {
    const iv = INTERVALO[area];
    let cedo = new Date(hoje.getTime() + 7 * DIA);
    if (cedo.getDay() === 0) cedo = new Date(cedo.getTime() + DIA);
    const limite = new Date(alvo.getTime() - FOLGA * DIA);
    const ideal = new Date(limite.getTime() - (SESSOES - 1) * iv * DIA);
    const folgado = ideal > cedo;              // dá para fazer tudo começando mais tarde
    const inicio = folgado ? ideal : cedo;
    const sessoes = Array.from({ length: SESSOES }, (_, i) => new Date(inicio.getTime() + i * iv * DIA));
    const cabem = sessoes.filter((d) => d <= limite).length;
    return { iv, sessoes, cabem, inicio, folgado };
  };

  const desenharTrilha = (p, alvo, rotuloAlvo) => {
    const fim = new Date(Math.max(alvo.getTime(), p.sessoes.at(-1).getTime()) + 10 * DIA);
    const ini = Math.min(hoje.getTime(), p.inicio.getTime());
    const pos = (d) => ((d.getTime() - ini) / (fim.getTime() - ini)) * 100;
    let html = `<span class="trilha__linha"></span>`;
    const meses = [];
    const m = new Date(new Date(ini).getFullYear(), new Date(ini).getMonth() + 1, 1, 12);
    while (m < fim) { meses.push(new Date(m)); m.setMonth(m.getMonth() + 1); }
    const passo = meses.length > 16 ? 3 : meses.length > 9 ? 2 : 1;
    meses.forEach((d, i) => {
      if (i % passo) return;
      const rot = d.getMonth() === 0 ? `jan ${String(d.getFullYear()).slice(2)}` : d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
      html += `<span class="trilha__mes" style="left:${pos(d)}%">${rot}</span>`;
    });
    p.sessoes.forEach((d, i) => { html += `<span class="trilha__sessao${i >= p.cabem ? " is-fora" : ""}" style="left:${pos(d)}%"></span>`; });
    const pa = pos(alvo);
    html += `<span class="trilha__alvo${pa > 72 ? " is-direita" : ""}" style="left:${pa}%">${rotuloAlvo}</span>`;
    trilha.innerHTML = html;
  };

  const calcular = () => {
    const f = new FormData(form);
    const tipo = f.get("alvo");
    const area = f.get("area");
    campoData.hidden = tipo !== "data";

    let alvo, nomeAlvo, curto;
    if (tipo === "data") {
      alvo = form.data.value ? new Date(form.data.value + "T12:00:00") : padrao;
      if (!(alvo > hoje)) alvo = padrao;
      nomeAlvo = "a sua data"; curto = fmtData(alvo);
    } else {
      alvo = proximo(ALVOS[tipo].data);
      nomeAlvo = ALVOS[tipo].nome; curto = `${ALVOS[tipo].nome.replace(/^o /, "")} ${fmtData(alvo, { day: "2-digit", month: "2-digit", year: "2-digit" })}`;
    }

    const p = plano(alvo, area);
    const a = NOME_AREA[area];
    const longa = (d) => fmtData(d, { day: "numeric", month: "long" });
    if (p.cabem >= SESSOES && p.folgado) {
      frase.innerHTML = `Para ${a}, comece até <strong>${longa(p.inicio)}</strong> e chegue ${contrai(nomeAlvo)} com o protocolo completo.`;
      rotulo.textContent = `Se você começar em ${longa(p.inicio)}`;
    } else if (p.cabem >= SESSOES) {
      frase.innerHTML = `Para ${a}, comece <strong>na próxima semana</strong> e chegue ${contrai(nomeAlvo)} com o protocolo completo.`;
      rotulo.textContent = "Começando na próxima semana";
    } else if (p.cabem > 0) {
      const prox = tipo === "data" ? null : ALVOS[tipo].data(alvo.getFullYear() + 1);
      frase.innerHTML = `Até ${nomeAlvo} dá para fazer <strong>${p.cabem} de ${SESSOES} sessões</strong> de ${a}. Você já chega com redução visível${prox ? ` e completa a tempo para ${nomeAlvo} de ${prox.getFullYear()}` : " e completa o protocolo depois"}.`;
      rotulo.textContent = "Começando na próxima semana";
    } else {
      frase.innerHTML = `Para ${nomeAlvo} não dá mais tempo de começar com segurança. Começando agora, o protocolo de ${a} fica <strong>completo em ${fmtData(p.sessoes.at(-1), { month: "long", year: "numeric" })}</strong>.`;
      rotulo.textContent = "Começando na próxima semana";
    }

    desenharTrilha(p, alvo, curto);
    datas.innerHTML = p.sessoes.map((d, i) => `<li><b>${i + 1}ª</b> ${fmtData(d, { day: "2-digit", month: "short" }).replace(".", "")}</li>`).join("");

    const noSol = p.sessoes.filter((d) => [11, 0, 1, 2].includes(d.getMonth())).length;
    dica.textContent = (noSol
      ? `${noSol} ${noSol === 1 ? "sessão cai" : "sessões caem"} no período de sol forte (dezembro a março): protetor FPS 50 todos os dias e nada de bronzear nas duas semanas antes e depois. `
      : "Nenhuma sessão cai no período de sol forte (dezembro a março), a melhor situação para a pele. ")
      + `Intervalo de ${p.iv} dias entre sessões. Entre elas, só lâmina: nada de cera ou pinça.`;

    cta.href = linkWhats(`Olá! Usei o calendário do laser no site. Quero começar depilação a laser (${a}) e estar pronta para ${tipo === "data" ? fmtData(alvo) : nomeAlvo}. Podemos marcar a avaliação?`);
    cta.target = "_blank"; cta.rel = "noopener";
  };
  form.addEventListener("change", calcular);
  form.addEventListener("input", calcular);
  calcular();
})();

/* ---------- abas: o que esperar depois ---------- */
(function abas() {
  const lista = $("[data-abas]");
  if (!lista) return;
  const tabs = $$('[role="tab"]', lista);
  const ativar = (t) => {
    tabs.forEach((x) => {
      const on = x === t;
      x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => ativar(t));
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length]; ativar(n); n.focus();
    });
  });
})();

/* ---------- topo e botão flutuante ---------- */
(function topo() {
  const topo = $("[data-topo]");
  const flut = $("[data-flutuante]");
  const inicio = $("#inicio");
  const agenda = $("#agendar");
  const fecho = $(".fecho");
  let passou = false, vendoFim = false;
  const pintar = () => flut && flut.classList.toggle("is-visivel", passou && !vendoFim);
  new IntersectionObserver(([e]) => {
    topo.classList.toggle("is-solido", !e.isIntersecting || e.intersectionRatio < 0.9);
  }, { threshold: [0, 0.9] }).observe(inicio);
  new IntersectionObserver(([e]) => { passou = !e.isIntersecting && e.boundingClientRect.top < 0; pintar(); }).observe(agenda);
  if (fecho) new IntersectionObserver(([e]) => { vendoFim = e.isIntersecting; pintar(); }).observe(fecho);
})();

/* ---------- movimento ---------- */
window.addEventListener("load", () => {
  if (reduz || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (window.Lenis) {
    const lenis = new Lenis({ lerp: 0.11 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
      const alvo = a.getAttribute("href");
      if (alvo.length < 2) return;
      const el = document.querySelector(alvo);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -96 });
      if (alvo === "#agendar") setTimeout(() => $("#agendar input:checked")?.focus({ preventScroll: true }), 900);
    }));
  }

  const mm = gsap.matchMedia();

  // 1. o papel se abre e revela o rosto; ao rolar, ele se afasta um pouco mais
  mm.add("(min-width: 901px)", () => {
    const foto = $(".inicio__fundo img");
    if (foto) {
      gsap.fromTo(foto, { scale: 1.08 }, { scale: 1, duration: 2.2, ease: "expo.out" });
      gsap.to(foto, { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".inicio", start: "top top", end: "bottom top", scrub: 0.6 } });
    }
  });

  // 2. primeira tela: a imagem se revela da direita para a esquerda e o título sobe linha a linha
  const fundo = $(".inicio__fundo");
  if (fundo) gsap.fromTo(fundo, { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut", clearProps: "clipPath" });
  const intro = gsap.timeline({ delay: 0.35, defaults: { ease: "expo.out", duration: 1.1 } });
  intro.from(".inicio .display span", { yPercent: 60, opacity: 0, stagger: 0.12, clearProps: "transform,opacity" })
    .from([".inicio__lead", ".inicio__acoes"], { y: 24, opacity: 0, stagger: 0.08, clearProps: "transform,opacity" }, "-=0.75")
    .from(".confianca li", { y: 18, opacity: 0, stagger: 0.07, clearProps: "transform,opacity" }, "-=0.7")
    .from(".redes li", { y: 12, opacity: 0, stagger: 0.05, clearProps: "transform,opacity" }, "-=0.8");

  // 3. fotos aparecem como uma cortina subindo, com um leve zoom saindo
  $$("[data-foto]").forEach((fig) => {
    const img = fig.querySelector("img");
    const alvo = fig.querySelector(".moldura__foto") || fig;
    const linha = fig.classList.contains("moldura");
    const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: "top 88%", once: true } })
      .fromTo(alvo, { clipPath: "inset(100% 0% 0% 0% round 8px)" }, { clipPath: "inset(0% 0% 0% 0% round 8px)", duration: 1.3, ease: "expo.inOut", clearProps: "clipPath" })
      .fromTo(img, { scale: 1.3 }, { scale: 1.1, duration: 1.8, ease: "expo.out" }, 0.1);
    // a linha da moldura aparece depois da foto, deslizando para o lugar
    if (linha) tl.fromTo(fig, { "--linha": 0 }, { "--linha": 1, duration: 1, ease: "expo.out" }, 0.5);
    // depois de revelada, a foto continua respirando devagar com a rolagem
    gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: "none",
      scrollTrigger: { trigger: fig, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // 4. a faixa escura: a foto do espaço aproxima enquanto passa
  const faixa = $("[data-faixa-img]");
  if (faixa) gsap.fromTo(faixa, { scale: 1.22, yPercent: -4 }, { scale: 1, yPercent: 4, ease: "none", scrollTrigger: { trigger: faixa.parentElement, start: "top bottom", end: "bottom top", scrub: true } });

  // 5. só os títulos das seções têm entrada própria: sobem de trás de uma linha, como o papel se abrindo
  $$("main section:not(.inicio) h2.display").forEach((h) => {
    gsap.fromTo(h, { clipPath: "inset(0% 0% 100% 0%)", y: 28 }, { clipPath: "inset(0% 0% -20% 0%)", y: 0, duration: 1.2, ease: "expo.out", clearProps: "clipPath,transform",
      scrollTrigger: { trigger: h, start: "top 88%", once: true } });
  });

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
});
