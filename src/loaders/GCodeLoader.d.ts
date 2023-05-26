import { Group, LoadingManager } from 'three'
import { Loader } from '../types/Loader'

export class GCodeLoader extends Loader {
  constructor(manager?: LoadingManager)
  splitLayer: boolean

  load(
    url: string,
    onLoad: (object: Group) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void
  loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Group>
  parse(data: string): Group
}