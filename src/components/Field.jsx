import { useId } from 'react'
import { cx } from '../lib/cx'
import './Field.css'

/**
 * Field — labelled text input or textarea for the contact form.
 * as: 'input' | 'textarea'
 */
export function Field({
  label,
  hint,
  invalid = false,
  required = false,
  as = 'input',
  id,
  className,
  ...rest
}) {
  const autoId = useId()
  const fieldId = id || autoId
  const hintId = hint ? `${fieldId}-hint` : undefined
  const Control = as

  return (
    <div className={cx('ds-field', invalid && 'ds-field--invalid', className)}>
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
        aria-invalid={invalid || undefined}
        aria-describedby={hintId}
        {...rest}
      />
      {hint && <span className="ds-field__hint" id={hintId}>{hint}</span>}
    </div>
  )
}
