import axios from 'axios';

export interface Customer {
  id: string;
  name: string;
  firstname: string;
  adress: string;
  postal_code: string;
  city: string;
  phone: string;
  email: string;
  password: string;
}

export interface Animationsrequested {
  id: string;
  date: string;
  kind_of_animation: string;
  number_of_participants: number;
  for_who: string;
  question: string;
  decision_admin: boolean;
  comments_admin: string;
  negociation: string;
}

const PageHome = () => {
  return (
    <div>
      <h1>PageHome</h1>
    </div>
  );
};

export default PageHome;
