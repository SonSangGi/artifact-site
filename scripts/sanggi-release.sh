#!/bin/sh
# sanggi fork: build the arm64 image and push it to registry.sanggi.dev.
#   usage: scripts/sanggi-release.sh <tag>      e.g. 0.4.0-sanggi.2
# Then bump `image.tag` in gitops share/apps/values.yaml (ArgoCD rolls it out).
set -eu
TAG="${1:?usage: $0 <tag> (e.g. 0.4.0-sanggi.2)}"
IMAGE="registry.sanggi.dev/artifact-site:${TAG}"
cd "$(dirname "$0")/.."
docker build --platform linux/arm64 -t "$IMAGE" .
docker push "$IMAGE"
git tag -a "sanggi-${TAG}" -m "image ${IMAGE}" 2>/dev/null || true
echo "pushed ${IMAGE} — now set image.tag: \"${TAG}\" in gitops share/apps/values.yaml"
