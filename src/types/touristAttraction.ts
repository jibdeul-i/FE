export type TouristAttractionCover = {
  title: string;
  imageUrl: string;
}

export type TouristAttraction = {
  id: number;
  name: string;
  description: string;
  address: string;
  images: [];
}

export const coverData: TouristAttractionCover = {
  title: "2024년 꼭 가봐야 하는 관광지",
  imageUrl: "https://blog.kakaocdn.net/dn/dKPw0j/btrAOBDFTxb/FheVyzxQlNXP0lgur6cCm0/img.jpg",
};

export const attractionsData: TouristAttraction[] = [
  {
    id: 1,
    name: "성안 올레",
    description: "성안 올레의 설명니니다",
    address: "성안 올레 주소",
    images: ["https://wimg.mk.co.kr/meet/neds/2021/11/image_readmed_2021_1053506_16362360634839724.jpg"],
  },
  {
    id: 2,
    name: "서귀포시 성산읍 일출로",
    description: "성안 올레의 설명니니다",
    address: "성안 올레 주소",
    images: ["https://wimg.mk.co.kr/meet/neds/2021/11/image_readmed_2021_1053506_16362360634839724.jpg"],
  },
  {
    id: 3,
    name: "공설시장",
    description: "성안 올레의 설명니니다",
    address: "성안 올레 주소",
    images: ["https://wimg.mk.co.kr/meet/neds/2021/11/image_readmed_2021_1053506_16362360634839724.jpg"],
  },

]