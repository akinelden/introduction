function changeArrow(element){
	btn = element.firstElementChild;
	arrow = btn.firstElementChild;
	if(btn.getAttribute("aria-expanded") == "true"){
		arrow.classList.add("right-arrow");
		if(arrow.classList.contains("down-arrow")){
			arrow.classList.remove("down-arrow");
		}
	}
	else if(btn.getAttribute("aria-expanded") == "false"){
		arrow.classList.add("down-arrow");
		if(arrow.classList.contains("right-arrow")){
			arrow.classList.remove("right-arrow");
		}
	}
}