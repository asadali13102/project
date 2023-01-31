import React from 'react';

const BlurishNavbar = (props) => {
  return (
    <div className={"blurish-nav"}>
        <div className={"cross"} ><img onClick={props.blurishNav} src="/images/icons/cross.png" alt='img' /></div>
        <div className={'mb10'}><img src="/images/icons/W.png" alt='img' /></div>
        <div className={'mb10'}><img src="/images/icons/S.png" alt='img' /></div>
        <div className={'mb10'}><img src="/images/icons/G.png" alt='img' /></div>
        <div><img src="/images/icons/plus.png" alt='img' /></div>
    </div>
    
  )
}

export default BlurishNavbar
