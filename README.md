# 라이브러리 없이 무한 스크롤 구현

## 개요
1. React + TS
2. 무한스크롤 관련된 라이브러리 사용 절대 금지
3. 비동기 상태 관리 라이브러리 사용 절대 금지 (ex. tanstack-query)

## 구현 내용
1. 하나의 SinglePage에 라이브러리를 사용하지 않고 무한스크롤 구현
2. 현재 가져온 상품 리스트들의 액수들의 합계를 화면에 제공 (ex. 현재 20개의 상품을 가져온 상태라면 20개 물품의 가격 총합 제공)

### 무한 스크롤의 조건
1. 페이지를 현재 보여주는 페이지의 최하단으로 이동 시 다음 페이지 정보를 가져오게 한다.
2. 더 이상 가져올 수 없는 상황이라면 더 이상 데이터를 가져오는 함수를 호출하지 않는다.
3. 로딩 시 로딩 UI를 제공한다. (Skeleton UI)

### 커스텀 Hook (useInfiniteScroll)
https://github.com/gyojinnK/infinite-scroll-without-library/blob/e32860d1c39bc5f0b280456e2a2568cd9c118d9c/src/hooks/useInfiniteScroll.ts#L5-L36
- `data`: 스크롤 시 가져온 데이터
- `isLoading`: 데이터 fetch의 진행 상태
- `hasData`: 남은 데이터가 있는지 판별
- `pageNumber`: 데이터를 가져올 페이지

### 요구사항 구현
https://github.com/gyojinnK/infinite-scroll-without-library/blob/e32860d1c39bc5f0b280456e2a2568cd9c118d9c/src/App.tsx#L18-L37
- scroll 이벤트 등록
- 상품 총개수
- 상품 가격 총합: `reduce`함수를 이용하여 새로 가져오는 값을 축적


