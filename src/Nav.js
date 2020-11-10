import React from 'react'
import './Nav.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Avatar from '@material-ui/core/Avatar';
import Petsgram from './Petsgram.png'

function Nav() {
    return (
        <div className="nav">
            <div className="nav__left">
                <img src={Petsgram} atl=""/>
            </div>
            <div className="nav__center">
                <HomeOutlinedIcon  className="nav__icons"/>
                <SearchIcon className="nav__icons"/>
                <input  type="text" placeholder="Search"/>
                <ExploreOutlinedIcon className="nav__icons"/>
                <FavoriteBorderIcon className="nav__icons"/>
            </div>

            <div className="nav__right">
                <SendOutlinedIcon className="nav__icons"/>
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-iBo2YlWhOGWEkxOM3hbeG09a7LggTiSmLu3bq=s32-c-mo"/>
            </div>
        </div>
    )
}

export default Nav
