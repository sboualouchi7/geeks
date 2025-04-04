const dom =(NumOfChildren, partner, location, job ) => {
    t = document.getElementById('dom');
    snt = document.createTextNode('You will be a '+job+' in '+location+' and married to '+partner+' with '+NumOfChildren+' kids');
    t.appendChild(snt);
    
}
dom(3,'nassi','aga','ing')
