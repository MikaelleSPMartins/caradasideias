class ConteudoFaq extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const faq = document.createElement("div");
        faq.setAttribute("class", "faq");

        const pergunta = document.createElement("span");
        pergunta.setAttribute("class", "pergunta");
        pergunta.textContent = this.getAttribute("pergunta");

        const resposta = document.createElement("p");
        resposta.setAttribute("class", "resposta");
        resposta.textContent = this.getAttribute("resposta");

        const btnFaq = document.createElement("button");
        btnFaq.setAttribute("class", "botao-faq");
        btnFaq.innerHTML= '+';
        
        btnFaq.addEventListener('click', function() {
    
            if(resposta.style.display  === "block"){
                resposta.style.display = "none";
                btnFaq.style.rotate = "0deg";
               
            } else{
                resposta.style.display = "block";
                btnFaq.style.rotate = "90deg";
            }
        
        }); 
        
        
        faq.appendChild(pergunta);
        faq.appendChild(btnFaq);
        faq.appendChild(resposta);

        return faq;
    }
    
    style(){
        const style = document.createElement("style");
        style.textContent = `
        
        .faq{
            display: grid;
            padding: 10px;
            margin: 5px;
            grid-template-columns: 250px 50px;
            border-radius: 5px;
        }
       
        .pergunta{
            border-bottom: 2px solid #fcd603;   
        }

        .resposta{
            display: none;
            
            font-size: 15px;
            color: rgb(219, 207, 192);
            margin: 10px 0;
        }

        .botao-faq{
            font-size:20px;
            width: 20px;   
            border: none;
            cursor: pointer;
            color: #fcd603;
            background: black;
            align-items:flex-end;
            text-align: center;
            transition:  .3s;
        }
       
        `;

        return style;
    }
}  
customElements.define("conteudo-faq", ConteudoFaq);  
