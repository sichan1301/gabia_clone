import { product } from "./dataType"
export const products:product[] = [
  {
    type:"TextMenu",
    title:"클라우드",
    serviceLink:"www.~.com",
    explain:"비즈니스에 최적화된 안전하고 쉬운 클라우드를 제공합니다.",
    menus:[
      {
        title:"컴퓨팅",
        menu:[
          {
            type:"Update",
            text:"가상 서버",
            link:"www.~.com"
          },
          {
            text:"베어메탈 서버",
            link:"www.~.com"
          },
          {
            text:"스냅샷/이미지",
            link:"www.~.com"
          },
          {
            text:"오토스케일링",
            link:"www.~.com"
          },
          {
            text:"이미지 백업",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"스토리지",
        menu:[
          {
            text:"블록 스토리지",
            link:"www.~.com"
          },
          {
            type:"Update",
            text:"NAS",
            link:"www.~.com"
          },
          {
            text:"파일 백업",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"네트워크",
        menu:[
          {
            text:"로드밸런서",
            link:"www.~.com"
          },
          {
            text:"하이브리드커넥터",
            link:"www.~.com"
          },
          {
            text:"CDN",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"보안",
        menu:[
          {
            text:"방화벽",
            link:"www.~.com"
          },
          {
            text:"웹방화벽",
            link:"www.~.com"
          },
          {
            text:"VPN",
            link:"www.~.com"
          },
          {
            text:"웹쉘 탐지",
            link:"www.~.com"
          },
          {
            text:"바이러스백신",
            link:"www.~.com"
          },
          {
            text:"DB 보안",
            link:"www.~.com"
          },
          {
            text:"웹쉘 탐지",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"매니지먼트",
        menu:[
          {
            text:"매니지드 서비스",
            link:"www.~.com"
          },
          {
            text:"기술지원",
            link:"www.~.com"
          },
          {
            text:"통합 모니터링",
            link:"www.~.com"
          },
          {
            text:"HA 솔루션",
            link:"www.~.com"
          }
        ]
      },
    ],
    marketPlaceLink:"www.marketPlace.com"
  },

  {
    type:"TextMenu",
    title:"공공기관 전용 클라우드",
    serviceLink:"www.~.com",
    explain:"안전하고 효율적인 대국민 서비스를 위한 공공·행정기관 전용 클라우드를 제공합니다.",
    menus:[
      {
        title:"컴퓨팅",
        menu:[
          {
            type:"Update",
            text:"클라우드 서버",
            link:"www.~.com"
          },
          {
            text:"스냅샷/이미지",
            link:"www.~.com"
          },
          {
            text:"오토스케일링",
            link:"www.~.com"
          }       
        ]  
      },
      {
        title:"스토리지",
        menu:[
          {
            type:"Update",
            text:"클라우드 스토리지",
            link:"www.~.com"
          },
          {
            text:"NAS",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"네트워크",
        menu:[
          {
            type:"New",
            text:"VPC",
            link:"www.~.com"
          },
          {
            text:"로드밸런서",
            link:"www.~.com"
          },
          {
            text:"CDN",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"보안",
        menu:[
          {
            text:"방화벽",
            link:"www.~.com"
          },
          {
            text:"웹방화벽",
            link:"www.~.com"
          },
          {
            text:"CDN",
            link:"www.~.com"
          },
          {
            text:"바이러스백신",
            link:"www.~.com"
          },
          {
            text:"DB 보안",
            link:"www.~.com"
          },
          {
            text:"SSL VPN",
            link:"www.~.com"
          },
          {
            text:"웹쉘 탐지",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"매니지먼트",
        menu:[
          {
            text:"매니지드 서비스",
            link:"www.~.com"
          },
          {
            text:"기술지원",
            link:"www.~.com"
          },
          {
            text:"파일 백업",
            link:"www.~.com"
          },
          {
            text:"이미지 백업",
            link:"www.~.com"
          }
        ]
      },
    ]
  },

  {
    type:"ImgMenu",
    title:"AWS/Azure",
    explain:"AWS, Azure를 가장 쉽고, 효율적으로 이용할 수 있도록 도와드립니다.",
    menus:[
      {
        title:"AWS",
        menu:"FirstImg.jpg"
      },
      {
        title:"Azure",
        menu:"SecondImg.jpg"
      }
    ]
  },

  {
    type:"TextMenu",
    title:"IDC",
    serviceLink:"www.~.com",
    explain:"전문가와 함께 언제나 안정적으로 비즈니스를 운영하세요.",
    menus:[
      {
        title:"서버호스팅",
        menu:[
          {
            type:"Event",
            text:"서버 임대/구매",
            link:"www.~.com"
          },
          {
            type:"Update",
            text:"1분 설치 서버",
            link:"www.~.com"
          },
          {
            type:"Update",
            text:"GPU 서버",
            link:"www.~.com"
          }       
        ]  
      },
      {
        title:"코로케이션",
        menu:[
          {
            text:"랙",
            link:"www.~.com"
          },
          {
            text:"서버파킹",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"네트워킹&콘텐츠 전송",
        menu:[
          {
            text:"로드밸런싱(L4)",
            link:"www.~.com"
          },
          {
            text:"CDN",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"매니지먼트",
        menu:[
          {
            text:"매니지드 서비스",
            link:"www.~.com"
          },
          {
            text:"백업",
            link:"www.~.com"
          },
          {
            text:"통합 모니터링",
            link:"www.~.com"
          },
          {
            type:"Update",
            text:"하드웨어 유지보수",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"소프트웨어&솔루션",
        menu:[
          {
            text:"소프트웨어 임대",
            link:"www.~.com"
          },
          {
            text:"HA 솔루션",
            link:"www.~.com"
          },
          {
            text:"가비아 DaaS",
            link:"www.~.com"
          },
          {
            text:"공공기관 전용 DaaS",
            link:"www.~.com"
          }
        ]
      },
    ]
  },

  {
    type:"TextMenu",
    title:"보안",
    serviceLink:"www.~.com",
    explain:"사이버 보안 위협으로부터 실시간 대응하며 고객의 정보를 안전하게 보호합니다.",
    menus:[
      {
        title:"보안 관제",
        menu:[
          {
            text:"원격 관제",
            link:"www.~.com"
          },
          {
            text:"파견 관제",
            link:"www.~.com"
          } 
        ]  
      },
      {
        title:"컨설팅",
        menu:[
          {
            text:"모의해킹",
            link:"www.~.com"
          },
          {
            type:"Event",
            text:"취약점 진단",
            link:"www.~.com"
          },
          {
            text:"침해 사고 분석",
            link:"www.~.com"
          },
          {
            type:"New",
            text:"정보보호 컨설팅",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"정보보안",
        menu:[
          {
            text:"방화벽",
            link:"www.~.com"
          },
          {
            text:"웹방화벽",
            link:"www.~.com"
          },
          {
            text:"IPS",
            link:"www.~.com"
          },
          {
            text:"VPN",
            link:"www.~.com"
          },
          {
            text:"이메일 보안",
            link:"www.~.com"
          },
          {
            text:"안티스크래핑",
            link:"www.~.com"
          },
          {
            type:"New",
            text:"악성메일 모의훈련",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"엔드포인트 보안",
        menu:[
          {
            text:"문서 중앙화",
            link:"www.~.com"
          },
          {
            text:"랜섬웨어 차단",
            link:"www.~.com"
          },
          {
            text:"DRM",
            link:"www.~.com"
          },
          {
            text:"NAC",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"DaaS",
        menu:[
          {
            text:"가비아 DaaS",
            link:"www.~.com"
          },
          {
            text:"공공기관 전용 DaaS",
            link:"www.~.com"
          }
        ]
      },
    ]
  },

  {
    type:"TextMenu",
    title:"매니지먼트",
    serviceLink:"www.~.com",
    explain:"가비아 전문 엔지니어가 직접 담당하여 믿을 수 있는 인프라 종합 관리 서비스입니다.",
    menus:[
      {
        title:"매니지먼트",
        menu:[
          {
            text:"매니지드 서비스",
            link:"www.~.com"
          },
          {
            text:"기술지원",
            link:"www.~.com"
          },
          {
            type:"Update",
            text:"하드웨어 유지보수",
            link:"www.~.com"
          } 
        ]  
      },
      {
        title:"백업",
        menu:[
          {
            text:"백업",
            link:"www.~.com"
          },
          {
            text:"파일백업",
            link:"www.~.com"
          },
          {
            text:"이미지 백업",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"모니터링",
        menu:[
          {
            text:"통합 모니터링",
            link:"www.~.com"
          }
        ]
      },
      {
        title:"기타",
        menu:[
          {
            text:"HA 솔루션(IDC)",
            link:"www.~.com"
          },
          {
            text:"HA 솔루션(클라우드)",
            link:"www.~.com"
          },
          {
            text:"소프트웨어 임대",
            link:"www.~.com"
          }
        ]
      }
    ]
  },
]
