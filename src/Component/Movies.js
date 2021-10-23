import React, { Component } from 'react';
import axios from 'axios';

export default class Movies extends Component {
  constructor(props) {
    super();

    this.state = {
      hover : '',
      pagi : [1],
      currPage : 1,
      movies : [],
      favrouite : []
    }
  }

  async componentDidMount() {
     console.log("mouting")
     const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0210e73b59cccafde4ec9767bf60051e&language=en-US&page=${this.state.currPage}`);
     const data = res.data;
     // console.log(data);

     let localdata = JSON.parse(localStorage.getItem("movie") || "[]")
     // console.log(localdata.length)
     let favrouiteId = []
     for(let i = 0; i < localdata.length; i++) {
        let id = localdata[i].id;
        favrouiteId.push(id);
     }

     this.setState({
        movies : [...data.results],
        favrouite : [...favrouiteId]
     })
  }

  changeMovie = async() => {
     console.log("change movie")
     console.log(this.state.currPage)
     const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0210e73b59cccafde4ec9767bf60051e&language=en-US&page=${this.state.currPage}`);
     const data = res.data;
     // console.log(data);

     this.setState({
       movies : [...data.results]
     })
  }

  handlePrev = () => {
     if(this.state.currPage != 1) {
        this.setState({
           currPage : this.state.currPage - 1
        }, this.changeMovie)
     }
 }

  handleNext = () => {
     let temp = [];
     for(let i = 1; i <= this.state.pagi.length + 1; i++) {
        temp.push(i);
     }

     this.setState({
        pagi : [...temp],
        currPage : this.state.currPage + 1
     }, this.changeMovie)
 }

   showCurr = (value) => {
      if(value != this.state.currPage) {
         this.setState({
            currPage : value
         }, this.changeMovie)
      }
   }

   handleFavourites = (movie) => {
      let olddata = JSON.parse(localStorage.getItem("movie") || "[]");
      if(this.state.favrouite.includes(movie.id)) {
         olddata = olddata.filter((m) => m.id != movie.id)
      } else {
         olddata.push(movie);
      }
      localStorage.setItem("movie", JSON.stringify(olddata));
      this.handleSetFavrouite();
   }

   handleSetFavrouite = () => {
      console.log("set favrouite is called");
      let olddata = JSON.parse(localStorage.getItem("movie") || "[]");
      let temp = olddata.map((m) => m.id)

      this.setState({
         favrouite : [...temp]
      })
   }



  render() {
     // let movie = GetMovies.results
     // console.log("rendering");
  return (
     <>
        {
           this.state.movies.length === 0 ?
           <div className="spinner-border text-primary" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
           :
           <div className = "movie-container">
             <h3 className = "text-center"><strong>Trending</strong></h3>
             <div className = "movie-list">
             {
                this.state.movies.map((movieObj) => (
                   <div className="card movie-card" onMouseEnter = {() => this.setState({hover : movieObj.id})}
                         onMouseLeave = {() => this.setState({hover : ''})}>
                    <img src={`http://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
                       style = {{height : '40vh'}} className="card-img-top movie-img"  />
                    <div className="card-body movie-body">
                      <h5 className="card-title movie-title">{movieObj.original_name} {movieObj.original_title}</h5>
                      <div className = "wrapper-button">
                        {
                           this.state.hover == movieObj.id &&
                           <a className="btn btn-primary movie-button"
                              onClick={()=>this.handleFavourites(movieObj)}>
                                 {this.state.favrouite.includes(movieObj.id) ?
                                 "Remove from Favrouites" : "Add to Favrouites"}
                              </a>
                        }
                      </div>
                    </div>
                  </div>
                ))
            }
               <div style = {{display : 'flex', justifyContent : 'center'}}>
                  <nav aria-label="Page navigation example">
                   <ul className="pagination">
                     <li class="page-item"><a className="page-link paging-btn" onClick = {this.handlePrev}>Previous</a></li>
                     {
                        this.state.pagi.map((idx) => (
                           <li class="page-item"><a className="page-link paging-btn" onClick = {() => this.showCurr(idx)}>{idx}</a></li>
                        ))
                     }
                     <li className="page-item"><a className="page-link paging-btn" onClick = {this.handleNext}>Next</a></li>
                   </ul>
                 </nav>
              </div>
            </div>
           </div>
        }
     </>
  )
  }
}
