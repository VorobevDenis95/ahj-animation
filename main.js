(()=>{"use strict";class e{constructor(e){this.container=e,this.onClickBtn=this.onClickBtn.bind(this)}init(){this.bindToDom();this.container.querySelector(".btn").addEventListener("click",this.onClickBtn)}bindToDom(){const t=document.createElement("div");t.classList.add("container"),t.innerHTML=e.markup,this.container.append(t)}static get markup(){return'\n        <button class="btn" type="button" name="button" aria-label="Click to open description">\n          Collapse\n        </button>\n        <div class="wrapper">\n          <p class="description">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n          </p>\n        '}onClickBtn(){const e=document.querySelector(".wrapper");this.container.querySelector(".active")?(e.classList.remove("active"),e.style.maxHeight=""):(e.classList.add("active"),e.style.maxHeight=`${e.scrollHeight}px`)}}const t=document.querySelector(".root");new e(t).init()})();