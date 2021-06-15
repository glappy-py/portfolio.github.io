function aItem(tag,state) {
    this.tag = tag
    this.state = state
}

item1 = new aItem(document.getElementById('item1'),false)
item2 = new aItem(document.getElementById('item2'),false)
item3 = new aItem(document.getElementById('item3'),false)

item1.tag.onclick = ()=>{
    item1.state = !item1.state
    if(item1.state == true){
        item1.tag.className = "accordion-button collapsed text-white"
    }
    else{
        item1.tag.className = "accordion-button collapsed text-white"
    }
}
item2.tag.onclick = ()=>{
    item2.state = !item2.state
    if(item2.state == true){
        item2.tag.className = "accordion-button collapsed text-white"
    }
    else{
        item2.tag.className = "accordion-button collapsed text-white"
    }
}
item3.tag.onclick = ()=>{
    item3.state = !item3.state
    if(item3.state == true){
        item3.tag.className = "accordion-button collapsed text-white"
    }
    else{
        item3.tag.className = "accordion-button collapsed text-white"
    }
}