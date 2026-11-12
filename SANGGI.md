# sanggi fork

`SonSangGi/artifact-site` — [lexmount/artifact-site](https://github.com/lexmount/artifact-site) fork, deployed at https://share.sanggi.dev (gitops: `SonSangGi/gitops` → `share/apps`).

## Branches
- `main`: upstream mirror (do not commit here)
- `sanggi`: deployed branch = an upstream release tag + the changes below

## Changes on top of upstream
| Change | Files |
|---|---|
| Login gate: everything requires sign-in (Keycloak OIDC) except share-link readers (`/v/<token>`, `/api/preview/*`, `/api/shares/*`, requests carrying `x-artifact-share`) and sign-in / OAuth / MCP / device plumbing. Bearer tokens pass through. | `src/proxy.ts` |
| Korean UI (`ko`): dictionary + language menu + Intl date locale. Style rules in `src/locales/ko/STYLE.md` (no translationese; leave strings that need no translation out of the dictionary so English shows). | `src/locales/ko/*`, `src/lib/i18n.ts`, `src/components/{auth-button,app-shell,admin-activity}.tsx`, `src/components/admin/format.ts`, `src/lib/marketing-metadata.ts` |
| Release script | `scripts/sanggi-release.sh` |

## Updating to a new upstream release
```sh
git fetch upstream --tags
git checkout sanggi
git merge vX.Y.Z            # resolve conflicts (usually none: changes are mostly new files)
# new UI strings: diff zh-CN against ko and translate the missing keys per STYLE.md
git diff vPREV..vX.Y.Z -- src/locales/zh-CN
git push origin sanggi
scripts/sanggi-release.sh X.Y.Z-sanggi.1
# gitops: share/apps/values.yaml → image.tag: "X.Y.Z-sanggi.1"
```
Read upstream `CHANGELOG.md` "Upgrading" notes before bumping (DB changes are applied automatically at startup).
