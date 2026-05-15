"use strict";
/**
 * Shared TypeScript types for the Rello platform.
 *
 * Cross-repo wire shapes that must stay aligned across spokes + Milo Engine.
 * Each type in this package is a **shape contract** that crosses a repo
 * boundary — request/response JSON, type-narrowed discriminated-union arms,
 * or any data shape that two repos must agree on at compile time.
 *
 * Scope discipline (per the canonical small-package convention):
 * - Types stay HERE when ≥2 repos consume them and drift would silently
 *   produce NaN / runtime errors.
 * - Types stay INLINE in their owning repo when only that repo consumes
 *   them. Extracting prematurely creates a second source of truth.
 *
 * Decision history:
 * - 2026-05-15 — `RealtorProspectData` added (REALTOR-PROSPECT-PIPELINE
 *   Wave 3 D20 lock). Consumed by Milo-Engine's discriminated-union
 *   `MiloContext` REALTOR_PROSPECT arm AND by Rello's
 *   `MiloNextActionRequest` mirror so the wire-shape is single-source.
 *   `LeadData` is intentionally NOT extracted — it remains inlined at
 *   `~/Milo-Engine/src/lib/types.ts` (Wave 3 blast-radius containment;
 *   extraction earns its own workstream when a second consumer demands it).
 */
Object.defineProperty(exports, "__esModule", { value: true });
