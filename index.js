function getToken () {
  return ''
}

function forkRepo () {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json))
}

function showResults (json) {
  document.getElementById('results').innerHTML = `<a href=$json.html_url>
    ${json.html_url}</a>`
}

function createIssue () {
  const repo = `mpissanos/js-ajax-fetch-lab`
  fetch(
    `https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify({
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
      }),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(res => res.json())
    .then(json => getIssues())
}

function getIssues () {
  const repo = 'mpissanos/js-ajax-fetch-lab'
  fetch(
    `$https://api.github.com/repos/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(res => res.json)
    .then(json => console.log(json))
}
