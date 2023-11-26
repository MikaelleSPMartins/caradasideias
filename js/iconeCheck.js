class IconeCheck extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build(){
        const IconeCheck = document.createElement("span");
        IconeCheck.setAttribute("class", "icone-check");
        IconeCheck.innerHTML="&#10004;";
        IconeCheck.append();

        return IconeCheck;
    }
    
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .icone-check{
            border-radius: 50%;
            border: 2px solid #fcd603;
            color: #fcd603;
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 20px;
            align-items: center;
            display: grid;
            box-shadow: 1px 1px 8px #fcd603;
            text-shadow: 1px 1px 8px #fcd603;
            margin: 12px
          }
        `
        ;
        return style;
    }
   
}  
customElements.define("icone-check", IconeCheck);  