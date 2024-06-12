import { SiCodersrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer({isLight}){



return(
<footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
  <div className="flex">
    <p className="text-7xl"><SiCodersrank /></p>
    <p className="text-2xl font-secularOne font-semibold">ImRaffy.dev</p>
  </div>
  <nav>
    <div className="grid grid-flow-col gap-4 text-gray-800">
      <a href="https://github.com/ImRaffy14" className="text-4xl cursor-pointer"><FaGithub /></a>
      <a href="https://www.instagram.com/raffyuanan/" className="text-4xl cursor-pointer"><FaInstagram /></a>
      <a href="https://www.facebook.com/raffy.uanan.10/" className="text-4xl cursor-pointer"><FaFacebook /></a>
    </div>
  </nav> 
  <aside>
    <p>Designed & Built by Raffy Uanan</p>
    <p>Copyright © 2024 - All right reserved</p>
  </aside>
</footer>
)

}

export default Footer