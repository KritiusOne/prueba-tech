import './noticiaView.css';
import { DetailsHeader } from "../../components/detailsHeader/DetailsHeader";
import { Back } from "../../components/buttons/Back";
import { useDetails } from "../../hooks/useDetails";
import { Newspaper } from "../../components/newspaper/Newspaper";
import '../../STYLE-SHEET/buttonView.css'

export function NoticiaView(){
  const noticia = useDetails();
  console.log(noticia)
  return (
    <div className="App__NoticiaView">
        <Back />
        <div>
          <DetailsHeader noticia={noticia}/>
          <Newspaper noticia={noticia} />
        </div>
    </div>
  )
}