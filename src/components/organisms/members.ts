export type Member = {
  name: string;
  imagePath: string;
  description: string;
  isActive: boolean;
  links: {
    githubId?: string;
    twitterId?: string;
    website?: {
      label: string;
      url: string;
    };
  };
};

export const members: Member[] = [
  {
    isActive: true,
    name: 'たこなす',
    imagePath: 'takonasu',
    description: '発起人。iOS、総務担当。大学院情報理工所属。',
    links: {
      website: {
        label: 'https://takonasu.net',
        url: 'https://takonasu.net',
      },
      githubId: 'takonasu',
      twitterId: 'ITF_tako',
    },
  },
  {
    isActive: true,
    name: 'SIY1121',
    imagePath: 'siy1121',
    description: 'バックエンド・Android担当。大学院情報理工所属。',
    links: {
      website: {
        label: 'siy.space',
        url: 'https://siy.space/',
      },
      githubId: 'SIY1121',
      twitterId: 'SIY1121',
    },
  },
  {
    isActive: false,
    name: 'Kanade Nishizawa',
    imagePath: 'kanadenishizawa',
    description: '元デザイン担当。芸術専門学群出身。',
    links: {
      website: {
        label: 'kanade-works.web.app',
        url: 'https://kanade-works.web.app',
      },
      githubId: 'KanadeNishizawa',
    },
  },
  {
    isActive: false,
    name: 'Kensuke Suzuki',
    imagePath: 'kensukesuzuki',
    description: '寄付ページ担当。情報科学類出身。',
    links: {
      website: {
        label: 'momokichi.github.io',
        url: 'https://momokichi.github.io/',
      },
    },
  },
  {
    isActive: false,
    name: 'ゆうく',
    imagePath: 'yuku',
    description: 'バックエンド担当。無職。',
    links: {
      githubId: 'Monchi',
      twitterId: 'LOST_JINKEN',
    },
  },
  {
    isActive: true,
    name: 'takonomura',
    imagePath: 'takonomura',
    description: 'インフラ担当。情報科学類所属。',
    links: {},
  },
  {
    isActive: true,
    name: 'HosokawaR',
    imagePath: 'hosokawar',
    description: 'フロントエンド担当。情報科学類所属。',
    links: {
      githubId: 'HosokawaR',
    },
  },
  {
    isActive: true,
    name: 'Hayato Shishido',
    imagePath: 'hayatoshishido',
    description: 'フロントエンド担当。社会工学類所属。',
    links: {
      githubId: 'hayato24s',
    },
  },
  {
    isActive: true,
    name: 'Takayuki Ueno (kichi2004)',
    imagePath: 'kichi2004',
    description: '情報科学類所属。',
    links: {
      website: {
        label: 'kichi2004.jp',
        url: 'https://kichi2004.jp/',
      },
      githubId: 'kichi2004',
      twitterId: 'kichi2004_',
    },
  },
  {
    isActive: true,
    name: 'あざらし',
    imagePath: 'azarashi',
    description: '情報科学類所属。ブラウザ拡張機能担当。',
    links: {
      website: {
        label: 'azr.sh',
        url: 'https://azr.sh/',
      },
      githubId: 'azarashi2931',
      twitterId: 'azarashi_uni',
    },
  },
];
