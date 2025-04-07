        const fetchButton = document.getElementById('fetch-button');
        const characterInfo = document.getElementById('character-info');
        
        fetchButton.addEventListener('click', getRandomCharacter);
        
        
        function getRandomCharacter() {
            // Clear previous data
            characterInfo.innerHTML = '<div class="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading...</div>';
            
            // Generate random character id     
            const randomId = Math.floor(Math.random() * 83) + 1;
            
            // Fetch character data
            fetch(`https://www.swapi.tech/api/people/${randomId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const character = data.result.properties;
                    
                    // Fetch homeworld
                    fetch(character.homeworld)
                        .then(response => console.log(response.json()))
                        .then(homeworldData => {
                            const homeworldName = homeworldData.result.properties.name;
                            
                            // Display character info
                            displayCharacterInfo(character, homeworldName);
                        })
                        .catch(error => {
                            Error(character);
                        });
                })
                .catch(error => {
                    displayError();
                });
        }
        
        function displayCharacterInfo(character, homeworld) {
            characterInfo.innerHTML = `
                <div class="character-name">${character.name}</div>
                <div class="character-detail">
                    <span>Height:</span>
                    <span>${character.height} cm</span>
                </div>
                <div class="character-detail">
                    <span>Gender:</span>
                    <span>${character.gender}</span>
                </div>
                <div class="character-detail">
                    <span>Birth Year:</span>
                    <span>${character.birth_year}</span>
                </div>
                <div class="character-detail">
                    <span>Home World:</span>
                    <span>${homeworld}</span>
                </div>
            `;
        }
        
        function Error(character) {
            characterInfo.innerHTML = `
                <div class="character-name">${character.name}</div>
                <div class="character-detail">
                    <span>Height:</span>
                    <span>${character.height} cm</span>
                </div>
                <div class="character-detail">
                    <span>Gender:</span>
                    <span>${character.gender}</span>
                </div>
                <div class="character-detail">
                    <span>Birth Year:</span>
                    <span>${character.birth_year}</span>
                </div>
                <div class="character-detail">
                    <span>Home World:</span>
                    <span>Unable to fetch homeworld data</span>
                </div>
            `;
        }
        
        function displayError() {
            characterInfo.innerHTML = `
                <div class="error-message">
                    <i class="fa-solid fa-triangle-exclamation"></i> 
                    Oh No! That person isn't available.
                </div>
            `;
        }