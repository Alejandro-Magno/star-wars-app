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

const getMovies = (user) => {
  return async (dispatch) => {
    const movies = user.films;
    let films = [];

    movies.map(async(obj) => {
    const req = await axios.get(obj);
      let mov = req.data;
      films.push(mov)
    });

    let i = movies.length
    let index=0
    
   for (index < i; index++;) {
       
   }
    
    
    console.log(films)

    dispatch({
      type: "GET_FILMS",
      payload: films,
    });
  };
};

export { getUser, getMovies };
