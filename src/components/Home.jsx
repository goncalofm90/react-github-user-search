import React from 'react'

function Home() {
  return (
    <div style={{width:'50%' , margin:'0 auto',textAlign: 'center'}}>
      <h1>Hello!</h1>
      <img 
      style={{width:'250px' ,height:'200px', borderRadius: '60%', border:'5px solid black'}}
      src='https://i.etsystatic.com/19196787/r/il/ef288b/1851085505/il_570xN.1851085505_avdr.jpg' 
      alt='moogle' 
      />
      <p>Welcome to my sample app! This is just a simple Github user browser that<br></br>
         allows you to search for github users and check the repos they have.</p>
        <p>We achieve this using calls from the Github API in order to get the necessary data.<br></br>
         I hope you find it acceptable.</p>
      <h2>Thanks!</h2>

    </div>
  )
}

export default Home
