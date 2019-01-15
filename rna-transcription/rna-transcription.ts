class Transcriptor {
    transcription: string = ''

    toRna(nucleotides: string): string {
        let that = this;

        this.initTranscription();
        nucleotides.split('').forEach(function(nucleotide: string){
            that.transcription += that.convertNucleotide(nucleotide);
        });

        return this.transcription;
    }

    initTranscription(): void {
        this.transcription = ''
    }

    convertNucleotide(nucleotide: string) : string {
        if('C' === nucleotide){
            return 'G'
        }
        else if('G' === nucleotide){
            return 'C'
        }
        else if('A' === nucleotide){
            return 'U'
        }
        else if('T' === nucleotide){
            return 'A'
        }        
        throw Error('Invalid input DNA.')

    }
}

export default Transcriptor