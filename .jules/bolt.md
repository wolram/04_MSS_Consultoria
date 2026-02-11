## 2026-02-11 - [Hero Image Optimization & Strategic Indexing]
**Learning:** High-resolution images used as CSS background-images are a major LCP bottleneck. Next.js `Image` component with `priority` and proper `sizes` provides a significant boost. Backend-wise, indexing `status` and `date` fields in even small schemas prepares the app for scale without significant overhead.
**Action:** Always prefer `next/image` over CSS backgrounds for critical above-the-fold assets. Include indexes for common filter/sort patterns in Prisma schemas during the early stages.
