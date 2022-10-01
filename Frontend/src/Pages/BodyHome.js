import './BodyHome.css';
import BasicGrid from '../Components/grid';
import Clock from '../Components/Clock';

function BodyHome() {
    return (
    <div className="BodyHome">
      <h1 className='background-title'>Servidores do Ministério X</h1>
      <Clock></Clock>
      <BasicGrid></BasicGrid>
    </div>
  );
  }
  export default BodyHome;