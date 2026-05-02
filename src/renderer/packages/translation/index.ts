// Stub for pro-only translation module. The open-source build returns the
// inputs unchanged so callers (e.g. MessageErrTips) silently no-op.
export async function translateTexts(
  texts: string[],
  _targetLang: string,
  _options?: { sourceLang?: string }
): Promise<string[]> {
  return texts
}
