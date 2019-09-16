import { parse } from 'path'

export function getCallStack(showFull: boolean = false): string {
  const callStackLines = new Error().stack!.split('\n')

  callStackLines.splice(0, 1)

  const full = callStackLines[1].split('(')[1].replace(/[)()]/g, '')
  const [filePath, ...ids] = full.split(':')
  const { base } = parse(filePath)
  const shortened = `${base}:${ids.join(':')}`

  return showFull ? full : shortened
}
