import React from 'react';
import './PagePhoto.css';

const PagePhoto = () => {
  return (
    <div>
      <h1>L'espace photos</h1>
      <section>
        <div className='card'>
          <div className='info'>
            <h1 className='title'>Bienvenue les amis,</h1>
            <p className='description'>
              Voici quelques photos afin de vous permettre de constater que ceci
              pourrait véritablement vous plaire.
              <br />
              Les personnes prises en photo nous ont accordé le droit à l'image.
              <br />
              Les accessoires sont conçus pour être sécuritaires pour chacun des
              acteurs, lors des sessions d'animation.
              <br />A partir de l'âge de <code>sept</code> ans, il y a une solution
              pour vous divertir, n'hésitez pas à réserver votre session
              d'archery battle !!!
            </p>
          </div>
        </div>
        <div className='card0'>
          <div className='info'>
            <h1 className='title'>Trop cool !!!</h1>
            <p className='description'>
              Effectivement, ... il y a des réactions spontannées qui nous font
              plaisir ... Ceci nous conforte dans l'envie de continuer...
            </p>
          </div>
        </div>
        <div className='card1'>
          <div className='info'>
            <h1 className='title'>Avec les plus petits ...</h1>
            <p className='description'>
              Nous avons également pensé à tous nos petits bouts de choux afin
              qu'ils puisent s'initier, à leur tour, en toute sécurité et
              tranquilité.
            </p>
          </div>
        </div>
        <div className='card2'>
          <div className='info'>
            <h1 className='title'>Parlons stratégie !</h1>
            <p className='description'>
              La plupart des équipiers se mettront dans la partie avec une
              aisance déconcertante. Les attaques se font en simultannée ...
              Parfois, ça chauffe pour les mecs ...
            </p>
          </div>
        </div>
        <div className='card3'>
          <div className='info'>
            <h1 className='title'>La supervision</h1>
            <p className='description'>
              Tout ça est rendu possible grâce à l'energie d'un arbitre
              qualifié, impartial et terriblement intraitable.
            </p>
          </div>
        </div>
        <div className='card4'>
          <div className='info'>
            <h1 className='title'>... Encore stratégie ...</h1>
            <p className='description'>
              Les équipiers, même s'ils ne se connaissent pas du tout, mettront
              en place naturellement une stratégie.
            </p>
          </div>
        </div>
        <div className='card5'>
          <div className='info'>
            <h1 className='title'>Tous sur la cible !!!</h1>
            <p className='description'>
              Un des buts du jeu est de viser les cibles ... sans se faire
              dégommer ...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePhoto;
