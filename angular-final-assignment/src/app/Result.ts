import { Album } from './Album'

export interface Result{
    resultCount:string;
    results:Album [];
    isInital: boolean;
}