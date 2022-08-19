import './noticiaView.css';
import { useDetails } from '../../hooks/useDetails';
import { DetailsHeader } from "../../components/detailsHeader/DetailsHeader";
import { Back } from "../../components/buttons/Back";
import { Newspaper } from "../../components/newspaper/Newspaper";
import '../../STYLE-SHEET/buttonView.css'

export function NoticiaView(){
  useDetails()
  return (
    <div className="App__NoticiaView">
        <Back />
        <div>
          <DetailsHeader/>
          <Newspaper />
        </div>
    </div>
  )
}