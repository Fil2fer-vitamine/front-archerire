import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './BoutonArchery.css';

function OutlineTypesExample() {
  return (
    <div className='centrageBouton'>
      <Button className='archery' variant='outline-success' size='lg'>
        <NavLink to='/PageInformations' end className='nav-link'>
          Archery Battle ... What is it ?
        </NavLink>
      </Button>
      <Button className='photos' variant='outline-success' size='lg'>
        Voulez-vous plus de photos ?
      </Button>
      <Button
        className='reservation'
        variant='outline-danger'
        size='lg'
        title="N'hésitez pas à réserver !!!"
      >
        <NavLink to='/Reservation' end className='nav-link'>
          Vous souhaitez réserver ???
        </NavLink>
      </Button>
    </div>
  );
}

export default OutlineTypesExample;
