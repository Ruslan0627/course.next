import { ARROW_BUTTON_VARIANT, Button, BUTTON_VARIANT, Htag, TAG_SIZE, TAG_VARIANT } from "./components"
import { H_TAG_VARIANT } from "./components"
import Tag from "./components/tag/tag";

export default function Home() {
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
    </div>
  );
}
