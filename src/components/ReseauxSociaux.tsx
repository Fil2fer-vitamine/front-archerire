import "./ReseauxSociaux.css";

const ReseauxSociaux = () => {
  return (
    <div className='reseaux-sociaux-container'>
      <ul>
        <li>
          <a
            href='https://www.facebook.com/profile.php?id=100080990201868'
            target='blank'
          >
            <i className='fa-brands fa-square-facebook fa-2xl'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/archerire.battle/?next=%2F'
            target='blank'
          >
            <i className='fa-brands fa-instagram fa-2xl'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ReseauxSociaux;
