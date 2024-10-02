export type Color = { [index: string]: number }

export const color: Color = {
  primary: 0x3c6e71,
  secondary: 0x284b63,
  success: 0x88d498,
  danger: 0xd90429,
  warning: 0xffdd4a,
  info: 0x1982c4,
  light: 0xeaeaea,
  dark: 0x1b1b1b,
  muted: 0x6c757d
}

export function colorBy(name: string): number {
  if (color[name]) {
    return color[name]
  }
  return color.darkBlue
}
