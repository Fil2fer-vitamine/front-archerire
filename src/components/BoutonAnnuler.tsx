import { NavLink } from 'react-router-dom';

const BoutonAnnuler = () => {
  return (
    <button type="button" className="btn btn-outline-danger btn-sm"><NavLink to='/' end className='nav-link'>Annuler</NavLink></button>
  );
};

export default BoutonAnnuler;
