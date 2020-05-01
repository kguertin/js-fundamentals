// Init Github
const github = new Github
// Search Input
const searchUser = document.getElementById('searchUser')

// Search Input event listener

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (Data.profile.message === 'Not Found') {
          //Show Alery
        } else {
          // Show Profile
        }
      })
  } else {
    // Clear Profile
  }
})