import { NavLink } from 'react-router-dom';
import { IoIosArrowBack} from 'react-icons/io';
import { AiFillAudio, AiFillSetting } from 'react-icons/ai';
import '../style/header.css'

const Header = () => (
  <div className="d-flex justify-content-around align-items-center">
    <NavLink to="/" exact>
          <IoIosArrowBack className="nav-icon" />
    </NavLink>
    <h5 className="m-3">Decathlon - Sports</h5>
    <div>
      <AiFillAudio className="nav-icon mx-2"/>
      <AiFillSetting className="nav-icon mx-2"/>
    </div>
  </div>
);
export default Header;
