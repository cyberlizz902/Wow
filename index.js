const URL = "https://owen-wilson-wow-api.herokuapp.com/wows/random"

const getWow = async () => {
  let wow = await fetch(URL)
  let wowJson = await wow.json()
  attachWow(wowJson)
}

const attachWow = (wowJson) => {
  const wowPosterDiv = document.querySelector(".wowPoster")
  const wowPoster = document.querySelector("#wowPoster")
  const wowSound = document.querySelector('#wowSound')
  const wowVideo = document.querySelector('#wowVideo')
  wowPosterDiv.style.display= "flex"
  wowSound.src = wowJson[0].audio
  wowPoster.src = wowJson[0].poster
  wowVideo.src = wowJson[0].video["720p"]
  
}