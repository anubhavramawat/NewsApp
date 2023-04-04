import React from 'react'
import "./styles.css"

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
     
      <div>
        <div className="card">
          <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>

        <span className="badge rounded-pill bg-dark">{source}</span>
        </div>
          {/*<img src="https://media.cnn.com/api/v1/images/stellar/prod/200113085634-nominados-al-oscar-1917-joker-the-irishman-tarantino-parasite-corea-brk-arciniegas-00011301.jpg?q=x_149,y_284,h_2085,w_3706,c_crop/w_800" className="card-img-top" alt="..."/>*/}
          <div className='card-hover'>
          <img src={imageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.</p>
            <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>

      
    )
  
}

export default NewsItem