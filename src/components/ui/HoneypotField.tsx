/** Hidden field for spam bots — must stay empty */
export function HoneypotField() {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
      <label htmlFor="botcheck">Leave empty</label>
      <input
        type="text"
        id="botcheck"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
