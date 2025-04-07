document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gif-form');
    const gifSearch = document.getElementById('gif-search');
    const gifsContainer = document.getElementById('gifs-container');
    const deletebtn = document.getElementById('delete-all');
    
    const key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const url = 'https://api.giphy.com/v1/gifs';
    
    async function ftch(category) {
        try {
            const response = await fetch(`${url}/random?api_key=${key}&tag=${category}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch GIF');
            }
            
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
    
    function display(gifData) {
        if (!gifData) return;
        
        const gifUrl = gifData.images.original.url;
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';
        
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = gifData.title;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = () => gifItem.remove();
        
        gifItem.appendChild(img);
        gifItem.appendChild(deleteBtn);
        gifsContainer.appendChild(gifItem);
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const category = gifSearch.value.trim();
        
        if (category) {
            const gifData = await ftch(category);
            display(gifData);
            gifSearch.value = '';
        }
    });
    
    deletebtn.addEventListener('click', () => {
        gifsContainer.innerHTML = '';
    });
});