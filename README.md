## 🖱️ Mouse Tracker 
Este projeto demonstra a capacidade do React de encapsular lógica complexa em Custom Hooks, 
permitindo que o rastreamento de eventos do mouse seja reutilizado em diferentes contextos visuais sem a repetição de código.

🚀 O Desafio
O objetivo foi criar uma aplicação onde a lógica de manipulação de estado (coordenadas $X$ e $Y$) e os ouvintes de eventos 
(window.addEventListener) ficassem isolados da interface visual.

🧠 Conceitos Aplicados
Custom Hooks: Criação do hook useMousePosition para gerenciar eventos globais.
Performance & Cleanup: Uso do useEffect com retorno de função para remover o event listener e evitar vazamentos de memória (memory leaks).
Composição de Componentes: Múltiplos componentes consumindo a mesma fonte de dados de formas distintas.

