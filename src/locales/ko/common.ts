import type { Messages } from "@/lib/i18n";

/** Shared chrome: app title, navigation, generic buttons. Feature areas keep their own files. */
export const common: Messages = {
  "artifact-site — turn your work into a link to share and collaborate": "artifact-site — 작업물을 공유하고 함께 편집하는 링크로",
  "Upload it and it is online. Pages, reports, dashboards — all become links you can share and edit in place.":
    "업로드하면 바로 온라인에 게시됩니다. 페이지, 보고서, 대시보드를 공유하고 바로 편집할 수 있는 링크로 만드세요.",
  // Counts: Korean has no plural, so both keys share one value.
  "{n} version": "버전 {n}개",
  "{n} versions": "버전 {n}개",
  "{n} file": "파일 {n}개",
  "{n} files": "파일 {n}개",
  "{n} sites": "사이트 {n}개",
  "{n} token": "토큰 {n}개",
  "{n} tokens": "토큰 {n}개",
  // Language switch
  "Choose a language": "언어 선택",
};
