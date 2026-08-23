import { useId } from 'react'
import { cx } from '../lib/cx'
import './Field.css'

/**
 * Field — labelled text input or textarea for the contact form.
 *
 * as:    'input' | 'textarea'
 * hint:  persistent help text, always announced with the control.
 * error: validation message. Setting it implies `invalid`, swaps the described-by
 *        target, and announces the message — a hint that silently becomes an
 *        error is never spoken to a screen reader when it appears after submit.
 */
export function Field({
  label,
  hint,
  error,
  invalid = false,
  required = false,
  as = 'input',
  id,
  className,
  'aria-describedby': describedBy,
  ...rest
}) {
  const autoId = useId()
  const fieldId = id || autoId
  const hintId = hint ? `${fieldId}-hint` : undefined
  const errorId = error ? `${fieldId}-error` : undefined
  const isInvalid = invalid || Boolean(error)
  const Control = as

  // Merge rather than replace: a caller passing its own aria-describedby used
  // to silently unlink the hint, because {...rest} spread after this attribute.
  const described = [describedBy, hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cx('ds-field', isInvalid && 'ds-field--invalid', className)}>
      {label && (
        <label className="ds-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="ds-field__required" aria-hidden="true"> *</span>}
        </label>
      )}
      <Control
        id={fieldId}
        className="ds-field__control"
        required={required}
        aria-invalid={isInvalid || undefined}
        aria-describedby={described}
        {...rest}
      />
      {hint && <span className="ds-field__hint" id={hintId}>{hint}</span>}
      {/* role="alert" so a message that appears after submit is announced.
          The node is always rendered so assistive tech has something to watch —
          an element that pops into existence with the text already in it is
          unreliably announced across screen readers. */}
      <span className="ds-field__error" id={errorId} role="alert">
        {error}
      </span>
    </div>
  )
}
