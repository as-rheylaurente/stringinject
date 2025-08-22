export type Placeholders = (string | number)[] | Record<string, any>;

export function stringInject(template: string, replacements: Placeholders): string {
  if (Array.isArray(replacements)) {
    return template.replace(/\{(\d+)\}/g, (_, idx) => {
      const i = parseInt(idx, 10);
      return replacements[i] != null ? String(replacements[i]) : `{${idx}}`;
    });
  } else if (typeof replacements === 'object' && replacements !== null) {
    return template.replace(/\{([^}]+)\}/g, (_, key) =>
      Object.prototype.hasOwnProperty.call(replacements, key) && replacements[key] != null
        ? String((replacements as Record<string, any>)[key])
        : `{${key}}`
    );
  }
  return template;
}
