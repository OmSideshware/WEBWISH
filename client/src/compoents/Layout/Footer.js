import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">
        All Right Reserved &copy; WebWish
        </h4>
        <p className="text-center mt-3">
            <Link to='/about'>About</Link>
            |
            <Link to='/contact'>Contact</Link>
            |
            <Link to='/policy'>Privacy Policy</Link>
        </p>
        <h6 className="text-center">Made with ♥️ by SIDom</h6>
    </div>
  )
}

export default Footer
