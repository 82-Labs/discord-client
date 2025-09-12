# Discord Clone

Discord 클론 프론트엔드 애플리케이션을 제공하는 React Router v7 기반 프로젝트

## 프로젝트 구조

```
src/
├── app/                    # 애플리케이션 설정 및 라우팅
├── features/              # 기능별 모듈 (인증, 로그인 등)
├── pages/                 # 페이지 컴포넌트
├── shared/                # 공통 유틸리티 및 UI 컴포넌트
└── widgets/               # 위젯 컴포넌트
```

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

### 1) Docker (로컬 개발)

```bash
docker-compose -f docker-compose.development.yml up
```

### 2) Docker (프로덕션 배포)

```bash
# 프로덕션 환경변수 파일 생성 후
docker-compose -f docker-compose.production.yml up
```

### 3) pnpm (로컬 개발)

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

## 접속 정보

- **프론트엔드**: http://localhost:3000
- **백엔드**: http://localhost:8080 (별도 서버 필요)