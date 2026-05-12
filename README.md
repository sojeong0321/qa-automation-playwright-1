# QA Automation Portfolio

## 프로젝트 소개

Playwright 기반 E2E 자동화 테스트 프로젝트입니다.

SauceDemo 사이트를 대상으로
로그인 및 장바구니 기능의 핵심 사용자 플로우(Critical Path)를 자동화하였습니다.

반복 수행되는 회귀 테스트를 자동화하여
테스트 효율성과 유지보수성을 높이는 것을 목표로 구성했습니다.

---

## 테스트 목적

* 로그인 기능 검증
* 예외 상황(로그인 실패) 검증
* 장바구니 기능 검증
* Cross Browser 테스트 수행
* 회귀 테스트 자동화 기반 구축

---

## 기술 스택

* Playwright
* TypeScript
* Node.js
* Git / GitHub

---

## 프로젝트 구조

```text
qa-automation-playwright
 ├ pages
 │   ├ LoginPage.ts
 │   ├ InventoryPage.ts
 │   └ CartPage.ts
 │
 ├ tests
 │   └ login.spec.ts
 │
 ├ test-data
 │   └ loginData.ts
 │
 ├ playwright.config.ts
 ├ package.json
 └ README.md
```

---

## 테스트 범위

| 기능   | 테스트 시나리오 |
| ---- | -------- |
| 로그인  | 로그인 성공   |
| 로그인  | 로그인 실패   |
| 장바구니 | 상품 추가 검증 |

---

## 주요 적용 내용

### 1. Page Object Model(POM) 적용

페이지 기능을 분리하여
유지보수성과 재사용성을 고려한 구조로 설계했습니다.

* LoginPage
* InventoryPage
* CartPage

---

### 2. 테스트 데이터 분리

테스트 데이터를 별도 파일로 분리하여
재사용성과 가독성을 개선했습니다.

```text
test-data/loginData.ts
```

---

### 3. Cross Browser Testing

Playwright의 멀티 브라우저 기능을 활용하여
다음 환경에서 테스트를 수행했습니다.

* Chromium
* Firefox
* WebKit

---

### 4. Assertion 기반 검증

Playwright Expect Assertion을 활용하여
URL 이동 및 에러 메시지 노출 여부를 검증했습니다.

---

## 실행 방법

### 패키지 설치

```bash
npm install
```

### 테스트 실행

```bash
npx playwright test
```

### 브라우저 UI 포함 실행

```bash
npx playwright test --headed
```

### HTML 리포트 확인

```bash
npx playwright show-report
```

---

## 테스트 리포트 예시

* 로그인 성공 테스트
* 로그인 실패 테스트
* 장바구니 추가 테스트

모든 테스트는 Cross Browser 환경에서 PASS 확인 완료.

---

## 향후 개선 예정

* Checkout Flow 자동화 추가
* CI(GitHub Actions) 연동
* 테스트 데이터 확장
* 공통 Fixture 적용
* API 테스트 확장
