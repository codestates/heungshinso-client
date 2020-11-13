const dummyData = {
  users: [
    {
      id: 1,
      username: 'duyjlepc',
      createdAt: '2020-11-10T12:31:59.364Z',
      email: 'ddbeqxcc@gmail.com',
      phone_number: '010-1111-1112',
      birthday: '1993-11-10',
      user_region: '광주광역시',
      user_position: '개발자',
      user_status: '이직희망',
    },
    {
      id: 2,
      username: 'rvywyvwc',
      createdAt: '2020-11-13T12:31:59.364Z',
      email: 'bwbtjxoc@gmail.com',
      phone_number: '010-1111-1120',
      birthday: '1993-11-13',
      user_region: '울산광역시',
      user_position: '개발자',
      user_status: '사이드잡',
    },
    {
      id: 3,
      username: 'dxfcfxwc',
      createdAt: '2020-11-16T12:31:59.364Z',
      email: 'jweetlyc@gmail.com',
      phone_number: '010-1111-1128',
      birthday: '1993-11-16',
      user_region: '인천광역시',
      user_position: '개발자',
      user_status: '구직중',
    },
    {
      id: 4,
      username: 'dxxoflec',
      createdAt: '2020-11-19T12:31:59.364Z',
      email: 'mdsevlyc@gmail.com',
      phone_number: '010-1111-1136',
      birthday: '1993-11-19',
      user_region: '대전광역시',
      user_position: '개발자',
      user_status: '사이드잡',
    },
    {
      id: 5,
      username: 'psxotljc',
      createdAt: '2020-11-22T12:31:59.364Z',
      email: 'gwswopvc@gmail.com',
      phone_number: '010-1111-1144',
      birthday: '1993-11-22',
      user_region: '부산광역시',
      user_position: '개발자',
      user_status: '구직중',
    },
    {
      id: 6,
      username: 'otioaonc',
      createdAt: '2020-11-25T12:31:59.364Z',
      email: 'udstvhvc@gmail.com',
      phone_number: '010-1111-1152',
      birthday: '1993-11-25',
      user_region: '광주광역시',
      user_position: '디자이너',
      user_status: '구직중',
    },
    {
      id: 7,
      username: 'fniorovc',
      createdAt: '2020-11-28T12:31:59.364Z',
      email: 'rastkcjc@gmail.com',
      phone_number: '010-1111-1160',
      birthday: '1993-11-28',
      user_region: '서울특별시',
      user_position: '개발자',
      user_status: '사이드잡',
    },
    {
      id: 8,
      username: 'pyuororc',
      createdAt: '2020-11-13T12:31:59.364Z',
      email: 'ragwcwjc@gmail.com',
      phone_number: '010-1111-1168',
      birthday: '1993-11-13',
      user_region: '광주광역시',
      user_position: '개발자',
      user_status: '재직중',
    },
    {
      id: 9,
      username: 'pxugpomc',
      createdAt: '2020-11-13T12:31:59.364Z',
      email: 'eecktxcc@gmail.com',
      phone_number: '010-1111-1176',
      birthday: '1993-11-13',
      user_region: '대전광역시',
      user_position: '기타',
      user_status: '사이드잡',
    },
    {
      id: 10,
      username: 'jvuuaoac',
      createdAt: '2020-11-13T12:31:59.364Z',
      email: 'aysptncc@gmail.com',
      phone_number: '010-1111-1184',
      birthday: '1993-11-13',
      user_region: '서울특별시',
      user_position: '개발자',
      user_status: '사이드잡',
    },
  ],
  teams: [
    {
      id: 1,
      title: '모집 title :dxfcfxwc',
      description: '모집 description :dxxoflec',
      createdAt: '2020-11-19T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: '개발자',
      userId: 4,
    },
    {
      id: 2,
      title: '모집 title :dxxoflec',
      description: '모집 description :psxotljc',
      createdAt: '2020-11-22T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: '개발자',
      userId: 7,
    },
    {
      id: 3,
      title: '모집 title :psxotljc',
      description: '모집 description :otioaonc',
      createdAt: '2020-11-25T12:31:59.364Z',
      team_region: '대전광역시',
      team_position: '개발자',
      userId: 3,
    },
    {
      id: 4,
      title: '모집 title :otioaonc',
      description: '모집 description :fniorovc',
      createdAt: '2020-11-28T12:31:59.364Z',
      team_region: '광주광역시',
      team_position: '디자이너',
      userId: 8,
    },
    {
      id: 5,
      title: '모집 title :fniorovc',
      description: '모집 description :pyuororc',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: '기획자',
      userId: 1,
    },
    {
      id: 6,
      title: '모집 title :pyuororc',
      description: '모집 description :pxugpomc',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: '기타',
      userId: 6,
    },
  ],
};

let region = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
]; // 7
let position = ['개발자', '기획자', '디자이너', '기타']; // 4
let status = ['구직중', '재직중', '이직희망', '사이드잡']; // 4

let phone_number = [
  '010-1111-1112',
  '010-1111-1120',
  '010-1111-1128',
  '010-1111-1136',
  '010-1111-1144',
  '010-1111-1152',
  '010-1111-1160',
  '010-1111-1168',
  '010-1111-1176',
  '010-1111-1184',
];
let birthday = [
  '1993-11-10',
  '1993-11-13',
  '1993-11-16',
  '1993-11-19',
  '1993-11-22',
  '1993-11-25',
  '1993-11-28',
  '1993-11-13',
  '1993-11-13',
  '1993-11-13',
];

let username = [
  'duyjlepc',
  'rvywyvwc',
  'dxfcfxwc',
  'dxxoflec',
  'psxotljc',
  'otioaonc',
  'fniorovc',
  'pyuororc',
  'pxugpomc',
  'jvuuaoac',
];
let email = [
  'ddbeqxcc@gmail.com',
  'bwbtjxoc@gmail.com',
  'jweetlyc@gmail.com',
  'mdsevlyc@gmail.com',
  'gwswopvc@gmail.com',
  'udstvhvc@gmail.com',
  'rastkcjc@gmail.com',
  'ragwcwjc@gmail.com',
  'eecktxcc@gmail.com',
  'aysptncc@gmail.com',
];

let createdAt = [
  '2020-11-10T12:31:59.364Z',
  '2020-11-13T12:31:59.364Z',
  '2020-11-16T12:31:59.364Z',
  '2020-11-19T12:31:59.364Z',
  '2020-11-22T12:31:59.364Z',
  '2020-11-25T12:31:59.364Z',
  '2020-11-28T12:31:59.364Z',
  '2020-11-13T12:31:59.364Z',
  '2020-11-13T12:31:59.364Z',
  '2020-11-13T12:31:59.364Z',
];

let results = [];
for (let i = 1; i <= 6; i++) {
  let user = {
    id: i,
    username: username[i - 1],
    createdAt: createdAt[i - 1],
    email: email[i - 1],
    phone_number: phone_number[i - 1],
    birthday: birthday[i - 1],
    user_region: region[parseInt(Math.random() * 7)],
    user_position: position[parseInt(Math.random() * 4)],
    user_status: status[parseInt(Math.random() * 4)],
  };
  let team = {
    id: i,
    title: '모집 title :' + username[i + 1],
    description: '모집 description :' + username[i + 2],
    createdAt: createdAt[i + 2],
    team_region: region[parseInt(Math.random() * 7)],
    team_position: position[parseInt(Math.random() * 4)],
    userId: '',
  };
  results.push(team);
}

let a = {
  user: [
    {
      id: 11,
      username: 'John',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'Seoul',
      user_position: 'back-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 12,
      username: 'Jane',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'Taiwan',
      user_position: 'back-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 13,
      username: 'Kim',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'Canada',
      user_position: 'front-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 14,
      username: 'yun',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'America',
      user_position: 'front-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 15,
      username: 'gia',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'Brazil',
      user_position: 'front-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 16,
      username: 'Minsoo',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'korea',
      user_position: 'front-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 17,
      username: 'Justin',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'Austraila',
      user_position: 'back-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 18,
      username: 'yun',
      password: '123123',
      email: 'example@example.com',
      phone_number: '123123123',
      birthday: 123123,
      user_region: 'korea',
      user_position: 'back-end',
      user_status: 'ok',
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
  ],
  team: [
    {
      id: 1,
      title: '사람 구합니다.',
      descrition: '좋은사람으로요',
      team_region: '원격입니다.',
      team_position: '시니어 그자체.',
      userId: 4444,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 2,
      title: '있나요',
      descrition: '프로젝트 팀입니다.',
      team_region: '원격입니다.',
      team_position: '주니어 개발자',
      userId: 5555,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 3,
      title: '잘부탁드립니다.',
      descrition: '프로젝트 팀입니다.',
      team_region: '만나서합니다.',
      team_position: '주니어 개발자',
      userId: 666,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 4,
      title: '할말이없어요.',
      descrition: '흥신소 합니다..',
      team_region: '만나서합니다.',
      team_position: '주니어 개발자',
      userId: 777,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 5,
      title: '처음해봅니다.',
      descrition: '첨이에요',
      team_region: '반갑습니다.',
      team_position: '주니어 개발자',
      userId: 777,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 6,
      title: '처음해봅니다.',
      descrition: '첨이에요',
      team_region: '반갑습니다.',
      team_position: '주니어 개발자',
      userId: 777,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 7,
      title: '할말이 있나요',
      descrition: '첨이에요',
      team_region: '반갑습니다.',
      team_position: '주니어 개발자',
      userId: 777,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
    {
      id: 8,
      title: '웰컴입니다.',
      descrition: '첨이에요',
      team_region: '반갑습니다.',
      team_position: '주니어 개발자',
      userId: 777,
      createdAt: '2020-11-12T05:52:59.000Z',
      updatedAt: '2020-11-12T05:52:59.000Z',
    },
  ],
};

export default a;
