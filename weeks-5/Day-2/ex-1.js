// async function test(url) {
//     const res = await fetch(url);
//     const res1 =  res.json()
//     res1.then(res1 =>console.log(res1))
//     res1.catch(err=>console.log(err))

// }

// test('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

async function test(url) {
    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Erreur HTTP! Statut: ${res.status}`);
        }
        
        const res1 = await res.json(); 
        console.log(res1);
    } catch(err) {
        console.log("Erreur:", err);
    }
}

test('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');