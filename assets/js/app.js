const searchUsername = document.getElementById('search-username');
const detailsContainer = document.getElementById('details-container');
const userNotFound = document.getElementById('user-not-found');
const avatar = document.getElementById('avatar');
const nameOfUser = document.getElementById('name');
const dateJoined = document.getElementById('date-joined');
const username = document.getElementById('username');
const bioPara = document.getElementById('bio-para');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const userLocation = document.getElementById('location');
const website = document.getElementById('website');
const twitter = document.getElementById('twitter');
const company = document.getElementById('company');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const lightDarkText = document.getElementById('light-dark-text')
const searchContainer = document.getElementById('search-container');
const devfinderText = document.getElementById('devfinder')
const userFinder = document.getElementById('user-finder');
const statsContainer = document.getElementById('stats-container');

searchUsername.addEventListener('keyup',(e)=>{
   var user = e.target.value
   fetch(`https://api.github.com/users/${user}`)
   .then(res=>res.json())
   .then(data=>{updateUi(data)
   })
   
})

function updateUi(data){
   if(data.message=="Not Found"){
      detailsContainer.style.display="none";
      userNotFound.style.display="block";
   }else{
        detailsContainer.style.display="block";
        userNotFound.style.display="none";
        

        avatar.src = data.avatar_url
        nameOfUser.innerText = data.name;
        username.innerText = `@${data.login}`;
        bioPara.innerText = data.bio ;
        repos.innerText = data.public_repos;
        followers.innerText = data.followers;
        following.innerText = data.following;

        if(data.twitter_username){
         twitter.innerHTML = `<i class="fa fa-twitter ic"></i>${data.twitter_username}`;
        }else{
           twitter.innerHTML = "Not Avilable"
        }
       
        if(data.location){
         userLocation.innerHTML = `<i class="icon ion-ios-location ic"></i>${data.location}`;
        }else{
           userLocation.innerHTML = "Not Avilable"
        }
        
        if(data.company){
         company.innerHTML = `<i class="fa fa-building-o ic"></i>${data.company}`
        }else{
           company.innerHTML = "Not Avilable"
        }

        if(data.blog){
         website.innerHTML =  `<i class="fas fa-link ic"></i>${data.blog}  `
        }else{
           website.innerHTML = "Not Avilable"
        }   

      //   Date Fromatting

      dstr = data.created_at.substring(0,10)
      dateJoined.innerText = `Joined ${dstr}`

   }
}



light.addEventListener('click',()=>{
      light.style.display="none";
      dark.style.display="block";
      lightDarkText.innerHTML = "DARK"
      

      userFinder.classList = "light-primary-background light-secondary-text-color";

      searchContainer.classList = "row search-container light-secondary-background";

      searchUsername.classList = "user-search-text light-secondary-background light-primary-text-color place-holder-light"

      detailsContainer.classList = "light-secondary-background light-primary-text-color"

      nameOfUser.classList = "name light-secondary-text-color"

      bioPara.classList = "light-primary-text-color"

      statsContainer.classList = "stats-container row light-primary-background light-primary-text-color"

      userNotFound.classList = "light-secondary-text-color"

      repos.classList = "para-2 light-secondary-text-color"

      followers.classList = "para-2 light-secondary-text-color"
   
      following.classList = "para-2 light-secondary-text-color"

     
})

dark.addEventListener('click',()=>{
   light.style.display="block";
   dark.style.display="none";
   lightDarkText.innerHTML = "LIGHT";
   

   userFinder.classList="dark-primary-text-color dark-primary-background" ;

   searchContainer.classList = "row search-container dark-secondary-background";

   searchUsername.classList="user-search-text dark-secondary-background dark-primary-text-color"

   detailsContainer.classList = "dark-secondary-background dark-primary-text-color"

   nameOfUser.classList = "name"

   bioPara.classList = ""

   statsContainer.classList = "stats-container row dark-primary-background dark-primary-text-color"

   userNotFound.classList=""

   repos.classList = "para-2"

   followers.classList = "para-2"

   following.classList = "para-2"
})


