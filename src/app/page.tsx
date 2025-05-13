import { ARROW_BUTTON_VARIANT, Button, BUTTON_VARIANT, Htag } from "./components"
import { H_TAG_VARIANT } from "./components"

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
    </div>
  );
}
