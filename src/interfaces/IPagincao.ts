export default interface IPaginacao<t>{
    count: number
    next: string
    previous: string
    results: t
}