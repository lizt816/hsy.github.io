document.getElementById("checkbox").addEventListener("change",(function(e){let c=this.nextElementSibling;!0===this.checked?c.classList.add("checkbox"):c.classList.remove("checkbox")}));