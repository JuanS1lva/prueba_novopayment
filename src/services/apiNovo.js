const url = 'https://services-ten.vercel.app/menu'
export const getMenu = async ()=>{
    try{
      let serverResponse = await fetch(url,
          {
            method:'GET',
            headers:{
              'Content-Type': 'application/json'
            },
          }
        )
      serverResponse = await serverResponse.json()
      if(!serverResponse.data){
        throw new Error({
          response: 'no content'
        })
      }
      return serverResponse.data
    }catch(err){
      console.log(err);
      throw new Error({
        response: err
      })
    }
  }