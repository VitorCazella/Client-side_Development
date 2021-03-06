import React from 'react';

function Footer(){
    return (
        <footer className="footer">
        <div class="info">
          <a title="copyright">&copy; Vitor A. Cazella</a>
          <a title="Privacy Policy" href="#">Privacy Policy</a>
          <a title="Terms of sevice" href="#">Terms of sevice</a>
        </div>
        <div>
          <a href="https://www.facebook.com/"><img
            className="social"
            src="https://www.androidcentral.com/sites/androidcentral.com/files/article_images/2019/10/facebook-logo-f.png?fbclid=IwAR0reKvacunXzHMJVmFkVzqtjEkrZ7TZufs3ZplPItsO_cO9pc34owH_vCk"
            roundedCircle
          />
          </a>

          <a href="https://twitter.com/" ><img
            className="social"
            src="https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B_400x400.png"
            roundedCircle
          />
          </a>

          <a href="https://www.instagram.com/?hl=en"><img
            className="social"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
            roundedCircle
          />
          </a>
        </div>
      </footer>
    )
}

export default Footer;