var coll = document.getElementsByClassName("collapsible")
		for (var i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function(){
				var content = this.nextElementSibling;
				if(content.style.maxHeight){
					content.style.maxHeight = null;
					this.innerHTML = "&#9655;" + this.innerHTML.slice(1);

				}else{
					content.style.maxHeight = content.scrollHeight + "px";
					this.innerHTML = "&#9661;" + this.innerHTML.slice(1);
				}
			})
		}