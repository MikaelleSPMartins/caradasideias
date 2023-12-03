class ConteudoModulo extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const module = document.createElement("div");
        module.setAttribute("class", "modulo");

        const order = document.createElement("span");
        order.setAttribute("class", "order");
        order.textContent = this.getAttribute("modulo");

        const conteudo = document.createElement("p");
        conteudo.setAttribute("class", "conteudo");
        conteudo.textContent = this.getAttribute("conteudo");

        const btnModulo = document.createElement("button");
        btnModulo.setAttribute("class", "botao-modulo");
        btnModulo.innerHTML= '&#x276F';
        
        module.addEventListener('click', function() {
    
            if(conteudo.style.display  === "block"){
                conteudo.style.display = "none";
                btnModulo.style.rotate = "0deg";
               
            } else{
                conteudo.style.display = "block";
                btnModulo.style.rotate = "90deg";
            }
        
        }); 

        module.appendChild(order);
        module.appendChild(btnModulo);
        module.appendChild(conteudo);

        return module;
    }
    
    style(){
        const style = document.createElement("style");
        style.textContent = `
        
        .modulo{
            display: grid;
            padding: 10px;
            background: #0D0D0D;
            margin: 5px;
            grid-template-columns: 290px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
       
        .modulo>span{
            background: #0D0D0D; 
            
            
        }

        .conteudo{
            display: none;
            background: #0D0D0D;
            font-size: 15px;
            color: rgb(219, 207, 192);
            margin: 10px 0;
            
        }

        .botao-modulo{
            font-size:20px;
            width: 20px;   
            border: none;
            cursor: pointer;
            color: #fcd603;
            background: #0D0D0D;
            align-items:flex-end;
            text-align: center;
            transition:  .3s;
        }
       
        `;

        return style;
    }
}  
customElements.define("conteudo-modulo", ConteudoModulo);  
