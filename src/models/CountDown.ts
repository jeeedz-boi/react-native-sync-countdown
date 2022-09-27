class CountDownClass {
    timer: number
    interval?: ReturnType<typeof setInterval>
    onTimerEnd?: { (): void }[]
    onTimerChange?: (timer: number) => void
    constructor() {
        this.timer = 0
        this.onTimerEnd = []
    }
  
    private floorDuration(duration: number) {
        return duration >= 0 ? Math.floor(duration * 0.001) * 1000 : 0
    }
  
    private startTimer() {
        const that = this
  
        this.interval = setInterval(function () {
            that.onTimerChange && that.onTimerChange(that.timer)
            if (that.timer <= 0) {
                that.clearInterval()
                that.handleOnTimerEnd()
            } else {
                that.timer -= 1000
            }
        }, 1000)
    }
  
    private clearInterval() {
        this.interval && clearInterval(this.interval)
    }
  
    private handleOnTimerEnd() {
        this.onTimerEnd?.length !== 0 &&
        this.onTimerEnd?.forEach((callback) => callback())
        this.onTimerEnd = []
    }
  
    setTimer(duration: number) {
        this.clearInterval()
        this.timer = this.floorDuration(duration)
        this.startTimer()
    }
  
    getTimer(onTimerChange: (timer: number) => void) {
        this.onTimerChange = onTimerChange
    }
  
    getTimerOnEnd(onTimerEnd: () => void) {
        this.onTimerEnd?.push(onTimerEnd)
    }
  
    resetTimer() {
        this.clearInterval()
        this.timer = 0
    }
}
  
export const CountDown = new CountDownClass()
  