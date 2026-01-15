import { 
  ARROW_BUTTON_VARIANT, 
  Button, 
  BUTTON_VARIANT, 
  Htag, 
  H_TAG_VARIANT, 
  TAG_VARIANT, 
  TAG_SIZE,
  Rating} from "./components"
import Tag from "./components/tag/tag";
import { WithLayout } from "./layout/layout";
import axios, { AxiosError } from "axios";
import { IMenuItem } from "./interfaces/menu.interface";

 async function Home() {
  const data = await getMenuItems()
  return (
    <div>
      <h1>Main Page</h1>
      <Htag tag={H_TAG_VARIANT.H2}>Курсы по Photoshop</Htag>
      <Htag tag={H_TAG_VARIANT.H2}>Вакансии - Photoshop</Htag>
      <Htag tag={H_TAG_VARIANT.H3}>Длительность</Htag>
      <Htag tag={H_TAG_VARIANT.H4}>Преимущества</Htag>
      <Button arrow={ARROW_BUTTON_VARIANT.RIGHT} variant={BUTTON_VARIANT.PRIMARY}>Узнать подробнее</Button>
      <Button arrow={ARROW_BUTTON_VARIANT.DOWN} variant={BUTTON_VARIANT.TRANSPARENT}>Читать отзывы</Button>
      <Tag size={TAG_SIZE.S} varinat={TAG_VARIANT.TRANSPARENT}>Дизайн</Tag>
      <Tag size={TAG_SIZE.M} varinat={TAG_VARIANT.RED} href={"https://hh.ru/"}>hh.ru</Tag>
      <Tag size={TAG_SIZE.S} varinat={TAG_VARIANT.PRIMARY}> Работа в Photoshop</Tag>
      <Tag size={TAG_SIZE.M} varinat={TAG_VARIANT.GREEN}>10 000</Tag>
      <Tag size={TAG_SIZE.M} varinat={TAG_VARIANT.GRAY}>10</Tag>
      <Rating 
      rating={4} 
      isEditable/>
      <ul>
      {
        data?.menu.map( m =>
          <li key={m._id.secondCategory}>
            {m._id.secondCategory}
          </li>)
      }
      </ul>
    </div>
  );
}

export const getMenuItems = async () => {
try {  const firstCategory = 0
  const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}top-page/find`,{ firstCategory });
  return {
    menu
  }}
  catch (e) {
    if (e instanceof AxiosError){
         throw new Error(e.message)
    }
  }
}

export default WithLayout(Home)