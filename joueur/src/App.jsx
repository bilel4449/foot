
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './players/Player';

function App() {
  const Data =[
    {
      name:"ghram",
      equipe:"css",
      nationalite:"tunisienne",
      age:"22",
      numero:"18",
      image:"https://www.infosfoot.net/wp-content/uploads/2020/06/589615_med__20190723125254_alaa_ghram.jpg"
    },
    {
      name:"nasraoui",
      equipe:"css",
      nationalite:"tunisienne",
      age:"22",
      numero:"3",
      image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Portrait_of_Nasraoui_Mohamed.jpg"
    },
    {
      name:"haboubi",
      equipe:"css",
      nationalite:"tunisienne",
      age:"24",
      numero:"28",
      image:"https://content.mosaiquefm.net/uploads/content/thumbnails/haboubi_1674919755.jpg"
    },
    {
      name:"trabelssi",
      equipe:"css",
      nationalite:"tunisienne",
      age:"26",
      numero:"26",
      image:"https://www.leballonrond.fr/img/jogadores/39/817639_med__20210903200427_mohamed_ali_trabelsi.jpg"
    },
  ];
  const handleAlert =(x) => alert(`le nom ${x.name} joue a l'equipe ${x.equipe} son numero ${x.numero} du nationalité${x.nationalite} et son age${x.age}`);

  return (
    <div>
     <Player items={Data}  hadleFunctionAlert={handleAlert}/>
     
    </div>
  )
}

export default App
