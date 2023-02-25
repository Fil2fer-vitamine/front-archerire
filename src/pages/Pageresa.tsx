import { useEffect, useState } from "react";

interface Ville {
    id: number;
    village_name: string;
    number_ok_kilometers: string;
}

const PageResa = () => {
    const [ListVille, setListVille] = useState<Ville[] | null>(null);

//     useEffect(() => {
//         http://localhost:8080/api/locations
//     })
//   return (
//   <div>
    
//   </div>
//   );
};
export default PageResa;
