# 한국어(ko) 번역 가이드 — sanggi fork

사전 구조: 키 = 코드에 쓰인 영어 원문 그대로, 값 = 한국어. **사전에 없는 키는 영어 원문이 그대로 표시된다.**

## 원칙
1. **번역이 불필요한 항목은 넣지 않는다.** 아래에 해당하면 사전에서 빼서 영어가 그대로 나오게 한다.
   - 고유명사·제품명·기술 용어만으로 된 문자열: artifact-site, MCP, OAuth, CLI, API, URL, HTML, PDF, ZIP, Markdown, Slug, Token, Bearer, Keycloak, GitHub, Google 등
   - 영어 그대로가 더 자연스러운 짧은 라벨 (예: "English", "EN", "Beta")
2. **번역체 금지.** 직역하지 말고 국내 서비스(GitHub·Notion·Google Drive 한국어 UI)가 실제로 쓰는 말로 쓴다.
   - private → "비공개" (절대 "사적인" 아님), public → "공개", unlisted → "링크가 있는 사용자" 또는 "일부 공개"
   - share → "공유", share link → "공유 링크", owner → "소유자", editor → "편집자", viewer → "뷰어"
   - artifact / site → "아티팩트" (사이트를 가리키는 문맥이면 "사이트"), workspace → "워크스페이스", tenant → "워크스페이스"(UI 문맥) 
   - version → "버전", rollback → "롤백", fork → "사본 만들기"(UI 동작) , upload → "업로드", publish → "게시"
   - sign in → "로그인", sign out → "로그아웃", passcode → "암호"
   - token(인증 토큰) → "토큰"
3. 문체: 버튼·메뉴·라벨은 명사형/짧게("저장", "삭제", "링크 복사"). 안내·설명 문장은 "~합니다/~하세요" 체. "~해 주세요"는 꼭 필요할 때만.
4. `{name}` 같은 placeholder는 **그대로** 유지하고, 한국어 어순에 맞게 위치만 옮긴다. 조사가 placeholder 뒤에 붙으면 받침에 덜 민감한 표현을 쓴다 (예: "{name} 님", "{n}개").
5. 단수/복수 키("{n} version" / "{n} versions")는 둘 다 같은 한국어("버전 {n}개")로.
6. HTML/마크다운 조각, 백틱 코드, URL, 명령어는 그대로 둔다.
7. 따옴표: 원문 값의 문자열 이스케이프를 깨지 않도록 TypeScript 문법을 지킨다.
