console.log('hello')

let tweets = [
  { id: 1, message: 'how are you?' },
  {
    id: 2,
    message: 'where are you today?',
  },
]

let currentId = 2
const tweetList = document.getElementById('container-tweets')

let twitter = {
  displayTweets: tweets => {
    tweets.forEach(tweet => {
      const div = document.createElement('div')
      div.setAttribute('class', 'tweet')
      div.innerHTML = `
      <div>
        picture
      </div>
      <div>
        <p>${tweet.message} toto</p>
      </div>`
      tweetList.appendChild(div)
    })
  },
  sendTweet: event => {
    event.preventDefault()
    const tweet = document.getElementById('tweet').value
    if (!tweet) {
      alert('Forgot to tweet?')
    } else {
      currentId += 1
      tweets.push({
        id: currentId,
        message: tweet,
      })
      tweetList.innerHTML = ''
      twitter.displayTweets(tweets)
    }
  },
}

twitter.displayTweets(tweets)
