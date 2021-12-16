  /*  document.querySelectorAll("table tr:nth-child(2) td").forEach(function(node){
        node.ondblclick=function(){
            var val=this.innerHTML;
            var input=document.createElement("input");
            input.value=val;
            input.onblur=function(){
                var val=this.value;
                this.parentNode.innerHTML=val;
                updateFieldInBackend(val);
            }
            this.innerHTML="";
            this.appendChild(input);
            input.focus();
        }
    });

function updateFieldInBackend() {

}
*/