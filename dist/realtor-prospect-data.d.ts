/**
 * `RealtorProspectData` — wire-shape for a RealtorProspect entity crossing
 * the Rello ↔ Milo-Engine boundary.
 *
 * Field set MIRRORS the `RealtorProspect` Prisma model defined in
 * `~/Rello/prisma/schema.prisma` (Wave 1 of REALTOR-PROSPECT-PIPELINE).
 * Adding a field here requires a paired Prisma migration AND a paired
 * update in Rello's `MiloNextActionRequest` mirror at
 * `~/Rello/src/lib/nurture/types.ts` AND in Milo-Engine's zod request
 * schema at `~/Milo-Engine/src/routes/nurture-decide.ts`. All three
 * shapes must stay in lockstep.
 *
 * Lifecycle / launch posture (D22 deferred):
 * - At launch this shape rides through the discriminated-union
 *   MiloContext REALTOR_PROSPECT arm and routes to `REALTOR_CULTIVATION`
 *   `NurtureGoal` (D21). `FRAMEWORK_GOALS.REALTOR_CULTIVATION = []` at
 *   launch — the boundary call is exercised but returns no actionable
 *   decision until Q13's realtor-side framework slugs land.
 */
export interface RealtorProspectData {
    id: string;
    tenantId: string;
    firstName: string;
    lastName: string;
    email: string | null;
    phone: string | null;
    licenseNumber: string | null;
    licenseState: string | null;
    brokerage: string | null;
    yearsActiveRe: number | null;
    priorMloPartnerships: string | null;
    status: 'INVITED' | 'ENGAGING' | 'ACTIVE' | 'CONVERTED' | 'DROPPED';
    assignedMloId: string;
    sourceApp: string;
    sourceEventId: string | null;
    sourceEventType: string | null;
    sourceEventName: string | null;
    sourceEventDate: Date | null;
    sourceAttendeeId: string | null;
    referrerName: string | null;
    referrerAgentId: string | null;
    emailUnsubscribed: boolean;
    smsOptIn: boolean;
    doNotCall: boolean;
    preferredChannel: 'email' | 'sms' | null;
    timezone: string | null;
    customFields: Record<string, unknown>;
    updatedAt: Date;
}
//# sourceMappingURL=realtor-prospect-data.d.ts.map