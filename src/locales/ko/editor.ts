import type { Messages } from "@/lib/i18n";

/** Viewer chrome (/s/[slug]), the source + visual editors, and the assistant mount. */
export const editor: Messages = {
  "This report has changed. Your edits are still here; copy them before refreshing to review the latest version.": "보고서에 새 버전이 있습니다. 수정한 내용은 그대로 남아 있으니, 먼저 복사한 뒤 새로고침해서 최신 버전을 확인하세요.",
  "All files come from {label}; saving creates a new latest version": "모든 파일은 {label}에서 가져왔습니다. 저장하면 새 최신 버전이 만들어집니다",
  "All files come from earlier version {label}. Saving creates a new latest version; {label} and the official version remain unchanged.": "모든 파일은 이전 버전 {label}에서 가져왔습니다. 저장하면 새 최신 버전이 만들어지며, {label}과 정식 버전은 바뀌지 않습니다.",

  // site-viewer
  "Published · This site is private. Create a share link under Sharing settings to invite more people":
    "게시됨 · 비공개 사이트입니다. 다른 사람을 초대하려면 공유 설정에서 공유 링크를 만드세요",
  "Published · Copy the link under Sharing settings": "게시됨 · 공유 설정에서 링크를 복사하세요",
  "Rename failed": "이름을 바꾸지 못했습니다",
  "Renamed": "이름을 바꿨습니다",
  "Uploading the new version failed": "새 버전을 업로드하지 못했습니다",
  "Save as new site failed": "새 사이트로 저장하지 못했습니다",
  "Saved as a new site": "새 사이트로 저장했습니다",
  "Rolled back · A new version was created": "롤백됨 · 새 버전이 만들어졌습니다",
  "Site action bar": "사이트 작업 표시줄",
  "Back to sites": "사이트 목록으로",
  "Site title": "사이트 제목",
  "Click to rename": "클릭하여 이름 바꾸기",
  "Preview device": "미리보기 기기",
  "Desktop": "데스크톱",
  "Tablet": "태블릿",
  "Mobile": "모바일",
  "Upload new version": "새 버전 업로드",
  "Copy into a separate new site": "별도의 새 사이트로 복사",
  "Save as new site": "새 사이트로 저장",
  "Sharing settings": "공유 설정",
  "Sign in required": "로그인 필요",
  "Edit": "편집",
  "Open the artifact itself in a new window (without this action bar). This is not a share link — use Sharing settings to show it to others.":
    "작업 표시줄 없이 아티팩트만 새 창에서 엽니다. 공유 링크가 아니므로 다른 사람에게 보여 주려면 공유 설정을 사용하세요.",
  "Open the artifact itself in a new window, without this action bar.": "작업 표시줄 없이 아티팩트만 새 창에서 엽니다.",
  "Open in new window": "새 창에서 열기",
  "Action bar: opens automatically. Click to switch to manual": "작업 표시줄: 자동으로 열림. 클릭하면 수동으로 전환",
  "Action bar: opens manually. Click to switch to automatic": "작업 표시줄: 수동으로 열림. 클릭하면 자동으로 전환",
  "Action bar: automatic. Rest the mouse on the top edge for 0.2 s to open it; it hides again when the mouse leaves. Click to switch to manual (opens/closes only when you click the handle).":
    "작업 표시줄: 자동. 마우스를 화면 위쪽 가장자리에 0.2초 동안 올려 두면 열리고, 마우스가 벗어나면 다시 숨겨집니다. 클릭하면 수동으로 전환됩니다(핸들을 클릭할 때만 열고 닫힘).",
  "Action bar: manual. Opens/closes only when you click the handle above; moving the mouse across the top edge does nothing. Click to switch to automatic (opens after the mouse rests on the top edge for 0.2 s).":
    "작업 표시줄: 수동. 위쪽 핸들을 클릭할 때만 열고 닫히며, 마우스를 위쪽 가장자리로 옮겨도 열리지 않습니다. 클릭하면 자동으로 전환됩니다(마우스를 위쪽 가장자리에 0.2초 동안 올려 두면 열림).",
  "Hide action bar": "작업 표시줄 숨기기",
  "Show action bar": "작업 표시줄 표시",

  // editor (source editor shell)
  "“{entry}” has unsaved source changes, and they will not carry over to visual editing. Discard the changes to this one file and continue? (Unsaved changes in other files are kept)":
    "‘{entry}’에 저장하지 않은 소스 변경 사항이 있으며, 시각적 편집으로 전환하면 반영되지 않습니다. 이 파일의 변경 사항을 버리고 계속할까요? (다른 파일의 저장하지 않은 변경 사항은 유지됩니다)",
  "Visual editing has unsaved changes; switching to source will discard them. Continue?":
    "시각적 편집에 저장하지 않은 변경 사항이 있습니다. 소스 편집으로 전환하면 사라집니다. 계속할까요?",
  "Saved · A new version was created": "저장됨 · 새 버전이 만들어졌습니다",
  "Save failed ({status})": "저장하지 못했습니다({status})",
  "Save failed": "저장하지 못했습니다",
  "There are unsaved changes. Save as new site only includes the saved version; unsaved content will not be in the copy. Continue?":
    "저장하지 않은 변경 사항이 있습니다. 새 사이트로 저장하면 저장된 버전만 포함되고 저장하지 않은 내용은 사본에 들어가지 않습니다. 계속할까요?",
  "There are unsaved changes that will be lost if you leave. Go back anyway?": "저장하지 않은 변경 사항이 있어 나가면 사라집니다. 그래도 돌아갈까요?",
  "Back to viewer": "보기로 돌아가기",
  "You do not have edit access to this site (an editable link is required).": "이 사이트를 편집할 권한이 없습니다(편집 가능한 링크가 필요합니다).",
  "Viewing is open, but only the site owner or someone holding an editable link can change it.":
    "누구나 볼 수 있지만, 수정은 사이트 소유자나 편집 가능한 링크가 있는 사용자만 할 수 있습니다.",
  "Copy into a new site that you own and can edit": "내가 소유하고 편집할 수 있는 새 사이트로 복사",
  "Save as my editable copy": "편집 가능한 내 사본으로 저장",
  "Based on {label}": "{label} 기준",
  "Back to version selection: pick a different base version, or make a copy and edit that":
    "버전 선택으로 돌아가기: 다른 기준 버전을 고르거나 사본을 만들어 편집하세요",
  "Switch version": "버전 변경",
  "Open the artifact itself in a new tab": "아티팩트만 새 탭에서 열기",
  "Open in new tab": "새 탭에서 열기",
  "Advanced: edit the HTML source directly (for styles, scripts, and other files)":
    "고급: HTML 소스를 직접 편집합니다(스타일, 스크립트, 기타 파일 수정 시)",
  "Edit source": "소스 편집",
  "Back to visual editing, where you double-click text to change it": "텍스트를 더블클릭해 수정하는 시각적 편집으로 돌아가기",
  "Edit visually": "시각적 편집",
  "Save new version": "새 버전 저장",
  "Editing version {version}": "버전 {version} 편집 중",
  "Saving creates a new immutable version; earlier versions stay unchanged.": "저장하면 변경할 수 없는 새 버전이 만들어지며, 이전 버전은 그대로 유지됩니다.",
  "Unsaved": "저장 안 됨",
  "Choose a file to edit": "편집할 파일 선택",
  "{path} (binary or too large, not editable)": "{path} (바이너리이거나 너무 커서 편집 불가)",
  "This site has no text files that can be edited online. Re-upload it from the home page to update it.":
    "이 사이트에는 온라인으로 편집할 수 있는 텍스트 파일이 없습니다. 업데이트하려면 홈에서 다시 업로드하세요.",
  "Source · {path}": "소스 · {path}",
  "Live preview": "실시간 미리보기",
  "Saved version": "저장된 버전",
  "Site preview": "사이트 미리보기",

  // visual-editor
  "This page blocked the editing script (usually because the artifact ships its own Content-Security-Policy, or its script rewrote the whole document), so visual editing cannot be used. Please use Edit source instead.":
    "이 페이지가 편집 스크립트를 차단해 시각적 편집을 사용할 수 없습니다(보통 아티팩트에 자체 Content-Security-Policy가 있거나 스크립트가 문서 전체를 다시 썼기 때문입니다). 대신 소스 편집을 사용하세요.",
  "This text is a copy made by the page script (typical of thumbnails and preview panes); changing it would not touch the source. Edit the one in the main content instead — that one can be double-clicked and edited directly.":
    "이 텍스트는 페이지 스크립트가 만든 사본이라(썸네일이나 미리보기 창에서 흔함) 수정해도 소스에 반영되지 않습니다. 본문에 있는 원래 텍스트를 수정하세요. 본문 텍스트는 더블클릭해 바로 편집할 수 있습니다.",
  "The original of this text has been replaced on the page by its script; only a copy remains, so the change cannot be written back safely. Please use Edit source to change it.":
    "이 텍스트의 원본은 페이지 스크립트에 의해 교체되어 사본만 남아 있으므로 변경 사항을 안전하게 반영할 수 없습니다. 소스 편집으로 수정하세요.",
  "The runtime structure of the element holding this text does not match the source (the page script inserted nodes), so the change cannot be written back safely. Please use Edit source to change it.":
    "이 텍스트가 있는 요소의 실행 시 구조가 소스와 일치하지 않아(페이지 스크립트가 노드를 삽입함) 변경 사항을 안전하게 반영할 수 없습니다. 소스 편집으로 수정하세요.",
  "This text cannot currently be mapped back to the source. You can change it with Edit source.":
    "이 텍스트는 현재 소스 위치를 찾을 수 없습니다. 소스 편집으로 수정할 수 있습니다.",
  "{count} passages generated by the page script": "페이지 스크립트가 생성한 텍스트 {count}개",
  "{count} passages whose structure does not match the source": "구조가 소스와 일치하지 않는 텍스트 {count}개",
  "{count} passages left only as copies made by a script": "스크립트가 만든 사본만 남은 텍스트 {count}개",
  "This page has no text that can be edited by double-clicking ({reasons}); visual editing cannot reach any passage in the source. Please use Edit source.":
    "이 페이지에는 더블클릭으로 편집할 수 있는 텍스트가 없어({reasons}) 시각적 편집으로는 소스를 수정할 수 없습니다. 소스 편집을 사용하세요.",
  "No editable text was found on this page. Please use Edit source.": "이 페이지에서 편집할 수 있는 텍스트를 찾지 못했습니다. 소스 편집을 사용하세요.",
  "{count} passages on this page can be edited; another {reasons} need Edit source.":
    "이 페이지의 텍스트 {count}개를 편집할 수 있습니다. 그 밖의 {reasons}은(는) 소스 편집으로 수정해야 합니다.",
  "All {count} passages on this page can be edited directly.": "이 페이지의 텍스트 {count}개를 모두 바로 편집할 수 있습니다.",
  "This site was updated elsewhere. Refresh the page before editing": "다른 곳에서 사이트가 업데이트되었습니다. 페이지를 새로고침한 뒤 편집하세요",
  "Saved. Not written back: {missed}. The editor was reloaded with the new version, so those passages have reverted to the original source text. Please use Edit source to change them.":
    "저장했습니다. 다만 {missed}곳은 소스에 반영하지 못했습니다. 편집기를 새 버전으로 다시 불러와 해당 부분은 원래 소스 텍스트로 되돌아갔습니다. 소스 편집으로 수정하세요.",
  "Changes saved: {count}. Not written back: {missed} (the text in the source no longer matches); they remain marked as unsaved. Please use Edit source to change them.":
    "{count}곳을 저장했습니다. {missed}곳은 소스의 텍스트가 더 이상 일치하지 않아 반영하지 못했으며 저장 안 됨으로 표시됩니다. 소스 편집으로 수정하세요.",
  "This site can only be edited with Edit source.": "이 사이트는 소스 편집으로만 편집할 수 있습니다.",
  "Loading failed ({status})": "불러오지 못했습니다({status})",
  "Loading failed": "불러오지 못했습니다",
  "The editor is not responding. Please try again": "편집기가 응답하지 않습니다. 다시 시도하세요",
  "These changes could not be mapped back to the source. Please use Edit source instead": "이 변경 사항의 소스 위치를 찾지 못했습니다. 대신 소스 편집을 사용하세요",
  "No changes yet": "아직 변경 사항이 없습니다",
  "Previewing: the page has its own interactions back · Switch back to Edit to change text": "미리보기 중: 페이지 본래의 동작이 복원되었습니다 · 텍스트를 수정하려면 편집으로 전환하세요",
  "Double-click any text to rewrite it · Enter to confirm · Esc to cancel": "텍스트를 더블클릭해 수정 · Enter로 확인 · Esc로 취소",
  "Edit / Preview": "편집 / 미리보기",
  "Hand the page back to the artifact in place: its own keys, clicks, and controls come back; unsaved changes are kept":
    "페이지를 아티팩트 본래 상태로 되돌립니다. 키 입력, 클릭, 컨트롤이 다시 동작하며 저장하지 않은 변경 사항은 유지됩니다",
  "Preview": "미리보기",
  "Visual editing": "시각적 편집",
  "Visual editing failed to load": "시각적 편집을 불러오지 못했습니다",
  "Retry": "다시 시도",
  "Switched to Edit source": "소스 편집으로 전환했습니다",
  "Use Edit source instead": "소스 편집 사용",
  "This page can only be edited with Edit source": "이 페이지는 소스 편집으로만 편집할 수 있습니다",
  "Loading visual editing…": "시각적 편집을 불러오는 중…",
  "Still waiting for this page to be ready. You can also": "페이지가 준비되기를 기다리는 중입니다. 또는",
  "use Edit source instead": "소스 편집을 사용할 수 있습니다",

  // assistant (prompts are what the reader sends)
  "Let AI edit this artifact": "AI로 이 아티팩트 편집",
  "Ask AI": "AI에게 묻기",
  "Explain selection": "선택 항목 설명",
  "Explain what I selected on the page.": "페이지에서 내가 선택한 내용을 설명해 주세요.",
  "Modify this artifact": "이 아티팩트 수정",
  "Modify this artifact according to my selection and instructions, then publish it as a new version. First read the manual at artifactHub.skill in the context (it includes the steps to obtain a publish token) and follow it.":
    "내가 선택한 부분과 요청에 따라 이 아티팩트를 수정한 뒤 새 버전으로 게시해 주세요. 먼저 컨텍스트의 artifactHub.skill 매뉴얼(게시 토큰 발급 절차 포함)을 읽고 그대로 따라 주세요.",
  "Summarize artifact": "아티팩트 요약",
  "Summarize the key points of this artifact.": "이 아티팩트의 핵심 내용을 요약해 주세요.",
  "Summarize content": "내용 요약",
  "Summarize the key points of this content.": "이 내용의 핵심을 요약해 주세요.",
  "Explain": "설명",
  "Edit this": "이 부분 수정",
  "Modify this artifact according to my selection, then publish it as a new version. First read the manual at artifactHub.skill in the context (it includes the steps to obtain a publish token) and follow it.":
    "내가 선택한 부분에 따라 이 아티팩트를 수정한 뒤 새 버전으로 게시해 주세요. 먼저 컨텍스트의 artifactHub.skill 매뉴얼(게시 토큰 발급 절차 포함)을 읽고 그대로 따라 주세요.",
};
