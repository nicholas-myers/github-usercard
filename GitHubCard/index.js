/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// let me = {

// } 


  /* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/ //close getUser

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

*/ const userCardMaker = ({ avatar_url, name, login, location, html_url, followers, following, bio}) => {
  //instantiate elements
  const userCard = document.createElement("div")
  const userImage = document.createElement("img")
  const cardInfo = document.createElement("div")
  const personName = document.createElement("h3")
  const userName = document.createElement("p")
  const userLocation = document.createElement("p")
  const userProfile = document.createElement("p")
  const userProfileLink = document.createElement("a")
  const userFollowers = document.createElement("p")
  const userFollowing = document.createElement("p")
  const userBio = document.createElement("p")

  // structure elements
  userCard.appendChild(userImage)
  userCard.appendChild(cardInfo)
  cardInfo.appendChild(personName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(userProfileLink)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)

  // set Attributes
  userCard.classList.add("card")
  userImage.src = avatar_url
  cardInfo.classList.add("card-info")
  personName.classList.add("name")
  userName.classList.add("username")
  userProfileLink.href = html_url

  //set content
  personName.textContent = name
  userName.textContent = `User Name: ${login}`
  userLocation.textContent = location
  userProfileLink.textContent = html_url
  userFollowers.textContent = `Followers: ${followers}`
  userFollowing.textContent = `Following: ${following}`
  userBio.textContent = `Bio: ${bio}`


  return userCard;
}; //close userCardMaker


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector(".cards")
axios.get("https://api.github.com/users/nicholas-myers")
  .then(myData => {
    cards.appendChild(userCardMaker(myData.data))
  })
  .then(
    axios.get("https://api.github.com/users/nicholas-myers/followers")
      .then(followersArray => {
        followersArray.data.forEach(follower => {
        cards.appendChild(userCardMaker(follower))
        })
      })
      .catch(error => {
        console.log(error)
    })
  )
  .catch(error => {
    console.log(error)
  })






/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// axios.get("https://api.github.com/users/nicholas-myers/followers")
// .then(followersArray => {
//   followersArray.data.forEach(follower => {
//     cards.appendChild(userCardMaker(follower))
//   })
// })
// .catch(error => {
//   console.log(error)
// })


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
