/** 
 * An abstract class is defined with a generic type, 
 * which allows structuring some basic properties within 
 * the components that extend from this class.
 * 
 * @author cpaezfer
 */
export abstract class BaseDetailClass<T> {
    public id!: string;
    public data: T | null = null;
    public isLoading: boolean = true;
    public abstract sourceSrcset: string;
    public abstract imgSrc: string;
}