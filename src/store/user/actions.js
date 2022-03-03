import axios from "axios";

const getUser = (id) => {
  return async (dispatch) => {
    const req = await axios.get("https://swapi.dev/api/people");
    let user = req.data.results[id || 0];
    dispatch({
      type: "GET_USER",
      payload:user
    });
  };
};

const getUserlist = (id) => {
  return async (dispatch) => {
    const req = await axios.get("https://swapi.dev/api/people");
     const res = req.data.results;
    let characters=[]

     res.map((obj)=>{

        let personaje = obj.name;
        characters.push(personaje);
       
     })

      
    dispatch({
      type: "GET_USERLIST",
      payload: {characters,res},
    });
  };
};


const getMovies = (user) => {
  return async (dispatch) => {
    const movies = user.films;
    let films = [];

    // movies.map(async(obj) => {
    // const req = await axios.get(obj);
    //   let mov = req.data;
    //   films.push(mov)
    // });

    let i = movies.length
    let index=0
    
  for await (let vari of movies) {
      const req = await axios.get(vari);
      let mov = req.data;
      films.push(mov);
    
  }

  //console.log(films)
    
 

    dispatch({
      type: "GET_FILMS",
      payload: films,
    });
  };
};


const getPersonajes = (films) => {
  //console.log(films)
  return async (dispatch) => {
    const peronajesURL = films;
    let personajes = [];
  
    for await (let obj of peronajesURL) {
      const req = await axios.get(obj);
      let mov = req.data;
      personajes.push(mov);
    }

   

    dispatch({
      type: "GET_CHARACTERS",
      payload: personajes,
    });
  };
};

export { getUser, getMovies, getPersonajes, getUserlist };
