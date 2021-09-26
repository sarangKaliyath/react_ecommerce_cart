import React from 'react'
import { Link } from 'react-router-dom';

const links = [
    {to:"/about_us", title:"About Us"},
    {to:"/FAQ", title:"FAQ"},
    {to:"/contact_us", title:"Contact Us"},
]

export const Footer = () => {


    return (
        <div className="footer">
            <div className="footerIcons">
                <img src='../gmail.png' alt="" />
                <img src='../facebook.png' alt="" />
                <img src='../instagram.png' alt="" />
            </div>
            <div className="footerLinks">
                {links.map(({to,title}) => {
                    return <Link to={to}>{title}</Link>
                })}
            </div>
        </div>
    )
}
