const dummyData = {
  user: [
    {
      id: 1,
      username: 'SJ',
      createdAt: '2020-11-10 12:31:59',
      email: 'ddbeqxcc@gmail.com',
      phone_number: '010-1111-1112',
      birthday: '1993-11-10',
      user_region: '광주광역시',
      user_position: 'Developer',
      user_status: '이직희망',
      description:
        '10년차이상, 스타트업 및 대기업에서의 다양한 프로젝트 경험을 바탕으로 한 서비스 개발',
      prize: '2011년 11월 21일 중소기업 벤처부 주관 경진대회',
      career:
        '2001.01.21~2011.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      portfolio: 'www.portfolio1.com',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1NPd5YNYCH5AyDhNCJMqIFLOM8FZ_frPdg&usqp=CAU',
    },
    {
      id: 2,
      username: '유신우',
      createdAt: '2020-11-13 12:31:59',
      email: 'bwbtjxoc@gmail.com',
      phone_number: '010-1111-1120',
      birthday: '1993-11-13',
      user_region: '인천광역시',
      user_position: 'Developer',
      user_status: '사이드잡희망',
      description: '6년차, 창업 경험, SNS운영, 아이디어뱅크',
      portfolio: 'www.portfolio2.com',
      career: '2011.01.21~2011.11.12 삼성 기획부 ,2012.1.28~2018.2.20 프리랜서',
      prize: '2011년 11월 21일 정주영창업경진대회 주관 행사',
      url:
        'https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png',
    },
    {
      id: 3,
      username: 'dxfcfxwc',
      createdAt: '2020-11-16 12:31:59',
      email: 'jweetlyc@gmail.com',
      phone_number: '010-1111-1128',
      birthday: '1993-11-16',
      user_region: '인천광역시',
      user_position: 'Designer',
      user_status: '구직중',
      description: '10년차이상, 프론트 개발, 초급 디자인',
      portfolio: 'www.portfolio3.com',
      career:
        '2008.01.21~2011.11.12 현대 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 k스타트업 주관 대회',
      url:
        'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
    },
    {
      id: 4,
      username: '안윤희',
      createdAt: '2020-11-19 12:31:59',
      email: 'mdsevlyc@gmail.com',
      phone_number: '010-1111-1136',
      birthday: '1993-11-19',
      user_region: '대전광역시',
      user_position: 'Planner',
      user_status: '구인중',
      description:
        '5년차, 스타트업 근무 경험, IR작성, 대기업 근무 경험, 스타트업 연구소장(레이저 센서), 아이디어뱅크',
      portfolio: 'www.portfolio4.com',
      career:
        '2004.01.21~2011.11.12 lg 사업부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 뉴스 빅데이터 해커톤 수상',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqg-SOspgefn5JxSHHBpKLs1zpMlsjEzNIA&usqp=CAU',
    },
    {
      id: 5,
      username: '김송송',
      createdAt: '2020-11-22 12:31:59',
      email: 'gwswopvc@gmail.com',
      phone_number: '010-1111-1144',
      birthday: '1993-11-22',
      user_region: '부산광역시',
      user_position: 'Planner',
      user_status: '구직중',
      description:
        '1년차, 창업 경험, 스타트업 근무 경험, 투자유치, IR작성, 아이디어뱅크',
      portfolio: 'www.portfolio5.com',
      career:
        '2002.01.21~2011.11.12 스타트업 개발부 ,2012.1.28~2018.2.20 프리랜서',
      prize: '2011년 11월 21일 빅데이터 관련 대회 수상',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqg-SOspgefn5JxSHHBpKLs1zpMlsjEzNIA&usqp=CAU',
    },
    {
      id: 6,
      username: '이정열',
      createdAt: '2020-11-25 12:31:59',
      email: 'udstvhvc@gmail.com',
      phone_number: '010-1111-1152',
      birthday: '1993-11-25',
      user_region: '광주광역시',
      user_position: 'Designer',
      user_status: '구직중',
      description:
        '10년차이상, 제품 및 시각 디자인, 2d 일러스트레이션, 다수 산업 디자인 공모전 수상, 청년창업사관학교 8기 선정',
      portfolio: 'www.portfolio6.com',
      career:
        '2006.01.21~2011.11.12 넷마블 영업부 ,2012.1.28~2018.2.20 넷마블 기획팀',
      prize: '2011년 11월 21일 VR 관련 대회 수상',
      url:
        'https://lh3.googleusercontent.com/proxy/voPkfESOLHoiQm2rIItv9aNGlytcb7mqmG8KrhDCdsY6U_K_tGOTjJFOLQGR1avVY6BXFg30ZF5OUSVXJWaU6gBEcSljXVorMYLnAr_bpto8TBBJnCIo1F7og4mY6HKtOPmeA6OMLetVEYQJC5XvTtgbZjUUZSRJSaNGf8imXZDpoPhy9dSb3l3LqwY9PZc4qkszFQm01ZYiS0uVGSOvNB51s_GsUTsnUjq1cylMrTZ9Bq0',
    },
    {
      id: 7,
      username: '김효선',
      createdAt: '2020-11-28 12:31:59',
      email: 'rastkcjc@gmail.com',
      phone_number: '010-1111-1160',
      birthday: '1993-11-28',
      user_region: '서울특별시',
      user_position: 'Developer',
      user_status: '사이드잡',
      description:
        '8년차, 창업 경험, 스타트업 근무 경험, JS, PYTHON, AWS, FLUTTER, IITP 기술평가위원',
      portfolio: 'www.portfolio7.com',
      career:
        '2009.01.21~2011.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 은행 주관 핀테크 대회 수상',
      url:
        'https://lh3.googleusercontent.com/proxy/zcxCUxXq4PNivbeTzLaASPtWWXGzPtkhpTIH2HRYgROWozJ4UUhnOirHU8RJ3HQcwXrf5dKTt1LK_58NARzQYQ4c8Y-V0LRdCj1Pe6CPFS2YzbrWmNUo86JZzjNdU9YqkGL5',
    },
    {
      id: 8,
      username: '최윤정',
      createdAt: '2020-11-13 12:31:59',
      email: 'ragwcwjc@gmail.com',
      phone_number: '010-1111-1168',
      birthday: '1993-11-13',
      user_region: '광주광역시',
      user_position: 'Developer',
      user_status: '재직중',
      description:
        '1년미만, 판교 IT 회사 6개월 인턴 근무 중(올해 12월까지), 영어 능통',
      portfolio: 'www.portfolio8.com',
      career:
        '2013.01.21~2017.11.12 스타트업 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 외국계 주관 대회',
      url:
        'https://i.pinimg.com/originals/61/01/37/610137d11c814c791c54dc54401105e0.png',
    },
    {
      id: 9,
      username: '이진우',
      createdAt: '2020-11-13 12:31:59',
      email: 'eecktxcc@gmail.com',
      phone_number: '010-1111-1176',
      birthday: '1993-11-13',
      user_region: '대전광역시',
      user_position: 'Designer',
      user_status: '구인중',
      description:
        '10년차이상, 창업 경험, 스타트업 근무 경험, 아이디어뱅크, 브랜딩, SNS운영, 제휴제안',
      portfolio: 'www.portfolio9.com',
      career:
        '2015.01.21~2017.11.12 넷마블 개발부서 ,2012.1.28~2018.2.20 프리랜서',
      prize: '2011년 11월 21일 AI IOT 헤커톤 수상',
      url:
        'https://w7.pngwing.com/pngs/171/699/png-transparent-yellow-cartoon-character-in-yellow-bunny-costume-illustration-kakaotalk-kakao-friends-emoticon-emoji-text-smiley-sticker-thumbnail.png',
    },
    {
      id: 10,
      username: 'jvuuaoac',
      createdAt: '2020-11-13 12:31:59',
      email: 'aysptncc@gmail.com',
      phone_number: '010-1111-1184',
      birthday: '1993-11-13',
      user_region: '서울특별시',
      user_position: 'Planner',
      user_status: '사이드잡',
      description:
        '10년차이상, 아이디어뱅크, 브랜딩, 제휴제안, 스토리보드, SNS운영, 데이터분석',
      portfolio: 'www.portfolio10.com',
      career:
        '2011.01.21~2012.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 중소기업 벤처부 주관 경진대회',
      url:
        'https://w7.pngwing.com/pngs/158/79/png-transparent-brown-cartoon-bear-character-illustration-kakaotalk-kakao-friends-sticker-viber-save-your-moon-s-face-smiley-online-chat-snout-thumbnail.png',
    },
    {
      id: 11,
      username: '한상윤',
      createdAt: '2020-11-10 12:31:59',
      email: 'ddbeqxcc@gmail.com',
      phone_number: '010-1111-1112',
      birthday: '1993-11-10',
      user_region: '서울특별시',
      user_position: 'Developer',
      user_status: '구인중',
      description: '1년미만',
      portfolio: 'www.portfolio11.com',
      career:
        '2011.01.21~2014.11.12 스타트업 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 k스타트업 주관 대회',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsvuDX9SSJEr31oMITcFl5zhiENlVNYOeag&usqp=CAU',
    },
    {
      id: 12,
      username: '정성환',
      createdAt: '2020-11-13 12:31:59',
      email: 'bwbtjxoc@gmail.com',
      phone_number: '010-1111-1120',
      birthday: '1993-11-13',
      user_region: '인천광역시',
      user_position: 'Developer',
      user_status: '사이드잡희망',
      description:
        '3년차, JAVA, JS, CSS, PHP, LINUX, PHOTOSHOP, 스타트업 근무 경험, 영어 능통',
      portfolio: 'www.portfolio12.com',
      career:
        '2001.01.21~2011.11.12 넷마블 디자인부서 ,2012.1.28~2018.2.20 프리랜서',
      prize: '2011년 11월 21일 뉴스 빅데이터 해커톤 수상',
      url:
        'https://lh3.googleusercontent.com/proxy/yq_zZIEmIVt22EWOwvUDUMHjP-yGI1f2rzhJchoutNW6oVyHCRoXHUBmCQSEl3xRzkgHT2qbpTJAzzHeFOPQqbDxBaZWfUEa3MSCIOq04hdWfW107yw',
    },
    {
      id: 13,
      username: 'dxfcfxwc',
      createdAt: '2020-11-16 12:31:59',
      email: 'jweetlyc@gmail.com',
      phone_number: '010-1111-1128',
      birthday: '1993-11-16',
      user_region: '인천광역시',
      user_position: 'ETC',
      user_status: '구직중',
      description: '3년차, 창업 경험, 제휴제안, B2B영업, SNS운영, B2C영업',
      portfolio: 'www.portfolio13.com',
      career:
        '2001.01.21~2011.11.12 게임회사 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 빅데이터 관련 대회 수상',
      url: 'https://biketago.com/img/kakao/p_05.jpg',
    },
    {
      id: 14,
      username: '오관호',
      createdAt: '2020-11-19 12:31:59',
      email: 'mdsevlyc@gmail.com',
      phone_number: '010-1111-1136',
      birthday: '1993-11-19',
      user_region: '대전광역시',
      user_position: 'Planner',
      user_status: '구직중',
      description:
        '3년차, 스타트업 근무 경험, 창업 경험, JS, 데이터분석, React, Android, iOS, 영어 능통',
      portfolio: 'www.portfolio14.com',
      career:
        '2001.01.21~2011.11.12 넷마블 디자인 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 VR 관련 대회 수상',
      url: 'https://biketago.com/img/kakao/cat_06.jpg',
    },
    {
      id: 15,
      username: '정호정',
      createdAt: '2020-11-22 12:31:59',
      email: 'gwswopvc@gmail.com',
      phone_number: '010-1111-1144',
      birthday: '1993-11-22',
      user_region: '부산광역시',
      user_position: 'Planner',
      user_status: '구직중',
      description: '1년미만, 스타트업 근무 경험',
      portfolio: 'www.portfolio15.com',
      career:
        '2001.01.21~2011.11.12 웹디자인회사 개발부 ,2012.1.28~2018.2.20 프리랜서',
      prize: '2011년 11월 21일 은행 주관 핀테크 대회 수상',
      url:
        'https://file3.instiz.net/data/file3/2018/02/28/e/5/9/e590973221992fb11bd8617d72e3cbc4.jpg',
    },
    {
      id: 16,
      username: '이건우',
      createdAt: '2020-11-25 12:31:59',
      email: 'udstvhvc@gmail.com',
      phone_number: '010-1111-1152',
      birthday: '1993-11-25',
      user_region: '광주광역시',
      user_position: 'Designer',
      user_status: '구직중',
      description: '3년차, Business Developer',
      portfolio: 'www.portfolio16.com',
      career:
        '2001.01.21~2011.11.12 넷마블 기획 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 외국계 주관 대회',
      url:
        'https://i.pinimg.com/originals/0c/6c/ec/0c6cecde6ca258ed70acc74ba57c1111.gif',
    },
    {
      id: 17,
      username: '장현길',
      createdAt: '2020-11-28 12:31:59',
      email: 'rastkcjc@gmail.com',
      phone_number: '010-1111-1160',
      birthday: '1993-11-28',
      user_region: '서울특별시',
      user_position: 'Developer',
      user_status: 'ETC',
      description:
        '1년차, 창업, 투자회사 인턴, 유튜브 채널 기획 및 운영(구독자 9.3만)',
      portfolio: 'www.portfolio17.com',
      career:
        '2001.01.21~2011.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
      prize: '2011년 11월 21일 AI IOT 헤커톤 수상',
      url:
        'https://item.kakaocdn.net/do/48dcfce971ba7d1cb927c1da339e5da1f43ad912ad8dd55b04db6a64cddaf76d',
    },
  ],
  team: [
    {
      id: 1,
      title: '코로나로 직격탄을 맞은 분들을 위하여.',
      description:
        '비영리단체 아이디어 구상 단계 현재 구성원 5명 장소미정 ~2020.11.30',
      createdAt: '2020-11-19T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: 'Developer',
      image:
        'http://bm.straightline.jp/upload/large/large_dfe1b8111168a8eb7450bb1b4cd5cae9.jpg?',
      userId: 4,
    },
    {
      id: 2,
      title: '사람을 찾습니다',
      description: '아이디어 구상 단계 현재 구성원 1명 장소미정 ~모집시까지',
      createdAt: '2020-11-22T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: 'Developer',
      userId: 7,
      image:
        'https://cdn.lynda.com/course/506926/506926-637286199177092773-16x9.jpg',
    },
    {
      id: 3,
      title: '프로덕트 빌보드 플랫폼',
      description:
        '커뮤니티 프로토타입 완성 단계 현재 구성원 1명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-25T12:31:59.364Z',
      team_region: '대전광역시',
      team_position: 'Developer',
      userId: 3,
      image:
        'http://bm.straightline.jp/upload/large/large_9728ebf8cf89d23671479575e7053cc4.jpg?13:33:36',
    },
    {
      id: 4,
      title: '열정 가득한 마케터분들 대환영',
      description:
        '마케팅 제품·서비스 확장 단계 현재 구성원 5명 인천광역시 전체 ~2020.11.30',
      createdAt: '2020-11-28T12:31:59.364Z',
      team_region: '광주광역시',
      team_position: 'Designer',
      userId: 8,
      image:
        'http://bm.straightline.jp/upload/large/large_f25c962fe9d0f039f1b65121e1299d80.jpg?11:39:31',
    },
    {
      id: 5,
      title: '로봇 제작 전문가가 필요합니다',
      description:
        '로봇서비스 아이디어 구상 단계 현재 구성원 1명 대전광역시 전체 ~모집시까지',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: 'Planner',
      userId: 1,
      image:
        'http://bm.straightline.jp/upload/large/large_bc6ed7088febe8e126b5a7056f945f4e.jpg?13:43:04',
    },
    {
      id: 6,
      title: '옷 쇼핑 대행 서비스 (스티치픽스)',
      description:
        '패션 IT 상용화 단계 현재 구성원 2명 서울특별시 은평구 ~모집시까지',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: 'ETC',
      userId: 6,
      image:
        'http://bm.straightline.jp/upload/large/large_bc6ed7088febe8e126b5a7056f945f4e.jpg?13:43:04',
    },
    {
      id: 7,
      title: '블록체인 스터디/트레이딩/개발',
      description:
        '블록체인 아이디어 구상 단계 현재 구성원 2명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-19T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: 'Developer',
      userId: 4,
      image:
        'http://bm.straightline.jp/upload/large/large_98280a94fcb74820cfce4a094ad1104e.jpg',
    },
    {
      id: 8,
      title: '10대들을 위한 핀테크 솔루션, 모니',
      description:
        '핀테크 초기 개발 단계 현재 구성원 2명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-22T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: '개발자',
      userId: 7,
      image:
        'http://bm.straightline.jp/upload/large/large_08a0e81573705670ddd81e631a971844.jpg?13:38:53',
    },
    {
      id: 9,
      title: '[길고양이 커뮤니티] 사이드프로젝트',
      description:
        '반려동물 초기 개발 단계 현재 구성원 4명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-25T12:31:59.364Z',
      team_region: '대전광역시',
      team_position: 'Desinger',
      userId: 3,
      image:
        'http://bm.straightline.jp/upload/large/large_53d51f461e23612bedb9b0d4ab77e11b.jpg?13:41:38',
    },
    {
      id: 10,
      title: '[플랫폼개발팀]UXUI디자이너 채용',
      description:
        '모빌리티 제품·서비스 확장 단계 현재 구성원 5명 서울특별시 전체 ~2020.12.18',
      createdAt: '2020-11-28T12:31:59.364Z',
      team_region: '광주광역시',
      team_position: 'Desinger',
      userId: 8,
      image:
        'http://bm.straightline.jp/upload/large/large_e031bf088f216062b5c30ab9a7dc1dcf.jpg?13:37:37',
    },
    {
      id: 11,
      title: 'One-Stop E-스포츠 플랫폼',
      description:
        'E-스포츠  상용화 단계 현재 구성원 5명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: 'Developer',
      userId: 1,
      image:
        'http://bm.straightline.jp/upload/large/large_9fe29994ae5c5353cfc01c6dac1cb48e.jpg?13:28:54',
    },
    {
      id: 12,
      title: '소비자 리뷰 평가 소프트웨어',
      description:
        '여행정보 아이디어 구상 단계 현재 구성원 2명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: 'Developer',
      userId: 6,
      image:
        'http://bm.straightline.jp/upload/large/large_af79e6ef850a86d61847acfb33ede069.jpg?13:27:08',
    },
    {
      id: 13,
      title: '비대면 상식계발 퀴즈앱',
      description:
        '교육  프로토타입 완성 단계 현재 구성원 2명 서울특별시 성동구 ~2020.11.29',
      createdAt: '2020-11-19T12:31:59.364Z',
      team_region: '서울특별시',
      team_position: 'Developer',
      userId: 4,
      image:
        'http://bm.straightline.jp/upload/large/large_1ded918db50bd64e0e6cf2f092e2ff4d.jpg?13:27:41',
    },
    {
      id: 14,
      title: '스마트폰 플랫폼 비지니스',
      description:
        '스마트폰 상용화 단계 현재 구성원 1명 서울특별시 전체 ~모집시까지',
      createdAt: '2020-11-22T12:31:59.364Z',
      team_region: '부산광역시',
      team_position: 'Developer',
      userId: 7,
      image:
        'http://bm.straightline.jp/upload/large/large_8712e760b4dc37bcffc12166bf999bc5.jpg?13:25:15',
    },
    {
      id: 15,
      title: '컨텐츠 소셜 매칭앱 플랫폼 팀빌딩',
      description:
        '소셜데이팅 제품·서비스 확장 단계 현재 구성원 3명 서울특별시 전체 ~2020.12.31',
      createdAt: '2020-11-25T12:31:59.364Z',
      team_region: '대전광역시',
      team_position: 'Developer',
      userId: 3,
      image:
        'http://bm.straightline.jp/upload/large/large_315c65600a566aba4803252742247dd6.jpg?13:27:15',
    },
    {
      id: 16,
      title: '구인구직의 미스매칭을 해결하는 플랫폼',
      description:
        '에듀태크 프로토타입 완성 단계 현재 구성원 4명 인천광역시 전체 ~모집시까지',
      createdAt: '2020-11-28T12:31:59.364Z',
      team_region: '광주광역시',
      team_position: 'Planner',
      userId: 8,
      image:
        'http://bm.straightline.jp/upload/large/large_4c0bde286ba09376443977d71c654f7f.jpg?12:52:41',
    },
    {
      id: 17,
      title: '노지 스마트팜 서비스',
      description:
        '스마트팜 상용화 단계 현재 구성원 3명 서울특별시 강남구 ~2020.11.20',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: 'Developer',
      userId: 1,
      image:
        'http://bm.straightline.jp/upload/large/large_b58444c64d9d3a222649c7917017c0c8.jpg?',
    },
    {
      id: 18,
      title: '개인 옷장 기반 인공지능 패션 서비스',
      description:
        '인공지능 기반 패션 초기 개발 단계 현재 구성원 4명 대전광역시 유성구 ~2020.11.30',
      createdAt: '2020-11-13T12:31:59.364Z',
      team_region: '인천광역시',
      team_position: 'Desinger',
      userId: 6,
      image: '',
    },
  ],
};

let prize = [
  '2011년 11월 21일 중소기업 벤처부 주관 경진대회',
  '2011년 11월 21일 정주영창업경진대회 주관 행사',
  '2011년 11월 21일 k스타트업 주관 대회',
  '2011년 11월 21일 뉴스 빅데이터 해커톤 수상',
  '2011년 11월 21일 빅데이터 관련 대회 수상',
  '2011년 11월 21일 VR 관련 대회 수상',
  '2011년 11월 21일 은행 주관 핀테크 대회 수상',
  '2011년 11월 21일 외국계 주관 대회',
  '2011년 11월 21일 AI IOT 헤커톤 수상',
  '2011년 11월 21일 중소기업 벤처부 주관 경진대회',
  '2011년 11월 21일 k스타트업 주관 대회',
  '2011년 11월 21일 뉴스 빅데이터 해커톤 수상',
  '2011년 11월 21일 빅데이터 관련 대회 수상',
  '2011년 11월 21일 VR 관련 대회 수상',
  '2011년 11월 21일 은행 주관 핀테크 대회 수상',
  '2011년 11월 21일 외국계 주관 대회',
  '2011년 11월 21일 AI IOT 헤커톤 수상',
];
let portfolio = [
  'www.portfolio1.com',
  'www.portfolio2.com',
  'www.portfolio3.com',
  'www.portfolio4.com',
  'www.portfolio5.com',
  'www.portfolio6.com',
  'www.portfolio7.com',
  'www.portfolio8.com',
  'www.portfolio9.com',
  'www.portfolio10.com',
  'www.portfolio11.com',
  'www.portfolio12.com',
  'www.portfolio13.com',
  'www.portfolio14.com',
  'www.portfolio15.com',
  'www.portfolio16.com',
  'www.portfolio17.com',
];
let career = [
  '2001.01.21~2011.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2011.01.21~2011.11.12 삼성 기획부 ,2012.1.28~2018.2.20 프리랜서',
  '2008.01.21~2011.11.12 현대 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2004.01.21~2011.11.12 lg 사업부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2002.01.21~2011.11.12 스타트업 개발부 ,2012.1.28~2018.2.20 프리랜서',
  '2006.01.21~2011.11.12 넷마블 영업부 ,2012.1.28~2018.2.20 넷마블 기획팀',
  '2009.01.21~2011.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2013.01.21~2017.11.12 스타트업 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2015.01.21~2017.11.12 넷마블 개발부서 ,2012.1.28~2018.2.20 프리랜서',
  '2011.01.21~2012.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2011.01.21~2014.11.12 스타트업 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2001.01.21~2011.11.12 넷마블 디자인부서 ,2012.1.28~2018.2.20 프리랜서',
  '2001.01.21~2011.11.12 게임회사 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2001.01.21~2011.11.12 넷마블 디자인 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2001.01.21~2011.11.12 웹디자인회사 개발부 ,2012.1.28~2018.2.20 프리랜서',
  '2001.01.21~2011.11.12 넷마블 기획 ,2012.1.28~2018.2.20 스타트업 기획팀',
  '2001.01.21~2011.11.12 넷마블 개발부 ,2012.1.28~2018.2.20 스타트업 기획팀',
];

for (let i = 0; i < dummyData.user.length; i++) {
  dummyData.user[i].portfolio = portfolio[i];
}
for (let i = 0; i < dummyData.user.length; i++) {
  dummyData.user[i].career = career[i];
}
for (let i = 0; i < dummyData.user.length; i++) {
  dummyData.user[i].prize = prize[i];
}

export default dummyData;
