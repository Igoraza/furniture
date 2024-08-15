import { BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function TopContactBar() {
  return (
   <section className="lg:px-16 pt-3 pr-2 pl-2">
     <div className="flex items-center justify-between flex-wrap gap-y-3">
        <div className="flex items-center space-x-5">
            <a href="" className="flex items-center gap-2 text-sm">
            <IoMdMail className="text-amber-400"/>testmail@gmail.com
            </a>
            <a href="" className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-amber-400" />+911234567890
            </a>
        </div>
        {/* ? social media icons */}
        <div className="flex items-center gap-3">
            <a href=""><FaFacebook/></a>
            <a href=""><FaLinkedin/></a>
            <a href=""><FaInstagram/></a>
            <a href=""><BsTwitterX/></a>

        </div>
    </div>
    <hr className="mt-3" />
   </section>
  )
}
