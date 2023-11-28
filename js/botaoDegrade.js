class BotaoDegrade extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const botaoDegrade = document.createElement("button");
        botaoDegrade.setAttribute("class", "botao-degrade");
        botaoDegrade.innerHTML="QUERO SER UMA PESSOA DE SUCESSO";
        botaoDegrade.append();

        return botaoDegrade;
    }
    
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .botao-degrade{
            width: 250px;
            height: 60px;
            border-radius: 50px;
            border: none;
            font-weight: bold;
            font-size: 0.9em;
            background-image: linear-gradient(45deg,#f67600,#f59419,#f4b510,#f67600,#f59419);
            background-size: 400% 200%;
            animation: degrade-animado 3.4s infinite normal;
            box-shadow: 0 0 15px 1px #fcd603;
            font-family: 'Roboto', sans-serif;
            color: white;
            margin: 20px auto;
            transition: .2s ease-in-out;
        }
        
        @keyframes degrade-animado {
            0%{
                background-position: 0%;
            }
            100%{
                background-position: 100%;
            }
        }
        
        .botao-degrade:hover{
            
            cursor: pointer;
            transform: scale(1.1);
            
        }
        @media (836px <= width){
            .botao-degrade{
                width: 300px;
            }
        }    
        `
        ;
        return style;
    }
   
}  
customElements.define("botao-degrade", BotaoDegrade);  
