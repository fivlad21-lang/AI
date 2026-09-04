/** Shared lead form validation (client + server). */

export type LeadFieldError = "name" | "contact";

export function validateLeadName(raw: string): LeadFieldError | null {
  const name = raw.trim();
  if (name.length < 2 || name.length > 80) return "name";
  if (!/\p{L}/u.test(name)) return "name";
  const digits = (name.match(/\d/g) || []).length;
  if (digits > name.length / 2) return "name";
  return null;
}

/**
 * Accept phone (8–15 digits with optional +/spaces/dashes)
 * or messenger handle (@user / t.me/…).
 */
export function validateLeadContact(raw: string): LeadFieldError | null {
  const contact = raw.trim();
  if (contact.length < 3 || contact.length > 80) return "contact";

  const asHandle = contact.startsWith("@") ? contact : contact;
  if (/^@[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(asHandle)) return null;
  if (/^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(contact) && !/^\d+$/.test(contact)) {
    // bare username without @ — allow if not digits-only
    return null;
  }
  if (/^(https?:\/\/)?(t\.me|telegram\.me)\/[a-zA-Z0-9_]{5,}$/i.test(contact)) {
    return null;
  }

  const digits = contact.replace(/\D/g, "");
  if (
    digits.length >= 8 &&
    digits.length <= 15 &&
    /^[\d\s+\-().]+$/.test(contact)
  ) {
    return null;
  }

  return "contact";
}

export function validateLeadFields(name: string, contact: string): LeadFieldError | null {
  return validateLeadName(name) || validateLeadContact(contact);
}
