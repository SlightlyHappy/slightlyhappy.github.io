const splitWords = () => {
    const textNode = document.querySelector(".text");
    const text = textNode.textContent;
    const newDomElements = text.split(" ").map(text => 
      `<span class="word ${text.startsWith('"30under30"') || text.startsWith('CTO') || text.startsWith('Mythrill') ? "highlighted" : ""}">${text}</span>`
    );
    textNode.innerHTML = newDomElements.join("");
  };
  
  const renderCanvas = () => {
    const {Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint} = Matter;
    const canvasSize = {width: window.innerWidth, height: window.innerHeight};
    const engine = Engine.create({});
    const render = Render.create({
      element: document.body,
      engine,
      options: {...canvasSize, background: "transparent", wireframes: false}
    }); 
  
    const params = {isStatic: true, render: {fillStyle: "transparent"}};
    const floor = Bodies.rectangle(canvasSize.width / 2, canvasSize.height, canvasSize.width, 50, params);
    const wall1 = Bodies.rectangle(0, canvasSize.height / 2, 50, canvasSize.height, params);
    const wall2 = Bodies.rectangle(canvasSize.width, canvasSize.height / 2, 50, canvasSize.height, params);
    const top = Bodies.rectangle(canvasSize.width / 2, 0, canvasSize.width, 50, params);
  
    const wordElements = document.querySelectorAll(".word");
    const wordBodies = [...wordElements].map(elemRef => {
      const width = elemRef.offsetWidth;
      const height = elemRef.offsetHeight;
      return {
        body: Bodies.rectangle(canvasSize.width / 2, 0, width, height, {
          render: {fillStyle: "transparent"}
        }),
        elem: elemRef,
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - 20}px`;
          this.elem.style.left = `${x - width / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        }
      };
    });
  
    const mouse = Mouse.create(document.body);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {stiffness: 0.2, render: {visible: false}}
    });
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  
    World.add(engine.world, [floor, ...wordBodies.map(box => box.body), wall1, wall2, top, mouseConstraint]);
    render.mouse = mouse;
    Runner.run(engine);
    Render.run(render);
  
    (function rerender() {
      wordBodies.forEach(element => element.render());
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
    })();
  };
  
  const updateDashboard = (wordCount, mostCommonWord) => {
    const dashboard = document.querySelector('.dashboard');
    dashboard.style.opacity = 1;
    dashboard.innerHTML = `
      <h2>Word Statistics</h2>
      <p>Word Count: ${wordCount}</p>
      <p>Most Common Word: ${mostCommonWord}</p>
    `;
  };
  
  const updateText = () => {
    const userInput = document.getElementById("userInput").value;
    const textNode = document.querySelector(".text");
    textNode.textContent = userInput;
  
    splitWords();
    renderCanvas(); 
  
    const words = userInput.trim().split(/\s+/);
    const wordCount = words.length;
  
    const wordFrequency = {};
    let mostCommonWord = '';
    let maxFrequency = 0;
  
    words.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      if (wordFrequency[word] > maxFrequency) {
        maxFrequency = wordFrequency[word];
        mostCommonWord = word;
      }
    });
  
    updateDashboard(wordCount, mostCommonWord);
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    const dashboard = document.createElement('div');
    dashboard.classList.add('dashboard');
    document.body.appendChild(dashboard); // Create dashboard first 
  
    splitWords();
    renderCanvas();
    document.getElementById("updateTextButton").addEventListener("click", updateText);
  });
  