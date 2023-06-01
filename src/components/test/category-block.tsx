import { FC } from 'react';
import { Button } from '@components/button';
import cn from 'classnames';
import styles from './category-block.scss';

export interface ICatItem {
  id?: number;
  title: string;
  catImg: string;
  url: string;
}
const CategoryItem: FC<ICatItem> = ({ title, catImg, url }) => (
  <Button element="a" href={url} className={cn(styles.cat_Item, 'btn_Link')}>
    <img src={catImg} alt={title} className={styles.cat_Img} />
    <span className={cn(styles.cat_Title, 'md_Text font-medium')}>{title}</span>
  </Button>
);

export { CategoryItem };
