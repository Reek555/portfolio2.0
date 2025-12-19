        fetch('data/articles.json')
        .then(res => res.json())
        .then( articles => {
               let content = articles.map (a => `
               
                    <div class = "bordered">
                        <a href = "works/${a.fileName}">
                        <img src="assets/${a.assets[1]}" alt="">
                        <p>${a.title}</p>
                        </a>
                        
                        <p class="under-desc" style = "font-size: small;">
                            ${a.description.split(' ').slice(0, 23).join(' ')}
                            
                        </p>

                        <div style = "margin-top: 10px;">

                            ${
                                a.skills.map ( s => `
                                
                                    <button class = 'tag'> ${s} </button>

                                `).join('')   
                            }

                        </div>

                    </div>
               
               `) 
               let e = document.getElementById("portfolio")
               e.innerHTML = content; 

        })


