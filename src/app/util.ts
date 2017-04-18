export const checkArrEquality = (PCMemory: number[], userMemory: number[]) => {
    for (let i = 0; i < PCMemory.length; i += 1) {
        if (userMemory[i] !== PCMemory[i]) {
            return false
        }
    }
    return true
}