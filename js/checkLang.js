

const elemsContent = {
    "#lang": "العربية",

    "#under-title": "Taariq, web developer"

}


for (let element in elemsContent) {
    let langChoice = localStorage.getItem("lang")
    if (langChoice == "ar" || !langChoice) break; // since orginal content in arabic, no need to reassign; 
    let e = document.querySelector(element)  
    if (!e) continue;   //some element are absent in some pages
    e.innerHTML = elemsContent[element];

}

