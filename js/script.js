const startTerminal = document.getElementById("terminalwindow");
const outputWindow = document.getElementById("outputwindow");
const errorWindow = document.getElementById("errorwindow");  
const button = document.getElementById('closeButton');
const button2 = document.getElementById('closeButton2');
const button4 = document.getElementById('closeButton3');
const button3 = document.getElementById('cmd');
const dex = document.getElementById('dex');
const buttonError = document.getElementById('buttonError');
const buttonAgent = document.getElementById('closeAgent');
const agentswindow = document.getElementById('agentswindow');
const betawindow = document.getElementById('betawindow');
const closebeta = document.getElementById('closebeta');
const ao = document.getElementById('ao');
const bo = document.getElementById('bo');


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('matrixCanvas');
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const latin = katakana.split('');
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }
    
    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      context.fillStyle = '#718e67';
      context.font = fontSize + 'px monospace';
    
      for (let i = 0; i < rainDrops.length; i++) {
        const text = latin[Math.floor(Math.random() * latin.length)];
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    
    setInterval(draw, 30);    

});

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('agentCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = '1234567890';
    const symbols = katakana.split('');

    const images = [new Image(), new Image(), new Image()];
    images[0].src = "img/111.png";   
    images[1].src = "img/miumiumiu.png"; 
    images[2].src = "img/111.png";  

    const fontSize = 30;
    const columns = canvas.width / fontSize;
    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }

    let floatOffset = 0;
    let floatDirection = 1;

    function drawBackground() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#718e67';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = symbols[Math.floor(Math.random() * symbols.length)];
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    function drawImages() {
        const centerWidth = 560; 
        const centerHeight = 560; 
        const sideWidth = 270;  
        const sideHeight = 350; 
        const spacing = 170; 
        const totalWidth = 2 * sideWidth + centerWidth + 2 * spacing;
        const startX = (canvas.width - totalWidth) / 2;
        const centerY = canvas.height / 2;
    
        ctx.drawImage(images[0], startX, centerY - sideHeight / 2, sideWidth, sideHeight);
    
        ctx.drawImage(images[1], startX + sideWidth + spacing, centerY - centerHeight / 2 + floatOffset - 80, centerWidth, centerHeight);
    
        ctx.drawImage(images[2], startX + sideWidth + spacing + centerWidth + spacing, centerY - sideHeight / 2, sideWidth, sideHeight);

        ctx.beginPath();
            ctx.ellipse(
                startX + sideWidth + spacing + centerWidth / 2, 
                centerY + centerHeight / 2 - 10, 
                centerWidth / 2.5, 
                20, 
                0, 0, Math.PI * 2
            );
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; 
            ctx.fill();
            ctx.closePath();
    }

    function updateFloat() {
        floatOffset += floatDirection * 0.3; 
        if (floatOffset > 10 || floatOffset < -10) {
            floatDirection *= -1;
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        drawImages();
    }

    setInterval(() => {
        updateFloat(); 
        animate(); 
    }, 30);

    let loaded = 0;
    images.forEach(img => {
        img.onload = () => {
            loaded++;
            if (loaded === images.length) {
                animate();
            }
        };
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('mainCanvas');
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const latin = katakana.split('');
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }
    
    const draw = () => {
      context.fillStyle = 'rgba(255, 255, 255, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      context.fillStyle = '#000000';
      context.font = fontSize + 'px monospace';
    
      for (let i = 0; i < rainDrops.length; i++) {
        const text = latin[Math.floor(Math.random() * latin.length)];
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    
    setInterval(draw, 30);    

});

document.getElementById('startButton').addEventListener('click', function () {
    document.getElementById('startButton').style.display = 'none';
    let loading = document.getElementById('loading');
    loading.style.display = 'block';

    const spinner = document.createElement('div');
    spinner.classList.add('loading-spinner');
    loading.appendChild(spinner);  

    setTimeout(() => {
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('loading-screen').style.transition = 'opacity 1s ease-out';
        document.getElementById('loading-screen').style.opacity = '0'; 
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            spinner.style.display = 'none'; 
            const userInput = document.getElementById('userInput');

            function focusUserInput() {
                userInput.focus();
            }

            focusUserInput();

        }, 1000); 
    }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("betacode");
    const submitButton = document.getElementById("okbutton");
    const successMessage = document.getElementById("successMessage");
    const betaCodeSection = document.getElementById("betaCodeSection");
    const subbutton = document.getElementById("submitBetaCode");
    const haveBetaCode = document.getElementById("betaCodeSection");
    const betaCodeInput = document.getElementById("betaCodeInput");
    const bett = document.getElementById("bett");
    const bet = document.getElementById("bet");
    const beta = document.getElementById("beta-field");

    submitButton.addEventListener("click", function () {
        const email = emailInput.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        successMessage.style.display = "block";
        emailInput.style.display = "none"; 
        submitButton.style.display = "none"; 
        bett.style.display = "none"; 

        haveBetaCode.style.display = "block";
    });

    subbutton.addEventListener("click", function () {
        betaCodeInput.value = '';
    
        betaCodeInput.style.backgroundColor = '#812e2e';
    
        betaCodeInput.blur();
    });

    bett.addEventListener('click', () => {
        emailInput.style.display = "none";
        submitButton.style.display = "none";
        betaCodeSection.style.display = "block";
        bett.style.display = "none"; 
        bet.style.display = "flex"; 
    });

    bet.addEventListener('click', () => {
        emailInput.style.display = "block";
        submitButton.style.display = "flex";
        betaCodeSection.style.display = "none";
        bett.style.display = "flex"; 
        bet.style.display = "none"; 
    });
});


button.addEventListener('click', () => {
    const startTerminal = document.getElementById("terminalwindow");
    startTerminal.style.display = 'none'; 
    let element = document.querySelector('.active');
    element.classList.remove('active');
});

button3.addEventListener('click', () => {
    startTerminal.style.display = 'block'; 
    button3.classList.add('active');
});

dex.addEventListener('click', () => {
    errorWindow.style.display = 'block'; 
    errorWindow.style.zIndex = highestZIndex + 1;
});

ao.addEventListener('click', () => {
    agentswindow.style.display = 'flex'; 
});

bo.addEventListener('click', () => {
    betawindow.style.display = 'flex'; 
});

buttonError.addEventListener('click', () => {
    errorWindow.style.display = 'none'; 
});

closebeta.addEventListener('click', () => {
    betawindow.style.display = 'none'; 
});

buttonAgent.addEventListener('click', () => {
    agentswindow.style.display = 'none'; 
});

button2.addEventListener('click', () => {
    outputWindow.style.display = 'none'; 
});

button4.addEventListener('click', () => {
    outputWindow.style.display = 'none'; 
});

document.addEventListener("DOMContentLoaded", () => {
    const terminalWindow = document.getElementById("terminalwindow");
    const outputWindow = document.getElementById("outputwindow");
    const terminalHeader = document.getElementById("terminalwindowheader");
    const outputHeader = document.getElementById("outputwindowheader");
    const errorWindow = document.getElementById("errorwindow");
    const errorHeader = document.getElementById("errorwindowheader");
    const agentswindow = document.getElementById("agentswindow");
    const agentswindowheader = document.getElementById("agentswindowheader");
    const betawindow = document.getElementById("betawindow");
    const betaheader = document.getElementById("betawindowheader");

    let highestZIndex = 50; 

    function bringToFront(windowElement) {
        highestZIndex++; 
        windowElement.style.zIndex = highestZIndex;
    }

    terminalHeader.addEventListener("mousedown", () => bringToFront(terminalWindow));
    outputHeader.addEventListener("mousedown", () => bringToFront(outputWindow));
    errorHeader.addEventListener("mousedown", () => bringToFront(errorWindow));
    agentswindowheader.addEventListener("mousedown", () => bringToFront(agentswindow));
    betaheader.addEventListener("mousedown", () => bringToFront(betawindow));

    terminalWindow.addEventListener("mousedown", () => bringToFront(terminalWindow));
    outputWindow.addEventListener("mousedown", () => bringToFront(outputWindow));
    errorWindow.addEventListener("mousedown", () => bringToFront(errorWindow));
    agentswindow.addEventListener("mousedown", () => bringToFront(agentswindow));
    betawindow.addEventListener("mousedown", () => bringToFront(betawindow));

});

document.addEventListener("DOMContentLoaded", () => {
    let startX = 0, startY = 0;
    let isSelecting = false;
    let isDragging = false;  

    const selectionBox = document.createElement("div");
    selectionBox.id = "selectionBox";
    document.body.appendChild(selectionBox);
  
    document.addEventListener("mousedown", (e) => {
        if (isDragging) return;
    
        isSelecting = true;
        startX = e.clientX;
        startY = e.clientY;
    
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        selectionBox.style.width = `0px`;
        selectionBox.style.height = `0px`;
        selectionBox.style.display = "block";
    });
    
    document.addEventListener("mousemove", (e) => {
        if (!isSelecting) return;
    
        let currentX = e.clientX;
        let currentY = e.clientY;

        currentX = Math.max(0, Math.min(currentX, window.innerWidth));
        currentY = Math.max(0, Math.min(currentY, window.innerHeight));
    
        const width = Math.abs(currentX - startX);
        const height = Math.abs(currentY - startY);
    
        selectionBox.style.width = `${width}px`;
        selectionBox.style.height = `${height}px`;
    
        selectionBox.style.left = `${Math.min(currentX, startX)}px`;
        selectionBox.style.top = `${Math.min(currentY, startY)}px`;
    });
    

    document.documentElement.style.overflow = "hidden";
  
    document.addEventListener("mouseup", () => {
        isSelecting = false;
        selectionBox.style.display = "none";
    });

    dragElement(startTerminal);
    dragElement(outputWindow);
    dragElement(errorWindow);
    dragElement(agentswindow);
    dragElement(betawindow);
    

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            isDragging = true;  
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            const pageWidth = window.innerWidth;
            const pageHeight = window.innerHeight;

            let newTop = elmnt.offsetTop - pos2;
            let newLeft = elmnt.offsetLeft - pos1;

            if (newTop < 0) newTop = 0;
            if (newLeft < 0) newLeft = 0;
            if (newTop + elmnt.offsetHeight > pageHeight) newTop = pageHeight - elmnt.offsetHeight;
            if (newLeft + elmnt.offsetWidth > pageWidth) newLeft = pageWidth - elmnt.offsetWidth;

            elmnt.style.top = newTop + "px";
            elmnt.style.left = newLeft + "px";
        }

        function closeDragElement() {
            isDragging = false;  
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const userrInput = document.getElementById('userInput');

    function focusUserInput() {
        userrInput.focus();
    }


    focusUserInput();


    const userInput = document.getElementById('userInput');
    const output = document.querySelector('.output');
    const terminalBody = document.querySelector('.terminal-body');



    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = userInput.value.trim();
            const response = processCommand(command);
            if (command) {

                const commandOutput = document.createElement('div');
                commandOutput.classList.add('command-line');
                output.appendChild(commandOutput); 
            }
            userInput.value = '';

            if (response) {
                const responseOutput = document.createElement('div');
                responseOutput.classList.add('response-line');
                output.appendChild(responseOutput);
                animateTypeOut(responseOutput, response); 
            }
        }
    });

    document.getElementById('po').addEventListener('click', function() {
        const command = userInput.value.trim();
        const response = processCommand('1');
        if (command) {
            const commandOutput = document.createElement('div');
            commandOutput.classList.add('command-line');
            output.appendChild(commandOutput);
        }
        userInput.value = '';

        if (response) {
            const responseOutput = document.createElement('div');
            responseOutput.classList.add('response-line');
            output.appendChild(responseOutput); 
            animateTypeOut(responseOutput, response); 
        }
    });
    
    document.getElementById('wo').addEventListener('click', function() {
        const command = userInput.value.trim();
        const response = processCommand('2');
        if (command) {

            const commandOutput = document.createElement('div');
            commandOutput.classList.add('command-line');
            output.appendChild(commandOutput); 
        }
        userInput.value = '';
 
        if (response) {
            const responseOutput = document.createElement('div');
            responseOutput.classList.add('response-line');
            output.appendChild(responseOutput); 
            animateTypeOut(responseOutput, response); 
        }
    });

    function processCommand(command) {
        const cmd = command.toLowerCase();

        switch (cmd) {
            case '1':
                outputWindow.style.display = 'flex';
                clearTerminal();
                return ' ____ ____ ____ ____ ____ ____ ____ ____ _________ ____ ____ ____ ____ ____ ____ ____ ____\n||P |||l |||a |||t |||f |||o |||r |||m |||       |||O |||v |||e |||r |||v |||i |||e |||w ||\n||__|||__|||__|||__|||__|||__|||__|||__|||_______|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/_______\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n\nThe Miu platform is designed to revolutionize how users interact with tokens in the Solana blockchain ecosystem. At the heart of this platform is an AI-powered assistant that provides deep insights and personalized opinions on various tokens, empowering users to make informed decisions.\n\n1. Key Features:\n  - AI-Driven Insights: Get real-time, detailed analyses of token metrics, trends, and potential. The AI helper evaluates data from the Solana blockchain, market conditions, and user behaviors to offer valuable perspectives.\n  - Token Opinion System: The AI doesnt just deliver facts; it also provides its unique opinion on token performance, highlighting strengths, weaknesses, and potential risks.\n  - Interactive Dashboard: An intuitive, user-friendly interface allows seamless navigation through token information, historical data, and performance charts, ensuring users have everything they need at their fingertips.\n\n2. Vision:\n  - Miu aims to make token exploration and investment decisions smarter, faster, and more transparent, fostering trust and innovation in the Solana blockchain network.\n  - With its powerful AI assistant and robust toolset, Miu is the ultimate platform for token enthusiasts and seasoned investors alike.';
            case '2':
                outputWindow.style.display = 'flex'; 
                clearTerminal();
                return ' ____ ____ ____ _________ ____ ____ _________ ____ ____ ____ ____ ____ \n||H |||o |||w |||       |||I |||t |||       |||W |||o |||r |||k |||s ||\n||__|||__|||__|||_______|||__|||__|||_______|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/_______\\|/__\\|/__\\|/_______\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n\n1. Data Collection & Integration:\n  - Blockchain Data: The platform continuously pulls real-time data from the Solana blockchain, including token prices, trading volumes, historical trends, and on-chain activity.\n  - Market Feeds: External market data such as news, social media sentiment, and macroeconomic factors are integrated to provide a holistic analysis.\n\n2. AI Analysis\n  - Token Insights: The AI processes raw data using advanced algorithms to generate detailed analytics, such as token performance, market trends, and price predictions.\n  - Opinion Generation: Beyond raw analysis, the AI evaluates a tokens overall potential based on historical data, user sentiment, and technical fundamentals to offer a concise opinion.\n  - Risk Assessment: The system evaluates factors like volatility, liquidity, and market sentiment to highlight potential risks or opportunities.\n\n3. User Interaction\n  - Interactive Queries: Users can ask the AI specific questions about any token, such as ‘What is the current price of Token X?‘ or ‘What are the risks of investing in Token Y?‘\n  - Custom Recommendations: Based on the users preferences and historical interactions, the AI tailors token recommendations to fit their needs and goals.';
            case '3':
                betawindow.style.display = 'flex'; 
                return;
            case '4':
                agentswindow.style.display = 'flex'; 
                return ;
            case 'clear':
                clearTerminal();
                return ''; 
            case 'close':
                outputWindow.style.display = 'none'; 
                return ''; 
            case '':
                return ''; 
            default:
                if (cmd.startsWith('echo ')) {
                    return cmd.substring(5); 
                }
                outputWindow.style.display = 'flex'; 
                clearTerminal();
                return `command not found: ${command}`;
        }
    }

    function clearTerminal() {
        output.innerHTML = ''; 
        terminalBody.scrollTop = 0;
    }


    function animateTypeOut(element, text) {
        element.innerHTML = ''; 
        let i = 0;
    
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 5); 
            }
        }
    
        type();
    }
    

  
});

