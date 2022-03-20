/*Fetch para consumir a PokéAPI*/
            //const url = 'https://pokeapi.co/api/v2/pokemon'
            const getTbodyEl = document.getElementById('tbodyPokedex')
            
            
            const pokeNew = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
            const newPokemons = []
            
            for(let i = 1; i <= 100 ; i++){
                newPokemons.push(fetch(pokeNew(i))
                                    .then(response => response.json()))
            }
            
            Promise.all(newPokemons)
                .then(altPoke => {
                    //console.log(altPoke)
                    
                    altPoke.forEach(element => {
                                    newLine(element)
                                    });
                    })
            
            function newLine(pokemon){
                
                console.log(pokemon)
                const {name, id, height, front_default} = pokemon
                const getId = []
                
                const line = document.createElement('tr')
                const idPoke = document.createElement('td')
                const namePoke = document.createElement('td')
                const altuPoke = document.createElement('td')
                const imgPoke = document.createElement('img')
                
                const idPokeText = document.createTextNode(id)
                const namePokeText = document.createTextNode(name)
                const altuPokeText = document.createTextNode(height)
                imgPoke.setAttribute('src', pokemon.sprites.front_default)
                
                idPoke.appendChild(idPokeText)
                namePoke.appendChild(namePokeText)
                altuPoke.appendChild(altuPokeText)
                
                line.appendChild(idPoke)
                line.appendChild(namePoke)
                line.appendChild(imgPoke)
                line.appendChild(altuPoke)
                
                getTbodyEl.appendChild(line)
            }