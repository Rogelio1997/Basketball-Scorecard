let home = document.getElementById("home_score");
let guest = document.getElementById("guest_score");
let home_count=0
let guest_count = 0

function incrementOne(){
    
    home_count +=1        
    home.innerText = home_count    
    
};


function incrementTwo(){
    
    home_count +=2        
    home.innerText = home_count 
    
    
};


function incrementThree(){
    
    home_count +=3        
    home.innerText = home_count 
    if(home_count>10){
        home.innerText = "poni ponioso" 
    }
    
    
};

function incrementOneG(){
    
    guest_count +=1        
    guest.innerText = guest_count    
    
};


function incrementTwoG(){
    
    guest_count +=2        
    guest.innerText = guest_count 
    
    
};


function incrementThreeG(){
    
    guest_count +=3        
    guest.innerText = guest_count 
    
    
};