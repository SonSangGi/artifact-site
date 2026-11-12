import type { Messages } from "@/lib/i18n";

/** Pages under src/app. Keys are the English source strings exactly as written in code. */
export const pages: Messages = {
  // /oauth/authorize
  "Connect an application": "애플리케이션 연결",
  "your account": "내 계정",
  "Read: find, open and export your artifacts": "읽기: 내 아티팩트 찾기, 열기, 내보내기",
  "Change: publish new artifacts; update, share, roll back and delete existing ones": "변경: 새 아티팩트 게시, 기존 아티팩트 업데이트·공유·롤백·삭제",
  "Allow {app} to use your artifacts?": "{app}에서 내 아티팩트를 사용하도록 허용할까요?",
  "{app} ({host}) wants to work with the artifacts of {name} on this server. It gets exactly what is listed below, until you disconnect it from My sites.": "{app}({host})에서 이 서버에 있는 {name} 님의 아티팩트를 사용하려고 합니다. 내 사이트에서 연결을 해제할 때까지 아래 나열된 권한만 부여됩니다.",
  "registered application": "등록된 애플리케이션",
  "After you decide you will be sent back to {host}.": "선택하면 {host}(으)로 돌아갑니다.",
  "That address is on your own computer: continue only if you started this connection yourself.": "이 주소는 내 컴퓨터에 있습니다. 직접 시작한 연결인 경우에만 계속하세요.",
  "That address opens an application on your computer: continue only if you started this connection yourself.": "이 주소는 내 컴퓨터의 애플리케이션을 엽니다. 직접 시작한 연결인 경우에만 계속하세요.",
  "Too many requests": "요청이 너무 많음",
  "Too many authorization requests in a short time. Wait a minute, then start again from the application.": "짧은 시간에 승인 요청이 너무 많았습니다. 1분 후 애플리케이션에서 다시 시작하세요.",
  "This server cannot tell which address it is reached at; set ARTIFACT_PUBLIC_URL.": "이 서버의 접속 주소를 확인할 수 없습니다. ARTIFACT_PUBLIC_URL을 설정하세요.",
  "Only allow connections you started yourself; never approve a request someone else sent you.": "직접 시작한 연결만 허용하세요. 다른 사람이 보낸 요청은 절대 승인하지 마세요.",
  "Deny": "거부",
  "Sign-in is not configured": "로그인이 구성되지 않음",
  "Unknown application": "알 수 없는 애플리케이션",
  "Invalid redirect address": "잘못된 리디렉션 주소",
  "Invalid authorization request": "잘못된 승인 요청",
  "Sign in in the browser": "브라우저에서 로그인하세요",
  "This server does not know the application that sent you here (its client_id is not registered).": "이 페이지로 연결한 애플리케이션을 서버에서 인식할 수 없습니다(client_id가 등록되지 않음).",
  "This server has no identity provider, so it cannot authorize applications. Ask the operator to configure OIDC sign-in first.": "이 서버에 ID 공급자가 없어 애플리케이션을 승인할 수 없습니다. 운영자에게 먼저 OIDC 로그인을 구성해 달라고 요청하세요.",
  // Shared header
  "artifact-site home": "artifact-site 홈",
  "Back to home": "홈으로 돌아가기",
  "Loading…": "로드 중…",
  "Sign in": "로그인",
  "Sign-in not enabled": "로그인이 사용 설정되지 않음",
  "Sign-in required": "로그인 필요",
  "This deployment has no identity provider yet": "이 배포에는 아직 ID 공급자가 없습니다",
  "Single file": "단일 파일",
  "Document": "문서",
  "Folder": "폴더",

  // Home
  "link": "링크",
  "HTML, folders, PDFs and Office documents all become shareable links.": "HTML, 폴더, PDF, Office 문서를 모두 공유 링크로 만들 수 있습니다.",
  "Publish this project's output (a web page or a PDF/Office document) to artifact-site. Publishing guide: {url}":
    "이 프로젝트의 결과물(웹페이지 또는 PDF/Office 문서)을 artifact-site에 게시해 줘. 게시 가이드: {url}",

  // Not found
  "Site not found — artifact-site": "사이트를 찾을 수 없음 — artifact-site",
  "Site not found": "사이트를 찾을 수 없음",
  "The site this link points to does not exist or has been deleted.": "이 링크의 사이트가 없거나 삭제되었습니다.",

  // /activate
  "Device authorization": "기기 승인",
  "Authorization failed": "승인 실패",
  "Network error. Please try again later.": "네트워크 오류입니다. 잠시 후 다시 시도하세요.",
  "Without an identity there are no publish tokens.": "로그인하지 않으면 게시 토큰을 받을 수 없습니다.",
  "Sign in to complete device authorization": "로그인하여 기기 승인 완료",
  "A terminal / agent session is asking to publish as you. Sign in to confirm.": "터미널 / 에이전트 세션에서 내 계정으로 게시하려고 합니다. 로그인하여 확인하세요.",
  "Allow this session to publish as you?": "이 세션이 내 계정으로 게시하도록 허용할까요?",
  "A terminal / agent session is requesting a publish token. If you allow it, the sites it publishes belong to {name}; the token is long-lived and can be revoked at any time from your account page.":
    "터미널 / 에이전트 세션에서 게시 토큰을 요청하고 있습니다. 허용하면 이 세션이 게시하는 사이트는 {name} 님 소유가 됩니다. 토큰은 장기간 유효하며 계정 페이지에서 언제든지 취소할 수 있습니다.",
  "Only click Allow when the code comes from a session you started yourself": "직접 시작한 세션의 코드인 경우에만 허용을 클릭하세요",
  "{rule} — never authorize a code someone else sent you.": "{rule} — 다른 사람이 보낸 코드는 절대 승인하지 마세요.",
  "Authorization code": "승인 코드",
  "Allow": "허용",
  "Authorized": "승인됨",
  "Back to your terminal": "터미널로 돌아가세요",
  "Authorization is complete; that side will pick up the token and continue within seconds. You can close this page. The token can be revoked at any time from your {accountPage}.":
    "승인이 완료되었습니다. 몇 초 안에 터미널에서 토큰을 받아 계속 진행합니다. 이 페이지는 닫아도 됩니다. 토큰은 {accountPage}에서 언제든지 취소할 수 있습니다.",
  "account page": "계정 페이지",

  // /me
  "Account views": "계정 보기",
  "Created by me": "내가 만든 항목",
  "I can edit": "편집 가능한 항목",
  "Publish tokens": "게시 토큰",

  "Failed to load": "불러오지 못했습니다",
  "Previous": "이전",
  "Next": "다음",

  // /publish-from-page
  "Publish the page you are looking at — artifact-site": "보고 있는 페이지 게시 — artifact-site",
  "Drag a button to your bookmarks bar; after that any page (including local file:// files) can be published as a shareable link in one click.":
    "버튼을 북마크바로 드래그하세요. 그러면 어떤 페이지든(로컬 file:// 파일 포함) 클릭 한 번으로 공유 링크로 게시할 수 있습니다.",

  // /for-agents
  "Publish skill — for AI / agents": "게시 스킬 — AI / 에이전트용",
  "Send one address to your AI and it can publish front-end output as a link you can share and edit in place.":
    "AI에게 주소 하나만 보내면 프런트엔드 결과물을 공유하고 바로 편집할 수 있는 링크로 게시합니다.",

  // /s/[slug]/edit
  "Edit {title} — artifact-site": "{title} 편집 — artifact-site",

  // /v/[token]
  "This link is no longer valid — artifact-site": "더 이상 유효하지 않은 링크 — artifact-site",
  "Protected content, visible after signing in · artifact-site": "보호된 콘텐츠, 로그인 후 볼 수 있음 · artifact-site",
  "Protected content, visible to invited members only · artifact-site": "보호된 콘텐츠, 초대된 멤버만 볼 수 있음 · artifact-site",
  "Protected content, passcode required · artifact-site": "보호된 콘텐츠, 암호 필요 · artifact-site",
  "This link is no longer valid": "더 이상 유효하지 않은 링크입니다",
  "This share link does not exist, has been revoked, or has expired. Ask the person who shared it for a new link.":
    "이 공유 링크가 없거나 취소되었거나 만료되었습니다. 공유한 사람에게 새 링크를 요청하세요.",
  "Sign in to view": "로그인하여 보기",
  "The person who shared this link made it visible after signing in. Sign in with your account to open it.":
    "공유한 사람이 이 링크를 로그인한 사용자만 볼 수 있도록 설정했습니다. 계정으로 로그인하면 열 수 있습니다.",
  "This deployment has no sign-in configured yet. Ask the person who shared it for a different link.":
    "이 배포에는 아직 로그인이 구성되지 않았습니다. 공유한 사람에게 다른 링크를 요청하세요.",
  "Your account is not on this link's access list": "내 계정은 이 링크에 대한 액세스 권한이 없습니다",
  "The person who shared this link limited it to invited members. If you need access, ask them to add you.":
    "공유한 사람이 이 링크를 초대된 멤버로 제한했습니다. 액세스 권한이 필요하면 공유한 사람에게 추가를 요청하세요.",
  "Incorrect passcode. Please try again.": "암호가 올바르지 않습니다. 다시 시도하세요.",
  "Too many attempts. Please try again later.": "시도 횟수가 너무 많습니다. 잠시 후 다시 시도하세요.",
  "Please enter the passcode.": "암호를 입력하세요.",
  "Enter the passcode": "암호 입력",
  "The person who shared this link protected it with a passcode. Enter it to view; you will not be asked again for 12 hours.":
    "공유한 사람이 이 링크를 암호로 보호했습니다. 암호를 입력하면 볼 수 있으며, 12시간 동안은 다시 묻지 않습니다.",
  "Passcode": "암호",
  "View": "보기",
  "Shared output": "공유된 결과물",
  "Read-only share": "읽기 전용 공유",
  "Open in a new tab": "새 탭에서 열기",
};
