const t=require('striptags');class e{constructor(){this.allowedTags=['a','h1','h2','h3','h4','strong','em','span','ul','li','ol','input','button','textarea','select']}remove(t=!1){const e=document.getElementById('ssm-modal');e&&e.remove(),t&&t.focus()}generate({title:e='',description:n='',removeText:s='Cancel',addText:o='',mainContent:d='',callback:a,params:l={},initiatorButton:i}){const m=d?`<div id="content" class="ssm-modal__content">${t(d,this.allowedTags)}</div>`:'',c=`\n\t\t<div role="dialog" aria-modal="true" aria-labelledby="ssm-modal-title" id="ssm-modal" class="ssm-modal">\n\t\t\t<div class="ssm-modal__container">\n\t\t\t\t<h3 id="ssm-modal-title">${e}</h3>\n\n\t\t\t\t${n?`<p>${t(n)}</p>`:''}\n\n\t\t\t\t${m}\n\n\t\t\t\t<div class="ssm-modal-buttons is-flex">\n\t\t\t\t\t<button id="ssm-modal__close" aria-label="Close" class="btn btn--preview">${t(s)}</button>\n\t\t\t\t\t<button id="ssm-modal__do_it" class="btn btn--fill">${t(o)}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>`;document.body.insertAdjacentHTML('beforeend',c),this.initiateFocusTrap('ssm-modal'),document.getElementById('ssm-modal__close').focus(),document.getElementById('ssm-modal__close').addEventListener('click',(()=>this.remove(i))),document.getElementById('ssm-modal').addEventListener('click',(t=>{'ssm-modal'===t.target.getAttribute('id')&&this.remove(i)})),document.body.addEventListener('keydown',(t=>{const e=t||window.event;('key'in e?'Escape'===e.key||'Esc'===e.key:27===e.keyCode)&&this.remove(i)})),document.getElementById('ssm-modal__do_it').addEventListener('click',(()=>{a(l)}))}initiateFocusTrap(t){const e=document.querySelector('#'+t),n=e.querySelectorAll('a[href]:not([disabled]),\n\t\t\tbutton:not([disabled]),\n\t\t\ttextarea:not([disabled]),\n\t\t\tinput[type="text"]:not([disabled]),\n\t\t\tinput[type="radio"]:not([disabled]),\n\t\t\tinput[type="checkbox"]:not([disabled]),\n\t\t\tselect:not([disabled])'),s=n[0],o=n[n.length-1];e.addEventListener('keydown',(function(t){'Tab'!==t.key&&9!==t.keyCode||(t.shiftKey?document.activeElement===s&&(o.focus(),t.preventDefault()):document.activeElement===o&&(s.focus(),t.preventDefault()))}))}}export{e as default};
