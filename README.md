# @rello-platform/types

Shared TypeScript types for the Rello platform — cross-repo wire shapes
(`RealtorProspectData`, etc.) that must stay aligned across spokes + Milo
Engine.

## Scope

Types stay HERE when ≥2 repos consume them and drift would silently
produce NaN / runtime errors. Types stay INLINE in their owning repo
when only that repo consumes them.

## Current types

- `RealtorProspectData` — wire-shape for `RealtorProspect` crossing Rello
  ↔ Milo-Engine. Source-of-truth is the Prisma model at
  `~/Rello/prisma/schema.prisma`; this shape mirrors it for compile-time
  alignment.

## Consumers

- `~/Milo-Engine/src/lib/types.ts` — discriminated-union `MiloContext`
  REALTOR_PROSPECT arm imports `RealtorProspectData`.
- `~/Milo-Engine/src/routes/nurture-decide.ts` — zod request schema
  REALTOR_PROSPECT arm shape mirrors `RealtorProspectData`.
- `~/Rello/src/lib/nurture/types.ts` — `MiloNextActionRequest`
  REALTOR_PROSPECT arm imports `RealtorProspectData` (wire shape Rello
  posts to Milo).

## Publishing

Tag-driven CI: pushing `vX.Y.Z` triggers `.github/workflows/publish.yml`
which verifies tag ↔ `package.json.version` match and publishes to GitHub
Packages.

`dist/` is **committed** (not gitignored) per the canonical convention
— Railway nixpacks builds consume the committed dist; clones need no
build step to get a working install.

## Version history

- **0.1.0** (2026-05-15) — initial publish; `RealtorProspectData`
  (REALTOR-PROSPECT-PIPELINE Wave 3 D20 lock).
