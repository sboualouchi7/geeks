async function req() {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; 
    const url = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur , Statut: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Réponse de l'API:", data);
      
    } catch (error) {
      console.error("Erreur :  ", error);
    }
  }
  
  req();