document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open("GET", 'data.txt', true);

  // Optional = used for spinners and loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState)
  }

  // console.log('READYSTATE', xhr.readyState)

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText)
  //   }
  // }

  xhr.onerror = function () {
    console.log('Request Error...')
  }

  xhr.send()
}