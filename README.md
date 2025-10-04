# Discord Clone

Discord 클론 프론트엔드 애플리케이션을 제공하는 React Router v7 기반 프로젝트


## 환경 설정

환경 변수는 프로젝트 루트의 환경 파일에 설정합니다.

### 로컬 개발용
```bash
# 로컬 개발용 환경변수 파일 생성
.env.development
```

### 프로덕션용
```bash
.env.production
```

## 실행 방법

```bash
# 개발 환경
docker-compose -f docker-compose.development.yml up

# 프로덕션 환경  
docker-compose -f docker-compose.production.yml up
```

## 접속 정보

- **프론트엔드**: http://localhost:3000
- **백엔드**: http://localhost:8080 (별도 서버 필요)
