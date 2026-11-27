# Seiva Estética Avançada — site de demonstração

Site de uma clínica de estética fictícia, feito como demonstração para vender sites a clínicas reais.
HTML, CSS e JavaScript puros: não precisa de build, basta hospedar a pasta (GitHub Pages, Netlify, Vercel ou qualquer hospedagem).

## O que tem

- Primeira tela com o rosto revelado por papel rasgado
- Agendador que monta a mensagem do WhatsApp em tempo real
- Indicador "aberto agora" pelo horário de Brasília
- Comparador de tratamentos (sessões, recuperação, duração, se dá para desfazer)
- Calendário do laser: quando começar para estar pronta no verão, Carnaval, Réveillon ou numa data própria
- O que esperar dia a dia depois de cada procedimento
- "Cinco perguntas para fazer a qualquer clínica"
- Textos dentro das regras de publicidade do CFM (sem promessa de resultado)
- Animações das fotos aparecendo, respeitando quem prefere menos movimento

## Como adaptar para outra clínica

1. **WhatsApp e horários:** objeto `CONFIG` no topo de `assets/js/main.js`.
2. **Cores e fontes:** variáveis no topo de `assets/css/style.css`.
3. **Textos, equipe, endereço e dados estruturados (SEO):** `index.html`.
4. **Fotos:** `assets/img/`. Troque a imagem principal e a foto do laser (geradas por IA) por fotos reais da clínica.
5. O guia completo do sistema visual está em `DESIGN.md`.

Nomes, registros, endereço e telefone deste site são fictícios.
