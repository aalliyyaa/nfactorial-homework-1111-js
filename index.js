//task01

let btn = document.getElementById('btn')
btn.onclick = function(){
    document.getElementById('text').hidden=true;
}

// task02

pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
pane.firstChild.onclick = () => pane.remove();
