class SpaceAge
{
    seconds: number;

    constructor(seconds: number) {
        this.seconds = seconds;
    }
    onEarth() {
        let earthCoef: number = 31.69; 
        
        return this.ageCalculation(earthCoef);
    }

    onMars() {
        
    }

    onMercury() {
        return 280.88
    }

    onVenus() {
        
    }

    onJupiter() {
        
    }

    onSaturn() {

    }

    onUranus() {

    }

    onNeptune() {

    }

    private ageCalculation(coef: number) {
        let ageSeconds: number = (coef * this.seconds) / 1000000000;
        
        return Math.round(ageSeconds*100)/100;
    }
}

export default SpaceAge
