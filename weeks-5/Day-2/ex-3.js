async function fetchStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data.result); 
      

    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  }
  
  fetchStarshipData();