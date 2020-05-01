// Init Github
const github = new Github
// Init UI
const ui = new UI
// Search Input
const searchUser = document.getElementById('searchUser')

// Search Input event listener

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          ui.showProfile(data.profile)
        }
      })
  } else {
    ui.clearProfile()
  }
})