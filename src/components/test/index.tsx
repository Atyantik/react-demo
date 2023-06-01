import { FC } from 'react';
import styles from './styles.scss';
// import { CategoryItem, ICatItem } from './category-block';
// import { categoryDataList } from './category-data';

const categorySlider: FC = () => (
  <div className="container container-fluid">
    <div className={styles.cat_Slider}>
      {/* {categoryDataList.map((d: ICatItem) => (
        <CategoryItem
          key={d.id}
          url={d.url}
          catImg={d.catImg}
          title={d.title}
        />
      ))} */}
      Test
    </div>
  </div>
);

export default categorySlider;
