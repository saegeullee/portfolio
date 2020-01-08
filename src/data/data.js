import yogiyong_gif_1 from '../gif/yogiyong/yogiyong_1.gif';
import yogiyong_gif_2 from '../gif/yogiyong/yogiyong_2.gif';
import yogiyong_gif_3 from '../gif/yogiyong/yogiyong_3.gif';
import class101_creator_gif_1 from '../gif/class101/class101_creator_1.gif';
import class101_creator_gif_2 from '../gif/class101/class101_creator_2.gif';
import class101_user_gif_1 from '../gif/class101/class101_user_1.gif';
import westagram_gif_1 from '../gif/westagram/westagram_gif_1.gif';
import westagram_gif_2 from '../gif/westagram/westagram_gif_2.gif';
import westagram_gif_3 from '../gif/westagram/westagram_gif_3.gif';
import ex_admin_gif_1 from '../gif/ex-admin/ex_admin_gif_1.gif';
import ex_admin_gif_2 from '../gif/ex-admin/ex_admin_gif_2.gif';
import ex_admin_gif_3 from '../gif/ex-admin/ex_admin_gif_3.gif';
import ex_admin_gif_4 from '../gif/ex-admin/ex_admin_gif_4.gif';

export const projectsData = [
  {
    title: 'EX Admin Dashboard',
    description:
      '클래스101에서 백엔드 개발자로 인턴쉽을 진행하며 EX팀 어드민 대시보드를 개발했습니다. 백엔드 개발자 2명, 프론트엔드 개발자 1명과 협업하여 1개월동안 개발했습니다.',
    additionalDescription:
      '이 대시보드에는 서로 다른 부서의 직원들이 친해질 수 있는 사내 친목조 생성 기능과 사내 비품(노트북, 모니터 등) 관리 기능이 있습니다.',
    whatIHaveDone: [
      '제품 기획단계부터 참여',
      'Scrum 진행(주별 스프린트 미팅, 일별 스탠드업 미팅) with Trello',
      '데이터베이스 스키마 디자인 및 ERD 작성',
      'Nodejs API 설계 및 Restful API 구현',
      '클래스101 사내 친목조 생성 알고리즘 및 API 구현',
      '클래스101 사내 비품 아이템(노트북, 모니터 등) CRUD API 구현',
      '쿼리스트링에 따른 총 비품 아이템 필터링, 정렬, 페이징 구현',
      'AWS EC2 배포, AWS DocumentDB에 DB 구축',
      'API 문서 작성'
    ],
    skills: ['Javascript', 'Node.js', 'MongoDB', 'Mongoose', 'AWS'],
    gifs: [ex_admin_gif_1, ex_admin_gif_2, ex_admin_gif_3, ex_admin_gif_4],
    date: '19.11.25 ~ 19.12.20',
    additionalSources: [
      {
        title: 'EX ADMIN 대시보드 GITHUB REPO',
        link: 'https://github.com/saegeullee/groupmeal'
      },
      {
        title: 'EX ADMIN 대시보드 Full Video',
        link: 'https://www.youtube.com/watch?v=mdrhlrZpZHo&t=205s'
      }
    ]
  },
  {
    title: 'Wecode101',
    description:
      '취미 구매,판매 플랫폼 클래스101 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.',
    skills: ['Javascript', 'Node.js', 'MongoDB', 'Mongoose'],
    gifs: [class101_creator_gif_1, class101_creator_gif_2, class101_user_gif_1],
    whatIHaveDoneSummary:
      '이 프로젝트에는 두 개의 클라이언트가 있습니다. 웹(리액트)과 앱(리액트네이티브)입니다. 웹은 크리에이터 관점에서 자신의 클래스를 개설하는 기능을 개발하였고 앱은 일반 사용자 관점에서 클래스101 플랫폼에 등록된 클래스들을 보고 구매하는 기능을 개발하였습니다. 저는 전자의 백엔드를 개발했습니다. ',
    whatIHaveDone: [
      'Scrum 진행(주별 스프린트 미팅, 일별 스탠드업 미팅) with Trello',
      '데이터베이스 스키마 디자인 및 ERD 작성',
      'Nodejs API 설계 및 Restful API 구현',
      'Bcrypt 사용하여 사용자 PW 암호화, JWT를 사용하여 사용자 인증,인가 구현',
      '클래스 CRUD API 구현',
      '크리에이터 프로필 CRUD API 구현',
      'Multer을 사용하여 이미지 저장 구현'
    ],
    date: '19.11.11 ~ 19.11.22',
    additionalSources: [
      {
        title: '위코드101 백엔드 GITHUB REPO',
        link: 'https://github.com/wecode-bootcamp-korea/class101-backend'
      },
      {
        title: '위코드101 프로젝트 후기',
        link: 'https://saegeullee.github.io/category/project/2nd-group-project-review'
      },
      {
        title: '요기용 프로젝트 Full Video(웹)',
        link: 'https://www.youtube.com/watch?v=4tiTjufaJg8'
      },
      {
        title: '요기용 프로젝트 Full Video(앱)',
        link: 'https://www.youtube.com/watch?v=L7FsHvjPA-c'
      }
    ]
  },
  {
    title: 'Yogiyong',
    description:
      '온라인 음식 배달 서비스 요기요 클론 프로젝트입니다. 백엔드 개발자 2명, 프론트엔드 개발자 3명과 협업하여 2주동안 개발했습니다.',
    skills: ['Python', 'Django', 'Mysql', 'React', 'Redux', 'AWS', 'Javascript', 'Html', 'Css'],
    gifs: [yogiyong_gif_1, yogiyong_gif_2, yogiyong_gif_3],
    date: '19.10.28 ~ 19.11.8',
    whatIHaveDoneSummary:
      '이 프로젝트에서 저는 백엔드를 위주로 개발하였고 프론트엔드 일부분을 개발했습니다.',
    whatIHaveDoneForBackend: [
      'Scrum 진행(주별 스프린트 미팅, 일별 스탠드업 미팅) with Trello',
      '요기요 모델 설계 및 ERD 작성',
      'RESTFUL API 설계 및 구현',
      '레스토랑 관련 모델 구현',
      '요기요 사이트 크롤링 구현 및 DB 구축',
      '모든 식당 카테고리 정보 GET 엔드포인트 구현',
      '식당 카테고리별 식당 목록 GET 엔드포인트 구현(정렬 및 페이징 포함)',
      '식당 검색 기능 엔드포인트 구현(페이징 포함)'
    ],
    whatIHaveDoneForFrontend: [
      'Google Maps API를 사용하여 구글 지도에 현재 가게목록의 가게위치 보여주기 구현',
      '주문 완료시 나오는 땡큐페이지 UI 구현',
      '사용자의 주문 내역 페이지 UI 구현',
      '리덕스를 사용하여 음식 장바구니 추가,제거,리셋 및 주문 로직 구현'
    ],
    additionalSources: [
      {
        title: '요기용 백엔드 GITHUB REPO',
        link: 'https://github.com/wecode-bootcamp-korea/yogiyong-backend'
      },
      {
        title: '요기용 프론트엔드 GITHUB REPO',
        link: 'https://github.com/wecode-bootcamp-korea/yogiyong-frontend'
      },
      {
        title: '요기용 프로젝트 후기',
        link: 'https://saegeullee.github.io/category/project/1st-group-project-review'
      },
      {
        title: '요기용 프로젝트 Full Video',
        link: 'https://www.youtube.com/watch?v=ntokAbeasu8'
      }
    ]
  },
  {
    title: 'Instagram',
    description: '인스타그램 클론 프로젝트입니다. 프론트엔드 UI를 개발했습니다.',
    skills: ['Javascript', 'React', 'Html', 'Css'],
    gifs: [westagram_gif_1, westagram_gif_2, westagram_gif_3],
    date: '19.10.14 ~ 19.10.24',
    whatIHaveDone: ['프론트엔드 UI를 개발했습니다.'],
    additionalSources: [
      {
        title: 'Instagram GITHUB REPO',
        link: 'https://github.com/saegeullee/Instagram_react'
      }
    ]
  }
];

export const intro_title_1 = '안녕하세요 저는 이새글입니다.';
export const intro_title_2 = '소프트웨어를 통해 사용자를 행복하게 만들고 싶은 백엔드 개발자입니다.';

export const intro_details_1 =
  '새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. 현재 신입 백엔드 개발자로 구직중입니다. 데이터에 기반하여 의사결정을 하는 회사에서 일하고 싶습니다.';
// '코딩부트캠프 위코드에서 4기 백엔드 교육과정(3개월)을 수료하였고 클래스101에서 백엔드 개발자로 인턴쉽 프로그램(1개월)을 진행하였습니다. ';
//'현재 신입 백엔드 개발자로 구직중입니다.'

export const intro_details_2 = '서울과학기술대학교 컴퓨터공학과';

export const wecode_url = 'http://wecode.co.kr/';

export const overall_experiences = [
  {
    title: '클래스101 인턴쉽',
    date: '2019. 11. - 2019. 12.',
    details:
      '클래스101에서 백엔드 개발자로 1개월동안 인턴쉽 프로그램을 진행하였습니다. 사내 EX팀의 어드민 대시보드를 개발했습니다.'
  },
  {
    title: 'Wecode Coding BootCamp',
    date: '2019. 09. - 2019. 12.',
    details:
      '위코드 코딩부트캠프 4기 백엔드 과정을 수료하였습니다. 백엔드 개발에 필요한 기초 개념을 공부하고 팀 프로젝트를 2번 진행하였습니다.'
  },
  {
    title: '서울과학기술대학교 컴퓨터공학과',
    date: '2010. 03. - ',
    details:
      '좋은 개발자가 되기로 결심한 후 2018년 컴퓨터공학과로 전과를 하여 1년간 공부를 하였습니다. 운영체제, 네트워크 과목을 가장 재미있게 공부하였고 좋은 성적으로 이수하였습니다. 팀 프로젝트와 백엔드 개발에 심한 갈증을 느껴 휴학후 코딩부트캠프 위코드 백엔드 개발과정을 수료했습니다.'
  }
];

export const skills_overview =
  'Communication, Javascript, Node.js, MySQL, MongoDB, AWS, Git, Github, React, HTML/CSS, Java, Python, DJango';

export const skills = [
  {
    title: 'Javascript',
    details: [
      'ES6와 이후의 자바스크립트 문법을 익숙하게 사용할 수 있습니다.',
      'ES5와 ES6의 차이점에 대해 이해하고 있습니다.',
      '타입스크립트에 관심을 가지고 공부하고 있습니다.'
    ]
  },
  {
    title: 'Node.js',
    details: [
      'Node.js가 작동하는 방법에 대해 이해하고 있습니다.',
      'express 프레임워크를 사용하여 Restful API 서버를 익숙하게 만들 수 있습니다.',
      '모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.'
    ]
  },
  {
    title: 'MongoDB',
    details: [
      'MongoDB 쿼리를 몽고 쉘에서 익숙하게 사용할 수 있습니다.',
      '데이터 모델을 설계 할 수 있으며 referencing과 embedding을 언제 사용해야 하는지 이해하고 있습니다.',
      'Aggregation 파이프라인을 사용할 수 있습니다.'
    ]
  },
  {
    title: 'MySQL',
    details: [
      'SQL 쿼리를 mysql 쉘에서 익숙하게 사용할 수 있습니다.',
      'OneToOne, OneToMany, ManyToMany를 사용하여 데이터 모델링을 할 수 있습니다.'
    ]
  },
  {
    title: 'AWS',
    details: [
      'AWS EC2 인스턴스를 생성하여 서버 어플리케이션을 배포할 수 있습니다.',
      'Node.js 서버와 Django 서버를 ec2에 배포해 본 경험이 있습니다.',
      'AWS RDS와 DocumentDB를 사용하여 데이터베이스를 구축해본 경험이 있습니다.'
    ]
  },
  {
    title: 'Linux',
    details: ['리눅스 기본 커맨드를 익숙하게 사용할 수 있습니다.']
  },
  {
    title: 'Git/Github',
    details: [
      '깃과 깃헙을 익숙하게 사용하여 다른 개발자들과 협업을 할 수 있습니다.',
      '깃 리베이스를 할 수 있으며 스쿼시를 통해 커밋을 깔끔하게 관리할 수 있습니다',
      'git flow가 무엇인지 알고 있으며 왜 사용해야 하는지 이해하고 있습니다.'
    ]
  },
  {
    title: 'HTML/CSS',
    details: [
      '원하는 UI를 익숙하게 만들어 낼 수 있습니다.',
      'Css 프리프로세서 Sass를 사용할 수 있습니다.'
    ]
  },
  {
    title: 'React',
    details: [
      '컴포넌트 생명주기를 사용할 수 있습니다.',
      'stateful, stateless 컴포넌트의 차이를 이해하고 있으며 구분하여 사용할 수 있습니다.',
      '리덕스를 사용하여 상태관리를 할 수 있습니다.'
    ]
  },

  {
    title: 'Python/Django',
    details: [
      '웹사이트를 크롤링하여 DB를 구축할 수 있습니다.',
      'Django를 사용하여 Restful API 서버를 만들 수 있습니다.'
    ]
  },
  {
    title: 'Java',
    details: [
      '자바는 저의 첫번째 언어입니다. 자바를 익숙하게 사용하여 어플리케이션을 만들 수 있습니다.',
      '자바를 사용하여 프로젝트를 진행한 경험이 다수 있습니다. 주로 안드로이드 어플리케이션을 만들어본 경험이 있습니다.'
    ],
    projects: [
      {
        title: 'MyCourses Project Github Repo',
        github: 'https://github.com/saegeullee/MyCourses'
      },
      {
        title: 'MySNS Project Github Repo',
        github: 'https://github.com/saegeullee/MySNS_ALL'
      }
    ]
  }
];
