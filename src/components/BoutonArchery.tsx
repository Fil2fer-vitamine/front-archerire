import Button from 'react-bootstrap/Button';
import './BoutonArchery.css';

function OutlineTypesExample() {
  return (
    <div className='centrageBouton'>
      <Button className='archery' variant='outline-success' size='lg'>
        Archery Battle ... What is it ?
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
        Pour réserver, cliquez ici !
      </Button>
    </div>
  );
}

export default OutlineTypesExample;
