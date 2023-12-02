class Seguro{
    constructor(interes,anio,gnc){
        this.interes = interes || 0;
        this.anio = anio || 0;
        this.gnc = gnc || false;

    }

    calcularPrecioSeguro(){
        let monto;
        if(this.anio >= 2010){
            monto = ((5000*this.interes) + this.gnc);
            return monto
        }else {
            monto =((5000*this.interes) + this.gnc + 900);
            return monto;
        }
        
    }
}