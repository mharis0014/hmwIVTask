const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const PHONE_REGEX = /^(\+\d{1,3}[- ]?)?\d{10}$/

const URL_REGEX = /^(ftp|http|https):\/\/[^ "]+$/

const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?]{4,22}$/

const ZIP_CODE_REGEX = /^\d{5}(?:[-\s]\d{4})?$/

export {EMAIL_REGEX, PHONE_REGEX, URL_REGEX, PASSWORD_REGEX, ZIP_CODE_REGEX}
