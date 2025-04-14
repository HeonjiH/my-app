FROM node:20-alpine AS builder

# 전역 설정
ENV NODE_ENV=production

WORKDIR /app

# 필수 파일 복사
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/

# 의존성 설치 (immutable = lockfile 고정)
RUN yarn install --immutable

# 소스 복사 및 빌드
COPY . .
RUN yarn build

# 실행 이미지
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# 실행에 필요한 파일 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.yarnrc.yml ./
COPY --from=builder /app/.yarn ./

CMD ["yarn", "start"]
