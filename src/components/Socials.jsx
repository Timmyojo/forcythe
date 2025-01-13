import twitter from '/twitter.svg'
import linkedin from '/linkedin-original.svg'
import spotify from '/spotify.svg'
import instagram from '/instagram.svg'
import facebook from '/facebook.svg'
import youtube from '/youtube.svg'
function Socials() {

  return (
      <ul className='flex gap-4 md:justify-start items-center justify-center mt-4 sm:mt-0'>
        <li><a href="https://www.facebook.com/forcythe/" target='_blank'>
        <img src={facebook} alt="" className="w-6" />
        </a></li>
        <li><a href="https://www.instagram.com/forcythe" target='_blank'>
        <img src={instagram} alt="" className="w-6" />
        </a></li>
        <li><a href="https://x.com/forcythe_" target='_blank'>
        <img src={twitter} alt="TX(formerly twitter)" className="w-6" />
        </a></li>
        <li><a href="https://www.linkedin.com/company/forcythe" target='_blank'>
        <img src={linkedin} alt="Linkedin" className="w-6" />
        </a></li>
        <li><a href="https://www.youtube.com/@forcythe" target='_blank'>
        <img src={youtube} alt="Youtube" className="w-6" />
        </a></li>
        <li><a href="https://podcasters.spotify.com/pod/show/the-future-insight" target='_blank'>
        <img src={spotify} alt="Spotify" className="w-6" />
        </a></li>
    </ul>
    )
}

export default Socials
