import himsagarImg from './assets/images/himsagar.png';
import langraImg from './assets/images/langra.png';
import fazliImg from './assets/images/fazli.png';
import amrapaliImg from './assets/images/amrapali.png';
import govindobhogImg from './assets/images/govindobhog.png';
import lakhnaImg from './assets/images/lakhna.png';

export interface MangoVariety {
  id: string;
  name: string;
  description: string;
  season: string;
  image: string;
  characteristics: string[];
}

export const MANGO_VARIETIES: MangoVariety[] = [
  {
    id: 'himsagar',
    name: 'Himsagor',
    description: 'The "King of Mangoes" in Bengal. Himsagar is famous for its fiberless pulp and sweet, aromatic flavor. It has a beautiful golden-yellow color when ripe.',
    season: 'May - June',
    image: himsagarImg,
    characteristics: ['Fiberless', 'Sweet Aroma', 'Golden Pulp', 'Premium Table Variety']
  },
  {
    id: 'langra',
    name: 'Langra',
    description: 'Known for its distinct greenish-yellow skin and incredible sweetness. Langra mangoes have a unique turpentine-like aroma that connoisseurs love.',
    season: 'June - July',
    image: langraImg,
    characteristics: ['Strong Aroma', 'Soft Texture', 'Greenish Skin', 'Rich Flavor']
  },
  {
    id: 'fazli',
    name: 'Fazli',
    description: 'A large variety known for its size and late-season availability. Fazli is widely used in pickles and jams, but is also a treat for those who love a big, juicy slice.',
    season: 'July - August',
    image: fazliImg,
    characteristics: ['Large Size', 'Juicy', 'Late Season', 'Excellent for Processing']
  },
  {
    id: 'amrapali',
    name: 'Amrapali',
    description: 'A hybrid variety that has gained massive popularity for its miniature size and extremely sweet, deep orange pulp.',
    season: 'June - July',
    image: amrapaliImg,
    characteristics: ['Deep Orange Pulp', 'Very Sweet', 'Compact Size', 'High Pulp Content']
  },
  {
    id: 'govindobhog',
    name: 'Govindovog (Govindobhog)',
    description: 'A small, round, and highly sweet variety often compared to dessert sweets. It has a unique, delicate aroma that makes it a favorite for children and sweet lovers.',
    season: 'June',
    image: govindobhogImg,
    characteristics: ['Small Size', 'Extremely Sweet', 'Desert Quality', 'Delicate Aroma']
  },
  {
    id: 'lakhna',
    name: 'Lakhna (Lakshman Bhog)',
    description: 'A premium variety with a beautiful reddish-yellow hue. It is known for its firm pulp and balanced sweetness, making it excellent for transport and storage.',
    season: 'June - July',
    image: lakhnaImg,
    characteristics: ['Reddish Skin', 'Firm Pulp', 'Balanced Sweetness', 'Great Shelf Life']
  }
];

export const CONTACT_INFO = {
  whatsapp: '919474462050', // Updated with user provided number
  location: 'Malda, West Bengal, India',
  email: 'sales@maldamangoes.com'
};
