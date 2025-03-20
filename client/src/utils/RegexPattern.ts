

export const alphanumericRegex = /^[a-zA-Z0-9]+$/;
// ^ -> start of the string
// [a-zA-Z0-9] -> any of the following characters
//      a-z: lowercase letters
//      A-Z: uppercase letters
//      0-9: digits
// + -> one or more of the above
// $ -> end of the string

export const alphanumericWithSpaceRegex = /^[a-zA-Z0-9 ]+$/;
// ^ -> start of the string
// [a-zA-Z0-9 ] -> any of the following characters:
//      a-z: lowercase letters
//      A-Z: uppercase letters
//      0-9: digits
//      ' ' (space): allows spaces
// + -> one or more of the above
// $ -> end of the string
