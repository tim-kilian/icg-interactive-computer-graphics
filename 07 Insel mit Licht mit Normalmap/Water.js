/**
 * Gruppenmitglieder:
 *
 * Anup Kumar Rana 6437137
 * Daniel Laskow 6791909
 * Dewin Bagci 6815336
 * Tim Kilian 6824270
 */


function Water(x, y, z) {

    GlObject.call(this, x, y, z);

    this.scale = (size) => {
        this.positions = [];
        this.positions.push(
            -size/2, 0, -size/2, -size/2, 0, size/2, size/2, 0, size/2,
            -size/2, 0, -size/2, size/2, 0, size/2, size/2, 0, -size/2
        );

        this.colors = [];
        for (let i=0; i<this.positions.length/3; i++) this.colors.push(0, 0, 0.9, 1);

        this.textureCoordinates = [];
       // for (let i=0; i<(this.positions.length/3)/6; i++) {
            this.textureCoordinates.push(0, 1,  1, 0,  0, 0,  1, 1,  1, 0,  0, 1);
        //}

        return this;
    };

    this.reflektionsKoeffizientAmbient = [0.9, 0.9 ,0.9];
    this.reflektionsKoeffizientDiffus = [0.9, 0.9 ,0.9];
    this.reflektionsKoeffizientSpekular = [0.9, 0.9 ,0.9];
    this.shininess = 20.0;

    this.textureSrc = 'assets/water_diffuse.jpg';
    this.normalSrc = 'assets/water_normal.jpg';
    this.construct();
}
