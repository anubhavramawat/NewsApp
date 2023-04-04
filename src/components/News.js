import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
     /*document.title=`${capitalizeFirstLetter(props.category)} - NewsApp`;*/

  
   const capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
   }

  
  const updateNews= async()=>{
    //console.log("constructor");
   props.setProgess(10);
   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1cf980875a8840309f515e319f88aca2&page=${page}&pageSize=${props.pageSize}`;
   setLoading(true)
   let data=await fetch(url);
   props.setProgess(30);
   let parsenData=await data.json();
   //console.log(parsenData);
   setArticles(parsenData.articles)
   setTotalResults(parsenData.totalResults)
   setLoading(false)

   props.setProgess(100);
  }

 /* useEffect( async () => {
   //console.log("constructor");
   props.setProgess(10);
   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1cf980875a8840309f515e319f88aca2&page=1&pageSize=${props.pageSize}`;
   setLoading(true)
   let data=await fetch(url);
   props.setProgess(30);
   let parsenData=await data.json();
   //console.log(parsenData);
   setArticles(parsenData.articles)
   setTotalResults(parsenData.totalResults)
   setLoading(false)

   props.setProgess(100);

  }, [])
  */
   
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;

    updateNews();
    //eslint-disable-next-line
 
  }, [])

  /*
  const handlePrevious= async ()=>{
    setPage(page-1)
    updateNews();
  }

  const handleNext= async ()=>{
    setPage(page+1)
    updateNews();
  }
  */

    const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1cf980875a8840309f515e319f88aca2&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

 
    return (
      
     <>
      
        <h2 className='text-center' style={{ margin: '35px 0px', marginTop: '90px', color: props.mode==='dark'?'white':'black'}} >NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {/*<Spinner/>*/}
        {loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
        > 
        <div className='container'>
        <div className='row'>
          {articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
             <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
              source={element.source.name}/>
              </div>
          })}
          
        </div>
        </div>
        </InfiniteScroll>

        {/*
        <div className='d-flex justify-content-between'>
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevious}>&larr;Previous</button>
        <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>

        </div>
        */}

      
      </>
      
    )
        
}


News.defaultProps={
  country:'in',
  pageSize:13,
  category:'general'
}

News.propTypes={
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}

export default News