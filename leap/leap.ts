function isLeapYear( year: number ): boolean {
    // Your code here
    if (year % 400 === 0) {
        return true
    }
    else if (year % 100 === 0) {
        return false
    }
    else if (year % 4 === 0) {
        return true
    }

    return false
}

export default isLeapYear