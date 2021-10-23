import React, { Component } from 'react'
import {GetMovies} from './GetMovies.js'

export default class Favrouite extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genre : [],
      currgenre : 'All Genres',
      movies : [],
      currSearch : '',
      limit : 5,
      currPage : 1
    }
  }

  componentDidMount() {
     let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                     27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

     let temp = [];
     let data = JSON.parse(localStorage.getItem("movie") || "[]");
     data.forEach((obj) => {
        if(!temp.includes(genreids[obj.genre_ids[0]])) {
           temp.push(genreids[obj.genre_ids[0]]);
        }
     });
     temp.unshift("All Genres");

     this.setState({
        genre : [...temp],
        movies : [...data]
     })
  }

  handleGenreChange = (genre) => {
     this.setState({
        currgenre : genre
     })
  }

  sortPouplarityDesc = () => {
     let temp = this.state.movies;
     temp.sort(function(objA, objB) {
      return objB.popularity - objA.popularity
     })
     this.setState({
        movies : [...temp]
     })
  }

  sortPouplarityAsc = () => {
     let temp = this.state.movies;
     temp.sort((objA, objB) => {
      return objA.popularity - objB.popularity
     })
     this.setState({
        movies : [...temp]
     })
  }

  sortRatingDesc = () => {
     let temp = this.state.movies;
     temp.sort((objA, objB) => {
      return objB.vote_average - objA.vote_average
     })
     this.setState({
        movies : [...temp]
     })
  }

  sortRatingAsc = () => {
     let temp = this.state.movies;
     temp.sort(function(objA, objB) {
      return objA.vote_average - objB.vote_average
     })
     this.setState({
        movies : [...temp]
     })
  }

  handleDelete = (deleteMovie) => {
    let data = JSON.parse(localStorage.getItem("movie") || "[]")
    let newarr = []
    newarr = data.filter((movieObj) => movieObj.id != deleteMovie.id);
    localStorage.setItem("movie", JSON.stringify(newarr))
    this.setState({
      movies : [...newarr]
    })
  }

  handlePageChange = (page) => {
     this.setState({
        currPage : page
     })
 }


  render() {
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

    let filterarr = []

    if(this.state.currSearch === '') {
      filterarr = this.state.movies
    } else {
      filterarr = this.state.movies.filter((movieObj) => {
         let title = movieObj.title.toLowerCase()
         return title.includes(this.state.currSearch.toLowerCase())
      })
    }

    if(this.state.currgenre != 'All Genres') {
      filterarr = this.state.movies.filter((movieObj) => genreids[movieObj.genre_ids[0]] == this.state.currgenre)
    }

    let pages = Math.ceil(filterarr.length / this.state.limit);
    let pagesarr = [];
    for(let i = 1; i <= pages; i++){
      pagesarr.push(i);
    }
    let si = (this.state.currPage - 1)*this.state.limit;
    let ei = si + this.state.limit;
    filterarr = filterarr.slice(si,ei);

    return (
      <>
         <div className = "main">
            <div className = "row">
               <div className = "col-lg-3 col-sm-12">
               <ul className="list-group favrouite-list">
                  {
                     this.state.genre.map((genre) => (
                        genre == this.state.currgenre ?
                        <li className="list-group-item"
                            style = {{background : '#3f51b5', color : 'white', fontWeight : 'bold'}}>
                            {genre}
                        </li>
                        :
                        <li className="list-group-item"
                            style = {{background : 'white', color : '#3f51b5'}}
                            onClick = {() => this.handleGenreChange(genre)}>
                            {genre}
                        </li>
                     ))
                  }
               </ul>
               </div>
               <div className = "col-lg-9 favrouite-table col-sm-12">
                  <div className = "row">
                     <input type = "text" className = "input-group-text col" placeholder = "Search"
                      value = {this.state.currSearch} onChange = {(e) => {this.setState({currSearch : e.target.value})}}/>
                     <input type = "number" className = "input-group-text col" placeholder = "Row count"
                      value = {this.state.limit} onChange = {(e) => {this.setState({limit : e.target.value})}}/>
                  </div>
                  <div className = "row">
                     <table className="table">
                        <thead>
                        <tr>
                           <th scope="col">Title</th>
                           <th scope="col">Genre</th>
                           <th scope="col">
                              <i className = "fas fa-sort-up" onClick = {this.sortPouplarityDesc} />
                                Popularity
                              <i className="fas fa-sort-down" onClick = {this.sortPouplarityAsc}/>
                           </th>
                           <th scope="col">
                              <i className = "fas fa-sort-up" onClick = {this.sortRatingDesc} />
                                Rating
                              <i className="fas fa-sort-down" onClick = {this.sortRatingAsc}/>
                           </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           filterarr.map((obj) => (
                              <tr>
                                 <td> <img src={`http://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                                    style = {{width : '3rem'}}/>{obj.original_title} {obj.original_name}</td>
                                 <td>{genreids[obj.genre_ids[0]]}</td>
                                 <td>{obj.popularity}</td>
                                 <td>{obj.vote_average}</td>
                                 <td>
                                    <button type="button" className="btn btn-danger" onClick = {() => this.handleDelete(obj)}>
                                       Delete
                                    </button>
                                 </td>
                              </tr>
                           ))
                        }
                        </tbody>
                     </table>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {
                           pagesarr.map((page) => (
                              <li className="page-item">
                                 <a className="page-link" onClick = {() => (this.handlePageChange(page))}>{page}</a>
                              </li>
                           ))
                        }
                    </ul>
                  </nav>
               </div>
            </div>
         </div>
      </>
    )
  }
}
