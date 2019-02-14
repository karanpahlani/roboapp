import React from 'react';



const Card = (props) => {
    const {name, username, id , email} = props;
    return(
      <div className={" w5 tc bg-light-red dib br3 pa2 ma2 grow bw2 shadow-5"}>
          <img src={`https://robohash.org/${id}?100x100`} alt={"lauda lele"}/>
          <div>
              <h2>{name}</h2>
              <p>{username}</p>
              <p>{email}</p>
          </div>
      </div>
    );
}

export default Card;