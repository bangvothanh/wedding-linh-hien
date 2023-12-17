IMAGE = vothanhbang14dt3/bangvothanh
TAG_VIBANG = wedding-invitation-online-vibang
TAG_BANGVI = wedding-invitation-online-bangvi

all: docker-login build-vibang build-bangvi push-vibang push-bangvi

docker-login:
	@cat /home/bang/.keys/docker-hub/vothanhbang14dt3 | docker login -u vothanhbang14dt3 --password-stdin	
build-vibang:
	docker pull ${IMAGE}:${TAG_VIBANG}
	docker build \
		--cache-from ${IMAGE}:${TAG_VIBANG} \
		--tag ${IMAGE}:${TAG_VIBANG} \
		-f Dockerfile.vi-bang \
		.

push-vibang:
	docker push ${IMAGE}:${TAG_VIBANG}


build-bangvi:
	docker pull ${IMAGE}:${TAG_BANGVI}
	docker build \
		--cache-from ${IMAGE}:${TAG_BANGVI} \
		--tag ${IMAGE}:${TAG_BANGVI} \
		-f Dockerfile.bang-vi \
		.

push-bangvi:
	docker push ${IMAGE}:${TAG_BANGVI}