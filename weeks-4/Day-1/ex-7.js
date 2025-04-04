(function(userName) {
    const userProfileDiv = document.createElement('div');
    userProfileDiv.className = 'user-profile';
    
    const profilePic = document.createElement('img');
    profilePic.src = 'https://via.placeholder.com/40'; 
    profilePic.alt = userName + '\'s profile picture';
    
    
    const welcomeText = document.createElement('span');
    welcomeText.textContent = 'Welcome, ' + userName + '!';
    
    userProfileDiv.appendChild(profilePic);
    userProfileDiv.appendChild(welcomeText);
    
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(userProfileDiv);
})('Salman'); 